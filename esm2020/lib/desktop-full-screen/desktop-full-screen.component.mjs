import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../translate.service";
import * as i2 from "../konverso.service";
import * as i3 from "@angular/common";
import * as i4 from "../first-visit/first-visit.component";
import * as i5 from "nowboard-icon";
import * as i6 from "@angular/forms";
import * as i7 from "../pipe/safe-html.pipe";
function DesktopFullScreenComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bot-first-visit", 3);
    i0.ɵɵlistener("ready", function DesktopFullScreenComponent_ng_container_2_Template_bot_first_visit_ready_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("firstUsageStory", ctx_r0.firstUsageStory)("assets", ctx_r0.assets);
} }
const _c0 = function (a0) { return { color: a0 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 19);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction1(4, _c0, ctx_r10.assets == null ? null : ctx_r10.assets.ColorSet == null ? null : ctx_r10.assets.ColorSet.Secondary));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r10.LastUserInput.message, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r10.LastUserInput.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_6_div_1_Template, 5, 6, "div", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.LastUserInput && (ctx_r6.LastUserInput == null ? null : ctx_r6.LastUserInput.message) != "");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 23);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r13.LastBotAnswer.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 24);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_span_1_Template, 2, 3, "span", 21);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_span_2_Template, 1, 0, "span", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r11.LastBotAnswer.text.includes("loading-dots") && ctx_r11.changed && ctx_r11.showText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.LastBotAnswer.text.includes("loading-dots"));
} }
const _c1 = function (a0, a1) { return { borderColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(2); const suggest_r16 = ctx_r23.$implicit; const i_r17 = ctx_r23.index; const ctx_r22 = i0.ɵɵnextContext(5); return ctx_r22.byPassUserInput(suggest_r16 == null ? null : suggest_r16.value == null ? null : suggest_r16.value.onClick, i_r17); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r16 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r19 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r19.assets == null ? null : ctx_r19.assets.ColorSet == null ? null : ctx_r19.assets.ColorSet.Primary, ctx_r19.assets == null ? null : ctx_r19.assets.ColorSet == null ? null : ctx_r19.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r16.label || (suggest_r16.value == null ? null : suggest_r16.value.displayedMessage) || (suggest_r16.value == null ? null : suggest_r16.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(2); const suggest_r16 = ctx_r27.$implicit; const i_r17 = ctx_r27.index; const ctx_r26 = i0.ɵɵnextContext(5); return ctx_r26.byPassUserInput(suggest_r16 == null ? null : suggest_r16.value == null ? null : suggest_r16.value.onClick, i_r17); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r16 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r20 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r20.assets == null ? null : ctx_r20.assets.ColorSet == null ? null : ctx_r20.assets.ColorSet.Primary, ctx_r20.assets == null ? null : ctx_r20.assets.ColorSet == null ? null : ctx_r20.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r16.label || (suggest_r16.value == null ? null : suggest_r16.value.displayedMessage) || (suggest_r16.value == null ? null : suggest_r16.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(2); const suggest_r16 = ctx_r31.$implicit; const i_r17 = ctx_r31.index; const ctx_r30 = i0.ɵɵnextContext(5); return ctx_r30.byPassUserInput(suggest_r16 == null ? null : suggest_r16.value == null ? null : suggest_r16.value.onClick, i_r17); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r16 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r21 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r21.assets == null ? null : ctx_r21.assets.ColorSet == null ? null : ctx_r21.assets.ColorSet.Primary, ctx_r21.assets == null ? null : ctx_r21.assets.ColorSet == null ? null : ctx_r21.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r16.label || (suggest_r16.value == null ? null : suggest_r16.value.displayedMessage) || (suggest_r16.value == null ? null : suggest_r16.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 26);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_2_Template, 1, 6, "button", 27);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_3_Template, 1, 6, "button", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r18 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r16.value == null ? null : suggest_r16.value.title) == "Terminer" && ctx_r18.changed || (suggest_r16.value == null ? null : suggest_r16.value.title) == "Quit" && ctx_r18.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r16.value == null ? null : suggest_r16.value.title) == "Nouvelle Demande" && ctx_r18.changed || (suggest_r16.value == null ? null : suggest_r16.value.title) == "New Request" && ctx_r18.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r16.value == null ? null : suggest_r16.value.title) && (suggest_r16.value == null ? null : suggest_r16.value.title) != "Terminer" && (suggest_r16.value == null ? null : suggest_r16.value.title) != "Quit" && (suggest_r16.value == null ? null : suggest_r16.value.title) != "Nouvelle Demande" && (suggest_r16.value == null ? null : suggest_r16.value.title) != "New Request" && ctx_r18.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r16.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r12.LastBotAnswer.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementContainer(2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_Template, 3, 2, "ng-container", 2);
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r7.LastBotAnswer.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.LastBotAnswer.medias && ctx_r7.LastBotAnswer.medias.length && ctx_r7.LastBotAnswer.medias[0].required_actions && ctx_r7.LastBotAnswer.medias[0].required_actions.length > 0 && !ctx_r7.LastBotAnswer.text.includes("loading-dots"));
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37)(2, "div", 38)(3, "button", 39);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(4); return ctx_r41.changeNumber(1); });
    i0.ɵɵelement(4, "nb-icon", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 41);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r42); const ctx_r43 = i0.ɵɵnextContext(4); return ctx_r43.changeNumber(-1); });
    i0.ɵɵelement(6, "nb-icon", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("icon", "up_2")("size", 1.5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", "down_2")("size", 1.5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r35.userInput, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "textarea", 42);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_2_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(4); return ctx_r44.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_2_Template_textarea_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(4); return ctx_r46.userInput && ctx_r46._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_2_Template_textarea_keyup_1_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r47 = i0.ɵɵnextContext(4); return ctx_r47.userWriting($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r36.userInput)("maxlength", ctx_r36.inputLimit)("placeholder", ctx_r36.currentPlaceHolder);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r37 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r37.sendBtnMsg, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r38 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r38.sendBtn, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_9_button_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵelement(1, "nb-icon", 40);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "scan_11")("size", 1.5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r39.btnScreen, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_9_button_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "nb-icon", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r40.nbAttachments, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "attachment")("size", 1.5);
} }
const _c2 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_1_Template, 8, 5, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_2_Template, 2, 3, "ng-container", 2);
    i0.ɵɵelementStart(3, "div", 33)(4, "button", 34);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_div_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r49); const ctx_r48 = i0.ɵɵnextContext(3); return ctx_r48._send(); });
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_5_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(6, DesktopFullScreenComponent_ng_container_3_div_2_div_9_ng_container_6_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_2_div_9_button_7_Template, 3, 3, "button", 35);
    i0.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_2_div_9_button_8_Template, 3, 3, "button", 36);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.inputType === "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.inputType === "text");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(9, _c2, ctx_r8.assets == null ? null : ctx_r8.assets.ColorSet == null ? null : ctx_r8.assets.ColorSet.Primary, ctx_r8.assets == null ? null : ctx_r8.assets.ColorSet == null ? null : ctx_r8.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r8.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.inputType !== "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.inputType === "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.inputType !== "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.inputType !== "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r9.select);
} }
const _c3 = function () { return { "height": "40%" }; };
function DesktopFullScreenComponent_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
    i0.ɵɵelement(2, "div", 9)(3, "div", 10)(4, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 12);
    i0.ɵɵtemplate(6, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_6_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template, 5, 2, "ng-container", 2);
    i0.ɵɵelementStart(8, "div", 13);
    i0.ɵɵtemplate(9, DesktopFullScreenComponent_ng_container_3_div_2_div_9_Template, 9, 12, "div", 14);
    i0.ɵɵtemplate(10, DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template, 3, 1, "div", 15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(5, _c3));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r4.LastUserInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.LastBotAnswer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r4.disableUserInput && ctx_r4.showInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.disableUserInput);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17)(2, "div", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 19);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r54 = i0.ɵɵnextContext().$implicit;
    const ctx_r55 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c2, ctx_r55.assets == null ? null : ctx_r55.assets.ColorSet == null ? null : ctx_r55.assets.ColorSet.Primary, ctx_r55.assets == null ? null : ctx_r55.assets.ColorSet == null ? null : ctx_r55.assets.ColorSet.Secondary));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", entry_r54.message, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r54.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 55);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const entry_r54 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, entry_r54.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template, 2, 3, "span", 54);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r58 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r58.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 57);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r68); const suggest_r63 = i0.ɵɵnextContext(2).$implicit; const ctx_r66 = i0.ɵɵnextContext(6); return ctx_r66.byPassUserInput(suggest_r63 == null ? null : suggest_r63.value == null ? null : suggest_r63.value.onClick); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r63 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r65 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r65.assets == null ? null : ctx_r65.assets.ColorSet == null ? null : ctx_r65.assets.ColorSet.Primary, ctx_r65.assets == null ? null : ctx_r65.assets.ColorSet == null ? null : ctx_r65.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r63.label || (suggest_r63.value == null ? null : suggest_r63.value.displayedMessage) || (suggest_r63.value == null ? null : suggest_r63.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 56);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r64 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r64.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r63 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r63.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r54 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", entry_r54.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 53);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r54 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", entry_r54.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r54.medias && entry_r54.medias.length && entry_r54.medias[0].required_actions && entry_r54.medias[0].required_actions.length);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template, 6, 7, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r54 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r54.date);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !entry_r54.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r74); const ctx_r73 = i0.ɵɵnextContext(4); return ctx_r73._send(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r72 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c2, ctx_r72.assets == null ? null : ctx_r72.assets.ColorSet == null ? null : ctx_r72.assets.ColorSet.Primary, ctx_r72.assets == null ? null : ctx_r72.assets.ColorSet == null ? null : ctx_r72.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r72.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r72.sendBtn, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 58)(1, "input", 59);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r76); const ctx_r75 = i0.ɵɵnextContext(3); return ctx_r75.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r76); const ctx_r77 = i0.ɵɵnextContext(3); return ctx_r77.userInput && ctx_r77._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r76); const ctx_r78 = i0.ɵɵnextContext(3); return ctx_r78.userWriting($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template, 2, 7, "button", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r52 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r52.userInput)("placeholder", ctx_r52.currentPlaceHolder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r52.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r53 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r53.select);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "div", 47, 48)(4, "div", 49);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template, 3, 2, "ng-container", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template, 3, 3, "div", 50);
    i0.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template, 3, 1, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 51);
    i0.ɵɵelement(10, "img", 52);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r50 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.AssistantMode, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("scrollTop", _r50.scrollTo(0, 9999999));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r5.displayData);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r5.disableUserInput && ctx_r5.showInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.disableUserInput);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r5.assets.FullSizeLogo, i0.ɵɵsanitizeUrl);
} }
function DesktopFullScreenComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 4);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r80); const ctx_r79 = i0.ɵɵnextContext(); return ctx_r79.byPassUserInput("exit", 0); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_Template, 11, 6, "div", 5);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_Template, 11, 6, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.AssistantMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.AssistantMode);
} }
const _c4 = function () { return { "background-color": "#100652 0% 0% no-repeat padding-box;" }; };
const defaultInputType = 'text';
const defaultInputLimit = 300;
export class DesktopFullScreenComponent {
    constructor(translate, service) {
        this.service = service;
        this.AssistantMode = false;
        this.firstVisit = false;
        this.IsMobile = false;
        this.readySend = new EventEmitter(false);
        this.send = new EventEmitter(null);
        this.sendBotCommand = new EventEmitter(null);
        this.sendEvent = new EventEmitter(null);
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
        service.lang.subscribe((r) => {
            if (service.locale) {
                this.sendBtn = translate.translate(service.locale, 'SEND');
                this.sendBtnMsg = translate.translate(service.locale, 'SEND_MESSAGE');
                this.select = translate.translate(service.locale, 'SELECT');
                this.btnScreen = translate.translate(service.locale, 'SCREENSHOT');
            }
        });
    }
    changeNumber(value) {
        if ((+this.userInput + value) > 0) {
            this.userInput = (+this.userInput + value).toString();
        }
    }
    ngOnChanges() {
        let t = setInterval(() => {
            if (document.querySelectorAll('.bot-answer')) {
                let elems = document.querySelectorAll('.bot-answer');
                if (elems.length > 0) {
                    let index = 0, length = elems.length;
                    let rep = true;
                    for (; index < length; index++) {
                        let temp = elems[index];
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
        }, 100);
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
        let t = setInterval(() => {
            if (document.querySelectorAll('.bot-answer')) {
                let elems = document.querySelectorAll('.bot-answer');
                if (elems.length > 0) {
                    let index = 0, length = elems.length;
                    let rep = true;
                    for (; index < length; index++) {
                        let temp = elems[index];
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
        }, 100);
        //run.run();
        setInterval(() => {
            if (this.botListeningTimer > 0) {
                this.botListeningTimer -= 1;
                if (this.botListeningTimer > 0) {
                    document.getElementById('bot').className = 'a-cue-voice speaking';
                    document.getElementById('bot-icon').className = 'a-cue-icon speakingicon';
                }
                else {
                    document.getElementById('bot').className = 'a-cue-voice';
                    document.getElementById('bot-icon').className = 'a-cue-icon';
                }
                this.botListening = this.botListeningTimer > 0;
            }
        }, 500);
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
        /*const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.show-btn');
        for (let btn of Array.from(buttons)) {
          btn.classList.add('hidden-btn');
        }*/
        const buttons = document.querySelectorAll('.bot-answer');
        for (let btn of Array.from(buttons)) {
            btn.classList.add('hidden-btn');
        }
        this.sendBotCommand.emit(botdata);
        setTimeout(() => {
            const buttons = document.querySelectorAll('.bot-answer');
            for (let btn of Array.from(buttons)) {
                btn.classList.remove('hidden-btn');
            }
        }, 1000);
    }
}
DesktopFullScreenComponent.ɵfac = function DesktopFullScreenComponent_Factory(t) { return new (t || DesktopFullScreenComponent)(i0.ɵɵdirectiveInject(i1.TranslateService), i0.ɵɵdirectiveInject(i2.KonversoService)); };
DesktopFullScreenComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile", showInput: "showInput", NumberPlaceHolder: "NumberPlaceHolder" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], ["id", "exit-btn", 2, "display", "none", 3, "click"], ["class", "bot-assistant-wrapper", 4, "ngIf"], ["class", "bot-chat-wrapper", 4, "ngIf"], [1, "bot-assistant-wrapper"], [1, "bot", 3, "ngStyle"], [1, "circle1", "hidden"], [1, "circle2", "hidden"], [1, "circle3", "hidden"], [1, "bot-discussion-wrapper", 2, "min-height", "60%", "max-height", "60%", "height", "60%", "/*max-height", "120px"], [1, "bot-input-wrapper"], ["class", "bot-input", "id", "bot-input-div", 4, "ngIf"], ["class", "bot-input-disable", 4, "ngIf"], ["class", "user-input", 4, "ngIf"], [1, "user-input"], [1, "data"], [1, "time"], [1, "bot-answer", "hidden"], ["class", "fade", 3, "innerHTML", 4, "ngIf"], ["class", "fade", "id", "loading-creation", 4, "ngIf"], [1, "fade", 3, "innerHTML"], ["id", "loading-creation", 1, "fade"], [4, "ngFor", "ngForOf"], ["class", "bot-button bot-button-left show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-right show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-grey show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "bot-button-left", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-right", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-grey", "show-btn", 3, "innerHTML", "click"], ["id", "bot-input-div", 1, "bot-input"], [1, "bot-container-btn"], [1, "bot-button", "send-btn", "in", 3, "disabled", "click"], ["class", "bot-button-screen hidden", 4, "ngIf"], ["class", "bot-button-attach hidden", 4, "ngIf"], [1, "input-number-div"], [1, "input-number-div-arrow"], [1, "arrow-up", 3, "click"], [3, "icon", "size"], [1, "arrow-down", 3, "click"], [1, "hidden", 3, "ngModel", "maxlength", "placeholder", "ngModelChange", "keyup.enter", "keyup"], [1, "bot-button-screen", "hidden"], [1, "bot-button-attach", "hidden"], [1, "bot-input-disable"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper", 3, "scrollTop"], ["scrollMe", ""], [1, "bot-chat"], ["class", "bot-input", 4, "ngIf"], [1, "bot-logo"], [3, "src"], [1, "bot-answer"], ["class", "", 3, "innerHTML", 4, "ngIf"], [1, "", 3, "innerHTML"], ["class", "bot-button", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", 3, "innerHTML", "click"], [1, "bot-input"], ["type", "text", "maxlength", "200", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter", "keyup"], ["class", "bot-button", 3, "style", "disabled", "click", 4, "ngIf"], [1, "bot-button", 3, "disabled", "click"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(6, _c4));
        i0.ɵɵclassMap(ctx.IsMobile ? "bot-mobile" : "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.firstVisit && ctx.firstUsageStory);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.firstVisit || !ctx.firstUsageStory);
    } }, directives: [i3.NgIf, i4.FirstVisitComponent, i3.NgStyle, i3.NgForOf, i5.NowboardIconComponent, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i6.MaxLengthValidator], pipes: [i7.SafeHtmlPipe], styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:transparent}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification[_ngcontent-%COMP%]{transform:translate(0)!important}}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9A147F!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4E5CA8!important}.voice4[_ngcontent-%COMP%]{background:#ABC1F1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{animation:pulse 2s ease 0s infinite}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DesktopFullScreenComponent, [{
        type: Component,
        args: [{ selector: 'bot-full-screen', template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n\n  <!--<canvas class=\"orb-canvas\"></canvas>\n  <div class=\"overlay\">\n    <div class=\"overlay__inner\">\n    </div>\n  </div>-->\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\n\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>-->\n        <!--<div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\n                <div class=\"a-cue-voice-el voice1\"></div>\n                <div class=\"a-cue-voice-el voice2\"></div>\n                <div class=\"a-cue-voice-el voice3\"></div>\n                <div class=\"a-cue-voice-el voice4\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\n            </div>\n          </div>\n        </div>-->\n        <div [ngStyle]=\"{'height': '40%'}\" class=\"bot\">\n          <div class=\"circle1 hidden\"></div>\n          <div class=\"circle2 hidden\"></div>\n          <div class=\"circle3 hidden\"></div>\n        </div>\n        <div class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\n          <ng-container *ngIf=\"LastUserInput\">\n            <div class=\"user-input\" *ngIf=\"LastUserInput && LastUserInput?.message != ''\">\n              <div class=\"data\" [style]=\"{\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                {{LastUserInput.message}}\n              </div>\n              <span class=\"time\">{{LastUserInput.date}}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"bot-answer hidden\">\n              <ng-container>\n\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.text\">\n                <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\n                <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n                -->\n                <span *ngIf=\"!LastBotAnswer.text.includes('loading-dots') && changed && showText\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\n                <span *ngIf=\"LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" id=\"loading-creation\"></span>\n                <!--<br>-->\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                   && LastBotAnswer.medias[0].required_actions\n                   && LastBotAnswer.medias[0].required_actions.length > 0\n                   && !LastBotAnswer.text.includes('loading-dots')\">\n                <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                  <ng-container *ngIf=\"suggest.format === 'button'\"  >\n                    <button *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\"\n                    [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\"  class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                            [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n            </div>\n          </ng-container>\n          <div class=\"bot-input-wrapper\">\n            <div class=\"bot-input\" id=\"bot-input-div\" *ngIf=\"!disableUserInput && showInput\">\n              <ng-container *ngIf=\"inputType === 'number'\">\n                <!--<input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" min=\"2\" [max]=\"inputLimit\"\n                       [placeholder]=\"currentPlaceHolder\">-->\n                <div class=\"input-number-div\">\n                  <div class=\"input-number-div-arrow\">\n                    <button (click)=\"changeNumber(1)\" class=\"arrow-up\">\n                      <nb-icon [icon]=\"'up_2'\" [size]=\"1.5\"></nb-icon>\n                    </button>\n\n                    <button (click)=\"changeNumber(-1)\" class=\"arrow-down\">\n                      <nb-icon [icon]=\"'down_2'\" [size]=\"1.5\"></nb-icon>\n                    </button>\n                  </div>\n\n                  {{ userInput }}\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"inputType === 'text'\">\n                <textarea [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" [maxlength]=\"inputLimit\"\n                  [placeholder]=\"currentPlaceHolder\" class=\"hidden\"></textarea>\n              </ng-container>\n\n              <div class=\"bot-container-btn\">\n                <button class=\"bot-button send-btn in\" [style]=\"{\n                  backgroundColor : assets?.ColorSet?.Primary,\n                  color : assets?.ColorSet?.Secondary\n              }\" (click)=\"_send()\" [disabled]=\"!userInput\">\n              \n                  <ng-container *ngIf=\"inputType !== 'number'\">\n                    {{ sendBtnMsg }}\n                  </ng-container>\n\n                  <ng-container *ngIf=\"inputType === 'number'\">\n                    {{ sendBtn }}\n                  </ng-container>\n                </button>\n\n                <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-screen hidden\">\n                  <nb-icon [icon]=\"'scan_11'\" [size]=\"1.5\"></nb-icon>\n                  {{ btnScreen }}\n                </button>\n\n                <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-attach hidden\">\n                  {{ nbAttachments }}\n                  <nb-icon [icon]=\"'attachment'\" [size]=\"1.5\"></nb-icon>\n                </button>\n              </div>\n            </div>\n            <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n              <i>{{ select }}</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                    {{entry.message}}\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"\" [innerHTML]=\"entry.text | safeHtml\"></span>\n                    <!--<br>-->\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n", styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}\n"] }]
    }], function () { return [{ type: i1.TranslateService }, { type: i2.KonversoService }]; }, { AssistantMode: [{
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
        }], readySend: [{
            type: Output
        }], send: [{
            type: Output
        }], sendBotCommand: [{
            type: Output
        }], sendEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUNVcEYsNkJBQW9EO0lBQ2xELDBDQUN3QztJQUF2QiwrTEFBUyxtQkFBWSxJQUFDO0lBQUMsaUJBQWtCO0lBQzVELDBCQUFlOzs7SUFGSSxlQUFtQztJQUFuQyx3REFBbUMseUJBQUE7Ozs7SUErQjlDLCtCQUE4RSxjQUFBO0lBSTFFLFlBQ0Y7SUFBQSxpQkFBTTtJQUNOLGdDQUFtQjtJQUFBLFlBQXNCO0lBQUEsaUJBQU8sRUFBQTs7O0lBTDlCLGVBRVY7SUFGVSxxSkFFVjtJQUNOLGVBQ0Y7SUFERSw4REFDRjtJQUNtQixlQUFzQjtJQUF0QixnREFBc0I7OztJQVA3Qyw2QkFBb0M7SUFDbEMsZ0hBT007SUFDUiwwQkFBZTs7O0lBUlksZUFBbUQ7SUFBbkQseUhBQW1EOzs7SUFrQnhFLDJCQUFrSjs7OztJQUFuRCwrRkFBMkM7OztJQUMxSSwyQkFBb0c7OztJQUx0Ryw2QkFBeUM7SUFJdkMsaUlBQWtKO0lBQ2xKLGlJQUFvRztJQUV0RywwQkFBZTs7O0lBSE4sZUFBeUU7SUFBekUsa0hBQXlFO0lBQ3pFLGVBQWlEO0lBQWpELDBFQUFpRDs7Ozs7SUFTcEQsa0NBSWdHO0lBRHZELHVXQUFTLHlIQUEyQyxJQUFDO0lBRTlGLGlCQUFTOzs7O0lBTGtHLDZQQUdoSDtJQUNjLDJNQUFzRjs7OztJQUUvRixrQ0FJZ0c7SUFEdEQsdVdBQVMseUhBQTJDLElBQUM7SUFFL0YsaUJBQVM7Ozs7SUFMaUgsNlBBRy9IO0lBQ2MsMk1BQXNGOzs7O0lBRS9GLGtDQUsrRjtJQUR2RCx1V0FBUyx5SEFBMkMsSUFBQztJQUU3RixpQkFBUzs7OztJQUxULDZQQUdOO0lBQ2MsMk1BQXNGOzs7SUFsQmhHLDZCQUFvRDtJQUNsRCxtS0FLUztJQUNULG1LQUtTO0lBQ1QsbUtBTVM7SUFDWCwwQkFBZTs7OztJQW5CSixlQUFnRztJQUFoRyxpTkFBZ0c7SUFNaEcsZUFBK0c7SUFBL0csZ09BQStHO0lBTS9HLGVBQW9NO0lBQXBNLHFhQUFvTTs7O0lBZGpOLDZCQUE4RjtJQUM1RiwrSkFvQmU7SUFDakIsMEJBQWU7OztJQXJCRSxlQUFpQztJQUFqQyxzREFBaUM7OztJQUxwRCw2QkFHc0Q7SUFDcEQsaUpBc0JlO0lBQ2pCLDBCQUFlOzs7SUF2QnFCLGVBQTZDO0lBQTdDLDBFQUE2Qzs7O0lBakJyRiw2QkFBb0M7SUFDbEMsK0JBQStCO0lBQzdCLHdCQUVlO0lBQ2YsaUlBT2U7SUFDZixpSUEyQmU7SUFFakIsaUJBQU07SUFDUiwwQkFBZTs7O0lBdENJLGVBQXdCO0lBQXhCLGdEQUF3QjtJQVF4QixlQUdxQztJQUhyQyxnUUFHcUM7Ozs7SUE4QnBELDZCQUE2QztJQUczQywrQkFBOEIsY0FBQSxpQkFBQTtJQUVsQiw4TUFBUyxxQkFBYSxDQUFDLENBQUMsSUFBQztJQUMvQiw4QkFBZ0Q7SUFDbEQsaUJBQVM7SUFFVCxrQ0FBc0Q7SUFBOUMsOE1BQVMsc0JBQWMsQ0FBQyxDQUFDLElBQUM7SUFDaEMsOEJBQWtEO0lBQ3BELGlCQUFTLEVBQUE7SUFHWCxZQUNGO0lBQUEsaUJBQU07SUFDUiwwQkFBZTs7O0lBVkUsZUFBZTtJQUFmLDZCQUFlLGFBQUE7SUFJZixlQUFpQjtJQUFqQiwrQkFBaUIsYUFBQTtJQUk5QixlQUNGO0lBREUsa0RBQ0Y7Ozs7SUFFRiw2QkFBMkM7SUFDekMsb0NBQ29EO0lBRDFDLG9RQUF1QixvT0FBNkIsZUFBTyxJQUFwQyx5TUFBK0MsMkJBQW1CLElBQWxFO0lBQ21CLGlCQUFXO0lBQ2pFLDBCQUFlOzs7SUFGSCxlQUF1QjtJQUF2QiwyQ0FBdUIsaUNBQUEsMkNBQUE7OztJQVUvQiw2QkFBNkM7SUFDM0MsWUFDRjtJQUFBLDBCQUFlOzs7SUFEYixlQUNGO0lBREUsbURBQ0Y7OztJQUVBLDZCQUE2QztJQUMzQyxZQUNGO0lBQUEsMEJBQWU7OztJQURiLGVBQ0Y7SUFERSxnREFDRjs7O0lBR0Ysa0NBQXdFO0lBQ3RFLDhCQUFtRDtJQUNuRCxZQUNGO0lBQUEsaUJBQVM7OztJQUZFLGVBQWtCO0lBQWxCLGdDQUFrQixhQUFBO0lBQzNCLGVBQ0Y7SUFERSxrREFDRjs7O0lBRUEsa0NBQXdFO0lBQ3RFLFlBQ0E7SUFBQSw4QkFBc0Q7SUFDeEQsaUJBQVM7OztJQUZQLGVBQ0E7SUFEQSxzREFDQTtJQUFTLGVBQXFCO0lBQXJCLG1DQUFxQixhQUFBOzs7OztJQTdDcEMsK0JBQWlGO0lBQy9FLHdIQWdCZTtJQUNmLHdIQUdlO0lBRWYsK0JBQStCLGlCQUFBO0lBSTVCLCtMQUFTLGVBQU8sSUFBQztJQUVoQix3SEFFZTtJQUVmLHdIQUVlO0lBQ2pCLGlCQUFTO0lBRVQsNkdBR1M7SUFFVCw2R0FHUztJQUNYLGlCQUFNLEVBQUE7OztJQTlDUyxlQUE0QjtJQUE1QixvREFBNEI7SUFpQjVCLGVBQTBCO0lBQTFCLGtEQUEwQjtJQU1BLGVBR3ZDO0lBSHVDLHlQQUd2QztJQUFtQiw0Q0FBdUI7SUFFekIsZUFBNEI7SUFBNUIsb0RBQTRCO0lBSTVCLGVBQTRCO0lBQTVCLG9EQUE0QjtJQUtwQyxlQUE0QjtJQUE1QixvREFBNEI7SUFLNUIsZUFBNEI7SUFBNUIsb0RBQTRCOzs7SUFNekMsK0JBQXdELFFBQUE7SUFDbkQsWUFBWTtJQUFBLGlCQUFJLEVBQUE7OztJQUFoQixlQUFZO0lBQVosbUNBQVk7Ozs7SUFqSXZCLDhCQUF5RCxhQUFBO0lBbUJyRCx5QkFBa0MsY0FBQSxjQUFBO0lBR3BDLGlCQUFNO0lBQ04sK0JBQWtIO0lBQ2hILGtIQVNlO0lBQ2Ysa0hBMkNlO0lBQ2YsK0JBQStCO0lBQzdCLGtHQWdETTtJQUNOLG1HQUVNO0lBQ1IsaUJBQU0sRUFBQSxFQUFBOzs7SUFqSEgsZUFBNkI7SUFBN0Isb0RBQTZCO0lBTWpCLGVBQW1CO0lBQW5CLDJDQUFtQjtJQVVuQixlQUFtQjtJQUFuQiwyQ0FBbUI7SUE2Q1csZUFBb0M7SUFBcEMsbUVBQW9DO0lBaUQvQyxlQUFzQjtJQUF0Qiw4Q0FBc0I7OztJQVlwRCw2QkFBaUM7SUFDL0IsK0JBQXdCLGNBQUE7SUFLcEIsWUFDRjtJQUFBLGlCQUFNO0lBQ04sZ0NBQW1CO0lBQUEsWUFBYztJQUFBLGlCQUFPLEVBQUE7SUFFNUMsMEJBQWU7Ozs7SUFSTyxlQUdkO0lBSGMsK1BBR2Q7SUFDRixlQUNGO0lBREUsa0RBQ0Y7SUFDbUIsZUFBYztJQUFkLG9DQUFjOzs7SUFNL0IsMkJBQTBFOzs7O0lBQTNDLG1GQUFtQzs7O0lBRHBFLDZCQUFpQztJQUMvQixnSkFBMEU7SUFFNUUsMEJBQWU7OztJQUZOLGVBQWE7SUFBYixzQ0FBYTs7OztJQVFoQixrQ0FJK0Y7SUFEckYsZ1VBQVMsa0hBQXdDLElBQUM7SUFDbUMsaUJBQVM7Ozs7SUFKaEYsNlBBR2xDO0lBQ2tCLDJNQUFzRjs7O0lBTGhHLDZCQUFrRDtJQUNoRCxrTEFJd0c7SUFDMUcsMEJBQWU7OztJQUxKLGVBQWE7SUFBYixzQ0FBYTs7O0lBRjFCLDZCQUF1RTtJQUNyRSw4S0FNZTtJQUNqQiwwQkFBZTs7O0lBUEUsZUFBaUM7SUFBakMsc0RBQWlDOzs7SUFKcEQsNkJBRTZDO0lBQzNDLGdLQVFlO0lBQ2pCLDBCQUFlOzs7SUFUcUIsZUFBbUM7SUFBbkMsOERBQW1DOzs7SUFUM0UsNkJBQWtDO0lBQ2hDLCtCQUF3QjtJQUN0QixnSkFHZTtJQUNmLGdKQVllO0lBRWpCLGlCQUFNO0lBQ1IsMEJBQWU7OztJQW5CSSxlQUFnQjtJQUFoQixxQ0FBZ0I7SUFJaEIsZUFFNEI7SUFGNUIseUpBRTRCOzs7SUFwQmpELDZCQUFnRDtJQUM5QyxpSUFVZTtJQUNmLGlJQXFCZTtJQUNqQiwwQkFBZTs7O0lBakNFLGVBQWdCO0lBQWhCLHFDQUFnQjtJQVdoQixlQUFpQjtJQUFqQixzQ0FBaUI7Ozs7SUE2QmxDLGtDQUc2QztJQUExQyx3TUFBUyxlQUFPLElBQUM7SUFBeUIsWUFDN0M7SUFBQSxpQkFBUzs7O0lBSmtDLCtQQUd6QztJQUFtQiw2Q0FBdUI7SUFBQyxlQUM3QztJQUQ2QywrQ0FDN0M7Ozs7SUFQRiwrQkFBOEQsZ0JBQUE7SUFDekMsa1BBQXVCLGtOQUE2QixlQUFPLElBQXBDLHVMQUErQywyQkFBbUIsSUFBbEU7SUFBMUMsaUJBQzBDO0lBQzFDLDZHQUlTO0lBQ1gsaUJBQU07OztJQVBlLGVBQXVCO0lBQXZCLDJDQUF1QiwyQ0FBQTtJQUVqQyxlQUFhO0lBQWIsc0NBQWE7OztJQU14QiwrQkFBd0QsUUFBQTtJQUNuRCxZQUFZO0lBQUEsaUJBQUksRUFBQTs7O0lBQWhCLGVBQVk7SUFBWixvQ0FBWTs7O0lBckRyQiwrQkFBcUQ7SUFDbkQsWUFDQTtJQUFBLG1DQUEwRixjQUFBO0lBR3RGLG1IQWtDZTtJQUNqQixpQkFBTSxFQUFBO0lBRVIsK0JBQStCO0lBQzdCLGlHQVFNO0lBQ04saUdBRU07SUFDUixpQkFBTTtJQUNOLCtCQUFzQjtJQUNwQiwyQkFBaUM7SUFDbkMsaUJBQU0sRUFBQTs7OztJQXpETixlQUNBO0lBREEscURBQ0E7SUFBOEMsZUFBMkM7SUFBM0MscURBQTJDO0lBR3JELGVBQWM7SUFBZCw0Q0FBYztJQXNDeEIsZUFBb0M7SUFBcEMsbUVBQW9DO0lBUzVCLGVBQXNCO0lBQXRCLDhDQUFzQjtJQUtqRCxlQUEyQjtJQUEzQixrRUFBMkI7Ozs7SUFsTXRDLDZCQUFzRDtJQUNwRCxpQ0FBa0Y7SUFBMUUsa0xBQVMsd0JBQWdCLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBQztJQUFzQyxpQkFBUztJQUUzRiwyRkFxSU07SUFDTiwyRkEyRE07SUFDUiwwQkFBZTs7O0lBbE11QixlQUFtQjtJQUFuQiwyQ0FBbUI7SUFzSXhCLGVBQW9CO0lBQXBCLDRDQUFvQjs7O0FEaEp6RCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztBQUNoQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztBQU85QixNQUFNLE9BQU8sMEJBQTBCO0lBNkNuQyxZQUFZLFNBQTJCLEVBQVUsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUE1Q2hFLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFPNUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUl6QixjQUFTLEdBQTBCLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLFNBQUksR0FBNEIsSUFBSSxZQUFZLENBQVksSUFBSSxDQUFDLENBQUM7UUFDbEUsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDdEUsY0FBUyxHQUF5QixJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUVwRSx1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFDaEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQVcsZ0JBQWdCLENBQUM7UUFDckMsZUFBVSxHQUFXLGlCQUFpQixDQUFDO1FBQ3RDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFbEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBU3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBQ3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQzthQUN0RTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWZELFlBQVksQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekQ7SUFDTCxDQUFDO0lBYUQsV0FBVztRQUNQLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDckIsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDckQsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUNyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ2YsT0FBTyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO3dCQUM1QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFnQixDQUFDO3dCQUN2QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRTs0QkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO3lCQUM1QjtxQkFDSjtvQkFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztvQkFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNoQixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3BCO2lCQUNKO2FBQ0o7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUVyQixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdkYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQ2xEO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDL0gsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ2pHLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDL0c7YUFBTTtZQUNILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoRyxJQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUM7U0FDdkM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUN4RixrQ0FBa0M7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxFQUFFLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzVGLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDbEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJO3lCQUNsQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt5QkFDeEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7eUJBQzNCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3lCQUMzQixPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQzt5QkFDekIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxFQUFFO3dCQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7d0JBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztxQkFDckI7b0JBQ0QsNEJBQTRCO2lCQUMvQjtZQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNYO2FBQU07WUFDSCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUk7aUJBQ2xDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUN4QixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDM0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7aUJBQzNCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO2lCQUN6QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTlCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxJQUFJLE1BQU0sS0FBSyxFQUFFLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO1NBQ0o7UUFFRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDeEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELFVBQVU7UUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzNCLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDakMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2lCQUNsRDtnQkFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsZ0RBQWdEO2dCQUNoRCxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckI7WUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUMsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNqQyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3RFO1NBQ0osQ0FBQTs7U0FFQTtRQUNEOztpQkFFUztJQUNiLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEcsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDYixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7UUFFRDs7Ozs7O21CQU1XO1FBRVgsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNyQixJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNsQixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7b0JBQ3JDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztvQkFDZixPQUFPLEtBQUssR0FBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7d0JBQzVCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQWdCLENBQUM7d0JBQ3ZDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksR0FBRyxFQUFFOzRCQUMzQixHQUFHLEdBQUcsS0FBSyxDQUFDO3lCQUNmO3FCQUNKO29CQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO29CQUNyQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2hCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0o7YUFDSjtRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLFlBQVk7UUFFWixXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDO2dCQUU1QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7b0JBQzVCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO29CQUNsRSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsR0FBRyx5QkFBeUIsQ0FBQztpQkFDN0U7cUJBQU07b0JBQ0gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO29CQUN6RCxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7aUJBQ2hFO2dCQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQzthQUNsRDtRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxXQUFXLENBQUMsR0FBUTtRQUNoQixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7U0FDOUI7YUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO1NBRXBDO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDLENBQUM7YUFDL0I7aUJBQU0sSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDO2FBQy9CO1NBQ0o7SUFDTCxDQUFDO0lBRU0sSUFBSSxDQUFDLE1BQU07UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sS0FBSztRQUNSLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0RCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixNQUFNLFFBQVEsR0FBYztZQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDdkIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtnQkFDcEQsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsTUFBTSxFQUFFLFNBQVM7YUFDcEIsQ0FBQztTQUNMLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFvQjtRQUM3QixPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbkMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxlQUFlLENBQUMsT0FBZSxFQUFFLENBQVU7UUFDdkM7OztXQUdHO1FBQ0gsTUFBTSxPQUFPLEdBQTRCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRixLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osTUFBTSxPQUFPLEdBQTRCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsRixLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ2pDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3RDO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7b0dBblNRLDBCQUEwQjs2RUFBMUIsMEJBQTBCO1FDUnJDLDhCQUN1QyxhQUFBO1FBRXJDLDZGQUdlO1FBQ2YsNkZBcU1lO1FBRWpCLGlCQUFNLEVBQUE7O1FBOU02RCx5Q0FBdUU7UUFBOUcsK0NBQXNDO1FBR2pELGVBQW1DO1FBQW5DLDREQUFtQztRQUluQyxlQUFxQztRQUFyQyw4REFBcUM7O3VGREMzQywwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDSSxpQkFBaUI7aUdBS2xCLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUVJLFNBQVM7a0JBQWxCLE1BQU07WUFDRyxJQUFJO2tCQUFiLE1BQU07WUFDRyxjQUFjO2tCQUF2QixNQUFNO1lBQ0csU0FBUztrQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdEFzc2V0cywgT3BlbkNoYXRCb3RSZXNwb25zZSwgVXNlcklucHV0fSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuaW1wb3J0IHtLb252ZXJzb1NlcnZpY2V9IGZyb20gJy4uL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuLi90cmFuc2xhdGUuc2VydmljZSc7XG4vL2ltcG9ydCAqIGFzIHJ1biBmcm9tICdwcm9qZWN0cy9rb252ZXJzby9hc3NldHMvYW5pbWF0ZWRiYWNrLmpzJztcbi8vaW1wb3J0IHtLYXdhc2VCbHVyRmlsdGVyfSBmcm9tIFwiLi4vLi4vZmlsdGVycy9rYXdhc2UtYmx1ci9zcmMvS2F3YXNlQmx1ckZpbHRlclwiO1xuZGVjbGFyZSB2YXIgUElYSTogYW55O1xuY29uc3QgZGVmYXVsdElucHV0VHlwZSA9ICd0ZXh0JztcbmNvbnN0IGRlZmF1bHRJbnB1dExpbWl0ID0gMzAwO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2JvdC1mdWxsLXNjcmVlbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAgIEBJbnB1dCgpIEFzc2lzdGFudE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gICAgQElucHV0KCkgZmlyc3RWaXNpdDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gICAgQElucHV0KCkgZGlzcGxheURhdGE6IChVc2VySW5wdXQgfCBPcGVuQ2hhdEJvdFJlc3BvbnNlKVtdO1xuICAgIEBJbnB1dCgpIGRpc2FibGVVc2VySW5wdXQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgTGFzdFVzZXJJbnB1dDogVXNlcklucHV0O1xuICAgIEBJbnB1dCgpIExhc3RCb3RBbnN3ZXI6IE9wZW5DaGF0Qm90UmVzcG9uc2U7XG4gICAgQElucHV0KCkgUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuICAgIEBJbnB1dCgpIElzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2hvd0lucHV0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIE51bWJlclBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcblxuICAgIEBPdXRwdXQoKSByZWFkeVNlbmQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICAgIEBPdXRwdXQoKSBzZW5kOiBFdmVudEVtaXR0ZXI8VXNlcklucHV0PiA9IG5ldyBFdmVudEVtaXR0ZXI8VXNlcklucHV0PihudWxsKTtcbiAgICBAT3V0cHV0KCkgc2VuZEJvdENvbW1hbmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KG51bGwpO1xuICAgIEBPdXRwdXQoKSBzZW5kRXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KG51bGwpO1xuICAgIHB1YmxpYyB1c2VySW5wdXQ6IHN0cmluZztcbiAgICBwdWJsaWMgY3VycmVudFBsYWNlSG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgICBwdWJsaWMgc2VuZEJ0biA9ICcnO1xuICAgIHB1YmxpYyBzZW5kQnRuTXNnID0gJyc7XG4gICAgcHVibGljIHNlbGVjdCA9ICcnO1xuICAgIHB1YmxpYyBjaGFuZ2VkID0gZmFsc2U7XG4gICAgcHVibGljIGJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgIHB1YmxpYyBzaG93V3JhcHBlciA9IHRydWU7XG4gICAgcHVibGljIHNob3dUZXh0ID0gdHJ1ZTtcbiAgICBwdWJsaWMgaW5wdXRUeXBlOiBzdHJpbmcgPSBkZWZhdWx0SW5wdXRUeXBlO1xuICAgIHB1YmxpYyBpbnB1dExpbWl0OiBudW1iZXIgPSBkZWZhdWx0SW5wdXRMaW1pdDtcbiAgICBwcml2YXRlIG5ld01lc3NhZ2UgPSBmYWxzZTtcbiAgICBwcml2YXRlIG1lc3NhZ2VDdXJyZW50ID0gJyc7XG4gICAgcHJpdmF0ZSBtc2dBcnJheSA9IFtdO1xuICAgIHByaXZhdGUgYm90TGlzdGVuaW5nVGltZXIgPSAwO1xuICAgIHByaXZhdGUgYW5pbV9kb25lID0gZmFsc2U7XG4gICAgcHJpdmF0ZSByZWxvYWRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgdGltZXI7XG4gICAgcHVibGljIGJ0blNjcmVlbiA9ICcnO1xuICAgIHB1YmxpYyBuYkF0dGFjaG1lbnRzID0gMDtcblxuICAgIGNoYW5nZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICgoK3RoaXMudXNlcklucHV0ICsgdmFsdWUpID4gMCkge1xuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSAoK3RoaXMudXNlcklucHV0ICsgdmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgc2VydmljZTogS29udmVyc29TZXJ2aWNlKSB7XG4gICAgICAgIHNlcnZpY2UubGFuZy5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEJ0biA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRU5EJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQnRuTXNnID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkRfTUVTU0FHRScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTEVDVCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU2NyZWVuID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NDUkVFTlNIT1QnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGxldCB0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3QtYW5zd2VyJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDAsIGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBlbGVtc1tpbmRleF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcC5zdHlsZS5vcGFjaXR5ID09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1fZG9uZSA9IHJlcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbV9kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0+IGVudGVyJywgdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0LmluY2x1ZGVzKCc8bnVtYmVyPicpICYmIHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcygnPC9udW1iZXI+JykpO1xuICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0LmluY2x1ZGVzKCc8bnVtYmVyPicpICYmIHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcygnPC9udW1iZXI+JykpIHtcbiAgICAgICAgICAgIHRoaXMudXNlcklucHV0ID0gJzEnO1xuICAgICAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAnbnVtYmVyJztcbiAgICAgICAgICAgIHRoaXMuaW5wdXRMaW1pdCA9IDk5OTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5OdW1iZXJQbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLk51bWJlclBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLlBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICAgICAgICB0aGlzLmlucHV0VHlwZSA9IGRlZmF1bHRJbnB1dFR5cGU7XG4gICAgICAgICAgICB0aGlzLmlucHV0TGltaXQgPSBkZWZhdWx0SW5wdXRMaW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdUWVBFICVzIE1BWCAlZCcsIHRoaXMuaW5wdXRUeXBlLCAgdGhpcy5pbnB1dExpbWl0LCB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlcilcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLkxhc3RCb3RBbnN3ZXIpO1xuXG4gICAgICAgIGlmICghdGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICAgIGxldCB0MiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpICYmIHRoaXMuYW5pbV9kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodDIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnPGJyLz4nKS5qb2luKGAgYClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJmVhY3V0ZTsnKS5qb2luKCfDqScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZlZ3JhdmU7Jykuam9pbignw6gnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLzxbXj5dKj4/L2dtLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnJm5ic3A7Jykuam9pbignJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tc2dBcnJheSA9IHN0cmluZy5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDdXJyZW50ICE9PSBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDdXJyZW50ID0gc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxvb3BlcihhcnJheSwgdGltZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHRcbiAgICAgICAgICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcmZWFjdXRlOycpLmpvaW4oJ8OpJylcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyZlZ3JhdmU7Jykuam9pbignw6gnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcmbmJzcDsnKS5qb2luKCcnKTtcblxuICAgICAgICAgICAgdGhpcy5tc2dBcnJheSA9IHN0cmluZy5zcGxpdCgnJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ3VycmVudCAhPT0gc3RyaW5nICYmIHN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUN1cnJlbnQgPSBzdHJpbmc7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gICAgbGF1bmNoTG9vcCgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5ld01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5tc2dBcnJheSA9IHRoaXMubWVzc2FnZUN1cnJlbnQuc3BsaXQoXCJcIik7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9vcGVyKCk7XG4gICAgICAgIH0sIDYwKTtcbiAgICB9XG5cbiAgICBsb29wZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA+IDAgJiYgIXRoaXMucmVsb2FkZWQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgKz0gdGhpcy5tc2dBcnJheS5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LyplbHNlIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgIH0qL1xuICAgICAgICAvKnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb29wZXIoYXJyYXksIHRpbWVyKTtcbiAgICAgICAgfSwgMzApOyovXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gZGVmYXVsdElucHV0VHlwZTtcbiAgICAgICAgdGhpcy5pbnB1dExpbWl0ID0gZGVmYXVsdElucHV0TGltaXQ7XG4gICAgICAgIGlmICh0aGlzLlBsYWNlSG9sZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgLypzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1dyYXBwZXIgPSB0cnVlO1xuICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RleHQgPSB0cnVlO1xuICAgICAgICB9LCAyNTAwKTsqL1xuXG4gICAgICAgIGxldCB0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3QtYW5zd2VyJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDAsIGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBlbGVtc1tpbmRleF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGVtcC5zdHlsZS5vcGFjaXR5ID09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbV9kb25lID0gcmVwO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgLy9ydW4ucnVuKCk7XG5cbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciAtPSAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3QnKS5jbGFzc05hbWUgPSAnYS1jdWUtdm9pY2Ugc3BlYWtpbmcnO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90LWljb24nKS5jbGFzc05hbWUgPSAnYS1jdWUtaWNvbiBzcGVha2luZ2ljb24nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3QnKS5jbGFzc05hbWUgPSAnYS1jdWUtdm9pY2UnO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90LWljb24nKS5jbGFzc05hbWUgPSAnYS1jdWUtaWNvbic7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSB0aGlzLmJvdExpc3RlbmluZ1RpbWVyID4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICB9XG5cbiAgICB1c2VyV3JpdGluZyhrZXk6IGFueSkge1xuICAgICAgICBpZiAoa2V5LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkuY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgKz0gMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA8IDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZW1pdCgkZXZlbnQpIHtcbiAgICAgICAgdGhpcy5maXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVhZHlTZW5kLmVtaXQodHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIF9zZW5kKCkge1xuICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyPy5lbmRPZlRvcGljICYmIHRoaXMuTGFzdFVzZXJJbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0Lm1lc3NhZ2UgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHVzZXJEYXRhOiBVc2VySW5wdXQgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnVzZXJJbnB1dCxcbiAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwge1xuICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZW5kLmVtaXQodXNlckRhdGEpO1xuICAgICAgICB0aGlzLnVzZXJJbnB1dCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc2Nyb2xsKHNjcm9sbEhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKDApO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBieVBhc3NVc2VySW5wdXQoYm90ZGF0YTogc3RyaW5nLCBpPzogbnVtYmVyKSB7XG4gICAgICAgIC8qY29uc3QgYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1idG4nKTtcbiAgICAgICAgZm9yIChsZXQgYnRuIG9mIEFycmF5LmZyb20oYnV0dG9ucykpIHtcbiAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJ0bicpO1xuICAgICAgICB9Ki9cbiAgICAgICAgY29uc3QgYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpO1xuICAgICAgICBmb3IgKGxldCBidG4gb2YgQXJyYXkuZnJvbShidXR0b25zKSkge1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1idG4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbmRCb3RDb21tYW5kLmVtaXQoYm90ZGF0YSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpO1xuICAgICAgICAgICAgZm9yIChsZXQgYnRuIG9mIEFycmF5LmZyb20oYnV0dG9ucykpIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWJ0bicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG59XG4iLCI8IS0tPGRpdiBjbGFzcz1cImJvdC1jb250YWluZXJcIiAgW2NsYXNzXT1cIklzTW9iaWxlID8gJ2JvdC1tb2JpbGUnIDogJydcIiBbc3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJyA6ICcjMTAwNjUyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDsnfVwiLS0+XG5cbiAgPCEtLTxjYW52YXMgY2xhc3M9XCJvcmItY2FudmFzXCI+PC9jYW52YXM+XG4gIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlfX2lubmVyXCI+XG4gICAgPC9kaXY+XG4gIDwvZGl2Pi0tPlxuICA8ZGl2IGNsYXNzPVwiYm90LWNvbnRhaW5lclwiICBbY2xhc3NdPVwiSXNNb2JpbGUgPyAnYm90LW1vYmlsZScgOiAnJ1wiIFtzdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InIDogJyMxMDA2NTIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94Oyd9XCJcbiAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L2h0bWxcIj5cbiAgPGRpdiBjbGFzcz1cImJvdC12aWV3XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpcnN0VmlzaXQgJiYgZmlyc3RVc2FnZVN0b3J5XCI+XG4gICAgICA8Ym90LWZpcnN0LXZpc2l0IFtmaXJzdFVzYWdlU3RvcnldPVwiZmlyc3RVc2FnZVN0b3J5XCIgW2Fzc2V0c109XCJhc3NldHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAocmVhZHkpPVwiZW1pdCgkZXZlbnQpXCI+PC9ib3QtZmlyc3QtdmlzaXQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmaXJzdFZpc2l0IHx8ICFmaXJzdFVzYWdlU3RvcnlcIj5cbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dCgnZXhpdCcsIDApXCIgaWQ9XCJleGl0LWJ0blwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2J1dHRvbj5cblxuICAgICAgPGRpdiBjbGFzcz1cImJvdC1hc3Npc3RhbnQtd3JhcHBlclwiICpuZ0lmPVwiQXNzaXN0YW50TW9kZVwiPlxuICAgICAgICA8IS0tPGRpdiAqbmdJZj1cIiFib3RMaXN0ZW5pbmdcIiBjbGFzcz1cImJvdC1sb2dvXCIgaWQ9XCJib3Rsb2dvXCI+XG4gICAgICAgICAgPGltZyBbc3JjXT1cImFzc2V0cy5GdWxsU2l6ZUxvZ29cIj5cbiAgICAgICAgPC9kaXY+LS0+XG4gICAgICAgIDwhLS08ZGl2IFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogJzQwJSd9XCIgY2xhc3M9XCJib3QtbG9nbyBib3QtbGlzdGVuaW5nXCI+XG4gICAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJ7J3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMHZoKSd9XCIgY2xhc3M9XCJtLWNhcmwtbm90aWZpY2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS1jYXJsLW5vdGlmaWNhdGlvbi1jdWUgbS1jdWVcIj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImJvdExpc3RlbmluZ1wiIGNsYXNzPVwiYS1jdWUtdm9pY2VcIiBpZD1cImJvdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbCB2b2ljZTFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWwgdm9pY2UyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlM1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbCB2b2ljZTRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWxcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS1pY29uXCIgaWQ9XCJib3QtaWNvblwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogJzQwJSd9XCIgY2xhc3M9XCJib3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMSBoaWRkZW5cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMiBoaWRkZW5cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMyBoaWRkZW5cIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3QtZGlzY3Vzc2lvbi13cmFwcGVyXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiA2MCU7IG1heC1oZWlnaHQ6IDYwJTsgaGVpZ2h0OiA2MCU7IC8qbWF4LWhlaWdodDogMTIwcHg7Ki9cIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiTGFzdFVzZXJJbnB1dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItaW5wdXRcIiAqbmdJZj1cIkxhc3RVc2VySW5wdXQgJiYgTGFzdFVzZXJJbnB1dD8ubWVzc2FnZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAge3tMYXN0VXNlcklucHV0Lm1lc3NhZ2V9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+e3tMYXN0VXNlcklucHV0LmRhdGV9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJMYXN0Qm90QW5zd2VyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWFuc3dlciBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RCb3RBbnN3ZXIudGV4dFwiPlxuICAgICAgICAgICAgICAgIDwhLS08c3BhbiAqbmdJZj1cIiFMYXN0Qm90QW5zd2VyLnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCIgaWQ9XCJ0ZXh0XCI+PC9zcGFuPjxicj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNoYW5nZWQgJiYgTGFzdEJvdEFuc3dlci50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKVwiIGNsYXNzPVwiZmFkZVwiIFtpbm5lckhUTUxdPVwiTGFzdEJvdEFuc3dlci50ZXh0IHwgc2FmZUh0bWxcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIUxhc3RCb3RBbnN3ZXIudGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJykgJiYgY2hhbmdlZCAmJiBzaG93VGV4dFwiIGNsYXNzPVwiZmFkZVwiIFtpbm5lckhUTUxdPVwiTGFzdEJvdEFuc3dlci50ZXh0IHwgc2FmZUh0bWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJMYXN0Qm90QW5zd2VyLnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCIgY2xhc3M9XCJmYWRlXCIgaWQ9XCJsb2FkaW5nLWNyZWF0aW9uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwhLS08YnI+LS0+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiTGFzdEJvdEFuc3dlci5tZWRpYXMgJiYgTGFzdEJvdEFuc3dlci5tZWRpYXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgJiYgTGFzdEJvdEFuc3dlci5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICYmIExhc3RCb3RBbnN3ZXIubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICYmICFMYXN0Qm90QW5zd2VyLnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdCBvZiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3VnZ2VzdC5mb3JtYXQgPT09ICdidXR0b24nXCIgID5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdUZXJtaW5lcicgJiYgY2hhbmdlZCB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSA9PSAnUXVpdCcgJiYgY2hhbmdlZFwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgIH1cIiAgY2xhc3M9XCJib3QtYnV0dG9uIGJvdC1idXR0b24tbGVmdCBzaG93LWJ0blwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2ssIGkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzdWdnZXN0LnZhbHVlPy50aXRsZSA9PSAnTm91dmVsbGUgRGVtYW5kZScgJiYgY2hhbmdlZCB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSA9PSAnTmV3IFJlcXVlc3QnICYmIGNoYW5nZWRcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnlcbiAgICAgICAgICAgICB9XCIgIGNsYXNzPVwiYm90LWJ1dHRvbiBib3QtYnV0dG9uLXJpZ2h0IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInN1Z2dlc3QudmFsdWU/LnRpdGxlICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdUZXJtaW5lcicgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ1F1aXQnICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdOb3V2ZWxsZSBEZW1hbmRlJyAmJiBzdWdnZXN0LnZhbHVlPy50aXRsZSAhPSAnTmV3IFJlcXVlc3QnICYmIGNoYW5nZWRcIlxuICAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICB9XCIgIGNsYXNzPVwiYm90LWJ1dHRvbiBib3QtYnV0dG9uLWdyZXkgc2hvdy1idG5cIiAoY2xpY2spPVwiYnlQYXNzVXNlcklucHV0KHN1Z2dlc3Q/LnZhbHVlPy5vbkNsaWNrLCBpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dFwiIGlkPVwiYm90LWlucHV0LWRpdlwiICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgPCEtLTxpbnB1dCBbdHlwZV09XCJpbnB1dFR5cGVcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgbWluPVwiMlwiIFttYXhdPVwiaW5wdXRMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50UGxhY2VIb2xkZXJcIj4tLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtbnVtYmVyLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LW51bWJlci1kaXYtYXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTnVtYmVyKDEpXCIgY2xhc3M9XCJhcnJvdy11cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIid1cF8yJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTnVtYmVyKC0xKVwiIGNsYXNzPVwiYXJyb3ctZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidkb3duXzInXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7eyB1c2VySW5wdXQgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICd0ZXh0J1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgW21heGxlbmd0aF09XCJpbnB1dExpbWl0XCJcbiAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50UGxhY2VIb2xkZXJcIiBjbGFzcz1cImhpZGRlblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtY29udGFpbmVyLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3QtYnV0dG9uIHNlbmQtYnRuIGluXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlNlY29uZGFyeVxuICAgICAgICAgICAgICB9XCIgKGNsaWNrKT1cIl9zZW5kKClcIiBbZGlzYWJsZWRdPVwiIXVzZXJJbnB1dFwiPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHNlbmRCdG5Nc2cgfX1cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlID09PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgICAgICAgICB7eyBzZW5kQnRuIH19XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInXCIgY2xhc3M9XCJib3QtYnV0dG9uLXNjcmVlbiBoaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidzY2FuXzExJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgIHt7IGJ0blNjcmVlbiB9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlucHV0VHlwZSAhPT0gJ251bWJlcidcIiBjbGFzcz1cImJvdC1idXR0b24tYXR0YWNoIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAge3sgbmJBdHRhY2htZW50cyB9fVxuICAgICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2F0dGFjaG1lbnQnXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC1kaXNhYmxlXCIgKm5nSWY9XCJkaXNhYmxlVXNlcklucHV0XCI+XG4gICAgICAgICAgICAgIDxpPnt7IHNlbGVjdCB9fTwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJvdC1jaGF0LXdyYXBwZXJcIiAqbmdJZj1cIiFBc3Npc3RhbnRNb2RlXCI+XG4gICAgICAgIHt7QXNzaXN0YW50TW9kZX19XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3QtZGlzY3Vzc2lvbi13cmFwcGVyXCIgI3Njcm9sbE1lIFtzY3JvbGxUb3BdPVwic2Nyb2xsTWUuc2Nyb2xsVG8oMCwgOTk5OTk5OSlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWNoYXRcIj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZW50cnkgb2YgZGlzcGxheURhdGFcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5LmRhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXNlci1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgICAgICAge3tlbnRyeS5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+e3tlbnRyeS5kYXRlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWVudHJ5LmRhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWFuc3dlclwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5LnRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJjaGFuZ2VkXCIgY2xhc3M9XCJcIiBbaW5uZXJIVE1MXT1cImVudHJ5LnRleHQgfCBzYWZlSHRtbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxicj4tLT5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVudHJ5Lm1lZGlhcyAmJiBlbnRyeS5tZWRpYXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgJiYgZW50cnkubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAmJiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdCBvZiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWdnZXN0LmZvcm1hdCA9PT0gJ2J1dHRvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjaGFuZ2VkXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgfVwiIGNsYXNzPVwiYm90LWJ1dHRvblwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2spXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dFwiICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgbWF4bGVuZ3RoPVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY3VycmVudFBsYWNlSG9sZGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY2hhbmdlZFwiIGNsYXNzPVwiYm90LWJ1dHRvblwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgIH1cIiAoY2xpY2spPVwiX3NlbmQoKVwiIFtkaXNhYmxlZF09XCIhdXNlcklucHV0XCI+e3sgc2VuZEJ0biB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC1kaXNhYmxlXCIgKm5nSWY9XCJkaXNhYmxlVXNlcklucHV0XCI+XG4gICAgICAgICAgICA8aT57eyBzZWxlY3QgfX08L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWxvZ29cIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiYXNzZXRzLkZ1bGxTaXplTG9nb1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=