import * as i0 from '@angular/core';
import { EventEmitter, Injectable, Inject, Pipe, Component, Input, Output, NgModule, Optional, SkipSelf } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, debounceTime } from 'rxjs';
import * as i3 from 'ngx-nowbrains-animations';
import { FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight } from 'ngx-nowbrains-animations';
import * as i7 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/platform-browser';
import * as i1$2 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i6 from 'nowboard-icon';
import { NowboardIconModule, NowboardIconService } from 'nowboard-icon';

/***********************************************************
 **  @project ngx-konverso                              **
 **  @file KonversoInterface                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 30/03/2021                                         **
 ***********************************************************/

/***********************************************************
 **  @project
 **  @file
 **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
 **  @Date 29/03/2022
 **  @Description
 ***********************************************************/
const objectToString = Object.prototype.toString;
const isArrayPolyfill = (object) => {
    return objectToString.call(object) === '[object Array]';
};
const isFunction = (object) => {
    return typeof object === 'function';
};
const typeStr = (obj) => {
    return isArray(obj) ? 'array' : typeof obj;
};
const escapeRegExp = (str) => {
    return str.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
};
const hasProperty = (obj, propName) => {
    return obj != null && typeof obj === 'object' && (propName in obj);
};
const primitiveHasOwnProperty = (primitive, propName) => {
    return (primitive != null
        && typeof primitive !== 'object'
        && primitive.hasOwnProperty
        && primitive.hasOwnProperty(propName));
};
const isArray = Array.isArray || isArrayPolyfill;
const regExpTest = RegExp.prototype.test;
const testRegExp = (regEx, str) => {
    return regExpTest.call(regEx, str);
};
const nonSpaceRe = /\S/;
const isWhitespace = (str) => {
    return !testRegExp(nonSpaceRe, str);
};
const entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
};
const escapeHtml = (str) => {
    return String(str).replace(/[&<>"'`=\/]/g, (s) => {
        return entityMap[s];
    });
};
const whiteRe = /\s*/;
const spaceRe = /\s+/;
const equalsRe = /\s*=/;
const curlyRe = /\s*\}/;
const tagRe = /#|\^|\/|>|\{|&|=|!/;
const squashTokens = (tokens) => {
    const squashedTokens = [];
    let token, lastToken;
    for (let i = 0, numTokens = tokens.length; i < numTokens; ++i) {
        token = tokens[i];
        if (token) {
            if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
                lastToken[1] += token[1];
                lastToken[3] = token[3];
            }
            else {
                squashedTokens.push(token);
                lastToken = token;
            }
        }
    }
    return squashedTokens;
};
const nestTokens = (tokens) => {
    const nestedTokens = [];
    let collector = nestedTokens;
    const sections = [];
    let token, section;
    for (let i = 0, numTokens = tokens.length; i < numTokens; ++i) {
        token = tokens[i];
        switch (token[0]) {
            case '#':
            case '^':
                collector.push(token);
                sections.push(token);
                collector = token[4] = [];
                break;
            case '/':
                section = sections.pop();
                section[5] = token[2];
                collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
                break;
            default:
                collector.push(token);
        }
    }
    return nestedTokens;
};
const parseTemplate = (template, tags) => {
    if (!template) {
        return [];
    }
    let lineHasNonSpace = false;
    let sections = []; // Stack to hold section tokens
    let tokens = []; // Buffer to hold the tokens
    let spaces = []; // Indices of whitespace tokens on the current line
    let hasTag = false; // Is there a {{tag}} on the current line?
    let nonSpace = false; // Is there a non-space char on the current line?
    let indentation = ''; // Tracks indentation for tags that use it
    let tagIndex = 0; // Stores a count of number of tags encountered on a line
    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    const stripSpace = () => {
        if (hasTag && !nonSpace) {
            while (spaces.length) {
                delete tokens[spaces.pop()];
            }
        }
        else {
            spaces = [];
        }
        hasTag = false;
        nonSpace = false;
    };
    const compileTags = (tagsToCompile) => {
        if (typeof tagsToCompile === 'string') {
            tagsToCompile = tagsToCompile.split(spaceRe, 2);
        }
        if (!isArray(tagsToCompile) || tagsToCompile.length !== 2) {
            throw new Error('Invalid tags: ' + tagsToCompile);
        }
        const openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
        const closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
        const closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
        return { openingTagRe, closingTagRe, closingCurlyRe };
    };
    let { openingTagRe, closingTagRe, closingCurlyRe } = compileTags(tags || BARBE.tags);
    console.log('--------------_> TAG DEBUG', openingTagRe, closingTagRe, closingCurlyRe);
    const scanner = new Scanner(template);
    let start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
        start = scanner.pos;
        // Match any text between tags.
        value = scanner.scanUntil(openingTagRe);
        if (value) {
            for (let i = 0, valueLength = value.length; i < valueLength; ++i) {
                chr = value.charAt(i);
                if (isWhitespace(chr)) {
                    spaces.push(tokens.length);
                    indentation += chr;
                }
                else {
                    nonSpace = true;
                    lineHasNonSpace = true;
                    indentation += ' ';
                }
                tokens.push(['text', chr, start, start + 1]);
                start += 1;
                // Check for whitespace on the current line.
                if (chr === '\n') {
                    stripSpace();
                    indentation = '';
                    tagIndex = 0;
                    lineHasNonSpace = false;
                }
            }
        }
        // Match the opening tag.
        if (!scanner.scan(openingTagRe)) {
            break;
        }
        hasTag = true;
        // Get the tag type.
        type = scanner.scan(tagRe) || 'name';
        scanner.scan(whiteRe);
        // Get the tag value.
        if (type === '=') {
            value = scanner.scanUntil(equalsRe);
            scanner.scan(equalsRe);
            scanner.scanUntil(closingTagRe);
        }
        else if (type === '{') {
            value = scanner.scanUntil(closingCurlyRe);
            scanner.scan(curlyRe);
            scanner.scanUntil(closingTagRe);
            type = '&';
        }
        else {
            value = scanner.scanUntil(closingTagRe);
        }
        // Match the closing tag.
        if (!scanner.scan(closingTagRe)) {
            throw new Error('Unclosed tag at ' + scanner.pos);
        }
        if (type === '>') {
            token = [type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace];
        }
        else {
            token = [type, value, start, scanner.pos];
        }
        tagIndex++;
        tokens.push(token);
        if (type === '#' || type === '^') {
            sections.push(token);
        }
        else if (type === '/') {
            // Check section nesting.
            openSection = sections.pop();
            if (!openSection) {
                throw new Error('Unopened section "' + value + '" at ' + start);
            }
            if (openSection[1] !== value) {
                throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
            }
        }
        else if (type === 'name' || type === '{' || type === '&') {
            nonSpace = true;
        }
        else if (type === '=') {
            // Set the tags for the next time around.
            compileTags(value);
        }
    }
    stripSpace();
    // Make sure there are no open sections when we're done.
    openSection = sections.pop();
    if (openSection) {
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
    }
    return nestTokens(squashTokens(tokens));
};
class Scanner {
    constructor(str) {
        this.pos = 0;
        this.string = str;
        this.tail = str;
    }
    eos() {
        return this.tail === '';
    }
    scan(regExp) {
        const match = this.tail.match(regExp);
        if (!match || match.index !== 0) {
            return '';
        }
        const str = match[0];
        this.tail = this.tail.substring(str.length);
        this.pos += str.length;
        return str;
    }
    scanUntil(regExp) {
        const index = this.tail.search(regExp);
        let match;
        switch (index) {
            case -1:
                match = this.tail;
                this.tail = '';
                break;
            case 0:
                match = '';
                break;
            default:
                match = this.tail.substring(0, index);
                this.tail = this.tail.substring(index);
        }
        this.pos += match.length;
        return match;
    }
}
class Context {
    constructor(view, parentContext) {
        this.view = view;
        this.cache = { '.': this.view };
        this.parent = parentContext;
    }
    push(view) {
        return new Context(view, this);
    }
    lookup(name) {
        const cache = this.cache;
        let value;
        if (cache.hasOwnProperty(name)) {
            value = cache[name];
        }
        else {
            let context = this;
            let intermediateValue = false;
            let names = false;
            let index = false;
            let lookupHit = false;
            while (context) {
                if (name.indexOf('.') > 0) {
                    intermediateValue = context.view;
                    names = name.split('.');
                    index = 0;
                    while (intermediateValue != null && index < names.length) {
                        if (index === (names.length - 1)) {
                            lookupHit = (hasProperty(intermediateValue, names[index])
                                || primitiveHasOwnProperty(intermediateValue, names[index]));
                        }
                        intermediateValue = intermediateValue[names[index++]];
                    }
                }
                else {
                    intermediateValue = context.view[name];
                    lookupHit = hasProperty(context.view, name);
                }
                if (lookupHit) {
                    value = intermediateValue;
                    break;
                }
                context = context.parent;
            }
            cache[name] = value;
        }
        if (isFunction(value)) {
            value = value.call(this.view);
        }
        return value;
    }
}
class Cache {
    constructor() {
        this._cache = {};
    }
    set(key, value) {
        this._cache[key] = value;
    }
    get(key) {
        return this._cache[key];
    }
    clear() {
        this._cache = {};
    }
}
class Writer {
    constructor() {
        this.templateCache = new Cache();
    }
    clearCache() {
        if (typeof this.templateCache !== 'undefined') {
            this.templateCache.clear();
        }
    }
    parse(template, tags) {
        const cache = this.templateCache;
        const cacheKey = template + ':' + (tags || BARBE.tags).join(':');
        const isCacheEnabled = typeof cache !== 'undefined';
        let tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;
        if (tokens === undefined) {
            tokens = parseTemplate(template, tags);
            isCacheEnabled && cache.set(cacheKey, tokens);
        }
        return tokens;
    }
    render(template, view, partials, config) {
        const tags = this.getConfigTags(config);
        const tokens = this.parse(template, tags);
        const context = (view instanceof Context) ? view : new Context(view, undefined);
        return this.renderTokens(tokens, context, partials, template, config);
    }
    getConfigTags(config) {
        if (isArray(config)) {
            return config;
        }
        else if (config && typeof config === 'object') {
            return config.tags;
        }
        else {
            return undefined;
        }
    }
    rawValue(token) {
        return token[1];
    }
    ;
    renderTokens(tokens, context, partials, originalTemplate, config) {
        let buffer = '';
        let token;
        let symbol;
        let value;
        for (let i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            value = undefined;
            token = tokens[i];
            symbol = token[0];
            if (symbol === '#') {
                value = this.renderSection(token, context, partials, originalTemplate, config);
            }
            else if (symbol === '^') {
                value = this.renderInverted(token, context, partials, originalTemplate, config);
            }
            else if (symbol === '>') {
                value = this.renderPartial(token, context, partials, config);
            }
            else if (symbol === '&') {
                value = this.unescapedValue(token, context);
            }
            else if (symbol === 'name') {
                value = this.escapedValue(token, context, config);
            }
            else if (symbol === 'text') {
                value = this.rawValue(token);
            }
            if (value !== undefined) {
                buffer += value;
            }
        }
        return buffer;
    }
    renderSection(token, context, partials, originalTemplate, config) {
        const self = this;
        let buffer = '';
        let value = context.lookup(token[1]);
        const subRender = (template) => {
            return self.render(template, context, partials, config);
        };
        if (!value) {
            return;
        }
        if (isArray(value)) {
            for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
                buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
            }
        }
        else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
            buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
        }
        else if (isFunction(value)) {
            if (typeof originalTemplate !== 'string') {
                throw new Error('Cannot use higher-order sections without the original template');
            }
            // Extract the portion of the original template that the section contains.
            value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
            if (value != null) {
                buffer += value;
            }
        }
        else {
            buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
        }
        return buffer;
    }
    renderInverted(token, context, partials, originalTemplate, config) {
        const value = context.lookup(token[1]);
        if (!value || (isArray(value) && value.length === 0)) {
            return this.renderTokens(token[4], context, partials, originalTemplate, config);
        }
    }
    ;
    indentPartial(partial, indentation, lineHasNonSpace) {
        const filteredIndentation = indentation.replace(/[^ \t]/g, '');
        const partialByNl = partial.split('\n');
        for (let i = 0; i < partialByNl.length; i++) {
            if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
                partialByNl[i] = filteredIndentation + partialByNl[i];
            }
        }
        return partialByNl.join('\n');
    }
    ;
    renderPartial(token, context, partials, config) {
        if (!partials) {
            return;
        }
        const tags = this.getConfigTags(config);
        const value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if (value !== null) {
            const lineHasNonSpace = token[6];
            const tagIndex = token[5];
            const indentation = token[4];
            let indentedValue = value;
            if (tagIndex === 0 && indentation) {
                indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
            }
            const tokens = this.parse(indentedValue, tags);
            return this.renderTokens(tokens, context, partials, indentedValue, config);
        }
    }
    unescapedValue(token, context) {
        const value = context.lookup(token[1]);
        if (value !== null) {
            return value;
        }
    }
    getConfigEscape(config) {
        return config && typeof config === 'object' && !isArray(config) ? config.escape : undefined;
    }
    escapedValue(token, context, config) {
        const escape = this.getConfigEscape(config) || BARBE.escape;
        const value = context.lookup(token[1]);
        if (value != null) {
            return (typeof value === 'number' && escape === BARBE.escape) ? String(value) : escape(value);
        }
    }
}
class BARBE {
    constructor() {
        this.name = 'MY F**KING MUSTACHE LIBRARY FOR ANGULAR';
        this.version = 'ECLATER';
        this._Writer = new Writer();
    }
    get templateCache() {
        return this._Writer.templateCache;
    }
    set templateCache(cache) {
        this._Writer.templateCache = cache;
    }
    parse(template, tags) {
        return this._Writer.parse(template, tags);
    }
    render(template, view, partials, config) {
        if (typeof template !== 'string') {
            throw new TypeError('Invalid template! Template should be a "string" ' +
                'but "' + typeStr(template) + '" was given as the first ' +
                'argument for mustache#render(template, view, partials)');
        }
        return this._Writer.render(template, view, partials, config);
    }
    ;
    clearCache() {
        this._Writer.clearCache();
    }
}
BARBE.tags = ['{{', '}}'];
BARBE.escape = escapeHtml;
BARBE.Scanner = Scanner;
BARBE.Context = Context;
BARBE.Writer = Writer;

const barbe = new BARBE();
class KonversoService {
    constructor(config, http) {
        this.http = http;
        this.authentication = new EventEmitter();
        this.firstVisit = false;
        this.AssistantMode = false;
        this.readyState = false;
        this.lang = new BehaviorSubject('');
        this.customData = new BehaviorSubject(null);
        this.emulationTrigger = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        // tslint:disable-next-line:variable-name
        this._token = this.token.asObservable();
        this.buildHeaders();
        this.initInstance(config);
    }
    /**
     * Send Query To backend server and get a response
     * @param query
     */
    async send(query) {
        return new Promise((resolve, reject) => {
            if (query && query.replace(new RegExp(' ', 'g'), '')) {
                if (this.header) {
                    const preparedData = this.buildQuery(query);
                    const options = {
                        headers: this.header
                    };
                    this.http.post(this.endpoint + '?t=' + new Date().getTime(), preparedData, options)
                        .subscribe((data) => {
                        resolve(data);
                    });
                }
                else {
                    reject(new Error('Header is not set, please provide a token though user setting or though module configuration'));
                }
            }
            else {
                reject(new Error('Current input is empty, please try again'));
            }
        });
    }
    /**
     * Emulate user entry Query To backend server and get a response
     * @param query
     */
    async sendTriggerEmulation(query) {
        const response = await this.send(query).catch((err) => {
            console.log('error trigger emulation', err);
        });
        if (response) {
            this.emulationTrigger.next({ input: query, ...response });
        }
    }
    /**
     * @private
     * Generate Header for backend call
     */
    buildHeaders() {
        this._token.subscribe((token) => {
            console.log('-------MY NEW TOKEN----->', token);
            const bearer = 'Bearer ' + token;
            this.header = new HttpHeaders({
                //'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': bearer
            });
        });
    }
    /**
     * @param config
     * @private
     * Initialize Data for User Instance
     */
    initInstance(config) {
        this._auth = !!config.auth;
        if (config.endpoint) {
            this.endpoint = config.endpoint;
            if (config.AssistantMode) {
                this.AssistantMode = config.AssistantMode;
            }
            if (config.defaultAssets) {
                this.assets = config.defaultAssets;
                if (config.defaultAssets.ColorSet) {
                    this.ColorSet = config.defaultAssets.ColorSet;
                }
            }
            if (config.auth) {
                this.authentication.subscribe((user) => {
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    this.locale = user?.lang;
                    this.lang.next(this.locale);
                    if (config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                        this.PlaceHolder = config.InputPlaceHolder[this.locale];
                    }
                    if (config.InputNumberPlaceHolder && config.InputNumberPlaceHolder[this.locale]) {
                        this.NumberPlaceHolder = config.InputNumberPlaceHolder[this.locale];
                    }
                    if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                        this.Welcome = barbe.render(config.BotInitMessage.Welcome[this.locale], user);
                    }
                    if (user?.token) {
                        this.token.next(user?.token);
                    }
                    if (user?.firstVisit) {
                        this.firstVisit = true;
                        delete user.firstVisit;
                        if (config?.BotInitMessage?.FirstUsage &&
                            this.locale &&
                            config?.BotInitMessage?.FirstUsage[this.locale]) {
                            this.firstUsageStory = [];
                            for (const history of config.BotInitMessage.FirstUsage[this.locale]) {
                                this.firstUsageStory.push(barbe.render(history, user));
                            }
                        }
                    }
                    this.user = user;
                    this.readyState = true;
                });
            }
            else if (config.lang) {
                this.locale = config.lang;
                this.lang.next(this.locale);
                if (config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                    this.PlaceHolder = config.InputPlaceHolder[this.locale];
                }
                if (config.InputNumberPlaceHolder && config.InputNumberPlaceHolder[this.locale]) {
                    this.NumberPlaceHolder = config.InputNumberPlaceHolder[this.locale];
                }
                if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                    this.Welcome = config.BotInitMessage.Welcome[this.locale];
                }
                this.user = {
                    userId: this.guid(),
                    lang: config.lang
                };
                this.readyState = true;
            }
            if (config.token) {
                this.token.next(config.token);
            }
        }
        else {
            return new Error('Please provide endpoint');
        }
    }
    /**
     * @param query
     * @private
     * prepare set data to push to backend server
     */
    buildQuery(query) {
        // @ts-ignore
        const custom = this.customData.getValue();
        return {
            ...custom,
            ...this.user,
            query: query.replace(/\s+/g, ' ').trim(),
            isSending: true
        };
    }
    /**
     * @private
     * Generate Random uniq Id for Konverso Instance
     */
    guid() {
        let random = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
    }
}
KonversoService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoService, deps: [{ token: '__NgxKonverso__' }, { token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
KonversoService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['__NgxKonverso__']
                }] }, { type: i1.HttpClient }]; } });

const BotMessageSample = {
    query: null,
    userId: null,
    timestamp: 1617369777.976196,
    text: null,
    infoURL: '',
    context: [],
    suggestions: []
};

/***********************************************************
 **  @project ngx-konverso                              **
 **  @file DotLoader                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 07/04/2021                                         **
 ***********************************************************/
const DotLoaderTemplate = (color) => `<div class="loading-dots">
<div class="loading-dots--dot" style="background-color: ${color}"></div>
  <div class="loading-dots--dot" style="background-color: ${color}"></div>
  <div class="loading-dots--dot" style="background-color: ${color}"></div>
  </div>`;

class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'GO': `C'est parti`,
                'SEND_MESSAGE': 'Envoyer mon message',
                'SELECT': 'Vous devez sélectionner une réponse',
                'SCREENSHOT': "Capture d'écran",
                'SEND': 'Valider le nombre de personnes touchées',
                'MONDAY': 'Lundi',
                "TUESDAY": 'Mardi',
                "WEDNESDAY": 'Mercredi',
                "THURSDAY": 'Jeudi',
                "FRIDAY": 'Vendredi',
                "SATURDAY": 'Samedi',
                "SUNDAY": 'Dimanche',
                "OTHER": "Autre",
                "FREE_FIELD": 'Champ libre',
                "VALIDATE": 'Valider',
                "SKIP": 'Passer',
                "MORNING": "Matin",
                "AFTERNOON": "Après-midi",
                "MORNING_ALL": 'Matin (tous)',
                "AFTERNOON_ALL": 'Après-midi (tous)',
                "ATTACHMENT": 'pièce jointe',
                "ATTACHMENTS": 'pièces jointes',
                "VALIDATE_AVAILABILITY": "Valider mes disponibilités",
            },
            'en': {
                'GO': `Let's go`,
                'SEND_MESSAGE': 'Send my message',
                'SELECT': 'You must select an answer',
                'SCREENSHOT': 'Screenshot',
                'SEND': 'Validate impacted people number',
                "MONDAY": 'Monday',
                "TUESDAY": 'Tuesday',
                "WEDNESDAY": 'Wednesday',
                "THURSDAY": 'Thursday',
                "FRIDAY": 'Friday',
                "SATURDAY": 'Saturday',
                "SUNDAY": 'Sunday',
                "OTHER": 'Other',
                "FREE_FIELD": 'Free field',
                "VALIDATE": 'Validate',
                "SKIP": 'Skip',
                "MORNING": "Morning",
                "AFTERNOON": "Afternoon",
                "MORNING_ALL": 'Morning (all)',
                "AFTERNOON_ALL": 'Afternoon (all)',
                "ATTACHMENT": 'attachment',
                "ATTACHMENTS": 'attachments',
                "VALIDATE_AVAILABILITY": "Validate availability",
            }
        };
    }
    translate(l, word) {
        return this.lang[l][word];
    }
}
TranslateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TranslateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TranslateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TranslateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: TranslateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: SafeHtmlPipe, deps: [{ token: i1$1.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
SafeHtmlPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: SafeHtmlPipe, name: "safeHtml" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: SafeHtmlPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'safeHtml'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.DomSanitizer }]; } });

class FirstVisitComponent {
    constructor(translate, service) {
        this.service = service;
        this.ready = new EventEmitter();
        this.position = 0;
        this.current = '';
        this.go = '';
        service.lang.subscribe((r) => {
            if (service.locale) {
                this.go = translate.translate(service.locale, 'GO');
            }
        });
    }
    ngOnInit() {
        this.current = this.firstUsageStory[this.position];
        const clear = setInterval(() => {
            if (this.position < (this.firstUsageStory.length - 1)) {
                this.current = this.firstUsageStory[++this.position];
            }
            else {
                clearInterval(clear);
            }
        }, 5000);
    }
    goTo(pos) {
        this.position = pos;
        this.current = this.firstUsageStory[this.position];
    }
    start() {
        //console.log('OOOKKKK')
        this.ready.emit(true);
    }
}
FirstVisitComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: FirstVisitComponent, deps: [{ token: TranslateService }, { token: KonversoService }], target: i0.ɵɵFactoryTarget.Component });
FirstVisitComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: FirstVisitComponent, selector: "bot-first-visit", inputs: { firstUsageStory: "firstUsageStory", assets: "assets" }, outputs: { ready: "ready" }, ngImport: i0, template: "<ng-container>\r\n  <div class=\"bot-logo-init-wrapper\">\r\n    <!--<img [src]=\"assets.FullSizeLogo\">-->\r\n    <div class=\"m-carl-notification\">\r\n      <div class=\"m-carl-notification-cue m-cue\">\r\n        <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bot-init-text\" [innerHTML]=\"current | safeHtml\"></div>\r\n  <div class=\"bot-init-bullet-step\">\r\n      <span *ngFor=\"let elem of firstUsageStory ; let pos = index\" class=\"bot-init-dot\"\r\n            [style]=\"pos === position ? {\r\n              backgroundColor : assets?.ColorSet?.Primary,\r\n              borderColor :assets?.ColorSet?.Primary\r\n              }:{\r\n                backgroundColor :assets?.ColorSet?.Secondary,\r\n                borderColor :assets?.ColorSet?.Primary\r\n                }\" (click)=\"goTo(pos)\">\r\n      </span>\r\n  </div>\r\n  <div class=\"bot-init-button-wrapper\">\r\n    <button mat-button class=\"bot-button button-lg\" [style]=\"{\r\n      backgroundColor : '#171F26',\r\n      color : assets?.ColorSet?.Secondary\r\n    }\" (click)=\"start()\">{{ go }}</button>\r\n  </div>\r\n\r\n</ng-container>\r\n", styles: ["@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:190px;width:190px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:150px;height:150px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}\n"], directives: [{ type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "safeHtml": SafeHtmlPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: FirstVisitComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bot-first-visit', template: "<ng-container>\r\n  <div class=\"bot-logo-init-wrapper\">\r\n    <!--<img [src]=\"assets.FullSizeLogo\">-->\r\n    <div class=\"m-carl-notification\">\r\n      <div class=\"m-carl-notification-cue m-cue\">\r\n        <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bot-init-text\" [innerHTML]=\"current | safeHtml\"></div>\r\n  <div class=\"bot-init-bullet-step\">\r\n      <span *ngFor=\"let elem of firstUsageStory ; let pos = index\" class=\"bot-init-dot\"\r\n            [style]=\"pos === position ? {\r\n              backgroundColor : assets?.ColorSet?.Primary,\r\n              borderColor :assets?.ColorSet?.Primary\r\n              }:{\r\n                backgroundColor :assets?.ColorSet?.Secondary,\r\n                borderColor :assets?.ColorSet?.Primary\r\n                }\" (click)=\"goTo(pos)\">\r\n      </span>\r\n  </div>\r\n  <div class=\"bot-init-button-wrapper\">\r\n    <button mat-button class=\"bot-button button-lg\" [style]=\"{\r\n      backgroundColor : '#171F26',\r\n      color : assets?.ColorSet?.Secondary\r\n    }\" (click)=\"start()\">{{ go }}</button>\r\n  </div>\r\n\r\n</ng-container>\r\n", styles: ["@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:190px;width:190px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:150px;height:150px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}\n"] }]
        }], ctorParameters: function () { return [{ type: TranslateService }, { type: KonversoService }]; }, propDecorators: { firstUsageStory: [{
                type: Input
            }], assets: [{
                type: Input
            }], ready: [{
                type: Output
            }] } });

class CustomCheckboxCalendarComponent {
    constructor(_formBuilder, 
    //public animations : AnimationsService,
    translate, service) {
        this._formBuilder = _formBuilder;
        this.translate = translate;
        this.service = service;
        this.calendarTemplate = {
            morning: { monday: false, tuhesday: false }
        };
        this.columnOverride = {};
        this.calendarChange = new EventEmitter(true);
        this.state = true;
        this.form = {};
        this.column = [];
        this.rows = [''];
        this.checked = {};
        this.calendar_value = {};
    }
    ngOnInit() {
        const formGroup = {};
        for (const part in this.calendarTemplate) {
            if (!formGroup[part]) {
                formGroup[part] = {}; // morning
            }
            this.rows.push(part);
            for (const day in this.calendarTemplate[part]) {
                // @ts-ignore
                formGroup[part][day] = [this.calendarTemplate[part][day]]; //morgin/monday
                this.column.push(day);
            }
            this.column = [...new Set(this.column)];
        }
        for (const part in formGroup) {
            this.form[part] = this._formBuilder.group(formGroup[part]);
            this.observer(part);
            this.process(this.form[part].value, part);
        }
    }
    observer(part) {
        this.form[part].valueChanges.pipe(debounceTime(200)).subscribe(changes => this.process(changes, part));
    }
    process(changes, part) {
        if (changes.all !== this.checked[part]) {
            const keys = Object.keys(this.form[part].controls);
            for (const k of keys) {
                this.form[part].controls[k].patchValue(changes.all, { emitEvent: false, onlySelf: true });
                if (!this.calendar_value[k])
                    this.calendar_value[k] = {};
                if (!this.calendar_value[k][part])
                    this.calendar_value[k][part] = changes.all;
                else
                    this.calendar_value[k][part] = changes.all;
                this.calendar_value[k][part] = changes.all;
            }
            this.checked[part] = changes.all;
        }
        else {
            const keys = Object.keys(changes).filter((e) => e !== 'all');
            let counter = keys.length;
            for (const k of keys) {
                if (!this.calendar_value[k])
                    this.calendar_value[k] = {};
                if (!this.calendar_value[k][part])
                    this.calendar_value[k][part] = changes[k];
                else
                    this.calendar_value[k][part] = changes[k];
                if (!changes[k]) {
                    counter--;
                }
            }
            if (counter === keys.length) {
                this.form[part].controls['all'].patchValue(true, { emitEvent: false, onlySelf: true });
                this.checked[part] = true;
            }
            else {
                this.checked[part] = false;
                this.form[part].controls['all'].patchValue(false, { emitEvent: false, onlySelf: true });
            }
        }
        this.calendarChange.emit(this.calendar_value);
    }
}
CustomCheckboxCalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomCheckboxCalendarComponent, deps: [{ token: i1$2.FormBuilder }, { token: TranslateService }, { token: KonversoService }], target: i0.ɵɵFactoryTarget.Component });
CustomCheckboxCalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: CustomCheckboxCalendarComponent, selector: "custom-checkbox-calendar", inputs: { calendarTemplate: "calendarTemplate", columnOverride: "columnOverride", state: "state" }, outputs: { calendarChange: "calendarChange" }, ngImport: i0, template: "<div class=\"checkbox-calendar\">\r\n    <div class=\"column-title\">\r\n      <div *ngFor=\"let row of rows\" class=\"calendar-row\">\r\n        {{  (columnOverride[row] ? translate.translate(service.locale, columnOverride[row]) : translate.translate(service.locale,row))}}\r\n      </div>\r\n    </div>\r\n    <div class=\"column-value\">\r\n      <div class=\"calendar-row-wrapper\">\r\n        <ng-container *ngFor=\"let c of column\">\r\n          <div class=\"calendar-head\"\r\n               [style]=\"{width : 'calc(100% / '+column.length+')'}\">\r\n               {{ columnOverride[c] ? translate.translate(service.locale, columnOverride[c]) : (c === 'all' ? '' : translate.translate(service.locale , c) )}} \r\n            </div>\r\n        </ng-container>\r\n      </div>\r\n  \r\n      <ng-container *ngFor=\"let row of rows;\">\r\n        <ng-container *ngIf=\"row !== ''\">\r\n          <form [formGroup]=\"form[row]\" class=\"calendar-row-wrapper\">\r\n            <ng-container *ngFor=\"let c of column\">\r\n  \r\n              <div class=\"calendar-checkbox\" [style]=\"{width : 'calc(100% / '+column.length+')'}\">\r\n                <input type=\"checkbox\" [name]=\"row + '_' + c\" [formControlName]=\"c\">\r\n                <label class=\"bot-checkbox-label\" [for]=\"row + '_' + c\"></label>\r\n              </div>\r\n  \r\n            </ng-container>\r\n          </form>\r\n        </ng-container>\r\n  \r\n      </ng-container>\r\n    </div>\r\n  \r\n  </div>\r\n  ", styles: [".checkbox-calendar{display:flex}.checkbox-calendar .column-value{display:inline-flex;flex-direction:column;width:100%}.checkbox-calendar .column-value .calendar-row-wrapper{display:flex;width:100%}.checkbox-calendar .column-title{display:inline-flex;flex-direction:column;min-height:50px;width:30%}.calendar-checkbox input[type=checkbox]{width:24px;height:24px}.calendar-head,.calendar-row,.calendar-checkbox{margin-top:10px;min-height:44px;padding:10px;text-align:center;font-size:.875rem;margin-right:0!important}\n"], directives: [{ type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1$2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1$2.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: CustomCheckboxCalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'custom-checkbox-calendar', template: "<div class=\"checkbox-calendar\">\r\n    <div class=\"column-title\">\r\n      <div *ngFor=\"let row of rows\" class=\"calendar-row\">\r\n        {{  (columnOverride[row] ? translate.translate(service.locale, columnOverride[row]) : translate.translate(service.locale,row))}}\r\n      </div>\r\n    </div>\r\n    <div class=\"column-value\">\r\n      <div class=\"calendar-row-wrapper\">\r\n        <ng-container *ngFor=\"let c of column\">\r\n          <div class=\"calendar-head\"\r\n               [style]=\"{width : 'calc(100% / '+column.length+')'}\">\r\n               {{ columnOverride[c] ? translate.translate(service.locale, columnOverride[c]) : (c === 'all' ? '' : translate.translate(service.locale , c) )}} \r\n            </div>\r\n        </ng-container>\r\n      </div>\r\n  \r\n      <ng-container *ngFor=\"let row of rows;\">\r\n        <ng-container *ngIf=\"row !== ''\">\r\n          <form [formGroup]=\"form[row]\" class=\"calendar-row-wrapper\">\r\n            <ng-container *ngFor=\"let c of column\">\r\n  \r\n              <div class=\"calendar-checkbox\" [style]=\"{width : 'calc(100% / '+column.length+')'}\">\r\n                <input type=\"checkbox\" [name]=\"row + '_' + c\" [formControlName]=\"c\">\r\n                <label class=\"bot-checkbox-label\" [for]=\"row + '_' + c\"></label>\r\n              </div>\r\n  \r\n            </ng-container>\r\n          </form>\r\n        </ng-container>\r\n  \r\n      </ng-container>\r\n    </div>\r\n  \r\n  </div>\r\n  ", styles: [".checkbox-calendar{display:flex}.checkbox-calendar .column-value{display:inline-flex;flex-direction:column;width:100%}.checkbox-calendar .column-value .calendar-row-wrapper{display:flex;width:100%}.checkbox-calendar .column-title{display:inline-flex;flex-direction:column;min-height:50px;width:30%}.calendar-checkbox input[type=checkbox]{width:24px;height:24px}.calendar-head,.calendar-row,.calendar-checkbox{margin-top:10px;min-height:44px;padding:10px;text-align:center;font-size:.875rem;margin-right:0!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$2.FormBuilder }, { type: TranslateService }, { type: KonversoService }]; }, propDecorators: { calendarTemplate: [{
                type: Input
            }], columnOverride: [{
                type: Input
            }], calendarChange: [{
                type: Output
            }], state: [{
                type: Input
            }] } });

const defaultInputType = 'text';
const defaultInputLimit = 300;
const ANIMATION_TTX = 750;
const ANIMATION_TTX_ADD = 250;
const ANIMATION_SLIDE_VALUE = -50;
const ANIMATION_SLIDE_VALUE_ADD = -25;
const ANIMATION_HEIGHT_TTX = 1250;
class DesktopFullScreenComponent {
    constructor(translate, service, animations, config) {
        this.translate = translate;
        this.service = service;
        this.animations = animations;
        this.AssistantMode = false;
        this.firstVisit = false;
        this.IsMobile = false;
        this.afterProcess = false;
        this.fileNb = 0;
        this.readySend = new EventEmitter(false);
        this.send = new EventEmitter(null);
        this.sendBotCommand = new EventEmitter(null);
        this.sendEvent = new EventEmitter(null);
        this.sendCalendar = new EventEmitter(null);
        this.currentPlaceHolder = '';
        this.sendBtn = '';
        this.sendBtnMsg = '';
        this.select = '';
        this.changed = false;
        this.botListening = false;
        this.showWrapper = true;
        this.showText = true;
        this.inputType = defaultInputType;
        this.inputLimit = defaultInputLimit;
        this.newMessage = false;
        this.messageCurrent = '';
        this.msgArray = [];
        this.botListeningTimer = 0;
        this.anim_done = false;
        this.reloaded = false;
        this.btnScreen = '';
        this.nbAttachments = 0;
        this.days = [];
        this.calendarAvailability = {};
        this.calendarTemplate = {
            morning: { all: true, monday: true, tuesday: true, wednesday: true, thursday: true, friday: true },
            afternoon: { all: true, monday: true, tuesday: true, wednesday: true, thursday: true, friday: true }
        };
        this.calendarKeyOverride = {
            morning: 'MORNING_ALL',
            afternoon: 'AFTERNOON_ALL',
            monday: 'MONDAY',
            tuesday: 'TUESDAY',
            wednesday: 'WEDNESDAY',
            thursday: 'THURSDAY',
            friday: 'FRIDAY'
        };
        this.animationTTX = ANIMATION_TTX;
        this.animationTtxAdd = ANIMATION_TTX_ADD;
        this.animationSlideValue = ANIMATION_SLIDE_VALUE;
        this.animationSlideValueAdd = ANIMATION_SLIDE_VALUE_ADD;
        this.animationHeightTTX = ANIMATION_HEIGHT_TTX;
        service.lang.subscribe((r) => {
            if (service.locale) {
                this.sendBtn = translate.translate(service.locale, 'SEND');
                this.sendBtnMsg = translate.translate(service.locale, 'SEND_MESSAGE');
                this.select = translate.translate(service.locale, 'SELECT');
                this.btnScreen = translate.translate(service.locale, 'SCREENSHOT');
                this.days = [
                    'MONDAY',
                    'TUESDAY',
                    'WEDNESDAY',
                    'THURSDAY',
                    'FRIDAY',
                    'SATURDAY',
                    'SUNDAY',
                    'MONDAY',
                ];
            }
        });
        this.config = config;
    }
    changeNumber(value) {
        if ((+this.userInput + value) > 0) {
            this.userInput = (+this.userInput + value).toString();
        }
    }
    ngOnChanges() {
        console.log(this.LastUserInput);
        if (this.afterProcess) {
            this.LastUserInput = null;
            this.LastBotAnswer.text = this.config.AfterProcessScenario.BotMessage[this.service.locale];
            if (this.config.AfterProcessScenario.FormElements[0][0].label == 'Jour 1') {
                let day1 = this.days[new Date().getDay() - 1];
                let day2 = this.days[new Date().getDay()];
                let day3 = this.days[new Date().getDay() + 1];
                this.config.AfterProcessScenario.FormElements[0][0].label = day1;
                this.config.AfterProcessScenario.FormElements[1][0].label = day2;
                this.config.AfterProcessScenario.FormElements[2][0].label = day3;
            }
        }
        /* TODO remove it */
        /*         let t = setInterval(() => {
                    if (document.querySelectorAll('.bot-answer')) {
                        let elems = document.querySelectorAll('.bot-answer');
                        if (elems.length > 0) {
                            let index = 0, length = elems.length;
                            let rep = true;
                            for (; index < length; index++) {
                                let temp = elems[index] as HTMLElement;
                                if (temp.style.opacity == '0') {
                                    temp.style.opacity = '1';
                                }
                            }
                            this.anim_done = rep;
                            if (this.anim_done) {
                                clearInterval(t);
                            }
                        }
                    }
                }, 100); */
        this.changed = false;
        if (document.getElementById('text') && !this.LastBotAnswer?.text.includes('loading-dots')) {
            document.getElementById('text').innerHTML = '';
        }
        console.log('-------> enter', this.LastBotAnswer?.text.includes('<number>') && this.LastBotAnswer?.text.includes('</number>'));
        if (this.LastBotAnswer?.text.includes('<number>') && this.LastBotAnswer?.text.includes('</number>')) {
            this.userInput = '1';
            this.inputType = 'number';
            this.inputLimit = 999;
            this.currentPlaceHolder = this.NumberPlaceHolder[Math.floor(Math.random() * this.NumberPlaceHolder.length)];
        }
        else {
            this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            this.inputType = defaultInputType;
            this.inputLimit = defaultInputLimit;
        }
        console.log('TYPE %s MAX %d', this.inputType, this.inputLimit, this.currentPlaceHolder);
        //console.log(this.LastBotAnswer);
        if (!this.anim_done) {
            let t2 = setInterval(() => {
                if (this.LastBotAnswer && !this.LastBotAnswer?.text.includes('loading-dots') && this.anim_done) {
                    clearInterval(t2);
                    const string = this.LastBotAnswer?.text
                        .split('<br/>').join(` `)
                        .split('&eacute;').join('é')
                        .split('&egrave;').join('è')
                        .replace(/<[^>]*>?/gm, '')
                        .split('&nbsp;').join('');
                    this.msgArray = string.split('');
                    if (this.messageCurrent !== string) {
                        this.newMessage = true;
                        this.messageCurrent = string;
                        this.launchLoop();
                    }
                    //this.looper(array, timer);
                }
            }, 100);
        }
        else {
            const string = this.LastBotAnswer?.text
                .split('<br/>').join(` `)
                .split('&eacute;').join('é')
                .split('&egrave;').join('è')
                .replace(/<[^>]*>?/gm, '')
                .split('&nbsp;').join('');
            this.msgArray = string.split('');
            if (this.messageCurrent !== string && string !== '') {
                this.newMessage = true;
                this.messageCurrent = string;
                this.launchLoop();
            }
        }
        setTimeout(() => {
            this.changed = true;
        }, 100);
    }
    bindCalendar($event) {
        //console.log('bindCalendar $event', $event)
        delete $event.all;
        this.calendarAvailability = $event;
    }
    getCalendar() {
        this.sendCalendar.emit(this.calendarAvailability);
    }
    launchLoop() {
        this.timer = setInterval(() => {
            if (this.msgArray.length == 0) {
                clearInterval(this.timer);
            }
            if (this.newMessage) {
                if (document.getElementById('text')) {
                    document.getElementById('text').innerHTML = '';
                }
                this.newMessage = false;
                //this.msgArray = this.messageCurrent.split("");
                clearInterval(this.timer);
                this.launchLoop();
            }
            this.looper();
        }, 60);
    }
    looper() {
        if (this.msgArray.length > 0 && !this.reloaded) {
            if (document.getElementById('text')) {
                document.getElementById('text').innerHTML += this.msgArray.shift();
            }
        } /*else {
        clearTimeout(timer);
      }*/
        /*timer = setTimeout(() => {
          this.looper(array, timer);
        }, 30);*/
    }
    ngOnInit() {
        this.inputType = defaultInputType;
        this.inputLimit = defaultInputLimit;
        if (this.PlaceHolder) {
            this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            setInterval(() => {
                this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            }, 3000);
        }
        /*setTimeout(() => {
            this.showWrapper = true;
        }, 2000);

        setTimeout(() => {
            this.showText = true;
        }, 2500);*/
        /* TODO remove it */
        /*         let t = setInterval(() => {
                    if (document.querySelectorAll('.bot-answer')) {
                        let elems = document.querySelectorAll('.bot-answer');
                        if (elems.length > 0) {
                            let index = 0, length = elems.length;
                            let rep = true;
                            for (; index < length; index++) {
                                let temp = elems[index] as HTMLElement;
                                if (temp.style.opacity == '0') {
                                    rep = false;
                                }
                            }
                            this.anim_done = rep;
                            if (this.anim_done) {
                                clearInterval(t);
                            }
                        }
                    }
                }, 100); */
        //run.run();
        /*setInterval(() => {
            if (this.botListeningTimer > 0) {
                this.botListeningTimer -= 1;

                if (this.botListeningTimer > 0) {
                    document.getElementById('bot').className = 'a-cue-voice speaking';
                    document.getElementById('bot-icon').className = 'a-cue-icon speakingicon';
                } else {
                    document.getElementById('bot').className = 'a-cue-voice';
                    document.getElementById('bot-icon').className = 'a-cue-icon';
                }

                this.botListening = this.botListeningTimer > 0;
            }
        }, 500);*/
    }
    userWriting(key) {
        if (key.code === 'Enter') {
            this.botListening = false;
            this.botListeningTimer = 0;
        }
        else if (key.code === 'Backspace') {
        }
        else {
            this.botListening = true;
            if (this.botListeningTimer == 0) {
                this.botListeningTimer += 2;
            }
            else if (this.botListeningTimer < 5) {
                this.botListeningTimer += 1;
            }
        }
    }
    emit($event) {
        this.firstVisit = false;
        this.readySend.emit(true);
    }
    _send() {
        if (this.LastBotAnswer?.endOfTopic && this.LastUserInput) {
            this.LastUserInput.message = '';
        }
        this.botListening = false;
        const userData = {
            message: this.userInput,
            date: new Date().toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        this.send.emit(userData);
        this.userInput = null;
    }
    async scroll(scrollHeight) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(0);
            }, 300);
        });
    }
    byPassUserInput(botdata, i) {
        /* TODO remove it */
        /*const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.show-btn');
        for (let btn of Array.from(buttons)) {
          btn.classList.add('hidden-btn');
        }*/
        /* const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.bot-answer');
        for (let btn of Array.from(buttons)) {
            btn.classList.add('hidden-btn');
        } */
        this.sendBotCommand.emit(botdata);
        /* TODO remove it */
        /* setTimeout(() => {
            const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.bot-answer');
            for (let btn of Array.from(buttons)) {
                btn.classList.remove('hidden-btn');
            }
        }, 1000); */
    }
}
DesktopFullScreenComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DesktopFullScreenComponent, deps: [{ token: TranslateService }, { token: KonversoService }, { token: i3.AnimationsService }, { token: '__NgxKonverso__' }], target: i0.ɵɵFactoryTarget.Component });
DesktopFullScreenComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: DesktopFullScreenComponent, selector: "bot-full-screen", inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile", showInput: "showInput", NumberPlaceHolder: "NumberPlaceHolder", afterProcess: "afterProcess", fileNb: "fileNb" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent", sendCalendar: "sendCalendar" }, usesOnChanges: true, ngImport: i0, template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\r\n\r\n  <!--<canvas class=\"orb-canvas\"></canvas>\r\n  <div class=\"overlay\">\r\n    <div class=\"overlay__inner\">\r\n    </div>\r\n  </div>-->\r\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\r\n     xmlns=\"http://www.w3.org/1999/html\">\r\n  <div class=\"bot-view\">\r\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\r\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\r\n                       (ready)=\"emit($event)\"></bot-first-visit>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\r\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\r\n\r\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\r\n        <!-- TODO do we need id, remove it? -->\r\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\r\n          <img [src]=\"assets.FullSizeLogo\">\r\n        </div>-->\r\n        <!--<div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\r\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\r\n            <div class=\"m-carl-notification-cue m-cue\">\r\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\r\n                <div class=\"a-cue-voice-el voice1\"></div>\r\n                <div class=\"a-cue-voice-el voice2\"></div>\r\n                <div class=\"a-cue-voice-el voice3\"></div>\r\n                <div class=\"a-cue-voice-el voice4\"></div>\r\n                <div class=\"a-cue-voice-el\"></div>\r\n              </div>\r\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\r\n            </div>\r\n          </div>\r\n        </div>-->\r\n\r\n        <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" [ngStyle]=\"{'height': '40%'}\" class=\"bot\">\r\n          <div class=\"circle1\"></div>\r\n          <div class=\"circle2\"></div>\r\n          <div class=\"circle3\"></div>\r\n        </div>\r\n        <div  class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\r\n\r\n          <!-- USER INPUT -->\r\n          <ng-container *ngIf=\"LastUserInput && !afterProcess\">\r\n            <div [@FadeSlideInOutKonversoHeight]=\"animations.FadeSlideInOut(animationHeightTTX, animationSlideValue)\" class=\"overflow-hidden d-flex flex-column w-100 user-input-container\">\r\n              <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" [class.user-input-top]=\"LastUserInput?.message != ''\"  class=\"user-input\">\r\n                <div class=\"data\" [style]=\"{\r\n                        color : assets?.ColorSet?.Secondary\r\n                      }\" [innerHTML]=\"LastUserInput.message\">\r\n                </div>\r\n                <span class=\"time\">{{LastUserInput.date}}</span>\r\n              </div>  \r\n            </div>\r\n          </ng-container>  \r\n\r\n          <!-- BOT ANSWER -->\r\n          <ng-container *ngIf=\"LastBotAnswer\">\r\n            <div class=\"position-relative bot-answer\">\r\n\r\n              <div class=\"d-flex flex-column w-100 position-relative bot-answer__text\">\r\n              <!-- BOT ANSWER TEXT -->\r\n              <ng-container *ngIf=\"LastBotAnswer.text\">\r\n\r\n                <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\r\n                <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\r\n                -->\r\n\r\n                <ng-container *ngIf=\"!LastBotAnswer.text.includes('loading-dots') && changed && showText\">\r\n                  <span [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"w-100 justify-content-center\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!afterProcess\">\r\n                  <span id=\"loading-creation\"></span>\r\n                </ng-container>\r\n              </ng-container>\r\n              </div>\r\n\r\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\r\n                && LastBotAnswer.medias[0].required_actions\r\n                && LastBotAnswer.medias[0].required_actions.length > 0\r\n                && !LastBotAnswer.text.includes('loading-dots')\">\r\n                <div class=\"mt35 d-flex justify-content-center w-100 position-relative bot-answer__buttons\">\r\n                  <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\r\n                    <ng-container *ngIf=\"suggest.format === 'button'\">\r\n                        <button\r\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\r\n                          *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\r\n                            borderColor : assets?.ColorSet?.Primary,\r\n                            color : assets?.ColorSet?.Primary\r\n                          }\"  \r\n                          class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\r\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\r\n                        </button>\r\n                        <button \r\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\r\n                          *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\r\n                            borderColor : assets?.ColorSet?.Primary,\r\n                            color : assets?.ColorSet?.Primary\r\n                          }\"  \r\n                          class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\r\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\r\n                        </button>\r\n                        <button\r\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"  \r\n                          *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\"\r\n                            [style]=\"{\r\n                            borderColor : assets?.ColorSet?.Primary,\r\n                            color : assets?.ColorSet?.Primary\r\n                          }\"   \r\n                          class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"                    \r\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\r\n                      </button>\r\n                    </ng-container>                  \r\n                  </ng-container>\r\n                </div>\r\n                <ng-container *ngIf=\"disableUserInput\">\r\n                  <div class=\"position-relative bot-answer__disable-input\">\r\n                    <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"bot-input-disable\">\r\n                      <i>{{ select }}</i>\r\n                    </div>     \r\n                  </div>\r\n                </ng-container>  \r\n              </ng-container>\r\n              <!-- BOT ANSWER BUTTONS -->\r\n\r\n              <!--<ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormElements.length > 0\">\r\n                <div class=\"after-process-form\">\r\n                  <div class=\"after-process-subform\" *ngFor=\"let formElements of config.AfterProcessScenario.FormElements\">\r\n                    <ng-container *ngFor=\"let form of formElements\">\r\n                      <ng-container [ngSwitch]=\"form.type\">\r\n                        <div *ngSwitchCase=\"'checkbox'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" class=\"bot-checkbox\">\r\n                          <input [checked]=\"form?.checked == true ? 'true': 'false'\" [id]=\"form?.id\" [name]=\"form?.id\" [type]='form?.type' value=\"false\">\r\n                          <label [for]=\"form?.id\" class=\"bot-checkbox-label\">\r\n                            {{ translate.translate(service.locale, form.label) }}\r\n                          </label>\r\n                        </div>\r\n\r\n                        <input [class]=\"form?.class\" [id]=\"form?.id\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" *ngSwitchCase=\"'text'\" \r\n                        [pattern]=\"form?.pattern\" [placeholder]=\"form?.placeholder\" [type]=\"form?.type\" \r\n                        [value]=\"form?.value\">\r\n\r\n                        <div [class]=\"form?.class\" *ngSwitchCase=\"'div'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\">\r\n                          {{ translate.translate(service.locale, form?.content) }}\r\n                        </div>\r\n\r\n                        <textarea [class]=\"form?.class\" [id]=\"form?.id\" *ngSwitchCase=\"'textarea'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\"\r\n                        [placeholder]=\"translate.translate(service.locale, form?.placeholder)\"></textarea>\r\n                      </ng-container>\r\n                    </ng-container>\r\n                  </div>\r\n                </div>\r\n              </ng-container>-->\r\n\r\n              <custom-checkbox-calendar\r\n                [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\"\r\n                *ngIf=\"afterProcess\"\r\n                [state]=\"afterProcess\"\r\n                (calendarChange)=\"bindCalendar($event)\"\r\n                [calendarTemplate]=\"calendarTemplate\"\r\n                [columnOverride]=\"calendarKeyOverride\">\r\n              </custom-checkbox-calendar>\r\n\r\n              <ng-container *ngIf=\"inputType === 'number'\">\r\n                <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"bot-input\">\r\n                                  <!--<input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" min=\"2\" [max]=\"inputLimit\"\r\n                       [placeholder]=\"currentPlaceHolder\">-->\r\n                  <div class=\"input-number-div\">\r\n                    <div class=\"input-number-div-arrow\">\r\n                      <button (click)=\"changeNumber(1)\" class=\"arrow-up\">\r\n                        <nb-icon [icon]=\"'up_2'\" [size]=\"1.5\"></nb-icon>\r\n                      </button>\r\n\r\n                      <button (click)=\"changeNumber(-1)\" class=\"arrow-down\">\r\n                        <nb-icon [icon]=\"'down_2'\" [size]=\"1.5\"></nb-icon>\r\n                      </button>\r\n                    </div>\r\n\r\n                    {{ userInput }}\r\n                  </div>\r\n\r\n                  <div class=\"bot-container-btn\">\r\n                    <button class=\"bot-button send-btn input-number-btn\" [style]=\"{\r\n                      backgroundColor : assets?.ColorSet?.Primary,\r\n                      color : assets?.ColorSet?.Secondary\r\n                  }\" (click)=\"_send()\" [disabled]=\"!userInput\">\r\n    \r\n                      <ng-container *ngIf=\"inputType === 'number'\">\r\n                        {{ sendBtn }}\r\n                      </ng-container>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <div class=\"position-relative bot-input-wrapper\">\r\n            <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormButtons.length > 0\">\r\n              <!--<button [class]=\"btn.class\" *ngFor=\"let btn of config.AfterProcessScenario.FormButtons\" [ngStyle]=\"{'display': btn?.display ? btn.display: 'block'}\">\r\n                {{ translate.translate(service.locale, btn.label) }}\r\n              </button>-->\r\n              <button (click)=\"getCalendar()\" class=\"primary rounded validate-after-btn\" style=\"display: inline-block;\">\r\n                {{ translate.translate(service.locale, 'VALIDATE_AVAILABILITY') }}\r\n              </button>\r\n\r\n              <button class=\"rounded secondary skip-after-btn\" style=\"display: inline-block;\">\r\n                {{ translate.translate(service.locale, 'SKIP') }}\r\n              </button>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"!disableUserInput && showInput\">\r\n              <div class=\"d-flex flex-column w-100 position-realtive bot-input\" id=\"bot-input-div\">\r\n                <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValueAdd)\" class=\"w-100 h-100 d-flex flex-column position-absolute bot-input__controls\">\r\n                  <ng-container *ngIf=\"inputType === 'text'\">\r\n                    <textarea [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" [maxlength]=\"inputLimit\"\r\n                      [placeholder]=\"currentPlaceHolder\"></textarea>\r\n                  </ng-container>\r\n\r\n                  <div *ngIf=\"inputType !== 'number'\" class=\"bot-container-btn\">\r\n                    <button class=\"bot-button send-btn\" [style]=\"{\r\n                      backgroundColor : assets?.ColorSet?.Primary,\r\n                      color : assets?.ColorSet?.Secondary}\" \r\n                      (click)=\"_send()\" \r\n                      [disabled]=\"!userInput\">\r\n                  \r\n                      <ng-container *ngIf=\"inputType !== 'number'\">\r\n                        {{ sendBtnMsg }}\r\n                      </ng-container>\r\n    \r\n                      <!--<ng-container *ngIf=\"inputType === 'number'\">\r\n                        {{ sendBtn }}\r\n                      </ng-container>-->\r\n                    </button>\r\n    \r\n                    <button *ngIf=\"inputType !== 'number' && IsMobile\" class=\"bot-button-screen\">\r\n                      <nb-icon [icon]=\"'scan_11'\" [size]=\"1.5\"></nb-icon>\r\n                      {{ btnScreen }}\r\n                    </button>\r\n    \r\n                    <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-attach\">\r\n                      {{ fileNb }}\r\n    \r\n                      <ng-container *ngIf=\"fileNb <= 1\">\r\n                        {{ translate.translate(service.locale, 'ATTACHMENT') }}\r\n                      </ng-container>\r\n    \r\n                      <ng-container *ngIf=\"fileNb > 1\">\r\n                        {{ translate.translate(service.locale, 'ATTACHMENTS') }}\r\n                      </ng-container>\r\n    \r\n                      <nb-icon [icon]=\"'attachment'\" [size]=\"1.5\"></nb-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>  \r\n            </ng-container>\r\n            \r\n            <!-- TODO remove it -->\r\n            <!-- <ng-container *ngIf=\"disableUserInput\">\r\n              <div class=\"bot-input-disable\">\r\n                <i>{{ select }}</i>\r\n               </div>   \r\n            </ng-container> -->\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\r\n        {{AssistantMode}}\r\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\r\n          <div class=\"bot-chat\">\r\n            <ng-container *ngFor=\"let entry of displayData\">\r\n              <ng-container *ngIf=\"entry.date\">\r\n                <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"user-input\">\r\n                  <div class=\"data\" [style]=\"{\r\n                     backgroundColor : assets?.ColorSet?.Primary,\r\n                     color : assets?.ColorSet?.Secondary\r\n                    }\" [innerHTML]=\"entry.message\">\r\n                  </div>\r\n                  <span class=\"time\">{{entry.date}}</span>\r\n                </div>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!entry.date\">\r\n                <div class=\"bot-answer\">\r\n                  <ng-container *ngIf=\"entry.text\">\r\n                    <span *ngIf=\"changed\" class=\"\" [innerHTML]=\"entry.text | safeHtml\"></span>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\r\n                   && entry.medias[0].required_actions\r\n                   && entry.medias[0].required_actions.length\">\r\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\r\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\r\n                        <button *ngIf=\"changed\" [style]=\"{\r\n                     borderColor : assets?.ColorSet?.Primary,\r\n                     color : assets?.ColorSet?.Primary\r\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\r\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\r\n                      </ng-container>\r\n                    </ng-container>\r\n                  </ng-container>\r\n\r\n                </div>\r\n              </ng-container>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"bot-input-wrapper\">\r\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\r\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\r\n                   [placeholder]=\"currentPlaceHolder\">\r\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\r\n                     backgroundColor : assets?.ColorSet?.Primary,\r\n                     color : assets?.ColorSet?.Secondary\r\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\r\n            </button>\r\n          </div>\r\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\r\n            <i>{{ select }}</i>\r\n          </div>\r\n        </div>\r\n        <div class=\"bot-logo\">\r\n          <img [src]=\"assets.FullSizeLogo\">\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </div>\r\n</div>\r\n", styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}\n"], components: [{ type: FirstVisitComponent, selector: "bot-first-visit", inputs: ["firstUsageStory", "assets"], outputs: ["ready"] }, { type: CustomCheckboxCalendarComponent, selector: "custom-checkbox-calendar", inputs: ["calendarTemplate", "columnOverride", "state"], outputs: ["calendarChange"] }, { type: i6.NowboardIconComponent, selector: "nb-icon", inputs: ["size", "primary", "disabled_color", "disabled", "icon"] }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i7.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i1$2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }], pipes: { "safeHtml": SafeHtmlPipe }, animations: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DesktopFullScreenComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bot-full-screen', animations: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight], template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\r\n\r\n  <!--<canvas class=\"orb-canvas\"></canvas>\r\n  <div class=\"overlay\">\r\n    <div class=\"overlay__inner\">\r\n    </div>\r\n  </div>-->\r\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\r\n     xmlns=\"http://www.w3.org/1999/html\">\r\n  <div class=\"bot-view\">\r\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\r\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\r\n                       (ready)=\"emit($event)\"></bot-first-visit>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\r\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\r\n\r\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\r\n        <!-- TODO do we need id, remove it? -->\r\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\r\n          <img [src]=\"assets.FullSizeLogo\">\r\n        </div>-->\r\n        <!--<div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\r\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\r\n            <div class=\"m-carl-notification-cue m-cue\">\r\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\r\n                <div class=\"a-cue-voice-el voice1\"></div>\r\n                <div class=\"a-cue-voice-el voice2\"></div>\r\n                <div class=\"a-cue-voice-el voice3\"></div>\r\n                <div class=\"a-cue-voice-el voice4\"></div>\r\n                <div class=\"a-cue-voice-el\"></div>\r\n              </div>\r\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\r\n            </div>\r\n          </div>\r\n        </div>-->\r\n\r\n        <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" [ngStyle]=\"{'height': '40%'}\" class=\"bot\">\r\n          <div class=\"circle1\"></div>\r\n          <div class=\"circle2\"></div>\r\n          <div class=\"circle3\"></div>\r\n        </div>\r\n        <div  class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\r\n\r\n          <!-- USER INPUT -->\r\n          <ng-container *ngIf=\"LastUserInput && !afterProcess\">\r\n            <div [@FadeSlideInOutKonversoHeight]=\"animations.FadeSlideInOut(animationHeightTTX, animationSlideValue)\" class=\"overflow-hidden d-flex flex-column w-100 user-input-container\">\r\n              <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" [class.user-input-top]=\"LastUserInput?.message != ''\"  class=\"user-input\">\r\n                <div class=\"data\" [style]=\"{\r\n                        color : assets?.ColorSet?.Secondary\r\n                      }\" [innerHTML]=\"LastUserInput.message\">\r\n                </div>\r\n                <span class=\"time\">{{LastUserInput.date}}</span>\r\n              </div>  \r\n            </div>\r\n          </ng-container>  \r\n\r\n          <!-- BOT ANSWER -->\r\n          <ng-container *ngIf=\"LastBotAnswer\">\r\n            <div class=\"position-relative bot-answer\">\r\n\r\n              <div class=\"d-flex flex-column w-100 position-relative bot-answer__text\">\r\n              <!-- BOT ANSWER TEXT -->\r\n              <ng-container *ngIf=\"LastBotAnswer.text\">\r\n\r\n                <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\r\n                <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\r\n                -->\r\n\r\n                <ng-container *ngIf=\"!LastBotAnswer.text.includes('loading-dots') && changed && showText\">\r\n                  <span [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"w-100 justify-content-center\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!afterProcess\">\r\n                  <span id=\"loading-creation\"></span>\r\n                </ng-container>\r\n              </ng-container>\r\n              </div>\r\n\r\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\r\n                && LastBotAnswer.medias[0].required_actions\r\n                && LastBotAnswer.medias[0].required_actions.length > 0\r\n                && !LastBotAnswer.text.includes('loading-dots')\">\r\n                <div class=\"mt35 d-flex justify-content-center w-100 position-relative bot-answer__buttons\">\r\n                  <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\r\n                    <ng-container *ngIf=\"suggest.format === 'button'\">\r\n                        <button\r\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\r\n                          *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\r\n                            borderColor : assets?.ColorSet?.Primary,\r\n                            color : assets?.ColorSet?.Primary\r\n                          }\"  \r\n                          class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\r\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\r\n                        </button>\r\n                        <button \r\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\r\n                          *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\r\n                            borderColor : assets?.ColorSet?.Primary,\r\n                            color : assets?.ColorSet?.Primary\r\n                          }\"  \r\n                          class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\r\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\r\n                        </button>\r\n                        <button\r\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"  \r\n                          *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\"\r\n                            [style]=\"{\r\n                            borderColor : assets?.ColorSet?.Primary,\r\n                            color : assets?.ColorSet?.Primary\r\n                          }\"   \r\n                          class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"                    \r\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\r\n                      </button>\r\n                    </ng-container>                  \r\n                  </ng-container>\r\n                </div>\r\n                <ng-container *ngIf=\"disableUserInput\">\r\n                  <div class=\"position-relative bot-answer__disable-input\">\r\n                    <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"bot-input-disable\">\r\n                      <i>{{ select }}</i>\r\n                    </div>     \r\n                  </div>\r\n                </ng-container>  \r\n              </ng-container>\r\n              <!-- BOT ANSWER BUTTONS -->\r\n\r\n              <!--<ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormElements.length > 0\">\r\n                <div class=\"after-process-form\">\r\n                  <div class=\"after-process-subform\" *ngFor=\"let formElements of config.AfterProcessScenario.FormElements\">\r\n                    <ng-container *ngFor=\"let form of formElements\">\r\n                      <ng-container [ngSwitch]=\"form.type\">\r\n                        <div *ngSwitchCase=\"'checkbox'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" class=\"bot-checkbox\">\r\n                          <input [checked]=\"form?.checked == true ? 'true': 'false'\" [id]=\"form?.id\" [name]=\"form?.id\" [type]='form?.type' value=\"false\">\r\n                          <label [for]=\"form?.id\" class=\"bot-checkbox-label\">\r\n                            {{ translate.translate(service.locale, form.label) }}\r\n                          </label>\r\n                        </div>\r\n\r\n                        <input [class]=\"form?.class\" [id]=\"form?.id\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" *ngSwitchCase=\"'text'\" \r\n                        [pattern]=\"form?.pattern\" [placeholder]=\"form?.placeholder\" [type]=\"form?.type\" \r\n                        [value]=\"form?.value\">\r\n\r\n                        <div [class]=\"form?.class\" *ngSwitchCase=\"'div'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\">\r\n                          {{ translate.translate(service.locale, form?.content) }}\r\n                        </div>\r\n\r\n                        <textarea [class]=\"form?.class\" [id]=\"form?.id\" *ngSwitchCase=\"'textarea'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\"\r\n                        [placeholder]=\"translate.translate(service.locale, form?.placeholder)\"></textarea>\r\n                      </ng-container>\r\n                    </ng-container>\r\n                  </div>\r\n                </div>\r\n              </ng-container>-->\r\n\r\n              <custom-checkbox-calendar\r\n                [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\"\r\n                *ngIf=\"afterProcess\"\r\n                [state]=\"afterProcess\"\r\n                (calendarChange)=\"bindCalendar($event)\"\r\n                [calendarTemplate]=\"calendarTemplate\"\r\n                [columnOverride]=\"calendarKeyOverride\">\r\n              </custom-checkbox-calendar>\r\n\r\n              <ng-container *ngIf=\"inputType === 'number'\">\r\n                <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"bot-input\">\r\n                                  <!--<input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" min=\"2\" [max]=\"inputLimit\"\r\n                       [placeholder]=\"currentPlaceHolder\">-->\r\n                  <div class=\"input-number-div\">\r\n                    <div class=\"input-number-div-arrow\">\r\n                      <button (click)=\"changeNumber(1)\" class=\"arrow-up\">\r\n                        <nb-icon [icon]=\"'up_2'\" [size]=\"1.5\"></nb-icon>\r\n                      </button>\r\n\r\n                      <button (click)=\"changeNumber(-1)\" class=\"arrow-down\">\r\n                        <nb-icon [icon]=\"'down_2'\" [size]=\"1.5\"></nb-icon>\r\n                      </button>\r\n                    </div>\r\n\r\n                    {{ userInput }}\r\n                  </div>\r\n\r\n                  <div class=\"bot-container-btn\">\r\n                    <button class=\"bot-button send-btn input-number-btn\" [style]=\"{\r\n                      backgroundColor : assets?.ColorSet?.Primary,\r\n                      color : assets?.ColorSet?.Secondary\r\n                  }\" (click)=\"_send()\" [disabled]=\"!userInput\">\r\n    \r\n                      <ng-container *ngIf=\"inputType === 'number'\">\r\n                        {{ sendBtn }}\r\n                      </ng-container>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <div class=\"position-relative bot-input-wrapper\">\r\n            <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormButtons.length > 0\">\r\n              <!--<button [class]=\"btn.class\" *ngFor=\"let btn of config.AfterProcessScenario.FormButtons\" [ngStyle]=\"{'display': btn?.display ? btn.display: 'block'}\">\r\n                {{ translate.translate(service.locale, btn.label) }}\r\n              </button>-->\r\n              <button (click)=\"getCalendar()\" class=\"primary rounded validate-after-btn\" style=\"display: inline-block;\">\r\n                {{ translate.translate(service.locale, 'VALIDATE_AVAILABILITY') }}\r\n              </button>\r\n\r\n              <button class=\"rounded secondary skip-after-btn\" style=\"display: inline-block;\">\r\n                {{ translate.translate(service.locale, 'SKIP') }}\r\n              </button>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"!disableUserInput && showInput\">\r\n              <div class=\"d-flex flex-column w-100 position-realtive bot-input\" id=\"bot-input-div\">\r\n                <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValueAdd)\" class=\"w-100 h-100 d-flex flex-column position-absolute bot-input__controls\">\r\n                  <ng-container *ngIf=\"inputType === 'text'\">\r\n                    <textarea [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" [maxlength]=\"inputLimit\"\r\n                      [placeholder]=\"currentPlaceHolder\"></textarea>\r\n                  </ng-container>\r\n\r\n                  <div *ngIf=\"inputType !== 'number'\" class=\"bot-container-btn\">\r\n                    <button class=\"bot-button send-btn\" [style]=\"{\r\n                      backgroundColor : assets?.ColorSet?.Primary,\r\n                      color : assets?.ColorSet?.Secondary}\" \r\n                      (click)=\"_send()\" \r\n                      [disabled]=\"!userInput\">\r\n                  \r\n                      <ng-container *ngIf=\"inputType !== 'number'\">\r\n                        {{ sendBtnMsg }}\r\n                      </ng-container>\r\n    \r\n                      <!--<ng-container *ngIf=\"inputType === 'number'\">\r\n                        {{ sendBtn }}\r\n                      </ng-container>-->\r\n                    </button>\r\n    \r\n                    <button *ngIf=\"inputType !== 'number' && IsMobile\" class=\"bot-button-screen\">\r\n                      <nb-icon [icon]=\"'scan_11'\" [size]=\"1.5\"></nb-icon>\r\n                      {{ btnScreen }}\r\n                    </button>\r\n    \r\n                    <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-attach\">\r\n                      {{ fileNb }}\r\n    \r\n                      <ng-container *ngIf=\"fileNb <= 1\">\r\n                        {{ translate.translate(service.locale, 'ATTACHMENT') }}\r\n                      </ng-container>\r\n    \r\n                      <ng-container *ngIf=\"fileNb > 1\">\r\n                        {{ translate.translate(service.locale, 'ATTACHMENTS') }}\r\n                      </ng-container>\r\n    \r\n                      <nb-icon [icon]=\"'attachment'\" [size]=\"1.5\"></nb-icon>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>  \r\n            </ng-container>\r\n            \r\n            <!-- TODO remove it -->\r\n            <!-- <ng-container *ngIf=\"disableUserInput\">\r\n              <div class=\"bot-input-disable\">\r\n                <i>{{ select }}</i>\r\n               </div>   \r\n            </ng-container> -->\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\r\n        {{AssistantMode}}\r\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\r\n          <div class=\"bot-chat\">\r\n            <ng-container *ngFor=\"let entry of displayData\">\r\n              <ng-container *ngIf=\"entry.date\">\r\n                <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"user-input\">\r\n                  <div class=\"data\" [style]=\"{\r\n                     backgroundColor : assets?.ColorSet?.Primary,\r\n                     color : assets?.ColorSet?.Secondary\r\n                    }\" [innerHTML]=\"entry.message\">\r\n                  </div>\r\n                  <span class=\"time\">{{entry.date}}</span>\r\n                </div>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!entry.date\">\r\n                <div class=\"bot-answer\">\r\n                  <ng-container *ngIf=\"entry.text\">\r\n                    <span *ngIf=\"changed\" class=\"\" [innerHTML]=\"entry.text | safeHtml\"></span>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\r\n                   && entry.medias[0].required_actions\r\n                   && entry.medias[0].required_actions.length\">\r\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\r\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\r\n                        <button *ngIf=\"changed\" [style]=\"{\r\n                     borderColor : assets?.ColorSet?.Primary,\r\n                     color : assets?.ColorSet?.Primary\r\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\r\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\r\n                      </ng-container>\r\n                    </ng-container>\r\n                  </ng-container>\r\n\r\n                </div>\r\n              </ng-container>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"bot-input-wrapper\">\r\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\r\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\r\n                   [placeholder]=\"currentPlaceHolder\">\r\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\r\n                     backgroundColor : assets?.ColorSet?.Primary,\r\n                     color : assets?.ColorSet?.Secondary\r\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\r\n            </button>\r\n          </div>\r\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\r\n            <i>{{ select }}</i>\r\n          </div>\r\n        </div>\r\n        <div class=\"bot-logo\">\r\n          <img [src]=\"assets.FullSizeLogo\">\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </div>\r\n</div>\r\n", styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}\n"] }]
        }], ctorParameters: function () { return [{ type: TranslateService }, { type: KonversoService }, { type: i3.AnimationsService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['__NgxKonverso__']
                }] }]; }, propDecorators: { AssistantMode: [{
                type: Input
            }], assets: [{
                type: Input
            }], firstVisit: [{
                type: Input
            }], firstUsageStory: [{
                type: Input
            }], displayData: [{
                type: Input
            }], disableUserInput: [{
                type: Input
            }], LastUserInput: [{
                type: Input
            }], LastBotAnswer: [{
                type: Input
            }], PlaceHolder: [{
                type: Input
            }], IsMobile: [{
                type: Input
            }], showInput: [{
                type: Input
            }], NumberPlaceHolder: [{
                type: Input
            }], afterProcess: [{
                type: Input
            }], fileNb: [{
                type: Input
            }], readySend: [{
                type: Output
            }], send: [{
                type: Output
            }], sendBotCommand: [{
                type: Output
            }], sendEvent: [{
                type: Output
            }], sendCalendar: [{
                type: Output
            }] } });

// @ts-ignore
class KonversoComponent {
    constructor(service) {
        this.service = service;
        this._ready = new EventEmitter();
        this.ready = new EventEmitter();
        this.sended = new EventEmitter();
        this.sendCalendar = new EventEmitter();
        this.showInput = true;
        this.afterProcess = false;
        this.fileNb = 0;
        this.AssistantMode = false;
        this.disableUserInput = false;
        if (service._auth) {
            this.service.authentication.subscribe(() => {
                this.ngOnInit();
            });
        }
        this.service.emulationTrigger.subscribe((response) => {
            console.log(response);
            if (response) {
                if (!this.LastUserInput) {
                    this.LastUserInput = {
                        message: '',
                        date: '',
                        error: null
                    };
                }
                this.LastUserInput.message += ' ' + response.input;
                this.LastUserInput.date = new Date().toISOString();
                this.triggerKbotResponse(response);
            }
        });
    }
    triggerKbotResponse(response) {
        if (response && response.response) {
            if (response.response.medias && response.response.medias[0] && response.response.medias[0].required_actions &&
                response.response.medias[0].required_actions.length) {
                this.disableUserInput = true;
            }
            else {
                this.disableUserInput = false;
            }
            this.LastBotAnswer = response.response;
            this.History.push(response.response);
        }
    }
    ngOnInit() {
        console.log('user agent', navigator.userAgent, navigator.userAgent.match(/iPhone|iPad|iPod/i));
        this.isMobile = this._isMobile();
        this.assets = this.service.assets;
        this.firstVisit = this.service.firstVisit;
        this.firstUsageStory = this.service.firstUsageStory;
        this.AssistantMode = this.service.AssistantMode;
        this.PlaceHolder = this.service.PlaceHolder;
        this.NumberPlaceHolder = this.service.NumberPlaceHolder;
        this.Welcome = this.service.Welcome;
        this.sendBotCommand('exit', false).catch((err) => console.log('fail reset session'));
        this.History = [];
        if (this.service.ColorSet) {
            this.colorSet = this.service.ColorSet;
        }
        this._ready.subscribe((ready) => {
            if (ready) {
                this.firstVisit = false;
                this.service.firstVisit = false;
                this.ready.emit(ready);
            }
        });
        if (this.Welcome) {
            const customWelcome = BotMessageSample;
            customWelcome.text = this.Welcome;
            this.LastBotAnswer = customWelcome;
            this.History.push(customWelcome);
        }
    }
    handleSendCalendar($event) {
        this.sendCalendar.emit($event);
    }
    async send($event) {
        if ($event.message === 'exit') {
            this.sendBotCommand('exit', false).catch((err) => console.log('fail reset session'));
            return false;
        }
        this.sended.emit(true);
        this.LastBotAnswer.text = '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
        console.log($event);
        if (parseInt($event.message) == NaN) {
            this.History.push($event);
        }
        //console.log(parseInt($event.message));
        if (this.AssistantMode) {
            if (this.LastUserInput) {
                if (parseInt($event.message) == NaN) {
                    this.LastUserInput.message += ' ' + $event.message.replace(/\n/g, '<br>');
                    this.LastUserInput.date = $event.date;
                }
            }
            else {
                this.LastUserInput = $event;
                this.LastUserInput.message = ' ' + $event.message.replace(/\n/g, '<br>');
                this.LastUserInput.date = $event.date;
            }
        }
        else {
            this.LastUserInput = $event;
            this.LastUserInput.message = ' ' + $event.message.replace(/\n/g, '<br>');
            this.LastUserInput.date = $event.date;
        }
        console.log(this.LastUserInput);
        const index = this.History.length - 1;
        const response = await this.service.send($event.message).catch((err) => {
            console.log('We got an error ', err);
            // @ts-ignore
            this.History[index].error = true;
        });
        this.triggerKbotResponse(response);
    }
    async sendBotCommand($event, push = true) {
        this.LastBotAnswer.text = '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
        if ($event === 'yes_response' || $event === 'no_response' || $event == 'exit') {
            this.LastUserInput = null;
        }
        const response = await this.service.send($event).catch((err) => {
            console.log('We got an error ', err);
        });
        if (response.response.medias && response.response.medias[0] && response.response.medias[0].required_actions &&
            response.response.medias[0].required_actions.length) {
            this.disableUserInput = true;
        }
        else {
            this.disableUserInput = false;
        }
        if (response && response.response && push) {
            this.LastBotAnswer = response.response;
            this.History.push(response.response);
        }
        else if (response && response.response && !push) {
            this.LastUserInput = null;
            this.LastBotAnswer = response.response;
            this.History.push(response.response);
        }
        else {
            this.LastUserInput = null;
        }
    }
    _isMobile() {
        const isMobile = {
            Android: () => {
                return !!navigator.userAgent.match(/Android/i);
            },
            BlackBerry: () => {
                return !!navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: () => {
                return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: () => {
                return !!navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: () => {
                return !!navigator.userAgent.match(/IEMobile/i) || !!navigator.userAgent.match(/WPDesktop/i);
            },
            any: () => {
                return !!(isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        return isMobile.any();
    }
}
KonversoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoComponent, deps: [{ token: KonversoService }], target: i0.ɵɵFactoryTarget.Component });
KonversoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: KonversoComponent, selector: "ngx-konverso", inputs: { showInput: "showInput", afterProcess: "afterProcess", fileNb: "fileNb" }, outputs: { ready: "ready", sended: "sended", sendCalendar: "sendCalendar" }, ngImport: i0, template: "<bot-full-screen [class]=\"isMobile ? 'bot-mobile' : ''\"\r\n                 [assets]=\"assets\"\r\n                 [firstVisit]=\"firstVisit\"\r\n                 [firstUsageStory]=\"firstUsageStory\"\r\n                 (send)=\"send($event)\"\r\n                 (sendBotCommand)=\"sendBotCommand($event)\"\r\n                 [displayData]=\"History\"\r\n                 [disableUserInput]=\"disableUserInput\"\r\n                 [LastBotAnswer]=\"LastBotAnswer\"\r\n                 [LastUserInput]=\"LastUserInput\"\r\n                 [AssistantMode]=\"AssistantMode\"\r\n                 [PlaceHolder]=\"PlaceHolder\"\r\n                 [NumberPlaceHolder]=\"NumberPlaceHolder\"\r\n                 [IsMobile]=\"isMobile\"\r\n                 (readySend)=\"_ready.emit($event)\"\r\n                 [showInput]=\"showInput\"\r\n                 [afterProcess]=\"afterProcess\"\r\n                 [fileNb]=\"fileNb\"\r\n                 (sendCalendar)=\"handleSendCalendar($event)\"\r\n></bot-full-screen>\r\n\r\n\r\n", styles: ["::ng-deep ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}::ng-deep ngx-konverso .hidden-btn{transform:translateY(-100vh)!important;transition:transform .5s ease-in-out!important;animation:fadeout .5s;-moz-animation:fadeout .5s;-webkit-animation:fadeout .5s;-o-animation:fadeout .5s}@keyframes fadeout{0%{opacity:1}to{opacity:0}}@keyframes dot-keyframes{0%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}to{opacity:.4;transform:scale(1)}}::ng-deep ngx-konverso .loading-dots{text-align:center;width:100%}::ng-deep ngx-konverso .loading-dots--dot{animation:dot-keyframes 1.5s infinite ease-in-out;border-radius:10px;display:inline-block;height:10px;width:10px}::ng-deep ngx-konverso .loading-dots--dot:nth-child(2){animation-delay:.5s}::ng-deep ngx-konverso .loading-dots--dot:nth-child(3){animation-delay:1s}::ng-deep ngx-konverso bot-full-screen,::ng-deep ngx-konverso bot-first-visit{display:table;min-height:100%;height:100%;width:100%}::ng-deep ngx-konverso bot-full-screen button:focus,::ng-deep ngx-konverso bot-full-screen input:focus{outline:none!important}::ng-deep ngx-konverso bot-full-screen .bot-button>*{position:relative}::ng-deep ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}::ng-deep ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:1;border-radius:21.1416px 21.1439px 21.14px;height:40px;padding:8px 19px;position:relative;overflow:hidden;border-width:0;outline:none;margin:0 7.5px;transition:opacity .3s}::ng-deep ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}::ng-deep ngx-konverso bot-full-screen .bot-button:hover,::ng-deep ngx-konverso bot-full-screen .bot-button:focus{opacity:1}::ng-deep ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:#ecf0f14d;transform:translate(-50%,-50%)}::ng-deep ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}::ng-deep ngx-konverso bot-full-screen .bot-button-left{height:44px;display:inline-block;letter-spacing:0px;margin-right:25px}::ng-deep ngx-konverso bot-full-screen .bot-button-right{height:44px;letter-spacing:0px;display:inline-block}@keyframes movetop2{0%{opacity:0;margin-top:5%}to{opacity:1;margin-top:0%}}::ng-deep ngx-konverso bot-full-screen .bot-button-grey{min-height:44px!important;letter-spacing:0px;display:inline-block}::ng-deep ngx-konverso bot-full-screen .bot-container{width:100%;height:100%;display:table;margin:auto;background-size:contain}@media screen and (max-width: 500px){::ng-deep ngx-konverso bot-full-screen .bot-container{height:90vh}}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{align-items:center;display:flex;flex-direction:column;height:100%;width:100%;position:relative}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{width:100%;margin:0 auto auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper{display:grid;grid-template-columns:1fr;grid-template-rows:.3fr 1fr .7fr;grid-gap:0px 0px;gap:0px 0px;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer{width:820px;text-align:center;margin:auto;font-size:18px;grid-area:bot-answer}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__text{height:54px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__text>span{position:absolute;top:0;left:0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__buttons{height:44px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__buttons>button{position:relative;top:0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__disable-input{height:27px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__disable-input>div{position:relative;top:0;font-size:1rem}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer>span{overflow:hidden}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer>span>p{margin:0;overflow:hidden}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer .bot-input-disable{width:100%;max-width:600px;margin:35px auto;max-height:200px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input{font-size:15px;margin:auto;display:block;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .data{padding:10px 20px;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background:#171F26 0% 0% no-repeat padding-box;border-radius:23px 23px 0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper{text-align:center;width:100%;bottom:2%;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-input{height:204px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper textarea{height:139px;text-align:left;display:inline-block;padding:14px;width:100%;border-radius:8px;margin-bottom:15px;resize:none}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-container-btn{align-items:center;display:flex;width:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button{border-radius:8px;display:inline-block;height:40px;margin-left:0;padding:11px;width:62.5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button-screen{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;height:37px;justify-content:center;margin:0 7.5px;padding:8px;width:30%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button-attach{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;height:37px;justify-content:center;margin:0 7.5px;padding:8px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:60%!important;padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl;display:grid;grid-template-columns:1fr;grid-template-rows:.3fr 1fr .7fr;grid-gap:0px 0px;gap:0px 0px;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;height:60%;background-color:transparent;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr;grid-area:bot-answer}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background:#171F26 0% 0% no-repeat padding-box;border-radius:23px 23px 0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{bottom:2%;display:table;width:100%;margin:auto;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:14px;margin-right:15px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input .bot-button{display:inline-block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70%}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:none!important;bottom:10vh!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}@keyframes movetop{0%{margin-top:5%}to{margin-top:0%}}.fade{animation:fadeinanswer .7s ease-in .2s both!important;-moz-animation:fadeinanswer .7s ease-in .2s both!important;-webkit-animation:fadeinanswer .7s ease-in .2s both!important;-o-animation:fadeinanswer .7s ease-in .2s both!important;display:block}.fade p{animation:fadeinanswer .7s ease-in .2s both!important;-moz-animation:fadeinanswer .7s ease-in .2s both!important;-webkit-animation:fadeinanswer .7s ease-in .2s both!important;-o-animation:fadeinanswer .7s ease-in .2s both!important}@keyframes fadeinbutton{0%{opacity:0}to{opacity:1}}@keyframes fadeinanswer{0%{opacity:0}to{opacity:1}}\n"], components: [{ type: DesktopFullScreenComponent, selector: "bot-full-screen", inputs: ["AssistantMode", "assets", "firstVisit", "firstUsageStory", "displayData", "disableUserInput", "LastUserInput", "LastBotAnswer", "PlaceHolder", "IsMobile", "showInput", "NumberPlaceHolder", "afterProcess", "fileNb"], outputs: ["readySend", "send", "sendBotCommand", "sendEvent", "sendCalendar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-konverso', template: "<bot-full-screen [class]=\"isMobile ? 'bot-mobile' : ''\"\r\n                 [assets]=\"assets\"\r\n                 [firstVisit]=\"firstVisit\"\r\n                 [firstUsageStory]=\"firstUsageStory\"\r\n                 (send)=\"send($event)\"\r\n                 (sendBotCommand)=\"sendBotCommand($event)\"\r\n                 [displayData]=\"History\"\r\n                 [disableUserInput]=\"disableUserInput\"\r\n                 [LastBotAnswer]=\"LastBotAnswer\"\r\n                 [LastUserInput]=\"LastUserInput\"\r\n                 [AssistantMode]=\"AssistantMode\"\r\n                 [PlaceHolder]=\"PlaceHolder\"\r\n                 [NumberPlaceHolder]=\"NumberPlaceHolder\"\r\n                 [IsMobile]=\"isMobile\"\r\n                 (readySend)=\"_ready.emit($event)\"\r\n                 [showInput]=\"showInput\"\r\n                 [afterProcess]=\"afterProcess\"\r\n                 [fileNb]=\"fileNb\"\r\n                 (sendCalendar)=\"handleSendCalendar($event)\"\r\n></bot-full-screen>\r\n\r\n\r\n", styles: ["::ng-deep ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}::ng-deep ngx-konverso .hidden-btn{transform:translateY(-100vh)!important;transition:transform .5s ease-in-out!important;animation:fadeout .5s;-moz-animation:fadeout .5s;-webkit-animation:fadeout .5s;-o-animation:fadeout .5s}@keyframes fadeout{0%{opacity:1}to{opacity:0}}@keyframes dot-keyframes{0%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}to{opacity:.4;transform:scale(1)}}::ng-deep ngx-konverso .loading-dots{text-align:center;width:100%}::ng-deep ngx-konverso .loading-dots--dot{animation:dot-keyframes 1.5s infinite ease-in-out;border-radius:10px;display:inline-block;height:10px;width:10px}::ng-deep ngx-konverso .loading-dots--dot:nth-child(2){animation-delay:.5s}::ng-deep ngx-konverso .loading-dots--dot:nth-child(3){animation-delay:1s}::ng-deep ngx-konverso bot-full-screen,::ng-deep ngx-konverso bot-first-visit{display:table;min-height:100%;height:100%;width:100%}::ng-deep ngx-konverso bot-full-screen button:focus,::ng-deep ngx-konverso bot-full-screen input:focus{outline:none!important}::ng-deep ngx-konverso bot-full-screen .bot-button>*{position:relative}::ng-deep ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}::ng-deep ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:1;border-radius:21.1416px 21.1439px 21.14px;height:40px;padding:8px 19px;position:relative;overflow:hidden;border-width:0;outline:none;margin:0 7.5px;transition:opacity .3s}::ng-deep ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}::ng-deep ngx-konverso bot-full-screen .bot-button:hover,::ng-deep ngx-konverso bot-full-screen .bot-button:focus{opacity:1}::ng-deep ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:#ecf0f14d;transform:translate(-50%,-50%)}::ng-deep ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}::ng-deep ngx-konverso bot-full-screen .bot-button-left{height:44px;display:inline-block;letter-spacing:0px;margin-right:25px}::ng-deep ngx-konverso bot-full-screen .bot-button-right{height:44px;letter-spacing:0px;display:inline-block}@keyframes movetop2{0%{opacity:0;margin-top:5%}to{opacity:1;margin-top:0%}}::ng-deep ngx-konverso bot-full-screen .bot-button-grey{min-height:44px!important;letter-spacing:0px;display:inline-block}::ng-deep ngx-konverso bot-full-screen .bot-container{width:100%;height:100%;display:table;margin:auto;background-size:contain}@media screen and (max-width: 500px){::ng-deep ngx-konverso bot-full-screen .bot-container{height:90vh}}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{align-items:center;display:flex;flex-direction:column;height:100%;width:100%;position:relative}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{width:100%;margin:0 auto auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper{display:grid;grid-template-columns:1fr;grid-template-rows:.3fr 1fr .7fr;grid-gap:0px 0px;gap:0px 0px;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer{width:820px;text-align:center;margin:auto;font-size:18px;grid-area:bot-answer}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__text{height:54px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__text>span{position:absolute;top:0;left:0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__buttons{height:44px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__buttons>button{position:relative;top:0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__disable-input{height:27px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer__disable-input>div{position:relative;top:0;font-size:1rem}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer>span{overflow:hidden}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer>span>p{margin:0;overflow:hidden}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer .bot-input-disable{width:100%;max-width:600px;margin:35px auto;max-height:200px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input{font-size:15px;margin:auto;display:block;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .data{padding:10px 20px;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background:#171F26 0% 0% no-repeat padding-box;border-radius:23px 23px 0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper{text-align:center;width:100%;bottom:2%;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-input{height:204px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper textarea{height:139px;text-align:left;display:inline-block;padding:14px;width:100%;border-radius:8px;margin-bottom:15px;resize:none}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-container-btn{align-items:center;display:flex;width:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button{border-radius:8px;display:inline-block;height:40px;margin-left:0;padding:11px;width:62.5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button-screen{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;height:37px;justify-content:center;margin:0 7.5px;padding:8px;width:30%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper .bot-button-attach{align-items:center;border:none;border-radius:8px;cursor:pointer;display:inline-flex;height:37px;justify-content:center;margin:0 7.5px;padding:8px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:60%!important;padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl;display:grid;grid-template-columns:1fr;grid-template-rows:.3fr 1fr .7fr;grid-gap:0px 0px;gap:0px 0px;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;height:60%;background-color:transparent;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr;grid-area:bot-answer}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background:#171F26 0% 0% no-repeat padding-box;border-radius:23px 23px 0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{bottom:2%;display:table;width:100%;margin:auto;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:14px;margin-right:15px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input .bot-button{display:inline-block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70%}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:none!important;bottom:10vh!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}@keyframes movetop{0%{margin-top:5%}to{margin-top:0%}}.fade{animation:fadeinanswer .7s ease-in .2s both!important;-moz-animation:fadeinanswer .7s ease-in .2s both!important;-webkit-animation:fadeinanswer .7s ease-in .2s both!important;-o-animation:fadeinanswer .7s ease-in .2s both!important;display:block}.fade p{animation:fadeinanswer .7s ease-in .2s both!important;-moz-animation:fadeinanswer .7s ease-in .2s both!important;-webkit-animation:fadeinanswer .7s ease-in .2s both!important;-o-animation:fadeinanswer .7s ease-in .2s both!important}@keyframes fadeinbutton{0%{opacity:0}to{opacity:1}}@keyframes fadeinanswer{0%{opacity:0}to{opacity:1}}\n"] }]
        }], ctorParameters: function () { return [{ type: KonversoService }]; }, propDecorators: { ready: [{
                type: Output
            }], sended: [{
                type: Output
            }], sendCalendar: [{
                type: Output
            }], showInput: [{
                type: Input
            }], afterProcess: [{
                type: Input
            }], fileNb: [{
                type: Input
            }] } });

// @ts-ignore
class KonversoModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('KonversoModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: KonversoModule,
            providers: [
                { provide: '__NgxKonverso__', useValue: config },
                KonversoService
            ]
        };
    }
}
KonversoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, deps: [{ token: KonversoModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
KonversoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe, CustomCheckboxCalendarComponent], imports: [FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule, i6.NowboardIconModule], exports: [KonversoComponent, NowboardIconModule] });
KonversoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, providers: [KonversoService, NowboardIconService], imports: [[
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule,
            CommonModule,
            NowboardIconModule.forRoot({
                disabled_color: "#5E7290",
                primary: "#001B66"
            }),
        ], NowboardIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: KonversoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe, CustomCheckboxCalendarComponent],
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        CommonModule,
                        NowboardIconModule.forRoot({
                            disabled_color: "#5E7290",
                            primary: "#001B66"
                        }),
                    ],
                    providers: [KonversoService, NowboardIconService],
                    exports: [KonversoComponent, NowboardIconModule]
                }]
        }], ctorParameters: function () { return [{ type: KonversoModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });

/*
 * Public API Surface of konverso
 */

/**
 * Generated bundle index. Do not edit.
 */

export { KonversoComponent, KonversoModule, KonversoService };
//# sourceMappingURL=konverso.mjs.map
