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
export class BARBE {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlGdWNraW5nTXVzdGFjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL015RnVja2luZ011c3RhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7NkRBTTZEO0FBQzdELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0FBQ2pELE1BQU0sZUFBZSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7SUFDcEMsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLGdCQUFnQixDQUFDO0FBQzVELENBQUMsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7SUFDL0IsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFRLEVBQUUsRUFBRTtJQUN6QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQzlCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUNsQyxPQUFPLEdBQUcsSUFBSSxJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQztBQUVGLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxTQUFjLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDOUQsT0FBTyxDQUNI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QUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRU0sS0FBSyxDQUFDLFFBQWEsRUFBRSxJQUFTO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBYSxFQUFFLElBQVMsRUFBRSxRQUFjLEVBQUUsTUFBWTtRQUNoRSxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM5QixNQUFNLElBQUksU0FBUyxDQUFDLGtEQUFrRDtnQkFDbEUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRywyQkFBMkI7Z0JBQ3pELHdEQUF3RCxDQUFDLENBQUM7U0FDakU7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFBQSxDQUFDO0lBR0ssVUFBVTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7QUFsQ2EsVUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3BCLFlBQU0sR0FBUSxVQUFVLENBQUM7QUFDekIsYUFBTyxHQUFRLE9BQU8sQ0FBQztBQUN2QixhQUFPLEdBQVEsT0FBTyxDQUFDO0FBQ3ZCLFlBQU0sR0FBUSxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICoqICBAcHJvamVjdFxyXG4gKiogIEBmaWxlXHJcbiAqKiAgQGF1dGhvciBCcmljZSBEYXVwaWFyZCA8YnJpY2UuZGF1cGlhcmRAbm93YnJhaW5zLmNvbT5cclxuICoqICBARGF0ZSAyOS8wMy8yMDIyXHJcbiAqKiAgQERlc2NyaXB0aW9uXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuY29uc3Qgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5jb25zdCBpc0FycmF5UG9seWZpbGwgPSAob2JqZWN0OiBhbnkpID0+IHtcclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XHJcbn07XHJcblxyXG5jb25zdCBpc0Z1bmN0aW9uID0gKG9iamVjdDogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ2Z1bmN0aW9uJztcclxufTtcclxuXHJcbmNvbnN0IHR5cGVTdHIgPSAob2JqOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBpc0FycmF5KG9iaikgPyAnYXJyYXknIDogdHlwZW9mIG9iajtcclxufTtcclxuXHJcbmNvbnN0IGVzY2FwZVJlZ0V4cCA9IChzdHI6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xyXG59O1xyXG5cclxuY29uc3QgaGFzUHJvcGVydHkgPSAob2JqLCBwcm9wTmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIChwcm9wTmFtZSBpbiBvYmopO1xyXG59O1xyXG5cclxuY29uc3QgcHJpbWl0aXZlSGFzT3duUHJvcGVydHkgPSAocHJpbWl0aXZlOiBhbnksIHByb3BOYW1lOiBhbnkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgcHJpbWl0aXZlICE9IG51bGxcclxuICAgICAgICAmJiB0eXBlb2YgcHJpbWl0aXZlICE9PSAnb2JqZWN0J1xyXG4gICAgICAgICYmIHByaW1pdGl2ZS5oYXNPd25Qcm9wZXJ0eVxyXG4gICAgICAgICYmIHByaW1pdGl2ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSlcclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBpc0FycmF5UG9seWZpbGw7XHJcblxyXG5jb25zdCByZWdFeHBUZXN0ID0gUmVnRXhwLnByb3RvdHlwZS50ZXN0O1xyXG5cclxuY29uc3QgdGVzdFJlZ0V4cCA9IChyZWdFeDogUmVnRXhwLCBzdHI6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ0V4cFRlc3QuY2FsbChyZWdFeCwgc3RyKTtcclxufTtcclxuXHJcbmNvbnN0IG5vblNwYWNlUmUgPSAvXFxTLztcclxuXHJcbmNvbnN0IGlzV2hpdGVzcGFjZSA9IChzdHI6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuICF0ZXN0UmVnRXhwKG5vblNwYWNlUmUsIHN0cik7XHJcbn07XHJcblxyXG5jb25zdCBlbnRpdHlNYXAgPSB7XHJcbiAgICAnJic6ICcmYW1wOycsXHJcbiAgICAnPCc6ICcmbHQ7JyxcclxuICAgICc+JzogJyZndDsnLFxyXG4gICAgJ1wiJzogJyZxdW90OycsXHJcbiAgICAnXFwnJzogJyYjMzk7JyxcclxuICAgICcvJzogJyYjeDJGOycsXHJcbiAgICAnYCc6ICcmI3g2MDsnLFxyXG4gICAgJz0nOiAnJiN4M0Q7J1xyXG59O1xyXG5cclxuY29uc3QgZXNjYXBlSHRtbCA9IChzdHI6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIFN0cmluZyhzdHIpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgKHM6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBlbnRpdHlNYXBbc107XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IHdoaXRlUmUgPSAvXFxzKi87XHJcbmNvbnN0IHNwYWNlUmUgPSAvXFxzKy87XHJcbmNvbnN0IGVxdWFsc1JlID0gL1xccyo9LztcclxuY29uc3QgY3VybHlSZSA9IC9cXHMqXFx9LztcclxuY29uc3QgdGFnUmUgPSAvI3xcXF58XFwvfD58XFx7fCZ8PXwhLztcclxuXHJcbmNvbnN0IHNxdWFzaFRva2VucyA9ICh0b2tlbnM6IGFueSkgPT4ge1xyXG4gICAgY29uc3Qgc3F1YXNoZWRUb2tlbnMgPSBbXTtcclxuXHJcbiAgICBsZXQgdG9rZW4sIGxhc3RUb2tlbjtcclxuICAgIGZvciAobGV0IGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcclxuICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGlmICh0b2tlblswXSA9PT0gJ3RleHQnICYmIGxhc3RUb2tlbiAmJiBsYXN0VG9rZW5bMF0gPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgbGFzdFRva2VuWzFdICs9IHRva2VuWzFdO1xyXG4gICAgICAgICAgICAgICAgbGFzdFRva2VuWzNdID0gdG9rZW5bM107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGxhc3RUb2tlbiA9IHRva2VuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzcXVhc2hlZFRva2VucztcclxufTtcclxuXHJcbmNvbnN0IG5lc3RUb2tlbnMgPSAodG9rZW5zOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IG5lc3RlZFRva2VucyA9IFtdO1xyXG4gICAgbGV0IGNvbGxlY3RvciA9IG5lc3RlZFRva2VucztcclxuICAgIGNvbnN0IHNlY3Rpb25zID0gW107XHJcblxyXG4gICAgbGV0IHRva2VuLCBzZWN0aW9uO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xyXG4gICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICBjYXNlICdeJzpcclxuICAgICAgICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25zLnB1c2godG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgY29sbGVjdG9yID0gdG9rZW5bNF0gPSBbXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25bNV0gPSB0b2tlblsyXTtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3RvciA9IHNlY3Rpb25zLmxlbmd0aCA+IDAgPyBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXVs0XSA6IG5lc3RlZFRva2VucztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29sbGVjdG9yLnB1c2godG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmVzdGVkVG9rZW5zO1xyXG59O1xyXG5cclxuY29uc3QgcGFyc2VUZW1wbGF0ZSA9ICh0ZW1wbGF0ZTogYW55LCB0YWdzOiBhbnkpID0+IHtcclxuICAgIGlmICghdGVtcGxhdGUpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBsZXQgbGluZUhhc05vblNwYWNlID0gZmFsc2U7XHJcbiAgICBsZXQgc2VjdGlvbnMgPSBbXTsgICAgIC8vIFN0YWNrIHRvIGhvbGQgc2VjdGlvbiB0b2tlbnNcclxuICAgIGxldCB0b2tlbnMgPSBbXTsgICAgICAgLy8gQnVmZmVyIHRvIGhvbGQgdGhlIHRva2Vuc1xyXG4gICAgbGV0IHNwYWNlcyA9IFtdOyAgICAgICAvLyBJbmRpY2VzIG9mIHdoaXRlc3BhY2UgdG9rZW5zIG9uIHRoZSBjdXJyZW50IGxpbmVcclxuICAgIGxldCBoYXNUYWcgPSBmYWxzZTsgICAgLy8gSXMgdGhlcmUgYSB7e3RhZ319IG9uIHRoZSBjdXJyZW50IGxpbmU/XHJcbiAgICBsZXQgbm9uU3BhY2UgPSBmYWxzZTsgIC8vIElzIHRoZXJlIGEgbm9uLXNwYWNlIGNoYXIgb24gdGhlIGN1cnJlbnQgbGluZT9cclxuICAgIGxldCBpbmRlbnRhdGlvbiA9ICcnOyAgLy8gVHJhY2tzIGluZGVudGF0aW9uIGZvciB0YWdzIHRoYXQgdXNlIGl0XHJcbiAgICBsZXQgdGFnSW5kZXggPSAwOyAgICAgIC8vIFN0b3JlcyBhIGNvdW50IG9mIG51bWJlciBvZiB0YWdzIGVuY291bnRlcmVkIG9uIGEgbGluZVxyXG5cclxuICAgIC8vIFN0cmlwcyBhbGwgd2hpdGVzcGFjZSB0b2tlbnMgYXJyYXkgZm9yIHRoZSBjdXJyZW50IGxpbmVcclxuICAgIC8vIGlmIHRoZXJlIHdhcyBhIHt7I3RhZ319IG9uIGl0IGFuZCBvdGhlcndpc2Ugb25seSBzcGFjZS5cclxuICAgIGNvbnN0IHN0cmlwU3BhY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGhhc1RhZyAmJiAhbm9uU3BhY2UpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHNwYWNlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwYWNlcyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFzVGFnID0gZmFsc2U7XHJcbiAgICAgICAgbm9uU3BhY2UgPSBmYWxzZTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IGNvbXBpbGVUYWdzID0gKHRhZ3NUb0NvbXBpbGUpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHRhZ3NUb0NvbXBpbGUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIHRhZ3NUb0NvbXBpbGUgPSB0YWdzVG9Db21waWxlLnNwbGl0KHNwYWNlUmUsIDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpIHx8IHRhZ3NUb0NvbXBpbGUubGVuZ3RoICE9PSAyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0YWdzOiAnICsgdGFnc1RvQ29tcGlsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvcGVuaW5nVGFnUmUgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKSArICdcXFxccyonKTtcclxuICAgICAgICBjb25zdCBjbG9zaW5nVGFnUmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMV0pKTtcclxuICAgICAgICBjb25zdCBjbG9zaW5nQ3VybHlSZSA9IG5ldyBSZWdFeHAoJ1xcXFxzKicgKyBlc2NhcGVSZWdFeHAoJ30nICsgdGFnc1RvQ29tcGlsZVsxXSkpO1xyXG4gICAgICAgIHJldHVybiB7b3BlbmluZ1RhZ1JlLCBjbG9zaW5nVGFnUmUsIGNsb3NpbmdDdXJseVJlfTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICBsZXQge29wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZX0gPSBjb21waWxlVGFncyh0YWdzIHx8IEJBUkJFLnRhZ3MpO1xyXG4gICAgY29uc3Qgc2Nhbm5lciA9IG5ldyBTY2FubmVyKHRlbXBsYXRlKTtcclxuXHJcbiAgICBsZXQgc3RhcnQsIHR5cGUsIHZhbHVlLCBjaHIsIHRva2VuLCBvcGVuU2VjdGlvbjtcclxuICAgIHdoaWxlICghc2Nhbm5lci5lb3MoKSkge1xyXG4gICAgICAgIHN0YXJ0ID0gc2Nhbm5lci5wb3M7XHJcblxyXG4gICAgICAgIC8vIE1hdGNoIGFueSB0ZXh0IGJldHdlZW4gdGFncy5cclxuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCB2YWx1ZUxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBjaHIgPSB2YWx1ZS5jaGFyQXQoaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjaHIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VzLnB1c2godG9rZW5zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50YXRpb24gKz0gY2hyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBub25TcGFjZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhhc05vblNwYWNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRlbnRhdGlvbiArPSAnICc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWyd0ZXh0JywgY2hyLCBzdGFydCwgc3RhcnQgKyAxXSk7XHJcbiAgICAgICAgICAgICAgICBzdGFydCArPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciB3aGl0ZXNwYWNlIG9uIHRoZSBjdXJyZW50IGxpbmUuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hyID09PSAnXFxuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmlwU3BhY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRlbnRhdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lSGFzTm9uU3BhY2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTWF0Y2ggdGhlIG9wZW5pbmcgdGFnLlxyXG4gICAgICAgIGlmICghc2Nhbm5lci5zY2FuKG9wZW5pbmdUYWdSZSkpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoYXNUYWcgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIHRhZyB0eXBlLlxyXG4gICAgICAgIHR5cGUgPSBzY2FubmVyLnNjYW4odGFnUmUpIHx8ICduYW1lJztcclxuICAgICAgICBzY2FubmVyLnNjYW4od2hpdGVSZSk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgdGFnIHZhbHVlLlxyXG4gICAgICAgIGlmICh0eXBlID09PSAnPScpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBzY2FubmVyLnNjYW5VbnRpbChlcXVhbHNSZSk7XHJcbiAgICAgICAgICAgIHNjYW5uZXIuc2NhbihlcXVhbHNSZSk7XHJcbiAgICAgICAgICAgIHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAneycpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nQ3VybHlSZSk7XHJcbiAgICAgICAgICAgIHNjYW5uZXIuc2NhbihjdXJseVJlKTtcclxuICAgICAgICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcclxuICAgICAgICAgICAgdHlwZSA9ICcmJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBNYXRjaCB0aGUgY2xvc2luZyB0YWcuXHJcbiAgICAgICAgaWYgKCFzY2FubmVyLnNjYW4oY2xvc2luZ1RhZ1JlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHRhZyBhdCAnICsgc2Nhbm5lci5wb3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICc+Jykge1xyXG4gICAgICAgICAgICB0b2tlbiA9IFt0eXBlLCB2YWx1ZSwgc3RhcnQsIHNjYW5uZXIucG9zLCBpbmRlbnRhdGlvbiwgdGFnSW5kZXgsIGxpbmVIYXNOb25TcGFjZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBbdHlwZSwgdmFsdWUsIHN0YXJ0LCBzY2FubmVyLnBvc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhZ0luZGV4Kys7XHJcbiAgICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gJyMnIHx8IHR5cGUgPT09ICdeJykge1xyXG4gICAgICAgICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICcvJykge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBzZWN0aW9uIG5lc3RpbmcuXHJcbiAgICAgICAgICAgIG9wZW5TZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9wZW5TZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vub3BlbmVkIHNlY3Rpb24gXCInICsgdmFsdWUgKyAnXCIgYXQgJyArIHN0YXJ0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG9wZW5TZWN0aW9uWzFdICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJyArIG9wZW5TZWN0aW9uWzFdICsgJ1wiIGF0ICcgKyBzdGFydCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduYW1lJyB8fCB0eXBlID09PSAneycgfHwgdHlwZSA9PT0gJyYnKSB7XHJcbiAgICAgICAgICAgIG5vblNwYWNlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc9Jykge1xyXG4gICAgICAgICAgICAvLyBTZXQgdGhlIHRhZ3MgZm9yIHRoZSBuZXh0IHRpbWUgYXJvdW5kLlxyXG4gICAgICAgICAgICBjb21waWxlVGFncyh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0cmlwU3BhY2UoKTtcclxuXHJcbiAgICAvLyBNYWtlIHN1cmUgdGhlcmUgYXJlIG5vIG9wZW4gc2VjdGlvbnMgd2hlbiB3ZSdyZSBkb25lLlxyXG4gICAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcclxuXHJcbiAgICBpZiAob3BlblNlY3Rpb24pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInICsgb3BlblNlY3Rpb25bMV0gKyAnXCIgYXQgJyArIHNjYW5uZXIucG9zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmVzdFRva2VucyhzcXVhc2hUb2tlbnModG9rZW5zKSk7XHJcbn07XHJcblxyXG5cclxuY2xhc3MgU2Nhbm5lciB7XHJcbiAgICBwdWJsaWMgcG9zOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdHJpbmc6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGFpbDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdHJpbmcgPSBzdHI7XHJcbiAgICAgICAgdGhpcy50YWlsID0gc3RyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFpbCA9PT0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjYW4ocmVnRXhwOiBSZWdFeHApIHtcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHRoaXMudGFpbC5tYXRjaChyZWdFeHApO1xyXG5cclxuICAgICAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHN0cjogc3RyaW5nID0gbWF0Y2hbMF07XHJcblxyXG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoc3RyLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5wb3MgKz0gc3RyLmxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NhblVudGlsKHJlZ0V4cDogUmVnRXhwKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRhaWwuc2VhcmNoKHJlZ0V4cCk7XHJcbiAgICAgICAgbGV0IG1hdGNoO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgLTE6XHJcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHRoaXMudGFpbDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFpbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIG1hdGNoID0gJyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIG1hdGNoID0gdGhpcy50YWlsLnN1YnN0cmluZygwLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwuc3Vic3RyaW5nKGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucG9zICs9IG1hdGNoLmxlbmd0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBDb250ZXh0IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogYW55O1xyXG4gICAgcHJpdmF0ZSBjYWNoZTogYW55O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IGFueTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IodmlldzogYW55LCBwYXJlbnRDb250ZXh0OiBhbnkpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG4gICAgICAgIHRoaXMuY2FjaGUgPSB7Jy4nOiB0aGlzLnZpZXd9O1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50Q29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoKHZpZXc6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29udGV4dCh2aWV3LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb29rdXAobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmNhY2hlO1xyXG5cclxuICAgICAgICBsZXQgdmFsdWU7XHJcbiAgICAgICAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gY2FjaGVbbmFtZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRleHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgICAgIGxldCBpbnRlcm1lZGlhdGVWYWx1ZTogYW55ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBuYW1lczogYW55ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBpbmRleDogYW55ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBsb29rdXBIaXQ6IGFueSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKGNvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lLmluZGV4T2YoJy4nKSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IGNvbnRleHQudmlldztcclxuICAgICAgICAgICAgICAgICAgICBuYW1lcyA9IG5hbWUuc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGludGVybWVkaWF0ZVZhbHVlICE9IG51bGwgJiYgaW5kZXggPCBuYW1lcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAobmFtZXMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvb2t1cEhpdCA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNQcm9wZXJ0eShpbnRlcm1lZGlhdGVWYWx1ZSwgbmFtZXNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHByaW1pdGl2ZUhhc093blByb3BlcnR5KGludGVybWVkaWF0ZVZhbHVlLCBuYW1lc1tpbmRleF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IGludGVybWVkaWF0ZVZhbHVlW25hbWVzW2luZGV4KytdXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZhbHVlID0gY29udGV4dC52aWV3W25hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvb2t1cEhpdCA9IGhhc1Byb3BlcnR5KGNvbnRleHQudmlldywgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwSGl0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpbnRlcm1lZGlhdGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0LnBhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWNoZVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWxsKHRoaXMudmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2FjaGUge1xyXG4gICAgcHJpdmF0ZSBfY2FjaGUgPSB7fTtcclxuXHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fY2FjaGVba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5fY2FjaGUgPSB7fTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgV3JpdGVyIHtcclxuICAgIHB1YmxpYyB0ZW1wbGF0ZUNhY2hlID0gbmV3IENhY2hlKCk7XHJcblxyXG4gICAgcHVibGljIGNsZWFyQ2FjaGUoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnRlbXBsYXRlQ2FjaGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFyc2UodGVtcGxhdGU6IGFueSwgdGFnczogYW55KSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLnRlbXBsYXRlQ2FjaGU7XHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSB0ZW1wbGF0ZSArICc6JyArICh0YWdzIHx8IEJBUkJFLnRhZ3MpLmpvaW4oJzonKTtcclxuICAgICAgICBjb25zdCBpc0NhY2hlRW5hYmxlZCA9IHR5cGVvZiBjYWNoZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbiAgICAgICAgbGV0IHRva2VucyA9IGlzQ2FjaGVFbmFibGVkID8gY2FjaGUuZ2V0KGNhY2hlS2V5KSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgaWYgKHRva2VucyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRva2VucyA9IHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsIHRhZ3MpO1xyXG4gICAgICAgICAgICBpc0NhY2hlRW5hYmxlZCAmJiBjYWNoZS5zZXQoY2FjaGVLZXksIHRva2Vucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcih0ZW1wbGF0ZTogYW55LCB2aWV3OiBhbnksIHBhcnRpYWxzOiBhbnksIGNvbmZpZzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgdGFncyA9IHRoaXMuZ2V0Q29uZmlnVGFncyhjb25maWcpO1xyXG4gICAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMucGFyc2UodGVtcGxhdGUsIHRhZ3MpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSAodmlldyBpbnN0YW5jZW9mIENvbnRleHQpID8gdmlldyA6IG5ldyBDb250ZXh0KHZpZXcsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VucywgY29udGV4dCwgcGFydGlhbHMsIHRlbXBsYXRlLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldENvbmZpZ1RhZ3MoY29uZmlnOiBhbnkpIHtcclxuICAgICAgICBpZiAoaXNBcnJheShjb25maWcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy50YWdzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJhd1ZhbHVlKHRva2VuOiBhbnlbXSkge1xyXG4gICAgICAgIHJldHVybiB0b2tlblsxXTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJUb2tlbnModG9rZW5zOiBhbnksIGNvbnRleHQ6IGFueSwgcGFydGlhbHM6IGFueSwgb3JpZ2luYWxUZW1wbGF0ZTogYW55LCBjb25maWc6IGFueSkge1xyXG4gICAgICAgIGxldCBidWZmZXIgPSAnJztcclxuICAgICAgICBsZXQgdG9rZW47XHJcbiAgICAgICAgbGV0IHN5bWJvbDtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XHJcbiAgICAgICAgICAgIHN5bWJvbCA9IHRva2VuWzBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN5bWJvbCA9PT0gJyMnKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVuZGVyU2VjdGlvbih0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ltYm9sID09PSAnXicpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZW5kZXJJbnZlcnRlZCh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ltYm9sID09PSAnPicpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZW5kZXJQYXJ0aWFsKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgY29uZmlnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzeW1ib2wgPT09ICcmJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnVuZXNjYXBlZFZhbHVlKHRva2VuLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzeW1ib2wgPT09ICduYW1lJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmVzY2FwZWRWYWx1ZSh0b2tlbiwgY29udGV4dCwgY29uZmlnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzeW1ib2wgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJhd1ZhbHVlKHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciArPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyU2VjdGlvbih0b2tlbjogYW55W10sIGNvbnRleHQ6IGFueSwgcGFydGlhbHM6IGFueSwgb3JpZ2luYWxUZW1wbGF0ZTogYW55LCBjb25maWc6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBidWZmZXIgPSAnJztcclxuICAgICAgICBsZXQgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1YlJlbmRlciA9ICh0ZW1wbGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsIGNvbnRleHQsIHBhcnRpYWxzLCBjb25maWcpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaiA8IHZhbHVlTGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlW2pdKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbmFsVGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zIHdpdGhvdXQgdGhlIG9yaWdpbmFsIHRlbXBsYXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIHBvcnRpb24gb2YgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRoYXQgdGhlIHNlY3Rpb24gY29udGFpbnMuXHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FsbChjb250ZXh0LnZpZXcsIG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sIHRva2VuWzVdKSwgc3ViUmVuZGVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnVmZmVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlckludmVydGVkKHRva2VuOiBhbnlbXSwgY29udGV4dDogYW55LCBwYXJ0aWFsczogYW55LCBvcmlnaW5hbFRlbXBsYXRlOiBhbnksIGNvbmZpZzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XHJcblxyXG4gICAgICAgIGlmICghdmFsdWUgfHwgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGluZGVudFBhcnRpYWwocGFydGlhbDogYW55LCBpbmRlbnRhdGlvbjogYW55LCBsaW5lSGFzTm9uU3BhY2U6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSW5kZW50YXRpb24gPSBpbmRlbnRhdGlvbi5yZXBsYWNlKC9bXiBcXHRdL2csICcnKTtcclxuICAgICAgICBjb25zdCBwYXJ0aWFsQnlObCA9IHBhcnRpYWwuc3BsaXQoJ1xcbicpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGlhbEJ5TmwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHBhcnRpYWxCeU5sW2ldLmxlbmd0aCAmJiAoaSA+IDAgfHwgIWxpbmVIYXNOb25TcGFjZSkpIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpYWxCeU5sW2ldID0gZmlsdGVyZWRJbmRlbnRhdGlvbiArIHBhcnRpYWxCeU5sW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJ0aWFsQnlObC5qb2luKCdcXG4nKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyUGFydGlhbCh0b2tlbjogYW55W10sIGNvbnRleHQ6IGFueSwgcGFydGlhbHM6IGFueSwgY29uZmlnOiBhbnkpIHtcclxuICAgICAgICBpZiAoIXBhcnRpYWxzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdGFncyA9IHRoaXMuZ2V0Q29uZmlnVGFncyhjb25maWcpO1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGlzRnVuY3Rpb24ocGFydGlhbHMpID8gcGFydGlhbHModG9rZW5bMV0pIDogcGFydGlhbHNbdG9rZW5bMV1dO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zdCBsaW5lSGFzTm9uU3BhY2UgPSB0b2tlbls2XTtcclxuICAgICAgICAgICAgY29uc3QgdGFnSW5kZXggPSB0b2tlbls1XTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZW50YXRpb24gPSB0b2tlbls0XTtcclxuICAgICAgICAgICAgbGV0IGluZGVudGVkVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRhZ0luZGV4ID09PSAwICYmIGluZGVudGF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRlbnRlZFZhbHVlID0gdGhpcy5pbmRlbnRQYXJ0aWFsKHZhbHVlLCBpbmRlbnRhdGlvbiwgbGluZUhhc05vblNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBhcnNlKGluZGVudGVkVmFsdWUsIHRhZ3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLCBjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50ZWRWYWx1ZSwgY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1bmVzY2FwZWRWYWx1ZSh0b2tlbjogYW55W10sIGNvbnRleHQ6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q29uZmlnRXNjYXBlKGNvbmZpZzogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiAhaXNBcnJheShjb25maWcpID8gY29uZmlnLmVzY2FwZSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVzY2FwZWRWYWx1ZSh0b2tlbjogYW55W10sIGNvbnRleHQ6IGFueSwgY29uZmlnOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBlc2NhcGUgPSB0aGlzLmdldENvbmZpZ0VzY2FwZShjb25maWcpIHx8IEJBUkJFLmVzY2FwZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgZXNjYXBlID09PSBCQVJCRS5lc2NhcGUpID8gU3RyaW5nKHZhbHVlKSA6IGVzY2FwZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJBUkJFIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgdGFncyA9IFsne3snLCAnfX0nXTtcclxuICAgIHB1YmxpYyBzdGF0aWMgZXNjYXBlOiBhbnkgPSBlc2NhcGVIdG1sO1xyXG4gICAgcHVibGljIHN0YXRpYyBTY2FubmVyOiBhbnkgPSBTY2FubmVyO1xyXG4gICAgcHVibGljIHN0YXRpYyBDb250ZXh0OiBhbnkgPSBDb250ZXh0O1xyXG4gICAgcHVibGljIHN0YXRpYyBXcml0ZXI6IGFueSA9IFdyaXRlcjtcclxuICAgIHB1YmxpYyBuYW1lID0gJ01ZIEYqKktJTkcgTVVTVEFDSEUgTElCUkFSWSBGT1IgQU5HVUxBUic7XHJcbiAgICBwdWJsaWMgdmVyc2lvbiA9ICdFQ0xBVEVSJztcclxuICAgIHByaXZhdGUgX1dyaXRlcjogYW55ID0gbmV3IFdyaXRlcigpO1xyXG5cclxuICAgIGdldCB0ZW1wbGF0ZUNhY2hlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Xcml0ZXIudGVtcGxhdGVDYWNoZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGVtcGxhdGVDYWNoZShjYWNoZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fV3JpdGVyLnRlbXBsYXRlQ2FjaGUgPSBjYWNoZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFyc2UodGVtcGxhdGU6IGFueSwgdGFnczogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1dyaXRlci5wYXJzZSh0ZW1wbGF0ZSwgdGFncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcih0ZW1wbGF0ZTogYW55LCB2aWV3OiBhbnksIHBhcnRpYWxzPzogYW55LCBjb25maWc/OiBhbnkpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHRlbXBsYXRlISBUZW1wbGF0ZSBzaG91bGQgYmUgYSBcInN0cmluZ1wiICcgK1xyXG4gICAgICAgICAgICAgICAgJ2J1dCBcIicgKyB0eXBlU3RyKHRlbXBsYXRlKSArICdcIiB3YXMgZ2l2ZW4gYXMgdGhlIGZpcnN0ICcgK1xyXG4gICAgICAgICAgICAgICAgJ2FyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1dyaXRlci5yZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzLCBjb25maWcpO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcHVibGljIGNsZWFyQ2FjaGUoKSB7XHJcbiAgICAgICAgdGhpcy5fV3JpdGVyLmNsZWFyQ2FjaGUoKTtcclxuICAgIH1cclxufVxyXG4iXX0=