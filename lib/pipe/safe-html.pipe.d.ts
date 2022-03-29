import { PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class SafeHtmlPipe implements PipeTransform {
    protected sanitizer: DomSanitizer;
    constructor(sanitizer: DomSanitizer);
    transform(value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SafeHtmlPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SafeHtmlPipe, "safeHtml">;
}
