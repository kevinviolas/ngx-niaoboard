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
        openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
        closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
        closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXlGdWNraW5nTXVzdGFjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL015RnVja2luZ011c3RhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7NkRBTTZEO0FBQzdELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO0FBQ2pELE1BQU0sZUFBZSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7SUFDcEMsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLGdCQUFnQixDQUFDO0FBQzVELENBQUMsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBVyxFQUFFLEVBQUU7SUFDL0IsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFRLEVBQUUsRUFBRTtJQUN6QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxDQUFDLEdBQVEsRUFBRSxFQUFFO0lBQzlCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCxDQUFDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRTtJQUNsQyxPQUFPLEdBQUcsSUFBSSxJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQztBQUVGLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxTQUFjLEVBQUUsUUFBYSxFQUFFLEVBQUU7SUFDOUQsT0FBTyxDQUNI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QUFDLGFBQWEsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxhQUFhLENBQUMsS0FBVTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUVNLEtBQUssQ0FBQyxRQUFhLEVBQUUsSUFBUztRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQWEsRUFBRSxJQUFTLEVBQUUsUUFBYyxFQUFFLE1BQVk7UUFDaEUsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDOUIsTUFBTSxJQUFJLFNBQVMsQ0FBQyxrREFBa0Q7Z0JBQ2xFLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUcsMkJBQTJCO2dCQUN6RCx3REFBd0QsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQUEsQ0FBQztJQUdLLFVBQVU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzlCLENBQUM7O0FBbENhLFVBQUksR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwQixZQUFNLEdBQVEsVUFBVSxDQUFDO0FBQ3pCLGFBQU8sR0FBUSxPQUFPLENBQUM7QUFDdkIsYUFBTyxHQUFRLE9BQU8sQ0FBQztBQUN2QixZQUFNLEdBQVEsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiogIEBwcm9qZWN0XG4gKiogIEBmaWxlXG4gKiogIEBhdXRob3IgQnJpY2UgRGF1cGlhcmQgPGJyaWNlLmRhdXBpYXJkQG5vd2JyYWlucy5jb20+XG4gKiogIEBEYXRlIDI5LzAzLzIwMjJcbiAqKiAgQERlc2NyaXB0aW9uXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5jb25zdCBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5jb25zdCBpc0FycmF5UG9seWZpbGwgPSAob2JqZWN0OiBhbnkpID0+IHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuY29uc3QgaXNGdW5jdGlvbiA9IChvYmplY3Q6IGFueSkgPT4ge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuY29uc3QgdHlwZVN0ciA9IChvYmo6IGFueSkgPT4ge1xuICAgIHJldHVybiBpc0FycmF5KG9iaikgPyAnYXJyYXknIDogdHlwZW9mIG9iajtcbn07XG5cbmNvbnN0IGVzY2FwZVJlZ0V4cCA9IChzdHI6IGFueSkgPT4ge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbn07XG5cbmNvbnN0IGhhc1Byb3BlcnR5ID0gKG9iaiwgcHJvcE5hbWUpID0+IHtcbiAgICByZXR1cm4gb2JqICE9IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgKHByb3BOYW1lIGluIG9iaik7XG59O1xuXG5jb25zdCBwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eSA9IChwcmltaXRpdmU6IGFueSwgcHJvcE5hbWU6IGFueSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIHByaW1pdGl2ZSAhPSBudWxsXG4gICAgICAgICYmIHR5cGVvZiBwcmltaXRpdmUgIT09ICdvYmplY3QnXG4gICAgICAgICYmIHByaW1pdGl2ZS5oYXNPd25Qcm9wZXJ0eVxuICAgICAgICAmJiBwcmltaXRpdmUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpXG4gICAgKTtcbn07XG5cbmNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGlzQXJyYXlQb2x5ZmlsbDtcblxuY29uc3QgcmVnRXhwVGVzdCA9IFJlZ0V4cC5wcm90b3R5cGUudGVzdDtcblxuY29uc3QgdGVzdFJlZ0V4cCA9IChyZWdFeDogUmVnRXhwLCBzdHI6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiByZWdFeHBUZXN0LmNhbGwocmVnRXgsIHN0cik7XG59O1xuXG5jb25zdCBub25TcGFjZVJlID0gL1xcUy87XG5cbmNvbnN0IGlzV2hpdGVzcGFjZSA9IChzdHI6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAhdGVzdFJlZ0V4cChub25TcGFjZVJlLCBzdHIpO1xufTtcblxuY29uc3QgZW50aXR5TWFwID0ge1xuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7JyxcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAnXFwnJzogJyYjMzk7JyxcbiAgICAnLyc6ICcmI3gyRjsnLFxuICAgICdgJzogJyYjeDYwOycsXG4gICAgJz0nOiAnJiN4M0Q7J1xufTtcblxuY29uc3QgZXNjYXBlSHRtbCA9IChzdHI6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBTdHJpbmcoc3RyKS5yZXBsYWNlKC9bJjw+XCInYD1cXC9dL2csIChzOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHdoaXRlUmUgPSAvXFxzKi87XG5jb25zdCBzcGFjZVJlID0gL1xccysvO1xuY29uc3QgZXF1YWxzUmUgPSAvXFxzKj0vO1xuY29uc3QgY3VybHlSZSA9IC9cXHMqXFx9LztcbmNvbnN0IHRhZ1JlID0gLyN8XFxefFxcL3w+fFxce3wmfD18IS87XG5cbmNvbnN0IHNxdWFzaFRva2VucyA9ICh0b2tlbnM6IGFueSkgPT4ge1xuICAgIGNvbnN0IHNxdWFzaGVkVG9rZW5zID0gW107XG5cbiAgICBsZXQgdG9rZW4sIGxhc3RUb2tlbjtcbiAgICBmb3IgKGxldCBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgKytpKSB7XG4gICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgaWYgKHRva2VuWzBdID09PSAndGV4dCcgJiYgbGFzdFRva2VuICYmIGxhc3RUb2tlblswXSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgbGFzdFRva2VuWzFdICs9IHRva2VuWzFdO1xuICAgICAgICAgICAgICAgIGxhc3RUb2tlblszXSA9IHRva2VuWzNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcXVhc2hlZFRva2Vucztcbn07XG5cbmNvbnN0IG5lc3RUb2tlbnMgPSAodG9rZW5zOiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXN0ZWRUb2tlbnMgPSBbXTtcbiAgICBsZXQgY29sbGVjdG9yID0gbmVzdGVkVG9rZW5zO1xuICAgIGNvbnN0IHNlY3Rpb25zID0gW107XG5cbiAgICBsZXQgdG9rZW4sIHNlY3Rpb247XG4gICAgZm9yIChsZXQgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XG4gICAgICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICAgIGNhc2UgJ14nOlxuICAgICAgICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBjb2xsZWN0b3IgPSB0b2tlbls0XSA9IFtdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgc2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuICAgICAgICAgICAgICAgIHNlY3Rpb25bNV0gPSB0b2tlblsyXTtcbiAgICAgICAgICAgICAgICBjb2xsZWN0b3IgPSBzZWN0aW9ucy5sZW5ndGggPiAwID8gc2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoIC0gMV1bNF0gOiBuZXN0ZWRUb2tlbnM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXN0ZWRUb2tlbnM7XG59O1xuXG5jb25zdCBwYXJzZVRlbXBsYXRlID0gKHRlbXBsYXRlOiBhbnksIHRhZ3M6IGFueSkgPT4ge1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBsZXQgbGluZUhhc05vblNwYWNlID0gZmFsc2U7XG4gICAgbGV0IHNlY3Rpb25zID0gW107ICAgICAvLyBTdGFjayB0byBob2xkIHNlY3Rpb24gdG9rZW5zXG4gICAgbGV0IHRva2VucyA9IFtdOyAgICAgICAvLyBCdWZmZXIgdG8gaG9sZCB0aGUgdG9rZW5zXG4gICAgbGV0IHNwYWNlcyA9IFtdOyAgICAgICAvLyBJbmRpY2VzIG9mIHdoaXRlc3BhY2UgdG9rZW5zIG9uIHRoZSBjdXJyZW50IGxpbmVcbiAgICBsZXQgaGFzVGFnID0gZmFsc2U7ICAgIC8vIElzIHRoZXJlIGEge3t0YWd9fSBvbiB0aGUgY3VycmVudCBsaW5lP1xuICAgIGxldCBub25TcGFjZSA9IGZhbHNlOyAgLy8gSXMgdGhlcmUgYSBub24tc3BhY2UgY2hhciBvbiB0aGUgY3VycmVudCBsaW5lP1xuICAgIGxldCBpbmRlbnRhdGlvbiA9ICcnOyAgLy8gVHJhY2tzIGluZGVudGF0aW9uIGZvciB0YWdzIHRoYXQgdXNlIGl0XG4gICAgbGV0IHRhZ0luZGV4ID0gMDsgICAgICAvLyBTdG9yZXMgYSBjb3VudCBvZiBudW1iZXIgb2YgdGFncyBlbmNvdW50ZXJlZCBvbiBhIGxpbmVcblxuICAgIC8vIFN0cmlwcyBhbGwgd2hpdGVzcGFjZSB0b2tlbnMgYXJyYXkgZm9yIHRoZSBjdXJyZW50IGxpbmVcbiAgICAvLyBpZiB0aGVyZSB3YXMgYSB7eyN0YWd9fSBvbiBpdCBhbmQgb3RoZXJ3aXNlIG9ubHkgc3BhY2UuXG4gICAgY29uc3Qgc3RyaXBTcGFjZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGhhc1RhZyAmJiAhbm9uU3BhY2UpIHtcbiAgICAgICAgICAgIHdoaWxlIChzcGFjZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3BhY2VzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBoYXNUYWcgPSBmYWxzZTtcbiAgICAgICAgbm9uU3BhY2UgPSBmYWxzZTtcbiAgICB9O1xuXG5cbiAgICBjb25zdCBjb21waWxlVGFncyA9ICh0YWdzVG9Db21waWxlKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGFnc1RvQ29tcGlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRhZ3NUb0NvbXBpbGUgPSB0YWdzVG9Db21waWxlLnNwbGl0KHNwYWNlUmUsIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpIHx8IHRhZ3NUb0NvbXBpbGUubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdGFnczogJyArIHRhZ3NUb0NvbXBpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3BlbmluZ1RhZ1JlID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkgKyAnXFxcXHMqJyk7XG4gICAgICAgIGNsb3NpbmdUYWdSZSA9IG5ldyBSZWdFeHAoJ1xcXFxzKicgKyBlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO1xuICAgICAgICBjbG9zaW5nQ3VybHlSZSA9IG5ldyBSZWdFeHAoJ1xcXFxzKicgKyBlc2NhcGVSZWdFeHAoJ30nICsgdGFnc1RvQ29tcGlsZVsxXSkpO1xuICAgICAgICByZXR1cm4ge29wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZX07XG4gICAgfTtcblxuXG5cbiAgICBsZXQge29wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZX0gPSBjb21waWxlVGFncyh0YWdzIHx8IEJBUkJFLnRhZ3MpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLV8+IFRBRyBERUJVRycsIG9wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZSlcbiAgICBjb25zdCBzY2FubmVyID0gbmV3IFNjYW5uZXIodGVtcGxhdGUpO1xuXG4gICAgbGV0IHN0YXJ0LCB0eXBlLCB2YWx1ZSwgY2hyLCB0b2tlbiwgb3BlblNlY3Rpb247XG4gICAgd2hpbGUgKCFzY2FubmVyLmVvcygpKSB7XG4gICAgICAgIHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG5cbiAgICAgICAgLy8gTWF0Y2ggYW55IHRleHQgYmV0d2VlbiB0YWdzLlxuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCB2YWx1ZUxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY2hyID0gdmFsdWUuY2hhckF0KGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjaHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYWNlcy5wdXNoKHRva2Vucy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBpbmRlbnRhdGlvbiArPSBjaHI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsaW5lSGFzTm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpbmRlbnRhdGlvbiArPSAnICc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdG9rZW5zLnB1c2goWyd0ZXh0JywgY2hyLCBzdGFydCwgc3RhcnQgKyAxXSk7XG4gICAgICAgICAgICAgICAgc3RhcnQgKz0gMTtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciB3aGl0ZXNwYWNlIG9uIHRoZSBjdXJyZW50IGxpbmUuXG4gICAgICAgICAgICAgICAgaWYgKGNociA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaXBTcGFjZSgpO1xuICAgICAgICAgICAgICAgICAgICBpbmRlbnRhdGlvbiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB0YWdJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVIYXNOb25TcGFjZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1hdGNoIHRoZSBvcGVuaW5nIHRhZy5cbiAgICAgICAgaWYgKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBoYXNUYWcgPSB0cnVlO1xuXG4gICAgICAgIC8vIEdldCB0aGUgdGFnIHR5cGUuXG4gICAgICAgIHR5cGUgPSBzY2FubmVyLnNjYW4odGFnUmUpIHx8ICduYW1lJztcbiAgICAgICAgc2Nhbm5lci5zY2FuKHdoaXRlUmUpO1xuXG4gICAgICAgIC8vIEdldCB0aGUgdGFnIHZhbHVlLlxuICAgICAgICBpZiAodHlwZSA9PT0gJz0nKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtcbiAgICAgICAgICAgIHNjYW5uZXIuc2NhbihlcXVhbHNSZSk7XG4gICAgICAgICAgICBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICd7Jykge1xuICAgICAgICAgICAgdmFsdWUgPSBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nQ3VybHlSZSk7XG4gICAgICAgICAgICBzY2FubmVyLnNjYW4oY3VybHlSZSk7XG4gICAgICAgICAgICBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO1xuICAgICAgICAgICAgdHlwZSA9ICcmJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1hdGNoIHRoZSBjbG9zaW5nIHRhZy5cbiAgICAgICAgaWYgKCFzY2FubmVyLnNjYW4oY2xvc2luZ1RhZ1JlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCB0YWcgYXQgJyArIHNjYW5uZXIucG9zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlID09PSAnPicpIHtcbiAgICAgICAgICAgIHRva2VuID0gW3R5cGUsIHZhbHVlLCBzdGFydCwgc2Nhbm5lci5wb3MsIGluZGVudGF0aW9uLCB0YWdJbmRleCwgbGluZUhhc05vblNwYWNlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRva2VuID0gW3R5cGUsIHZhbHVlLCBzdGFydCwgc2Nhbm5lci5wb3NdO1xuICAgICAgICB9XG4gICAgICAgIHRhZ0luZGV4Kys7XG4gICAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJyMnIHx8IHR5cGUgPT09ICdeJykge1xuICAgICAgICAgICAgc2VjdGlvbnMucHVzaCh0b2tlbik7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJy8nKSB7XG4gICAgICAgICAgICAvLyBDaGVjayBzZWN0aW9uIG5lc3RpbmcuXG4gICAgICAgICAgICBvcGVuU2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuXG4gICAgICAgICAgICBpZiAoIW9wZW5TZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyArIHZhbHVlICsgJ1wiIGF0ICcgKyBzdGFydCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcGVuU2VjdGlvblsxXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInICsgb3BlblNlY3Rpb25bMV0gKyAnXCIgYXQgJyArIHN0YXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmFtZScgfHwgdHlwZSA9PT0gJ3snIHx8IHR5cGUgPT09ICcmJykge1xuICAgICAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgICAgICAgLy8gU2V0IHRoZSB0YWdzIGZvciB0aGUgbmV4dCB0aW1lIGFyb3VuZC5cbiAgICAgICAgICAgIGNvbXBpbGVUYWdzKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0cmlwU3BhY2UoKTtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gb3BlbiBzZWN0aW9ucyB3aGVuIHdlJ3JlIGRvbmUuXG4gICAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcblxuICAgIGlmIChvcGVuU2VjdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInICsgb3BlblNlY3Rpb25bMV0gKyAnXCIgYXQgJyArIHNjYW5uZXIucG9zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmVzdFRva2VucyhzcXVhc2hUb2tlbnModG9rZW5zKSk7XG59O1xuXG5cbmNsYXNzIFNjYW5uZXIge1xuICAgIHB1YmxpYyBwb3M6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBzdHJpbmc6IHN0cmluZztcbiAgICBwcml2YXRlIHRhaWw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RyaW5nID0gc3RyO1xuICAgICAgICB0aGlzLnRhaWwgPSBzdHI7XG4gICAgfVxuXG4gICAgcHVibGljIGVvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFpbCA9PT0gJyc7XG4gICAgfVxuXG4gICAgcHVibGljIHNjYW4ocmVnRXhwOiBSZWdFeHApIHtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSB0aGlzLnRhaWwubWF0Y2gocmVnRXhwKTtcblxuICAgICAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHI6IHN0cmluZyA9IG1hdGNoWzBdO1xuXG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoc3RyLmxlbmd0aCk7XG4gICAgICAgIHRoaXMucG9zICs9IHN0ci5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NhblVudGlsKHJlZ0V4cDogUmVnRXhwKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YWlsLnNlYXJjaChyZWdFeHApO1xuICAgICAgICBsZXQgbWF0Y2g7XG5cbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHRoaXMudGFpbDtcbiAgICAgICAgICAgICAgICB0aGlzLnRhaWwgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBtYXRjaCA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3MgKz0gbWF0Y2gubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9XG59XG5cbmNsYXNzIENvbnRleHQge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdmlldzogYW55O1xuICAgIHByaXZhdGUgY2FjaGU6IGFueTtcbiAgICBwcml2YXRlIHBhcmVudDogYW55O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcih2aWV3OiBhbnksIHBhcmVudENvbnRleHQ6IGFueSkge1xuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgICAgICB0aGlzLmNhY2hlID0geycuJzogdGhpcy52aWV3fTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRDb250ZXh0O1xuICAgIH1cblxuICAgIHB1c2godmlldzogYW55KSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29udGV4dCh2aWV3LCB0aGlzKTtcbiAgICB9XG5cbiAgICBsb29rdXAobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5jYWNoZTtcblxuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGlmIChjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBjYWNoZVtuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjb250ZXh0OiBhbnkgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IGludGVybWVkaWF0ZVZhbHVlOiBhbnkgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBuYW1lczogYW55ID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgaW5kZXg6IGFueSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGxvb2t1cEhpdDogYW55ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHdoaWxlIChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IGNvbnRleHQudmlldztcbiAgICAgICAgICAgICAgICAgICAgbmFtZXMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGludGVybWVkaWF0ZVZhbHVlICE9IG51bGwgJiYgaW5kZXggPCBuYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKG5hbWVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9va3VwSGl0ID0gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNQcm9wZXJ0eShpbnRlcm1lZGlhdGVWYWx1ZSwgbmFtZXNbaW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eShpbnRlcm1lZGlhdGVWYWx1ZSwgbmFtZXNbaW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZhbHVlID0gaW50ZXJtZWRpYXRlVmFsdWVbbmFtZXNbaW5kZXgrK11dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmFsdWUgPSBjb250ZXh0LnZpZXdbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGxvb2t1cEhpdCA9IGhhc1Byb3BlcnR5KGNvbnRleHQudmlldywgbmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChsb29rdXBIaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpbnRlcm1lZGlhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0LnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhY2hlW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmNhbGwodGhpcy52aWV3KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuXG5jbGFzcyBDYWNoZSB7XG4gICAgcHJpdmF0ZSBfY2FjaGUgPSB7fTtcblxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW2tleV07XG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgIH1cbn1cblxuY2xhc3MgV3JpdGVyIHtcbiAgICBwdWJsaWMgdGVtcGxhdGVDYWNoZSA9IG5ldyBDYWNoZSgpO1xuXG4gICAgcHVibGljIGNsZWFyQ2FjaGUoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy50ZW1wbGF0ZUNhY2hlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZUNhY2hlLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcGFyc2UodGVtcGxhdGU6IGFueSwgdGFnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy50ZW1wbGF0ZUNhY2hlO1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IHRlbXBsYXRlICsgJzonICsgKHRhZ3MgfHwgQkFSQkUudGFncykuam9pbignOicpO1xuICAgICAgICBjb25zdCBpc0NhY2hlRW5hYmxlZCA9IHR5cGVvZiBjYWNoZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGxldCB0b2tlbnMgPSBpc0NhY2hlRW5hYmxlZCA/IGNhY2hlLmdldChjYWNoZUtleSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHRva2VucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b2tlbnMgPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLCB0YWdzKTtcbiAgICAgICAgICAgIGlzQ2FjaGVFbmFibGVkICYmIGNhY2hlLnNldChjYWNoZUtleSwgdG9rZW5zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIodGVtcGxhdGU6IGFueSwgdmlldzogYW55LCBwYXJ0aWFsczogYW55LCBjb25maWc6IGFueSkge1xuICAgICAgICBjb25zdCB0YWdzID0gdGhpcy5nZXRDb25maWdUYWdzKGNvbmZpZyk7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMucGFyc2UodGVtcGxhdGUsIHRhZ3MpO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gKHZpZXcgaW5zdGFuY2VvZiBDb250ZXh0KSA/IHZpZXcgOiBuZXcgQ29udGV4dCh2aWV3LCB1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLCBjb250ZXh0LCBwYXJ0aWFscywgdGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdldENvbmZpZ1RhZ3MoY29uZmlnOiBhbnkpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkoY29uZmlnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25maWcudGFncztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgcmF3VmFsdWUodG9rZW46IGFueVtdKSB7XG4gICAgICAgIHJldHVybiB0b2tlblsxXTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSByZW5kZXJUb2tlbnModG9rZW5zOiBhbnksIGNvbnRleHQ6IGFueSwgcGFydGlhbHM6IGFueSwgb3JpZ2luYWxUZW1wbGF0ZTogYW55LCBjb25maWc6IGFueSkge1xuICAgICAgICBsZXQgYnVmZmVyID0gJyc7XG4gICAgICAgIGxldCB0b2tlbjtcbiAgICAgICAgbGV0IHN5bWJvbDtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgKytpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgc3ltYm9sID0gdG9rZW5bMF07XG5cbiAgICAgICAgICAgIGlmIChzeW1ib2wgPT09ICcjJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZW5kZXJTZWN0aW9uKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ltYm9sID09PSAnXicpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmVuZGVySW52ZXJ0ZWQodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzeW1ib2wgPT09ICc+Jykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZW5kZXJQYXJ0aWFsKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgY29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3ltYm9sID09PSAnJicpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMudW5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzeW1ib2wgPT09ICduYW1lJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQsIGNvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN5bWJvbCA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJhd1ZhbHVlKHRva2VuKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlclNlY3Rpb24odG9rZW46IGFueVtdLCBjb250ZXh0OiBhbnksIHBhcnRpYWxzOiBhbnksIG9yaWdpbmFsVGVtcGxhdGU6IGFueSwgY29uZmlnOiBhbnkpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBidWZmZXIgPSAnJztcbiAgICAgICAgbGV0IHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuXG4gICAgICAgIGNvbnN0IHN1YlJlbmRlciA9ICh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLCBjb250ZXh0LCBwYXJ0aWFscywgY29uZmlnKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwLCB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaiA8IHZhbHVlTGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQucHVzaCh2YWx1ZVtqXSksIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQucHVzaCh2YWx1ZSksIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbmFsVGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucyB3aXRob3V0IHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFeHRyYWN0IHRoZSBwb3J0aW9uIG9mIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSB0aGF0IHRoZSBzZWN0aW9uIGNvbnRhaW5zLlxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5jYWxsKGNvbnRleHQudmlldywgb3JpZ2luYWxUZW1wbGF0ZS5zbGljZSh0b2tlblszXSwgdG9rZW5bNV0pLCBzdWJSZW5kZXIpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciArPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgcmVuZGVySW52ZXJ0ZWQodG9rZW46IGFueVtdLCBjb250ZXh0OiBhbnksIHBhcnRpYWxzOiBhbnksIG9yaWdpbmFsVGVtcGxhdGU6IGFueSwgY29uZmlnOiBhbnkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSB8fCAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIHByaXZhdGUgaW5kZW50UGFydGlhbChwYXJ0aWFsOiBhbnksIGluZGVudGF0aW9uOiBhbnksIGxpbmVIYXNOb25TcGFjZTogYW55KSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkSW5kZW50YXRpb24gPSBpbmRlbnRhdGlvbi5yZXBsYWNlKC9bXiBcXHRdL2csICcnKTtcbiAgICAgICAgY29uc3QgcGFydGlhbEJ5TmwgPSBwYXJ0aWFsLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWFsQnlObC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhcnRpYWxCeU5sW2ldLmxlbmd0aCAmJiAoaSA+IDAgfHwgIWxpbmVIYXNOb25TcGFjZSkpIHtcbiAgICAgICAgICAgICAgICBwYXJ0aWFsQnlObFtpXSA9IGZpbHRlcmVkSW5kZW50YXRpb24gKyBwYXJ0aWFsQnlObFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFydGlhbEJ5Tmwuam9pbignXFxuJyk7XG4gICAgfTtcblxuXG4gICAgcHJpdmF0ZSByZW5kZXJQYXJ0aWFsKHRva2VuOiBhbnlbXSwgY29udGV4dDogYW55LCBwYXJ0aWFsczogYW55LCBjb25maWc6IGFueSkge1xuICAgICAgICBpZiAoIXBhcnRpYWxzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFncyA9IHRoaXMuZ2V0Q29uZmlnVGFncyhjb25maWcpO1xuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNGdW5jdGlvbihwYXJ0aWFscykgPyBwYXJ0aWFscyh0b2tlblsxXSkgOiBwYXJ0aWFsc1t0b2tlblsxXV07XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbGluZUhhc05vblNwYWNlID0gdG9rZW5bNl07XG4gICAgICAgICAgICBjb25zdCB0YWdJbmRleCA9IHRva2VuWzVdO1xuICAgICAgICAgICAgY29uc3QgaW5kZW50YXRpb24gPSB0b2tlbls0XTtcbiAgICAgICAgICAgIGxldCBpbmRlbnRlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBpZiAodGFnSW5kZXggPT09IDAgJiYgaW5kZW50YXRpb24pIHtcbiAgICAgICAgICAgICAgICBpbmRlbnRlZFZhbHVlID0gdGhpcy5pbmRlbnRQYXJ0aWFsKHZhbHVlLCBpbmRlbnRhdGlvbiwgbGluZUhhc05vblNwYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IHRoaXMucGFyc2UoaW5kZW50ZWRWYWx1ZSwgdGFncyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5zLCBjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50ZWRWYWx1ZSwgY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgdW5lc2NhcGVkVmFsdWUodG9rZW46IGFueVtdLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb25maWdFc2NhcGUoY29uZmlnOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiAhaXNBcnJheShjb25maWcpID8gY29uZmlnLmVzY2FwZSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGVzY2FwZWRWYWx1ZSh0b2tlbjogYW55W10sIGNvbnRleHQ6IGFueSwgY29uZmlnOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZXNjYXBlID0gdGhpcy5nZXRDb25maWdFc2NhcGUoY29uZmlnKSB8fCBCQVJCRS5lc2NhcGU7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGVzY2FwZSA9PT0gQkFSQkUuZXNjYXBlKSA/IFN0cmluZyh2YWx1ZSkgOiBlc2NhcGUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBCQVJCRSB7XG4gICAgcHVibGljIHN0YXRpYyB0YWdzID0gWyd7eycsICd9fSddO1xuICAgIHB1YmxpYyBzdGF0aWMgZXNjYXBlOiBhbnkgPSBlc2NhcGVIdG1sO1xuICAgIHB1YmxpYyBzdGF0aWMgU2Nhbm5lcjogYW55ID0gU2Nhbm5lcjtcbiAgICBwdWJsaWMgc3RhdGljIENvbnRleHQ6IGFueSA9IENvbnRleHQ7XG4gICAgcHVibGljIHN0YXRpYyBXcml0ZXI6IGFueSA9IFdyaXRlcjtcbiAgICBwdWJsaWMgbmFtZSA9ICdNWSBGKipLSU5HIE1VU1RBQ0hFIExJQlJBUlkgRk9SIEFOR1VMQVInO1xuICAgIHB1YmxpYyB2ZXJzaW9uID0gJ0VDTEFURVInO1xuICAgIHByaXZhdGUgX1dyaXRlcjogYW55ID0gbmV3IFdyaXRlcigpO1xuXG4gICAgZ2V0IHRlbXBsYXRlQ2FjaGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9Xcml0ZXIudGVtcGxhdGVDYWNoZTtcbiAgICB9XG5cbiAgICBzZXQgdGVtcGxhdGVDYWNoZShjYWNoZTogYW55KSB7XG4gICAgICAgIHRoaXMuX1dyaXRlci50ZW1wbGF0ZUNhY2hlID0gY2FjaGU7XG4gICAgfVxuXG4gICAgcHVibGljIHBhcnNlKHRlbXBsYXRlOiBhbnksIHRhZ3M6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fV3JpdGVyLnBhcnNlKHRlbXBsYXRlLCB0YWdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKHRlbXBsYXRlOiBhbnksIHZpZXc6IGFueSwgcGFydGlhbHM/OiBhbnksIGNvbmZpZz86IGFueSkge1xuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnICtcbiAgICAgICAgICAgICAgICAnYnV0IFwiJyArIHR5cGVTdHIodGVtcGxhdGUpICsgJ1wiIHdhcyBnaXZlbiBhcyB0aGUgZmlyc3QgJyArXG4gICAgICAgICAgICAgICAgJ2FyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX1dyaXRlci5yZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzLCBjb25maWcpO1xuICAgIH07XG5cblxuICAgIHB1YmxpYyBjbGVhckNhY2hlKCkge1xuICAgICAgICB0aGlzLl9Xcml0ZXIuY2xlYXJDYWNoZSgpO1xuICAgIH1cbn1cbiJdfQ==