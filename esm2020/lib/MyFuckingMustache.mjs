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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlGdWNraW5nTXVzdGFjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL015RnVja2luZ011c3RhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7NkRBTTZEO0FBQzdELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0FBQ2pELE1BQU0sZUFBZSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7SUFDcEMsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLGdCQUFnQixDQUFDO0FBQzVELENBQUMsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7SUFDL0IsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFRLEVBQUUsRUFBRTtJQUN6QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQzlCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUNsQyxPQUFPLEdBQUcsSUFBSSxJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQztBQUVGLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxTQUFjLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDOUQsT0FBTyxDQUNI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QUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxhQUFhLENBQUMsS0FBVTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUVNLEtBQUssQ0FBQyxRQUFhLEVBQUUsSUFBUztRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQWEsRUFBRSxJQUFTLEVBQUUsUUFBYyxFQUFFLE1BQVk7UUFDaEUsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDOUIsTUFBTSxJQUFJLFNBQVMsQ0FBQyxrREFBa0Q7Z0JBQ2xFLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsMkJBQTJCO2dCQUN6RCx3REFBd0QsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQUEsQ0FBQztJQUdLLFVBQVU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7O0FBbENhLFVBQUksR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwQixZQUFNLEdBQVEsVUFBVSxDQUFDO0FBQ3pCLGFBQU8sR0FBUSxPQUFPLENBQUM7QUFDdkIsYUFBTyxHQUFRLE9BQU8sQ0FBQztBQUN2QixZQUFNLEdBQVEsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqKiAgQHByb2plY3RcclxuICoqICBAZmlsZVxyXG4gKiogIEBhdXRob3IgQnJpY2UgRGF1cGlhcmQgPGJyaWNlLmRhdXBpYXJkQG5vd2JyYWlucy5jb20+XHJcbiAqKiAgQERhdGUgMjkvMDMvMjAyMlxyXG4gKiogIEBEZXNjcmlwdGlvblxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IG9iamVjdFRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcclxuY29uc3QgaXNBcnJheVBvbHlmaWxsID0gKG9iamVjdDogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBBcnJheV0nO1xyXG59O1xyXG5cclxuY29uc3QgaXNGdW5jdGlvbiA9IChvYmplY3Q6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdmdW5jdGlvbic7XHJcbn07XHJcblxyXG5jb25zdCB0eXBlU3RyID0gKG9iajogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gaXNBcnJheShvYmopID8gJ2FycmF5JyA6IHR5cGVvZiBvYmo7XHJcbn07XHJcblxyXG5jb25zdCBlc2NhcGVSZWdFeHAgPSAoc3RyOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcclxufTtcclxuXHJcbmNvbnN0IGhhc1Byb3BlcnR5ID0gKG9iaiwgcHJvcE5hbWUpID0+IHtcclxuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAocHJvcE5hbWUgaW4gb2JqKTtcclxufTtcclxuXHJcbmNvbnN0IHByaW1pdGl2ZUhhc093blByb3BlcnR5ID0gKHByaW1pdGl2ZTogYW55LCBwcm9wTmFtZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIHByaW1pdGl2ZSAhPSBudWxsXHJcbiAgICAgICAgJiYgdHlwZW9mIHByaW1pdGl2ZSAhPT0gJ29iamVjdCdcclxuICAgICAgICAmJiBwcmltaXRpdmUuaGFzT3duUHJvcGVydHlcclxuICAgICAgICAmJiBwcmltaXRpdmUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpXHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgaXNBcnJheVBvbHlmaWxsO1xyXG5cclxuY29uc3QgcmVnRXhwVGVzdCA9IFJlZ0V4cC5wcm90b3R5cGUudGVzdDtcclxuXHJcbmNvbnN0IHRlc3RSZWdFeHAgPSAocmVnRXg6IFJlZ0V4cCwgc3RyOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiByZWdFeHBUZXN0LmNhbGwocmVnRXgsIHN0cik7XHJcbn07XHJcblxyXG5jb25zdCBub25TcGFjZVJlID0gL1xcUy87XHJcblxyXG5jb25zdCBpc1doaXRlc3BhY2UgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiAhdGVzdFJlZ0V4cChub25TcGFjZVJlLCBzdHIpO1xyXG59O1xyXG5cclxuY29uc3QgZW50aXR5TWFwID0ge1xyXG4gICAgJyYnOiAnJmFtcDsnLFxyXG4gICAgJzwnOiAnJmx0OycsXHJcbiAgICAnPic6ICcmZ3Q7JyxcclxuICAgICdcIic6ICcmcXVvdDsnLFxyXG4gICAgJ1xcJyc6ICcmIzM5OycsXHJcbiAgICAnLyc6ICcmI3gyRjsnLFxyXG4gICAgJ2AnOiAnJiN4NjA7JyxcclxuICAgICc9JzogJyYjeDNEOydcclxufTtcclxuXHJcbmNvbnN0IGVzY2FwZUh0bWwgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICAgIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKC9bJjw+XCInYD1cXC9dL2csIChzOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gZW50aXR5TWFwW3NdO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB3aGl0ZVJlID0gL1xccyovO1xyXG5jb25zdCBzcGFjZVJlID0gL1xccysvO1xyXG5jb25zdCBlcXVhbHNSZSA9IC9cXHMqPS87XHJcbmNvbnN0IGN1cmx5UmUgPSAvXFxzKlxcfS87XHJcbmNvbnN0IHRhZ1JlID0gLyN8XFxefFxcL3w+fFxce3wmfD18IS87XHJcblxyXG5jb25zdCBzcXVhc2hUb2tlbnMgPSAodG9rZW5zOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHNxdWFzaGVkVG9rZW5zID0gW107XHJcblxyXG4gICAgbGV0IHRva2VuLCBsYXN0VG9rZW47XHJcbiAgICBmb3IgKGxldCBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgKytpKSB7XHJcbiAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XHJcblxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBpZiAodG9rZW5bMF0gPT09ICd0ZXh0JyAmJiBsYXN0VG9rZW4gJiYgbGFzdFRva2VuWzBdID09PSAndGV4dCcpIHtcclxuICAgICAgICAgICAgICAgIGxhc3RUb2tlblsxXSArPSB0b2tlblsxXTtcclxuICAgICAgICAgICAgICAgIGxhc3RUb2tlblszXSA9IHRva2VuWzNdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3F1YXNoZWRUb2tlbnMucHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc3F1YXNoZWRUb2tlbnM7XHJcbn07XHJcblxyXG5jb25zdCBuZXN0VG9rZW5zID0gKHRva2VuczogYW55KSA9PiB7XHJcbiAgICBjb25zdCBuZXN0ZWRUb2tlbnMgPSBbXTtcclxuICAgIGxldCBjb2xsZWN0b3IgPSBuZXN0ZWRUb2tlbnM7XHJcbiAgICBjb25zdCBzZWN0aW9ucyA9IFtdO1xyXG5cclxuICAgIGxldCB0b2tlbiwgc2VjdGlvbjtcclxuICAgIGZvciAobGV0IGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcclxuICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0b2tlblswXSkge1xyXG4gICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgY2FzZSAnXic6XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0b3IucHVzaCh0b2tlbik7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3RvciA9IHRva2VuWzRdID0gW107XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uWzVdID0gdG9rZW5bMl07XHJcbiAgICAgICAgICAgICAgICBjb2xsZWN0b3IgPSBzZWN0aW9ucy5sZW5ndGggPiAwID8gc2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoIC0gMV1bNF0gOiBuZXN0ZWRUb2tlbnM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5lc3RlZFRva2VucztcclxufTtcclxuXHJcbmNvbnN0IHBhcnNlVGVtcGxhdGUgPSAodGVtcGxhdGU6IGFueSwgdGFnczogYW55KSA9PiB7XHJcbiAgICBpZiAoIXRlbXBsYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgbGV0IGxpbmVIYXNOb25TcGFjZSA9IGZhbHNlO1xyXG4gICAgbGV0IHNlY3Rpb25zID0gW107ICAgICAvLyBTdGFjayB0byBob2xkIHNlY3Rpb24gdG9rZW5zXHJcbiAgICBsZXQgdG9rZW5zID0gW107ICAgICAgIC8vIEJ1ZmZlciB0byBob2xkIHRoZSB0b2tlbnNcclxuICAgIGxldCBzcGFjZXMgPSBbXTsgICAgICAgLy8gSW5kaWNlcyBvZiB3aGl0ZXNwYWNlIHRva2VucyBvbiB0aGUgY3VycmVudCBsaW5lXHJcbiAgICBsZXQgaGFzVGFnID0gZmFsc2U7ICAgIC8vIElzIHRoZXJlIGEge3t0YWd9fSBvbiB0aGUgY3VycmVudCBsaW5lP1xyXG4gICAgbGV0IG5vblNwYWNlID0gZmFsc2U7ICAvLyBJcyB0aGVyZSBhIG5vbi1zcGFjZSBjaGFyIG9uIHRoZSBjdXJyZW50IGxpbmU/XHJcbiAgICBsZXQgaW5kZW50YXRpb24gPSAnJzsgIC8vIFRyYWNrcyBpbmRlbnRhdGlvbiBmb3IgdGFncyB0aGF0IHVzZSBpdFxyXG4gICAgbGV0IHRhZ0luZGV4ID0gMDsgICAgICAvLyBTdG9yZXMgYSBjb3VudCBvZiBudW1iZXIgb2YgdGFncyBlbmNvdW50ZXJlZCBvbiBhIGxpbmVcclxuXHJcbiAgICAvLyBTdHJpcHMgYWxsIHdoaXRlc3BhY2UgdG9rZW5zIGFycmF5IGZvciB0aGUgY3VycmVudCBsaW5lXHJcbiAgICAvLyBpZiB0aGVyZSB3YXMgYSB7eyN0YWd9fSBvbiBpdCBhbmQgb3RoZXJ3aXNlIG9ubHkgc3BhY2UuXHJcbiAgICBjb25zdCBzdHJpcFNwYWNlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChoYXNUYWcgJiYgIW5vblNwYWNlKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChzcGFjZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdG9rZW5zW3NwYWNlcy5wb3AoKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGFjZXMgPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhhc1RhZyA9IGZhbHNlO1xyXG4gICAgICAgIG5vblNwYWNlID0gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBjb21waWxlVGFncyA9ICh0YWdzVG9Db21waWxlKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0YWdzVG9Db21waWxlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICB0YWdzVG9Db21waWxlID0gdGFnc1RvQ29tcGlsZS5zcGxpdChzcGFjZVJlLCAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaXNBcnJheSh0YWdzVG9Db21waWxlKSB8fCB0YWdzVG9Db21waWxlLmxlbmd0aCAhPT0gMikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdGFnczogJyArIHRhZ3NUb0NvbXBpbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3BlbmluZ1RhZ1JlID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkgKyAnXFxcXHMqJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2luZ1RhZ1JlID0gbmV3IFJlZ0V4cCgnXFxcXHMqJyArIGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzFdKSk7XHJcbiAgICAgICAgY29uc3QgY2xvc2luZ0N1cmx5UmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKCd9JyArIHRhZ3NUb0NvbXBpbGVbMV0pKTtcclxuICAgICAgICByZXR1cm4ge29wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZX07XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgbGV0IHtvcGVuaW5nVGFnUmUsIGNsb3NpbmdUYWdSZSwgY2xvc2luZ0N1cmx5UmV9ID0gY29tcGlsZVRhZ3ModGFncyB8fCBCQVJCRS50YWdzKTtcclxuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLV8+IFRBRyBERUJVRycsIG9wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZSlcclxuICAgIGNvbnN0IHNjYW5uZXIgPSBuZXcgU2Nhbm5lcih0ZW1wbGF0ZSk7XHJcblxyXG4gICAgbGV0IHN0YXJ0LCB0eXBlLCB2YWx1ZSwgY2hyLCB0b2tlbiwgb3BlblNlY3Rpb247XHJcbiAgICB3aGlsZSAoIXNjYW5uZXIuZW9zKCkpIHtcclxuICAgICAgICBzdGFydCA9IHNjYW5uZXIucG9zO1xyXG5cclxuICAgICAgICAvLyBNYXRjaCBhbnkgdGV4dCBiZXR3ZWVuIHRhZ3MuXHJcbiAgICAgICAgdmFsdWUgPSBzY2FubmVyLnNjYW5VbnRpbChvcGVuaW5nVGFnUmUpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIHZhbHVlTGVuZ3RoID0gdmFsdWUubGVuZ3RoOyBpIDwgdmFsdWVMZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgY2hyID0gdmFsdWUuY2hhckF0KGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpc1doaXRlc3BhY2UoY2hyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHRva2Vucy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGVudGF0aW9uICs9IGNocjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVIYXNOb25TcGFjZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50YXRpb24gKz0gJyAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKFsndGV4dCcsIGNociwgc3RhcnQsIHN0YXJ0ICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBmb3Igd2hpdGVzcGFjZSBvbiB0aGUgY3VycmVudCBsaW5lLlxyXG4gICAgICAgICAgICAgICAgaWYgKGNociA9PT0gJ1xcbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpcFNwYWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZW50YXRpb24gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB0YWdJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhhc05vblNwYWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1hdGNoIHRoZSBvcGVuaW5nIHRhZy5cclxuICAgICAgICBpZiAoIXNjYW5uZXIuc2NhbihvcGVuaW5nVGFnUmUpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFzVGFnID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSB0YWcgdHlwZS5cclxuICAgICAgICB0eXBlID0gc2Nhbm5lci5zY2FuKHRhZ1JlKSB8fCAnbmFtZSc7XHJcbiAgICAgICAgc2Nhbm5lci5zY2FuKHdoaXRlUmUpO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIHRhZyB2YWx1ZS5cclxuICAgICAgICBpZiAodHlwZSA9PT0gJz0nKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoZXF1YWxzUmUpO1xyXG4gICAgICAgICAgICBzY2FubmVyLnNjYW4oZXF1YWxzUmUpO1xyXG4gICAgICAgICAgICBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3snKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO1xyXG4gICAgICAgICAgICBzY2FubmVyLnNjYW4oY3VybHlSZSk7XHJcbiAgICAgICAgICAgIHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XHJcbiAgICAgICAgICAgIHR5cGUgPSAnJic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTWF0Y2ggdGhlIGNsb3NpbmcgdGFnLlxyXG4gICAgICAgIGlmICghc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCB0YWcgYXQgJyArIHNjYW5uZXIucG9zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09PSAnPicpIHtcclxuICAgICAgICAgICAgdG9rZW4gPSBbdHlwZSwgdmFsdWUsIHN0YXJ0LCBzY2FubmVyLnBvcywgaW5kZW50YXRpb24sIHRhZ0luZGV4LCBsaW5lSGFzTm9uU3BhY2VdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRva2VuID0gW3R5cGUsIHZhbHVlLCBzdGFydCwgc2Nhbm5lci5wb3NdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWdJbmRleCsrO1xyXG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICcjJyB8fCB0eXBlID09PSAnXicpIHtcclxuICAgICAgICAgICAgc2VjdGlvbnMucHVzaCh0b2tlbik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnLycpIHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgc2VjdGlvbiBuZXN0aW5nLlxyXG4gICAgICAgICAgICBvcGVuU2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvcGVuU2VjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyArIHZhbHVlICsgJ1wiIGF0ICcgKyBzdGFydCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChvcGVuU2VjdGlvblsxXSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc3RhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmFtZScgfHwgdHlwZSA9PT0gJ3snIHx8IHR5cGUgPT09ICcmJykge1xyXG4gICAgICAgICAgICBub25TcGFjZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnPScpIHtcclxuICAgICAgICAgICAgLy8gU2V0IHRoZSB0YWdzIGZvciB0aGUgbmV4dCB0aW1lIGFyb3VuZC5cclxuICAgICAgICAgICAgY29tcGlsZVRhZ3ModmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdHJpcFNwYWNlKCk7XHJcblxyXG4gICAgLy8gTWFrZSBzdXJlIHRoZXJlIGFyZSBubyBvcGVuIHNlY3Rpb25zIHdoZW4gd2UncmUgZG9uZS5cclxuICAgIG9wZW5TZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XHJcblxyXG4gICAgaWYgKG9wZW5TZWN0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJyArIG9wZW5TZWN0aW9uWzFdICsgJ1wiIGF0ICcgKyBzY2FubmVyLnBvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpO1xyXG59O1xyXG5cclxuXHJcbmNsYXNzIFNjYW5uZXIge1xyXG4gICAgcHVibGljIHBvczogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3RyaW5nOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRhaWw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzdHI6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3RyaW5nID0gc3RyO1xyXG4gICAgICAgIHRoaXMudGFpbCA9IHN0cjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW9zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhaWwgPT09ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzY2FuKHJlZ0V4cDogUmVnRXhwKSB7XHJcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLnRhaWwubWF0Y2gocmVnRXhwKTtcclxuXHJcbiAgICAgICAgaWYgKCFtYXRjaCB8fCBtYXRjaC5pbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzdHI6IHN0cmluZyA9IG1hdGNoWzBdO1xyXG5cclxuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwuc3Vic3RyaW5nKHN0ci5sZW5ndGgpO1xyXG4gICAgICAgIHRoaXMucG9zICs9IHN0ci5sZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjYW5VbnRpbChyZWdFeHA6IFJlZ0V4cCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YWlsLnNlYXJjaChyZWdFeHApO1xyXG4gICAgICAgIGxldCBtYXRjaDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xyXG4gICAgICAgICAgICBjYXNlIC0xOlxyXG4gICAgICAgICAgICAgICAgbWF0Y2ggPSB0aGlzLnRhaWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhaWwgPSAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBtYXRjaCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBvcyArPSBtYXRjaC5sZW5ndGg7XHJcblxyXG4gICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ29udGV4dCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZpZXc6IGFueTtcclxuICAgIHByaXZhdGUgY2FjaGU6IGFueTtcclxuICAgIHByaXZhdGUgcGFyZW50OiBhbnk7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZpZXc6IGFueSwgcGFyZW50Q29udGV4dDogYW55KSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlldztcclxuICAgICAgICB0aGlzLmNhY2hlID0geycuJzogdGhpcy52aWV3fTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudENvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaCh2aWV3OiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbnRleHQodmlldywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9va3VwKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5jYWNoZTtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgIGlmIChjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IGNhY2hlW25hbWVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZXh0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgaW50ZXJtZWRpYXRlVmFsdWU6IGFueSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgbmFtZXM6IGFueSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXg6IGFueSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgbG9va3VwSGl0OiBhbnkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChjb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZS5pbmRleE9mKCcuJykgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmFsdWUgPSBjb250ZXh0LnZpZXc7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZXMgPSBuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbnRlcm1lZGlhdGVWYWx1ZSAhPSBudWxsICYmIGluZGV4IDwgbmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKG5hbWVzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29rdXBIaXQgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzUHJvcGVydHkoaW50ZXJtZWRpYXRlVmFsdWUsIG5hbWVzW2luZGV4XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eShpbnRlcm1lZGlhdGVWYWx1ZSwgbmFtZXNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmFsdWUgPSBpbnRlcm1lZGlhdGVWYWx1ZVtuYW1lc1tpbmRleCsrXV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IGNvbnRleHQudmlld1tuYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBsb29rdXBIaXQgPSBoYXNQcm9wZXJ0eShjb250ZXh0LnZpZXcsIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGxvb2t1cEhpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaW50ZXJtZWRpYXRlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0ID0gY29udGV4dC5wYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FjaGVbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuY2FsbCh0aGlzLnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENhY2hlIHtcclxuICAgIHByaXZhdGUgX2NhY2hlID0ge307XHJcblxyXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX2NhY2hlW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuX2NhY2hlID0ge307XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFdyaXRlciB7XHJcbiAgICBwdWJsaWMgdGVtcGxhdGVDYWNoZSA9IG5ldyBDYWNoZSgpO1xyXG5cclxuICAgIHB1YmxpYyBjbGVhckNhY2hlKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy50ZW1wbGF0ZUNhY2hlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlQ2FjaGUuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnNlKHRlbXBsYXRlOiBhbnksIHRhZ3M6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy50ZW1wbGF0ZUNhY2hlO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gdGVtcGxhdGUgKyAnOicgKyAodGFncyB8fCBCQVJCRS50YWdzKS5qb2luKCc6Jyk7XHJcbiAgICAgICAgY29uc3QgaXNDYWNoZUVuYWJsZWQgPSB0eXBlb2YgY2FjaGUgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgICAgIGxldCB0b2tlbnMgPSBpc0NhY2hlRW5hYmxlZCA/IGNhY2hlLmdldChjYWNoZUtleSkgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0b2tlbnMgPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLCB0YWdzKTtcclxuICAgICAgICAgICAgaXNDYWNoZUVuYWJsZWQgJiYgY2FjaGUuc2V0KGNhY2hlS2V5LCB0b2tlbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9rZW5zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIodGVtcGxhdGU6IGFueSwgdmlldzogYW55LCBwYXJ0aWFsczogYW55LCBjb25maWc6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHRhZ3MgPSB0aGlzLmdldENvbmZpZ1RhZ3MoY29uZmlnKTtcclxuICAgICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnBhcnNlKHRlbXBsYXRlLCB0YWdzKTtcclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gKHZpZXcgaW5zdGFuY2VvZiBDb250ZXh0KSA/IHZpZXcgOiBuZXcgQ29udGV4dCh2aWV3LCB1bmRlZmluZWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCB0ZW1wbGF0ZSwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDb25maWdUYWdzKGNvbmZpZzogYW55KSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkoY29uZmlnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25maWcudGFncztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByYXdWYWx1ZSh0b2tlbjogYW55W10pIHtcclxuICAgICAgICByZXR1cm4gdG9rZW5bMV07XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyVG9rZW5zKHRva2VuczogYW55LCBjb250ZXh0OiBhbnksIHBhcnRpYWxzOiBhbnksIG9yaWdpbmFsVGVtcGxhdGU6IGFueSwgY29uZmlnOiBhbnkpIHtcclxuICAgICAgICBsZXQgYnVmZmVyID0gJyc7XHJcbiAgICAgICAgbGV0IHRva2VuO1xyXG4gICAgICAgIGxldCBzeW1ib2w7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xyXG4gICAgICAgICAgICBzeW1ib2wgPSB0b2tlblswXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09ICcjJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlbmRlclNlY3Rpb24odG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN5bWJvbCA9PT0gJ14nKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVuZGVySW52ZXJ0ZWQodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN5bWJvbCA9PT0gJz4nKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVuZGVyUGFydGlhbCh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ltYm9sID09PSAnJicpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy51bmVzY2FwZWRWYWx1ZSh0b2tlbiwgY29udGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ltYm9sID09PSAnbmFtZScpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQsIGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ltYm9sID09PSAndGV4dCcpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yYXdWYWx1ZSh0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclNlY3Rpb24odG9rZW46IGFueVtdLCBjb250ZXh0OiBhbnksIHBhcnRpYWxzOiBhbnksIG9yaWdpbmFsVGVtcGxhdGU6IGFueSwgY29uZmlnOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgYnVmZmVyID0gJyc7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xyXG5cclxuICAgICAgICBjb25zdCBzdWJSZW5kZXIgPSAodGVtcGxhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLCBjb250ZXh0LCBwYXJ0aWFscywgY29uZmlnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGogPCB2YWx1ZUxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQucHVzaCh2YWx1ZVtqXSksIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQucHVzaCh2YWx1ZSksIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbFRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucyB3aXRob3V0IHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBFeHRyYWN0IHRoZSBwb3J0aW9uIG9mIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSB0aGF0IHRoZSBzZWN0aW9uIGNvbnRhaW5zLlxyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhbGwoY29udGV4dC52aWV3LCBvcmlnaW5hbFRlbXBsYXRlLnNsaWNlKHRva2VuWzNdLCB0b2tlbls1XSksIHN1YlJlbmRlcik7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYnVmZmVyICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJJbnZlcnRlZCh0b2tlbjogYW55W10sIGNvbnRleHQ6IGFueSwgcGFydGlhbHM6IGFueSwgb3JpZ2luYWxUZW1wbGF0ZTogYW55LCBjb25maWc6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xyXG5cclxuICAgICAgICBpZiAoIXZhbHVlIHx8IChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBpbmRlbnRQYXJ0aWFsKHBhcnRpYWw6IGFueSwgaW5kZW50YXRpb246IGFueSwgbGluZUhhc05vblNwYWNlOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZEluZGVudGF0aW9uID0gaW5kZW50YXRpb24ucmVwbGFjZSgvW14gXFx0XS9nLCAnJyk7XHJcbiAgICAgICAgY29uc3QgcGFydGlhbEJ5TmwgPSBwYXJ0aWFsLnNwbGl0KCdcXG4nKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpYWxCeU5sLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJ0aWFsQnlObFtpXS5sZW5ndGggJiYgKGkgPiAwIHx8ICFsaW5lSGFzTm9uU3BhY2UpKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0aWFsQnlObFtpXSA9IGZpbHRlcmVkSW5kZW50YXRpb24gKyBwYXJ0aWFsQnlObFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFydGlhbEJ5Tmwuam9pbignXFxuJyk7XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclBhcnRpYWwodG9rZW46IGFueVtdLCBjb250ZXh0OiBhbnksIHBhcnRpYWxzOiBhbnksIGNvbmZpZzogYW55KSB7XHJcbiAgICAgICAgaWYgKCFwYXJ0aWFscykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRhZ3MgPSB0aGlzLmdldENvbmZpZ1RhZ3MoY29uZmlnKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc0Z1bmN0aW9uKHBhcnRpYWxzKSA/IHBhcnRpYWxzKHRva2VuWzFdKSA6IHBhcnRpYWxzW3Rva2VuWzFdXTtcclxuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgbGluZUhhc05vblNwYWNlID0gdG9rZW5bNl07XHJcbiAgICAgICAgICAgIGNvbnN0IHRhZ0luZGV4ID0gdG9rZW5bNV07XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGVudGF0aW9uID0gdG9rZW5bNF07XHJcbiAgICAgICAgICAgIGxldCBpbmRlbnRlZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0YWdJbmRleCA9PT0gMCAmJiBpbmRlbnRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaW5kZW50ZWRWYWx1ZSA9IHRoaXMuaW5kZW50UGFydGlhbCh2YWx1ZSwgaW5kZW50YXRpb24sIGxpbmVIYXNOb25TcGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5wYXJzZShpbmRlbnRlZFZhbHVlLCB0YWdzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VucywgY29udGV4dCwgcGFydGlhbHMsIGluZGVudGVkVmFsdWUsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdW5lc2NhcGVkVmFsdWUodG9rZW46IGFueVtdLCBjb250ZXh0OiBhbnkpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcclxuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENvbmZpZ0VzY2FwZShjb25maWc6IGFueSkge1xyXG4gICAgICAgIHJldHVybiBjb25maWcgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgIWlzQXJyYXkoY29uZmlnKSA/IGNvbmZpZy5lc2NhcGUgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlc2NhcGVkVmFsdWUodG9rZW46IGFueVtdLCBjb250ZXh0OiBhbnksIGNvbmZpZzogYW55KSB7XHJcbiAgICAgICAgY29uc3QgZXNjYXBlID0gdGhpcy5nZXRDb25maWdFc2NhcGUoY29uZmlnKSB8fCBCQVJCRS5lc2NhcGU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGVzY2FwZSA9PT0gQkFSQkUuZXNjYXBlKSA/IFN0cmluZyh2YWx1ZSkgOiBlc2NhcGUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBCQVJCRSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHRhZ3MgPSBbJ3t7JywgJ319J107XHJcbiAgICBwdWJsaWMgc3RhdGljIGVzY2FwZTogYW55ID0gZXNjYXBlSHRtbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgU2Nhbm5lcjogYW55ID0gU2Nhbm5lcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ29udGV4dDogYW55ID0gQ29udGV4dDtcclxuICAgIHB1YmxpYyBzdGF0aWMgV3JpdGVyOiBhbnkgPSBXcml0ZXI7XHJcbiAgICBwdWJsaWMgbmFtZSA9ICdNWSBGKipLSU5HIE1VU1RBQ0hFIExJQlJBUlkgRk9SIEFOR1VMQVInO1xyXG4gICAgcHVibGljIHZlcnNpb24gPSAnRUNMQVRFUic7XHJcbiAgICBwcml2YXRlIF9Xcml0ZXI6IGFueSA9IG5ldyBXcml0ZXIoKTtcclxuXHJcbiAgICBnZXQgdGVtcGxhdGVDYWNoZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fV3JpdGVyLnRlbXBsYXRlQ2FjaGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRlbXBsYXRlQ2FjaGUoY2FjaGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX1dyaXRlci50ZW1wbGF0ZUNhY2hlID0gY2FjaGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhcnNlKHRlbXBsYXRlOiBhbnksIHRhZ3M6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Xcml0ZXIucGFyc2UodGVtcGxhdGUsIHRhZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIodGVtcGxhdGU6IGFueSwgdmlldzogYW55LCBwYXJ0aWFscz86IGFueSwgY29uZmlnPzogYW55KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnICtcclxuICAgICAgICAgICAgICAgICdidXQgXCInICsgdHlwZVN0cih0ZW1wbGF0ZSkgKyAnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnICtcclxuICAgICAgICAgICAgICAgICdhcmd1bWVudCBmb3IgbXVzdGFjaGUjcmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscyknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9Xcml0ZXIucmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgY29uZmlnKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIHB1YmxpYyBjbGVhckNhY2hlKCkge1xyXG4gICAgICAgIHRoaXMuX1dyaXRlci5jbGVhckNhY2hlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19