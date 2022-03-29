/***********************************************************
 **  @project
 **  @file
 **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
 **  @Date 29/03/2022
 **  @Description
 ***********************************************************/
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
declare var mustache: {
    name: string;
    version: string;
    tags: string[];
    clearCache: any;
    escape: any;
    parse: any;
    render: any;
    Scanner: any;
    Context: any;
    Writer: any;
    /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */
    templateCache: any;
};
export { mustache };
