export declare class BARBE {
    static tags: string[];
    static escape: any;
    static Scanner: any;
    static Context: any;
    static Writer: any;
    name: string;
    version: string;
    private _Writer;
    get templateCache(): any;
    set templateCache(cache: any);
    parse(template: any, tags: any): any;
    render(template: any, view: any, partials?: any, config?: any): any;
    clearCache(): void;
}
