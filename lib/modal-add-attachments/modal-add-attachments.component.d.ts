import { OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { KonversoService } from '../konverso.service';
import * as i0 from "@angular/core";
export declare class ModalAddAttachmentsComponent implements OnInit {
    data: {
        data: {
            input: HTMLInputElement;
            documentList: Array<any>;
        };
    };
    service: KonversoService;
    private dialogRef;
    documentList: Array<any>;
    input: HTMLInputElement;
    displayText: any;
    constructor(data: {
        data: {
            input: HTMLInputElement;
            documentList: Array<any>;
        };
    }, service: KonversoService, dialogRef: MatDialogRef<ModalAddAttachmentsComponent>);
    ngOnInit(): void;
    deleteFile(file: any): void;
    sendAttachments(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalAddAttachmentsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalAddAttachmentsComponent, "modal-add-attachments", never, {}, {}, never, never, false>;
}
