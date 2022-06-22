import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
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
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction1(4, _c0, ctx_r11.assets == null ? null : ctx_r11.assets.ColorSet == null ? null : ctx_r11.assets.ColorSet.Secondary));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r11.LastUserInput.message, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r11.LastUserInput.date);
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
    const ctx_r16 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, ctx_r16.LastBotAnswer.text), i0.ɵɵsanitizeHtml);
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
    const ctx_r12 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r12.LastBotAnswer.text.includes("loading-dots") && ctx_r12.changed && ctx_r12.showText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.LastBotAnswer.text.includes("loading-dots"));
} }
const _c1 = function (a0, a1) { return { borderColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(2); const suggest_r19 = ctx_r26.$implicit; const i_r20 = ctx_r26.index; const ctx_r25 = i0.ɵɵnextContext(5); return ctx_r25.byPassUserInput(suggest_r19 == null ? null : suggest_r19.value == null ? null : suggest_r19.value.onClick, i_r20); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r19 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r22 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r19.label || (suggest_r19.value == null ? null : suggest_r19.value.displayedMessage) || (suggest_r19.value == null ? null : suggest_r19.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); const suggest_r19 = ctx_r30.$implicit; const i_r20 = ctx_r30.index; const ctx_r29 = i0.ɵɵnextContext(5); return ctx_r29.byPassUserInput(suggest_r19 == null ? null : suggest_r19.value == null ? null : suggest_r19.value.onClick, i_r20); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r19 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r23 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r23.assets == null ? null : ctx_r23.assets.ColorSet == null ? null : ctx_r23.assets.ColorSet.Primary, ctx_r23.assets == null ? null : ctx_r23.assets.ColorSet == null ? null : ctx_r23.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r19.label || (suggest_r19.value == null ? null : suggest_r19.value.displayedMessage) || (suggest_r19.value == null ? null : suggest_r19.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 31);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(2); const suggest_r19 = ctx_r34.$implicit; const i_r20 = ctx_r34.index; const ctx_r33 = i0.ɵɵnextContext(5); return ctx_r33.byPassUserInput(suggest_r19 == null ? null : suggest_r19.value == null ? null : suggest_r19.value.onClick, i_r20); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r19 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r24 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r24.assets == null ? null : ctx_r24.assets.ColorSet == null ? null : ctx_r24.assets.ColorSet.Primary, ctx_r24.assets == null ? null : ctx_r24.assets.ColorSet == null ? null : ctx_r24.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r19.label || (suggest_r19.value == null ? null : suggest_r19.value.displayedMessage) || (suggest_r19.value == null ? null : suggest_r19.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 26);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_2_Template, 1, 6, "button", 27);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_button_3_Template, 1, 6, "button", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r19 = i0.ɵɵnextContext().$implicit;
    const ctx_r21 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r19.value == null ? null : suggest_r19.value.title) == "Terminer" && ctx_r21.changed || (suggest_r19.value == null ? null : suggest_r19.value.title) == "Quit" && ctx_r21.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r19.value == null ? null : suggest_r19.value.title) == "Nouvelle Demande" && ctx_r21.changed || (suggest_r19.value == null ? null : suggest_r19.value.title) == "New Request" && ctx_r21.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r19.value == null ? null : suggest_r19.value.title) && (suggest_r19.value == null ? null : suggest_r19.value.title) != "Terminer" && (suggest_r19.value == null ? null : suggest_r19.value.title) != "Quit" && (suggest_r19.value == null ? null : suggest_r19.value.title) != "Nouvelle Demande" && (suggest_r19.value == null ? null : suggest_r19.value.title) != "New Request" && ctx_r21.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r19.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r13.LastBotAnswer.medias[0].required_actions);
} }
const _c2 = function (a0) { return { "display": a0 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵelement(1, "input", 41);
    i0.ɵɵelementStart(2, "label", 42);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const form_r41 = i0.ɵɵnextContext().$implicit;
    const ctx_r42 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(7, _c2, (form_r41 == null ? null : form_r41.display) ? form_r41.display : "block"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", (form_r41 == null ? null : form_r41.checked) == true ? "true" : "false")("id", form_r41 == null ? null : form_r41.id)("name", form_r41 == null ? null : form_r41.id)("type", form_r41 == null ? null : form_r41.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", form_r41 == null ? null : form_r41.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r42.translate.translate(ctx_r42.service.locale, form_r41.label), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_ng_container_1_input_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 43);
} if (rf & 2) {
    const form_r41 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMap(form_r41 == null ? null : form_r41.class);
    i0.ɵɵproperty("id", form_r41 == null ? null : form_r41.id)("ngStyle", i0.ɵɵpureFunction1(8, _c2, (form_r41 == null ? null : form_r41.display) ? form_r41.display : "block"))("pattern", form_r41 == null ? null : form_r41.pattern)("placeholder", form_r41 == null ? null : form_r41.placeholder)("type", form_r41 == null ? null : form_r41.type)("value", form_r41 == null ? null : form_r41.value);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const form_r41 = i0.ɵɵnextContext().$implicit;
    const ctx_r44 = i0.ɵɵnextContext(6);
    i0.ɵɵclassMap(form_r41 == null ? null : form_r41.class);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c2, (form_r41 == null ? null : form_r41.display) ? form_r41.display : "block"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r44.translate.translate(ctx_r44.service.locale, form_r41 == null ? null : form_r41.content), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_ng_container_1_textarea_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "textarea", 45);
} if (rf & 2) {
    const form_r41 = i0.ɵɵnextContext().$implicit;
    const ctx_r45 = i0.ɵɵnextContext(6);
    i0.ɵɵclassMap(form_r41 == null ? null : form_r41.class);
    i0.ɵɵproperty("id", form_r41 == null ? null : form_r41.id)("ngStyle", i0.ɵɵpureFunction1(5, _c2, (form_r41 == null ? null : form_r41.display) ? form_r41.display : "block"))("placeholder", ctx_r45.translate.translate(ctx_r45.service.locale, form_r41 == null ? null : form_r41.placeholder));
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 35);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_ng_container_1_div_2_Template, 4, 9, "div", 36);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_ng_container_1_input_3_Template, 1, 10, "input", 37);
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_ng_container_1_div_4_Template, 2, 6, "div", 38);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_ng_container_1_textarea_5_Template, 1, 7, "textarea", 39);
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const form_r41 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", form_r41.type);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "div");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "textarea");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_ng_container_1_Template, 6, 5, "ng-container", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const formElements_r39 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", formElements_r39);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_div_2_Template, 2, 1, "div", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r14.config.AfterProcessScenario.FormElements);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_div_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r51.sendBtn, " ");
} }
const _c3 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 47)(1, "div", 48)(2, "div", 49)(3, "button", 50);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_div_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r53); const ctx_r52 = i0.ɵɵnextContext(5); return ctx_r52.changeNumber(1); });
    i0.ɵɵelement(4, "nb-icon", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 52);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_div_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r53); const ctx_r54 = i0.ɵɵnextContext(5); return ctx_r54.changeNumber(-1); });
    i0.ɵɵelement(6, "nb-icon", 51);
    i0.ɵɵelementEnd()();
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 53)(9, "button", 54);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_div_1_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r53); const ctx_r55 = i0.ɵɵnextContext(5); return ctx_r55.hideInputNumber = true; })("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_div_1_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r53); const ctx_r56 = i0.ɵɵnextContext(5); return ctx_r56._send(); });
    i0.ɵɵtemplate(10, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_div_1_ng_container_10_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("icon", "up_2")("size", 1.5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", "down_2")("size", 1.5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r50.userInput, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(9, _c3, ctx_r50.assets == null ? null : ctx_r50.assets.ColorSet == null ? null : ctx_r50.assets.ColorSet.Primary, ctx_r50.assets == null ? null : ctx_r50.assets.ColorSet == null ? null : ctx_r50.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r50.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r50.inputType === "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_div_1_Template, 11, 12, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r15.hideInputNumber);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementContainer(2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_Template, 3, 2, "ng-container", 2);
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_5_Template, 3, 1, "ng-container", 2);
    i0.ɵɵtemplate(6, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("bot-answer-after-process", ctx_r7.afterProcess);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r7.LastBotAnswer.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.LastBotAnswer.medias && ctx_r7.LastBotAnswer.medias.length && ctx_r7.LastBotAnswer.medias[0].required_actions && ctx_r7.LastBotAnswer.medias[0].required_actions.length > 0 && !ctx_r7.LastBotAnswer.text.includes("loading-dots"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.afterProcess && ctx_r7.config.AfterProcessScenario.FormElements.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.inputType === "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_9_button_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const btn_r58 = ctx.$implicit;
    const ctx_r57 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMap(btn_r58.class);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c2, (btn_r58 == null ? null : btn_r58.display) ? btn_r58.display : "block"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r57.translate.translate(ctx_r57.service.locale, btn_r58.label), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_9_button_1_Template, 2, 6, "button", 55);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.config.AfterProcessScenario.FormButtons);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "textarea", 58);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r61 = i0.ɵɵnextContext(4); return ctx_r61.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template_textarea_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r62); const ctx_r63 = i0.ɵɵnextContext(4); return ctx_r63.userInput && ctx_r63._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template_textarea_keyup_1_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r64 = i0.ɵɵnextContext(4); return ctx_r64.userWriting($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r59.userInput)("maxlength", ctx_r59.inputLimit)("placeholder", ctx_r59.currentPlaceHolder);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r65.sendBtnMsg, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵelement(1, "nb-icon", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r66 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "scan_11")("size", 1.5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r66.btnScreen, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 62);
    i0.ɵɵtext(1);
    i0.ɵɵelement(2, "nb-icon", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r67.nbAttachments, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "attachment")("size", 1.5);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "button", 54);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r69); const ctx_r68 = i0.ɵɵnextContext(4); return ctx_r68._send(); });
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_div_10_div_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_div_10_div_2_button_3_Template, 3, 3, "button", 59);
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_div_10_div_2_button_4_Template, 3, 3, "button", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r60 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(6, _c3, ctx_r60.assets == null ? null : ctx_r60.assets.ColorSet == null ? null : ctx_r60.assets.ColorSet.Primary, ctx_r60.assets == null ? null : ctx_r60.assets.ColorSet == null ? null : ctx_r60.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r60.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r60.inputType !== "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r60.inputType !== "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r60.inputType !== "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template, 2, 3, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_div_10_div_2_Template, 5, 9, "div", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.inputType === "text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.inputType !== "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63)(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r10.select);
} }
const _c4 = function () { return { "height": "40%" }; };
function DesktopFullScreenComponent_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
    i0.ɵɵelement(2, "div", 9)(3, "div", 10)(4, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 12);
    i0.ɵɵtemplate(6, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_6_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template, 7, 6, "ng-container", 2);
    i0.ɵɵelementStart(8, "div", 13);
    i0.ɵɵtemplate(9, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_9_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(10, DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template, 3, 2, "div", 14);
    i0.ɵɵtemplate(11, DesktopFullScreenComponent_ng_container_3_div_2_div_11_Template, 3, 1, "div", 15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction0(6, _c4));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r4.LastUserInput && !ctx_r4.afterProcess);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.LastBotAnswer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.afterProcess && ctx_r4.config.AfterProcessScenario.FormButtons.length > 0);
    i0.ɵɵadvance(1);
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
    const entry_r74 = i0.ɵɵnextContext().$implicit;
    const ctx_r75 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c3, ctx_r75.assets == null ? null : ctx_r75.assets.ColorSet == null ? null : ctx_r75.assets.ColorSet.Primary, ctx_r75.assets == null ? null : ctx_r75.assets.ColorSet == null ? null : ctx_r75.assets.ColorSet.Secondary));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", entry_r74.message, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r74.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 72);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const entry_r74 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, entry_r74.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template, 2, 3, "span", 71);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r78 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r78.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 74);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r88); const suggest_r83 = i0.ɵɵnextContext(2).$implicit; const ctx_r86 = i0.ɵɵnextContext(6); return ctx_r86.byPassUserInput(suggest_r83 == null ? null : suggest_r83.value == null ? null : suggest_r83.value.onClick); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r83 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r85 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r85.assets == null ? null : ctx_r85.assets.ColorSet == null ? null : ctx_r85.assets.ColorSet.Primary, ctx_r85.assets == null ? null : ctx_r85.assets.ColorSet == null ? null : ctx_r85.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r83.label || (suggest_r83.value == null ? null : suggest_r83.value.displayedMessage) || (suggest_r83.value == null ? null : suggest_r83.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 73);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r84 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r84.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r83 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r83.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r74 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", entry_r74.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 70);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r74 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", entry_r74.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r74.medias && entry_r74.medias.length && entry_r74.medias[0].required_actions && entry_r74.medias[0].required_actions.length);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template, 6, 7, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r74 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r74.date);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !entry_r74.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 77);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r94); const ctx_r93 = i0.ɵɵnextContext(4); return ctx_r93._send(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r92 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c3, ctx_r92.assets == null ? null : ctx_r92.assets.ColorSet == null ? null : ctx_r92.assets.ColorSet.Primary, ctx_r92.assets == null ? null : ctx_r92.assets.ColorSet == null ? null : ctx_r92.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r92.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r92.sendBtn, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r96 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 47)(1, "input", 75);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r96); const ctx_r95 = i0.ɵɵnextContext(3); return ctx_r95.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r96); const ctx_r97 = i0.ɵɵnextContext(3); return ctx_r97.userInput && ctx_r97._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r96); const ctx_r98 = i0.ɵɵnextContext(3); return ctx_r98.userWriting($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template, 2, 7, "button", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r72 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r72.userInput)("placeholder", ctx_r72.currentPlaceHolder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r72.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63)(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r73 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r73.select);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "div", 65, 66)(4, "div", 67);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template, 3, 2, "ng-container", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template, 3, 3, "div", 46);
    i0.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template, 3, 1, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 68);
    i0.ɵɵelement(10, "img", 69);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r70 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.AssistantMode, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("scrollTop", _r70.scrollTo(0, 9999999));
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
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 4);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r100); const ctx_r99 = i0.ɵɵnextContext(); return ctx_r99.byPassUserInput("exit", 0); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_Template, 12, 7, "div", 5);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_Template, 11, 6, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.AssistantMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.AssistantMode);
} }
const _c5 = function () { return { "background-color": "#100652 0% 0% no-repeat padding-box;" }; };
const defaultInputType = 'text';
const defaultInputLimit = 300;
export class DesktopFullScreenComponent {
    constructor(translate, service, config) {
        this.translate = translate;
        this.service = service;
        this.AssistantMode = false;
        this.firstVisit = false;
        this.IsMobile = false;
        this.afterProcess = false;
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
        this.days = [];
        this.hideInputNumber = false;
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
DesktopFullScreenComponent.ɵfac = function DesktopFullScreenComponent_Factory(t) { return new (t || DesktopFullScreenComponent)(i0.ɵɵdirectiveInject(i1.TranslateService), i0.ɵɵdirectiveInject(i2.KonversoService), i0.ɵɵdirectiveInject('__NgxKonverso__')); };
DesktopFullScreenComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile", showInput: "showInput", NumberPlaceHolder: "NumberPlaceHolder", afterProcess: "afterProcess" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], ["id", "exit-btn", 2, "display", "none", 3, "click"], ["class", "bot-assistant-wrapper", 4, "ngIf"], ["class", "bot-chat-wrapper", 4, "ngIf"], [1, "bot-assistant-wrapper"], [1, "bot", 3, "ngStyle"], [1, "circle1", "hidden"], [1, "circle2", "hidden"], [1, "circle3", "hidden"], [1, "bot-discussion-wrapper", 2, "min-height", "60%", "max-height", "60%", "height", "60%", "/*max-height", "120px"], [1, "bot-input-wrapper"], ["class", "bot-input", "id", "bot-input-div", 4, "ngIf"], ["class", "bot-input-disable", 4, "ngIf"], ["class", "user-input", 4, "ngIf"], [1, "user-input"], [1, "data"], [1, "time"], [1, "bot-answer", "hidden"], ["class", "fade", 3, "innerHTML", 4, "ngIf"], ["class", "fade", "id", "loading-creation", 4, "ngIf"], [1, "fade", 3, "innerHTML"], ["id", "loading-creation", 1, "fade"], [4, "ngFor", "ngForOf"], ["class", "bot-button bot-button-left show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-right show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-grey show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "bot-button-left", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-right", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-grey", "show-btn", 3, "innerHTML", "click"], [1, "after-process-form"], ["class", "after-process-subform", 4, "ngFor", "ngForOf"], [1, "after-process-subform"], [3, "ngSwitch"], ["class", "bot-checkbox", 3, "ngStyle", 4, "ngSwitchCase"], [3, "class", "id", "ngStyle", "pattern", "placeholder", "type", "value", 4, "ngSwitchCase"], [3, "class", "ngStyle", 4, "ngSwitchCase"], [3, "class", "id", "ngStyle", "placeholder", 4, "ngSwitchCase"], [1, "bot-checkbox", 3, "ngStyle"], ["value", "false", 3, "checked", "id", "name", "type"], [1, "bot-checkbox-label", 3, "for"], [3, "id", "ngStyle", "pattern", "placeholder", "type", "value"], [3, "ngStyle"], [3, "id", "ngStyle", "placeholder"], ["class", "bot-input", 4, "ngIf"], [1, "bot-input"], [1, "input-number-div", "in"], [1, "input-number-div-arrow"], [1, "arrow-up", 3, "click"], [3, "icon", "size"], [1, "arrow-down", 3, "click"], [1, "bot-container-btn"], [1, "bot-button", "send-btn", "hidden", 3, "disabled", "click"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf"], ["id", "bot-input-div", 1, "bot-input"], ["class", "bot-container-btn", 4, "ngIf"], [1, "hidden", 3, "ngModel", "maxlength", "placeholder", "ngModelChange", "keyup.enter", "keyup"], ["class", "bot-button-screen hidden", 4, "ngIf"], ["class", "bot-button-attach hidden", 4, "ngIf"], [1, "bot-button-screen", "hidden"], [1, "bot-button-attach", "hidden"], [1, "bot-input-disable"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper", 3, "scrollTop"], ["scrollMe", ""], [1, "bot-chat"], [1, "bot-logo"], [3, "src"], [1, "bot-answer"], ["class", "", 3, "innerHTML", 4, "ngIf"], [1, "", 3, "innerHTML"], ["class", "bot-button", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", 3, "innerHTML", "click"], ["type", "text", "maxlength", "200", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter", "keyup"], ["class", "bot-button", 3, "style", "disabled", "click", 4, "ngIf"], [1, "bot-button", 3, "disabled", "click"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵstyleMap(i0.ɵɵpureFunction0(6, _c5));
        i0.ɵɵclassMap(ctx.IsMobile ? "bot-mobile" : "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.firstVisit && ctx.firstUsageStory);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.firstVisit || !ctx.firstUsageStory);
    } }, directives: [i3.NgIf, i4.FirstVisitComponent, i3.NgStyle, i3.NgForOf, i3.NgSwitch, i3.NgSwitchCase, i5.NowboardIconComponent, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i6.MaxLengthValidator], pipes: [i7.SafeHtmlPipe], styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:transparent}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification[_ngcontent-%COMP%]{transform:translate(0)!important}}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9A147F!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4E5CA8!important}.voice4[_ngcontent-%COMP%]{background:#ABC1F1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{animation:pulse 2s ease 0s infinite}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DesktopFullScreenComponent, [{
        type: Component,
        args: [{ selector: 'bot-full-screen', template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n\n  <!--<canvas class=\"orb-canvas\"></canvas>\n  <div class=\"overlay\">\n    <div class=\"overlay__inner\">\n    </div>\n  </div>-->\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\n\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>-->\n        <!--<div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\n                <div class=\"a-cue-voice-el voice1\"></div>\n                <div class=\"a-cue-voice-el voice2\"></div>\n                <div class=\"a-cue-voice-el voice3\"></div>\n                <div class=\"a-cue-voice-el voice4\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\n            </div>\n          </div>\n        </div>-->\n        <div [ngStyle]=\"{'height': '40%'}\" class=\"bot\">\n          <div class=\"circle1 hidden\"></div>\n          <div class=\"circle2 hidden\"></div>\n          <div class=\"circle3 hidden\"></div>\n        </div>\n        <div class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\n          <ng-container *ngIf=\"LastUserInput && !afterProcess\">\n            <div class=\"user-input\" *ngIf=\"LastUserInput && LastUserInput?.message != ''\">\n              <div class=\"data\" [style]=\"{\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                {{LastUserInput.message}}\n              </div>\n              <span class=\"time\">{{LastUserInput.date}}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div [class.bot-answer-after-process]=\"afterProcess\" class=\"bot-answer hidden\">\n              <ng-container>\n\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.text\">\n                <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\n                <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n                -->\n                <span *ngIf=\"!LastBotAnswer.text.includes('loading-dots') && changed && showText\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\n                <span *ngIf=\"LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" id=\"loading-creation\"></span>\n                <!--<br>-->\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                   && LastBotAnswer.medias[0].required_actions\n                   && LastBotAnswer.medias[0].required_actions.length > 0\n                   && !LastBotAnswer.text.includes('loading-dots')\">\n                <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                  <ng-container *ngIf=\"suggest.format === 'button'\"  >\n                    <button *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\"\n                    [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\"  class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                            [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n              <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormElements.length > 0\">\n                <div class=\"after-process-form\">\n                  <div class=\"after-process-subform\" *ngFor=\"let formElements of config.AfterProcessScenario.FormElements\">\n                    <ng-container *ngFor=\"let form of formElements\">\n                      <ng-container [ngSwitch]=\"form.type\">\n                        <div *ngSwitchCase=\"'checkbox'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" class=\"bot-checkbox\">\n                          <input [checked]=\"form?.checked == true ? 'true': 'false'\" [id]=\"form?.id\" [name]=\"form?.id\" [type]='form?.type' value=\"false\">\n                          <label [for]=\"form?.id\" class=\"bot-checkbox-label\">\n                            {{ translate.translate(service.locale, form.label) }}\n                          </label>\n                        </div>\n\n                        <input [class]=\"form?.class\" [id]=\"form?.id\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" *ngSwitchCase=\"'text'\" \n                        [pattern]=\"form?.pattern\" [placeholder]=\"form?.placeholder\" [type]=\"form?.type\" \n                        [value]=\"form?.value\">\n\n                        <div [class]=\"form?.class\" *ngSwitchCase=\"'div'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\">\n                          {{ translate.translate(service.locale, form?.content) }}\n                        </div>\n\n                        <textarea [class]=\"form?.class\" [id]=\"form?.id\" *ngSwitchCase=\"'textarea'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\"\n                        [placeholder]=\"translate.translate(service.locale, form?.placeholder)\"></textarea>\n                      </ng-container>\n                    </ng-container>\n                  </div>\n                </div>\n              </ng-container>\n\n              <ng-container *ngIf=\"inputType === 'number'\">\n                <div *ngIf=\"!hideInputNumber\" class=\"bot-input\">\n                                  <!--<input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" min=\"2\" [max]=\"inputLimit\"\n                       [placeholder]=\"currentPlaceHolder\">-->\n                  <div class=\"input-number-div in\">\n                    <div class=\"input-number-div-arrow\">\n                      <button (click)=\"changeNumber(1)\" class=\"arrow-up\">\n                        <nb-icon [icon]=\"'up_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n\n                      <button (click)=\"changeNumber(-1)\" class=\"arrow-down\">\n                        <nb-icon [icon]=\"'down_2'\" [size]=\"1.5\"></nb-icon>\n                      </button>\n                    </div>\n\n                    {{ userInput }}\n                  </div>\n\n                  <div class=\"bot-container-btn\">\n                    <button (click)=\"hideInputNumber = true\" class=\"bot-button send-btn hidden\" [style]=\"{\n                      backgroundColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Secondary\n                  }\" (click)=\"_send()\" [disabled]=\"!userInput\">\n    \n                      <ng-container *ngIf=\"inputType === 'number'\">\n                        {{ sendBtn }}\n                      </ng-container>\n                    </button>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n          <div class=\"bot-input-wrapper\">\n            <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormButtons.length > 0\">\n              <button [class]=\"btn.class\" *ngFor=\"let btn of config.AfterProcessScenario.FormButtons\" [ngStyle]=\"{'display': btn?.display ? btn.display: 'block'}\">\n                {{ translate.translate(service.locale, btn.label) }}\n              </button>\n            </ng-container>\n\n            <div class=\"bot-input\" id=\"bot-input-div\" *ngIf=\"!disableUserInput && showInput\">\n              <ng-container *ngIf=\"inputType === 'text'\">\n                <textarea [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" [maxlength]=\"inputLimit\"\n                  [placeholder]=\"currentPlaceHolder\" class=\"hidden\"></textarea>\n              </ng-container>\n\n              <div *ngIf=\"inputType !== 'number'\" class=\"bot-container-btn\">\n                <button class=\"bot-button send-btn hidden\" [style]=\"{\n                  backgroundColor : assets?.ColorSet?.Primary,\n                  color : assets?.ColorSet?.Secondary\n              }\" (click)=\"_send()\" [disabled]=\"!userInput\">\n              \n                  <ng-container *ngIf=\"inputType !== 'number'\">\n                    {{ sendBtnMsg }}\n                  </ng-container>\n\n                  <!--<ng-container *ngIf=\"inputType === 'number'\">\n                    {{ sendBtn }}\n                  </ng-container>-->\n                </button>\n\n                <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-screen hidden\">\n                  <nb-icon [icon]=\"'scan_11'\" [size]=\"1.5\"></nb-icon>\n                  {{ btnScreen }}\n                </button>\n\n                <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-attach hidden\">\n                  {{ nbAttachments }}\n                  <nb-icon [icon]=\"'attachment'\" [size]=\"1.5\"></nb-icon>\n                </button>\n              </div>\n            </div>\n            <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n              <i>{{ select }}</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                    {{entry.message}}\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"\" [innerHTML]=\"entry.text | safeHtml\"></span>\n                    <!--<br>-->\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n", styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}\n"] }]
    }], function () { return [{ type: i1.TranslateService }, { type: i2.KonversoService }, { type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxKonverso__']
            }] }]; }, { AssistantMode: [{
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
        }], readySend: [{
            type: Output
        }], send: [{
            type: Output
        }], sendBotCommand: [{
            type: Output
        }], sendEvent: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0lDVTVGLDZCQUFvRDtJQUNsRCwwQ0FDd0M7SUFBdkIsK0xBQVMsbUJBQVksSUFBQztJQUFDLGlCQUFrQjtJQUM1RCwwQkFBZTs7O0lBRkksZUFBbUM7SUFBbkMsd0RBQW1DLHlCQUFBOzs7O0lBK0I5QywrQkFBOEUsY0FBQTtJQUkxRSxZQUNGO0lBQUEsaUJBQU07SUFDTixnQ0FBbUI7SUFBQSxZQUFzQjtJQUFBLGlCQUFPLEVBQUE7OztJQUw5QixlQUVWO0lBRlUscUpBRVY7SUFDTixlQUNGO0lBREUsOERBQ0Y7SUFDbUIsZUFBc0I7SUFBdEIsZ0RBQXNCOzs7SUFQN0MsNkJBQXFEO0lBQ25ELGdIQU9NO0lBQ1IsMEJBQWU7OztJQVJZLGVBQW1EO0lBQW5ELHlIQUFtRDs7O0lBa0J4RSwyQkFBa0o7Ozs7SUFBbkQsK0ZBQTJDOzs7SUFDMUksMkJBQW9HOzs7SUFMdEcsNkJBQXlDO0lBSXZDLGlJQUFrSjtJQUNsSixpSUFBb0c7SUFFdEcsMEJBQWU7OztJQUhOLGVBQXlFO0lBQXpFLGtIQUF5RTtJQUN6RSxlQUFpRDtJQUFqRCwwRUFBaUQ7Ozs7O0lBU3BELGtDQUlnRztJQUR2RCx1V0FBUyx5SEFBMkMsSUFBQztJQUU5RixpQkFBUzs7OztJQUxrRyw2UEFHaEg7SUFDYywyTUFBc0Y7Ozs7SUFFL0Ysa0NBSWdHO0lBRHRELHVXQUFTLHlIQUEyQyxJQUFDO0lBRS9GLGlCQUFTOzs7O0lBTGlILDZQQUcvSDtJQUNjLDJNQUFzRjs7OztJQUUvRixrQ0FLK0Y7SUFEdkQsdVdBQVMseUhBQTJDLElBQUM7SUFFN0YsaUJBQVM7Ozs7SUFMVCw2UEFHTjtJQUNjLDJNQUFzRjs7O0lBbEJoRyw2QkFBb0Q7SUFDbEQsbUtBS1M7SUFDVCxtS0FLUztJQUNULG1LQU1TO0lBQ1gsMEJBQWU7Ozs7SUFuQkosZUFBZ0c7SUFBaEcsaU5BQWdHO0lBTWhHLGVBQStHO0lBQS9HLGdPQUErRztJQU0vRyxlQUFvTTtJQUFwTSxxYUFBb007OztJQWRqTiw2QkFBOEY7SUFDNUYsK0pBb0JlO0lBQ2pCLDBCQUFlOzs7SUFyQkUsZUFBaUM7SUFBakMsc0RBQWlDOzs7SUFMcEQsNkJBR3NEO0lBQ3BELGlKQXNCZTtJQUNqQiwwQkFBZTs7O0lBdkJxQixlQUE2QztJQUE3QywwRUFBNkM7Ozs7SUE4QnZFLCtCQUFvSDtJQUNsSCw0QkFBK0g7SUFDL0gsaUNBQW1EO0lBQ2pELFlBQ0Y7SUFBQSxpQkFBUSxFQUFBOzs7O0lBSnNCLCtIQUE4RDtJQUNyRixlQUFtRDtJQUFuRCxpR0FBbUQsNkNBQUEsK0NBQUEsaURBQUE7SUFDbkQsZUFBZ0I7SUFBaEIsMkRBQWdCO0lBQ3JCLGVBQ0Y7SUFERSxvR0FDRjs7O0lBR0YsNEJBRXNCOzs7SUFGZix1REFBcUI7SUFBQywwREFBZSxrSEFBQSx1REFBQSwrREFBQSxpREFBQSxtREFBQTs7O0lBSTVDLCtCQUFnSDtJQUM5RyxZQUNGO0lBQUEsaUJBQU07Ozs7SUFGRCx1REFBcUI7SUFBdUIsK0hBQThEO0lBQzdHLGVBQ0Y7SUFERSxnSUFDRjs7O0lBRUEsK0JBQ2tGOzs7O0lBRHhFLHVEQUFxQjtJQUFDLDBEQUFlLGtIQUFBLG9IQUFBOzs7SUFqQm5ELDZCQUFnRCxPQUFBO0lBRTVDLG9KQUtNO0lBRU4seUpBRXNCO0lBRXRCLG9KQUVNO0lBRU4sOEpBQ2tGO0lBQ3BGLDBCQUFlLEVBQUE7OztJQWxCRCxlQUFzQjtJQUF0Qix3Q0FBc0I7SUFDNUIsZUFBd0I7SUFBeEIseUNBQXdCO0lBTytFLGVBQW9CO0lBQXBCLHFDQUFvQjtJQUlyRyxlQUFtQjtJQUFuQixvQ0FBbUI7SUFJRSxlQUF3QjtJQUF4Qix5Q0FBd0I7OztJQWxCL0UsK0JBQXlHO0lBQ3ZHLHVKQW9CZTtJQUNqQixpQkFBTTs7O0lBckIyQixlQUFlO0lBQWYsMENBQWU7OztJQUhwRCw2QkFBMEY7SUFDeEYsK0JBQWdDO0lBQzlCLCtIQXNCTTtJQUNSLGlCQUFNO0lBQ1IsMEJBQWU7OztJQXhCaUQsZUFBMkM7SUFBM0MsMEVBQTJDOzs7SUFrRG5HLDZCQUE2QztJQUMzQyxZQUNGO0lBQUEsMEJBQWU7OztJQURiLGVBQ0Y7SUFERSxnREFDRjs7Ozs7SUF6Qk4sK0JBQWdELGNBQUEsY0FBQSxpQkFBQTtJQUtsQyw2TkFBUyxxQkFBYSxDQUFDLENBQUMsSUFBQztJQUMvQiw4QkFBZ0Q7SUFDbEQsaUJBQVM7SUFFVCxrQ0FBc0Q7SUFBOUMsNk5BQVMsc0JBQWMsQ0FBQyxDQUFDLElBQUM7SUFDaEMsOEJBQWtEO0lBQ3BELGlCQUFTLEVBQUE7SUFHWCxZQUNGO0lBQUEsaUJBQU07SUFFTiwrQkFBK0IsaUJBQUE7SUFDckIsdVBBQTJCLElBQUksSUFBQyxnTkFHOUIsZUFBTyxJQUh1QjtJQUt0Qyx3SkFFZTtJQUNqQixpQkFBUyxFQUFBLEVBQUE7OztJQXBCSSxlQUFlO0lBQWYsNkJBQWUsYUFBQTtJQUlmLGVBQWlCO0lBQWpCLCtCQUFpQixhQUFBO0lBSTlCLGVBQ0Y7SUFERSxrREFDRjtJQUc4RSxlQUc1RTtJQUg0RSwrUEFHNUU7SUFBbUIsNkNBQXVCO0lBRXpCLGVBQTRCO0lBQTVCLHFEQUE0Qjs7O0lBeEJuRCw2QkFBNkM7SUFDM0MsaUlBNEJNO0lBQ1IsMEJBQWU7OztJQTdCUCxlQUFzQjtJQUF0QiwrQ0FBc0I7OztJQXZFbEMsNkJBQW9DO0lBQ2xDLCtCQUErRTtJQUM3RSx3QkFFZTtJQUNmLGlJQU9lO0lBQ2YsaUlBMkJlO0lBRWYsaUlBMEJlO0lBRWYsaUlBOEJlO0lBQ2pCLGlCQUFNO0lBQ1IsMEJBQWU7OztJQXJHUixlQUErQztJQUEvQywrREFBK0M7SUFJbkMsZUFBd0I7SUFBeEIsZ0RBQXdCO0lBUXhCLGVBR3FDO0lBSHJDLGdRQUdxQztJQTBCckMsZUFBeUU7SUFBekUsd0dBQXlFO0lBNEJ6RSxlQUE0QjtJQUE1QixvREFBNEI7OztJQW1DM0Msa0NBQXFKO0lBQ25KLFlBQ0Y7SUFBQSxpQkFBUzs7OztJQUZELDRCQUFtQjtJQUE2RCw0SEFBNEQ7SUFDbEosZUFDRjtJQURFLG1HQUNGOzs7SUFIRiw2QkFBeUY7SUFDdkYsc0hBRVM7SUFDWCwwQkFBZTs7O0lBSCtCLGVBQTBDO0lBQTFDLHdFQUEwQzs7OztJQU10Riw2QkFBMkM7SUFDekMsb0NBQ29EO0lBRDFDLHFRQUF1QixxT0FBNkIsZUFBTyxJQUFwQywwTUFBK0MsMkJBQW1CLElBQWxFO0lBQ21CLGlCQUFXO0lBQ2pFLDBCQUFlOzs7SUFGSCxlQUF1QjtJQUF2QiwyQ0FBdUIsaUNBQUEsMkNBQUE7OztJQVUvQiw2QkFBNkM7SUFDM0MsWUFDRjtJQUFBLDBCQUFlOzs7SUFEYixlQUNGO0lBREUsbURBQ0Y7OztJQU9GLGtDQUF3RTtJQUN0RSw4QkFBbUQ7SUFDbkQsWUFDRjtJQUFBLGlCQUFTOzs7SUFGRSxlQUFrQjtJQUFsQixnQ0FBa0IsYUFBQTtJQUMzQixlQUNGO0lBREUsa0RBQ0Y7OztJQUVBLGtDQUF3RTtJQUN0RSxZQUNBO0lBQUEsOEJBQXNEO0lBQ3hELGlCQUFTOzs7SUFGUCxlQUNBO0lBREEsc0RBQ0E7SUFBUyxlQUFxQjtJQUFyQixtQ0FBcUIsYUFBQTs7OztJQXRCbEMsK0JBQThELGlCQUFBO0lBSTNELHNNQUFTLGVBQU8sSUFBQztJQUVoQiwrSEFFZTtJQUtqQixpQkFBUztJQUVULG9IQUdTO0lBRVQsb0hBR1M7SUFDWCxpQkFBTTs7O0lBdkJ1QyxlQUczQztJQUgyQywrUEFHM0M7SUFBbUIsNkNBQXVCO0lBRXpCLGVBQTRCO0lBQTVCLHFEQUE0QjtJQVNwQyxlQUE0QjtJQUE1QixxREFBNEI7SUFLNUIsZUFBNEI7SUFBNUIscURBQTRCOzs7SUExQnpDLCtCQUFpRjtJQUMvRSx5SEFHZTtJQUVmLHdHQXdCTTtJQUNSLGlCQUFNOzs7SUE5QlcsZUFBMEI7SUFBMUIsa0RBQTBCO0lBS25DLGVBQTRCO0lBQTVCLG9EQUE0Qjs7O0lBMEJwQywrQkFBd0QsUUFBQTtJQUNuRCxZQUFZO0lBQUEsaUJBQUksRUFBQTs7O0lBQWhCLGVBQVk7SUFBWixvQ0FBWTs7OztJQWpMdkIsOEJBQXlELGFBQUE7SUFtQnJELHlCQUFrQyxjQUFBLGNBQUE7SUFHcEMsaUJBQU07SUFDTiwrQkFBa0g7SUFDaEgsa0hBU2U7SUFDZixrSEFzR2U7SUFDZiwrQkFBK0I7SUFDN0Isa0hBSWU7SUFFZixtR0ErQk07SUFDTixtR0FFTTtJQUNSLGlCQUFNLEVBQUEsRUFBQTs7O0lBaktILGVBQTZCO0lBQTdCLG9EQUE2QjtJQU1qQixlQUFvQztJQUFwQyxtRUFBb0M7SUFVcEMsZUFBbUI7SUFBbkIsMkNBQW1CO0lBd0dqQixlQUF3RTtJQUF4RSx1R0FBd0U7SUFNNUMsZUFBb0M7SUFBcEMsbUVBQW9DO0lBZ0MvQyxlQUFzQjtJQUF0Qiw4Q0FBc0I7OztJQVlwRCw2QkFBaUM7SUFDL0IsK0JBQXdCLGNBQUE7SUFLcEIsWUFDRjtJQUFBLGlCQUFNO0lBQ04sZ0NBQW1CO0lBQUEsWUFBYztJQUFBLGlCQUFPLEVBQUE7SUFFNUMsMEJBQWU7Ozs7SUFSTyxlQUdkO0lBSGMsK1BBR2Q7SUFDRixlQUNGO0lBREUsa0RBQ0Y7SUFDbUIsZUFBYztJQUFkLG9DQUFjOzs7SUFNL0IsMkJBQTBFOzs7O0lBQTNDLG1GQUFtQzs7O0lBRHBFLDZCQUFpQztJQUMvQixnSkFBMEU7SUFFNUUsMEJBQWU7OztJQUZOLGVBQWE7SUFBYixzQ0FBYTs7OztJQVFoQixrQ0FJK0Y7SUFEckYsZ1VBQVMsa0hBQXdDLElBQUM7SUFDbUMsaUJBQVM7Ozs7SUFKaEYsNlBBR2xDO0lBQ2tCLDJNQUFzRjs7O0lBTGhHLDZCQUFrRDtJQUNoRCxrTEFJd0c7SUFDMUcsMEJBQWU7OztJQUxKLGVBQWE7SUFBYixzQ0FBYTs7O0lBRjFCLDZCQUF1RTtJQUNyRSw4S0FNZTtJQUNqQiwwQkFBZTs7O0lBUEUsZUFBaUM7SUFBakMsc0RBQWlDOzs7SUFKcEQsNkJBRTZDO0lBQzNDLGdLQVFlO0lBQ2pCLDBCQUFlOzs7SUFUcUIsZUFBbUM7SUFBbkMsOERBQW1DOzs7SUFUM0UsNkJBQWtDO0lBQ2hDLCtCQUF3QjtJQUN0QixnSkFHZTtJQUNmLGdKQVllO0lBRWpCLGlCQUFNO0lBQ1IsMEJBQWU7OztJQW5CSSxlQUFnQjtJQUFoQixxQ0FBZ0I7SUFJaEIsZUFFNEI7SUFGNUIseUpBRTRCOzs7SUFwQmpELDZCQUFnRDtJQUM5QyxpSUFVZTtJQUNmLGlJQXFCZTtJQUNqQiwwQkFBZTs7O0lBakNFLGVBQWdCO0lBQWhCLHFDQUFnQjtJQVdoQixlQUFpQjtJQUFqQixzQ0FBaUI7Ozs7SUE2QmxDLGtDQUc2QztJQUExQyx3TUFBUyxlQUFPLElBQUM7SUFBeUIsWUFDN0M7SUFBQSxpQkFBUzs7O0lBSmtDLCtQQUd6QztJQUFtQiw2Q0FBdUI7SUFBQyxlQUM3QztJQUQ2QywrQ0FDN0M7Ozs7SUFQRiwrQkFBOEQsZ0JBQUE7SUFDekMsa1BBQXVCLGtOQUE2QixlQUFPLElBQXBDLHVMQUErQywyQkFBbUIsSUFBbEU7SUFBMUMsaUJBQzBDO0lBQzFDLDZHQUlTO0lBQ1gsaUJBQU07OztJQVBlLGVBQXVCO0lBQXZCLDJDQUF1QiwyQ0FBQTtJQUVqQyxlQUFhO0lBQWIsc0NBQWE7OztJQU14QiwrQkFBd0QsUUFBQTtJQUNuRCxZQUFZO0lBQUEsaUJBQUksRUFBQTs7O0lBQWhCLGVBQVk7SUFBWixvQ0FBWTs7O0lBckRyQiwrQkFBcUQ7SUFDbkQsWUFDQTtJQUFBLG1DQUEwRixjQUFBO0lBR3RGLG1IQWtDZTtJQUNqQixpQkFBTSxFQUFBO0lBRVIsK0JBQStCO0lBQzdCLGlHQVFNO0lBQ04saUdBRU07SUFDUixpQkFBTTtJQUNOLCtCQUFzQjtJQUNwQiwyQkFBaUM7SUFDbkMsaUJBQU0sRUFBQTs7OztJQXpETixlQUNBO0lBREEscURBQ0E7SUFBOEMsZUFBMkM7SUFBM0MscURBQTJDO0lBR3JELGVBQWM7SUFBZCw0Q0FBYztJQXNDeEIsZUFBb0M7SUFBcEMsbUVBQW9DO0lBUzVCLGVBQXNCO0lBQXRCLDhDQUFzQjtJQUtqRCxlQUEyQjtJQUEzQixrRUFBMkI7Ozs7SUFsUHRDLDZCQUFzRDtJQUNwRCxpQ0FBa0Y7SUFBMUUsbUxBQVMsd0JBQWdCLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBQztJQUFzQyxpQkFBUztJQUUzRiwyRkFxTE07SUFDTiwyRkEyRE07SUFDUiwwQkFBZTs7O0lBbFB1QixlQUFtQjtJQUFuQiwyQ0FBbUI7SUFzTHhCLGVBQW9CO0lBQXBCLDRDQUFvQjs7O0FEaE16RCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztBQUNoQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQztBQU85QixNQUFNLE9BQU8sMEJBQTBCO0lBaURuQyxZQUFtQixTQUEyQixFQUFTLE9BQXdCLEVBQ2hELE1BQXlCO1FBRHJDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFoRHRFLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFPNUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVwQixjQUFTLEdBQTBCLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLFNBQUksR0FBNEIsSUFBSSxZQUFZLENBQVksSUFBSSxDQUFDLENBQUM7UUFDbEUsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDdEUsY0FBUyxHQUF5QixJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUVwRSx1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFDaEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixjQUFTLEdBQVcsZ0JBQWdCLENBQUM7UUFDckMsZUFBVSxHQUFXLGlCQUFpQixDQUFDO1FBQ3RDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFbEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFVcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQzVELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUVuRSxJQUFJLENBQUMsSUFBSSxHQUFHO29CQUNSLFFBQVE7b0JBQ1IsU0FBUztvQkFDVCxXQUFXO29CQUNYLFVBQVU7b0JBQ1YsUUFBUTtvQkFDUixVQUFVO29CQUNWLFFBQVE7b0JBQ1IsUUFBUTtpQkFDWCxDQUFDO2FBQ0w7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUE3QkQsWUFBWSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6RDtJQUNMLENBQUM7SUEyQkQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTNGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLFFBQVEsRUFBRTtnQkFDdkUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ3BFO1NBQ0o7UUFFRCxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ3JCLElBQUksUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ2xCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFDckMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO29CQUNmLE9BQU8sS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTt3QkFDNUIsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBZ0IsQ0FBQzt3QkFDdkMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxHQUFHLEVBQUU7NEJBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQzt5QkFDNUI7cUJBQ0o7b0JBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7b0JBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDaEIsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNwQjtpQkFDSjthQUNKO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQ3ZGLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUNsRDtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQy9ILElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNqRyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQy9HO2FBQU07WUFDSCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztZQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDeEYsa0NBQWtDO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUM1RixhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2xCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSTt5QkFDbEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7eUJBQ3hCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3lCQUMzQixLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt5QkFDM0IsT0FBTyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7eUJBQ3pCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBRTlCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDakMsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sRUFBRTt3QkFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7d0JBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO3dCQUM3QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7cUJBQ3JCO29CQUNELDRCQUE0QjtpQkFDL0I7WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDthQUFNO1lBQ0gsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJO2lCQUNsQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQkFDeEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7aUJBQzNCLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUMzQixPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztpQkFDekIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sSUFBSSxNQUFNLEtBQUssRUFBRSxFQUFFO2dCQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNyQjtTQUNKO1FBRUQsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxVQUFVO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUMzQixhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNqQixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ2pDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztpQkFDbEQ7Z0JBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLGdEQUFnRDtnQkFDaEQsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxNQUFNO1FBQ0YsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzVDLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDakMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN0RTtTQUNKLENBQUE7O1NBRUE7UUFDRDs7aUJBRVM7SUFDYixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO1FBRUQ7Ozs7OzttQkFNVztRQUVYLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDckIsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDckQsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO29CQUNyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7b0JBQ2YsT0FBTyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO3dCQUM1QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFnQixDQUFDO3dCQUN2QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRTs0QkFDM0IsR0FBRyxHQUFHLEtBQUssQ0FBQzt5QkFDZjtxQkFDSjtvQkFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztvQkFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNoQixhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3BCO2lCQUNKO2FBQ0o7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixZQUFZO1FBRVosV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQztnQkFFNUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO29CQUM1QixRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztvQkFDbEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcseUJBQXlCLENBQUM7aUJBQzdFO3FCQUFNO29CQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztvQkFDekQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO2lCQUNoRTtnQkFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7YUFDbEQ7UUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQVE7UUFDaEIsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1NBQzlCO2FBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtTQUVwQzthQUFNO1lBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxFQUFFO2dCQUM3QixJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxDQUFDO2FBQy9CO2lCQUFNLElBQUksSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsQ0FBQzthQUMvQjtTQUNKO0lBQ0wsQ0FBQztJQUVNLElBQUksQ0FBQyxNQUFNO1FBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLEtBQUs7UUFDUixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsVUFBVSxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsTUFBTSxRQUFRLEdBQWM7WUFDeEIsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3ZCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BELElBQUksRUFBRSxTQUFTO2dCQUNmLE1BQU0sRUFBRSxTQUFTO2FBQ3BCLENBQUM7U0FDTCxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBb0I7UUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25DLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQWUsRUFBRSxDQUFVO1FBQ3ZDOzs7V0FHRztRQUNILE1BQU0sT0FBTyxHQUE0QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEYsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNaLE1BQU0sT0FBTyxHQUE0QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEYsS0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN0QztRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7O29HQW5VUSwwQkFBMEIsNEdBa0R2QixpQkFBaUI7NkVBbERwQiwwQkFBMEI7UUNSckMsOEJBQ3VDLGFBQUE7UUFFckMsNkZBR2U7UUFDZiw2RkFxUGU7UUFFakIsaUJBQU0sRUFBQTs7UUE5UDZELHlDQUF1RTtRQUE5RywrQ0FBc0M7UUFHakQsZUFBbUM7UUFBbkMsNERBQW1DO1FBSW5DLGVBQXFDO1FBQXJDLDhEQUFxQzs7dUZEQzNDLDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNJLGlCQUFpQjs7c0JBc0R0QixNQUFNO3VCQUFDLGlCQUFpQjt3QkFqRHBCLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFFSSxTQUFTO2tCQUFsQixNQUFNO1lBQ0csSUFBSTtrQkFBYixNQUFNO1lBQ0csY0FBYztrQkFBdkIsTUFBTTtZQUNHLFNBQVM7a0JBQWxCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdEFzc2V0cywgS29udmVyc29JbnRlcmZhY2UsIE9wZW5DaGF0Qm90UmVzcG9uc2UsIFVzZXJJbnB1dH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7VHJhbnNsYXRlU2VydmljZX0gZnJvbSAnLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuLy9pbXBvcnQgKiBhcyBydW4gZnJvbSAncHJvamVjdHMva29udmVyc28vYXNzZXRzL2FuaW1hdGVkYmFjay5qcyc7XG4vL2ltcG9ydCB7S2F3YXNlQmx1ckZpbHRlcn0gZnJvbSBcIi4uLy4uL2ZpbHRlcnMva2F3YXNlLWJsdXIvc3JjL0thd2FzZUJsdXJGaWx0ZXJcIjtcbmRlY2xhcmUgdmFyIFBJWEk6IGFueTtcbmNvbnN0IGRlZmF1bHRJbnB1dFR5cGUgPSAndGV4dCc7XG5jb25zdCBkZWZhdWx0SW5wdXRMaW1pdCA9IDMwMDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdib3QtZnVsbC1zY3JlZW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgICBASW5wdXQoKSBBc3Npc3RhbnRNb2RlOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICAgIEBJbnB1dCgpIGZpcnN0VmlzaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlEYXRhOiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcbiAgICBASW5wdXQoKSBkaXNhYmxlVXNlcklucHV0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIExhc3RVc2VySW5wdXQ6IFVzZXJJbnB1dDtcbiAgICBASW5wdXQoKSBMYXN0Qm90QW5zd2VyOiBPcGVuQ2hhdEJvdFJlc3BvbnNlO1xuICAgIEBJbnB1dCgpIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgICBASW5wdXQoKSBJc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNob3dJbnB1dDogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBOdW1iZXJQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gICAgQElucHV0KCkgYWZ0ZXJQcm9jZXNzID0gZmFsc2U7XG5cbiAgICBAT3V0cHV0KCkgcmVhZHlTZW5kOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcbiAgICBAT3V0cHV0KCkgc2VuZDogRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4obnVsbCk7XG4gICAgQE91dHB1dCgpIHNlbmRCb3RDb21tYW5kOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgICBAT3V0cHV0KCkgc2VuZEV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgICBwdWJsaWMgdXNlcklucHV0OiBzdHJpbmc7XG4gICAgcHVibGljIGN1cnJlbnRQbGFjZUhvbGRlcjogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIHNlbmRCdG4gPSAnJztcbiAgICBwdWJsaWMgc2VuZEJ0bk1zZyA9ICcnO1xuICAgIHB1YmxpYyBzZWxlY3QgPSAnJztcbiAgICBwdWJsaWMgY2hhbmdlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICBwdWJsaWMgc2hvd1dyYXBwZXIgPSB0cnVlO1xuICAgIHB1YmxpYyBzaG93VGV4dCA9IHRydWU7XG4gICAgcHVibGljIGlucHV0VHlwZTogc3RyaW5nID0gZGVmYXVsdElucHV0VHlwZTtcbiAgICBwdWJsaWMgaW5wdXRMaW1pdDogbnVtYmVyID0gZGVmYXVsdElucHV0TGltaXQ7XG4gICAgcHJpdmF0ZSBuZXdNZXNzYWdlID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBtZXNzYWdlQ3VycmVudCA9ICcnO1xuICAgIHByaXZhdGUgbXNnQXJyYXkgPSBbXTtcbiAgICBwcml2YXRlIGJvdExpc3RlbmluZ1RpbWVyID0gMDtcbiAgICBwcml2YXRlIGFuaW1fZG9uZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgcmVsb2FkZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIHRpbWVyO1xuICAgIHB1YmxpYyBidG5TY3JlZW4gPSAnJztcbiAgICBwdWJsaWMgbmJBdHRhY2htZW50cyA9IDA7XG4gICAgY29uZmlnOiBLb252ZXJzb0ludGVyZmFjZTtcbiAgICBwcml2YXRlIGRheXMgPSBbXTtcbiAgICBoaWRlSW5wdXROdW1iZXIgPSBmYWxzZTtcblxuICAgIGNoYW5nZU51bWJlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICgoK3RoaXMudXNlcklucHV0ICsgdmFsdWUpID4gMCkge1xuICAgICAgICAgICAgdGhpcy51c2VySW5wdXQgPSAoK3RoaXMudXNlcklucHV0ICsgdmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwdWJsaWMgc2VydmljZTogS29udmVyc29TZXJ2aWNlLFxuICAgICAgICBASW5qZWN0KCdfX05neEtvbnZlcnNvX18nKSBjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKSB7XG4gICAgICAgIHNlcnZpY2UubGFuZy5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEJ0biA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRU5EJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQnRuTXNnID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkRfTUVTU0FHRScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTEVDVCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU2NyZWVuID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NDUkVFTlNIT1QnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ01PTkRBWScsXG4gICAgICAgICAgICAgICAgICAgICdUVUVTREFZJyxcbiAgICAgICAgICAgICAgICAgICAgJ1dFRE5FU0RBWScsXG4gICAgICAgICAgICAgICAgICAgICdUSFVSU0RBWScsXG4gICAgICAgICAgICAgICAgICAgICdGUklEQVknLFxuICAgICAgICAgICAgICAgICAgICAnU0FUVVJEQVknLFxuICAgICAgICAgICAgICAgICAgICAnU1VOREFZJyxcbiAgICAgICAgICAgICAgICAgICAgJ01PTkRBWScsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmFmdGVyUHJvY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuTGFzdEJvdEFuc3dlci50ZXh0ID0gdGhpcy5jb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uQm90TWVzc2FnZVt0aGlzLnNlcnZpY2UubG9jYWxlXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50c1swXVswXS5sYWJlbCA9PSAnSm91ciAxJykge1xuICAgICAgICAgICAgICAgIGxldCBkYXkxID0gdGhpcy5kYXlzW25ldyBEYXRlKCkuZ2V0RGF5KCkgLSAxXTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5MiA9IHRoaXMuZGF5c1tuZXcgRGF0ZSgpLmdldERheSgpXTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5MyA9IHRoaXMuZGF5c1tuZXcgRGF0ZSgpLmdldERheSgpICsgMV07XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzWzBdWzBdLmxhYmVsID0gZGF5MTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtRWxlbWVudHNbMV1bMF0ubGFiZWwgPSBkYXkyO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50c1syXVswXS5sYWJlbCA9IGRheTM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwLCBsZW5ndGggPSBlbGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gZWxlbXNbaW5kZXhdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXAuc3R5bGUub3BhY2l0eSA9PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltX2RvbmUgPSByZXA7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1fZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSAmJiAhdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tPiBlbnRlcicsIHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcygnPG51bWJlcj4nKSAmJiB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoJzwvbnVtYmVyPicpKTtcbiAgICAgICAgaWYgKHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcygnPG51bWJlcj4nKSAmJiB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoJzwvbnVtYmVyPicpKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9ICcxJztcbiAgICAgICAgICAgIHRoaXMuaW5wdXRUeXBlID0gJ251bWJlcic7XG4gICAgICAgICAgICB0aGlzLmlucHV0TGltaXQgPSA5OTk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuTnVtYmVyUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5OdW1iZXJQbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5QbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSBkZWZhdWx0SW5wdXRUeXBlO1xuICAgICAgICAgICAgdGhpcy5pbnB1dExpbWl0ID0gZGVmYXVsdElucHV0TGltaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZygnVFlQRSAlcyBNQVggJWQnLCB0aGlzLmlucHV0VHlwZSwgIHRoaXMuaW5wdXRMaW1pdCwgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIpXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5MYXN0Qm90QW5zd2VyKTtcblxuICAgICAgICBpZiAoIXRoaXMuYW5pbV9kb25lKSB7XG4gICAgICAgICAgICBsZXQgdDIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuTGFzdEJvdEFuc3dlciAmJiAhdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKSAmJiB0aGlzLmFuaW1fZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHQyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZlYWN1dGU7Jykuam9pbignw6knKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCcmZWdyYXZlOycpLmpvaW4oJ8OoJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZuYnNwOycpLmpvaW4oJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXNnQXJyYXkgPSBzdHJpbmcuc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ3VycmVudCAhPT0gc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ3VycmVudCA9IHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5sb29wZXIoYXJyYXksIHRpbWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0XG4gICAgICAgICAgICAgICAgLnNwbGl0KCc8YnIvPicpLmpvaW4oYCBgKVxuICAgICAgICAgICAgICAgIC5zcGxpdCgnJmVhY3V0ZTsnKS5qb2luKCfDqScpXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcmZWdyYXZlOycpLmpvaW4oJ8OoJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvPFtePl0qPj8vZ20sICcnKVxuICAgICAgICAgICAgICAgIC5zcGxpdCgnJm5ic3A7Jykuam9pbignJyk7XG5cbiAgICAgICAgICAgIHRoaXMubXNnQXJyYXkgPSBzdHJpbmcuc3BsaXQoJycpO1xuICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUN1cnJlbnQgIT09IHN0cmluZyAmJiBzdHJpbmcgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDdXJyZW50ID0gc3RyaW5nO1xuICAgICAgICAgICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9LCAxMDApO1xuICAgIH1cblxuICAgIGxhdW5jaExvb3AoKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5tc2dBcnJheS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5uZXdNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL3RoaXMubXNnQXJyYXkgPSB0aGlzLm1lc3NhZ2VDdXJyZW50LnNwbGl0KFwiXCIpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvb3BlcigpO1xuICAgICAgICB9LCA2MCk7XG4gICAgfVxuXG4gICAgbG9vcGVyKCkge1xuICAgICAgICBpZiAodGhpcy5tc2dBcnJheS5sZW5ndGggPiAwICYmICF0aGlzLnJlbG9hZGVkKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MICs9IHRoaXMubXNnQXJyYXkuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS8qZWxzZSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9Ki9cbiAgICAgICAgLyp0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9vcGVyKGFycmF5LCB0aW1lcik7XG4gICAgICAgIH0sIDMwKTsqL1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0VHlwZSA9IGRlZmF1bHRJbnB1dFR5cGU7XG4gICAgICAgIHRoaXMuaW5wdXRMaW1pdCA9IGRlZmF1bHRJbnB1dExpbWl0O1xuICAgICAgICBpZiAodGhpcy5QbGFjZUhvbGRlcikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLlBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLlBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dXcmFwcGVyID0gdHJ1ZTtcbiAgICAgICAgfSwgMjAwMCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dUZXh0ID0gdHJ1ZTtcbiAgICAgICAgfSwgMjUwMCk7Ki9cblxuICAgICAgICBsZXQgdCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwLCBsZW5ndGggPSBlbGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gZWxlbXNbaW5kZXhdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXAuc3R5bGUub3BhY2l0eSA9PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1fZG9uZSA9IHJlcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbV9kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIC8vcnVuLnJ1bigpO1xuXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgLT0gMTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90JykuY2xhc3NOYW1lID0gJ2EtY3VlLXZvaWNlIHNwZWFraW5nJztcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdC1pY29uJykuY2xhc3NOYW1lID0gJ2EtY3VlLWljb24gc3BlYWtpbmdpY29uJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90JykuY2xhc3NOYW1lID0gJ2EtY3VlLXZvaWNlJztcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdC1pY29uJykuY2xhc3NOYW1lID0gJ2EtY3VlLWljb24nO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA+IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgdXNlcldyaXRpbmcoa2V5OiBhbnkpIHtcbiAgICAgICAgaWYgKGtleS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5LmNvZGUgPT09ICdCYWNrc3BhY2UnKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyICs9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGVtaXQoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZmlyc3RWaXNpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlYWR5U2VuZC5lbWl0KHRydWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBfc2VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuTGFzdEJvdEFuc3dlcj8uZW5kT2ZUb3BpYyAmJiB0aGlzLkxhc3RVc2VySW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dC5tZXNzYWdlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgICBjb25zdCB1c2VyRGF0YTogVXNlcklucHV0ID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy51c2VySW5wdXQsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcbiAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VuZC5lbWl0KHVzZXJEYXRhKTtcbiAgICAgICAgdGhpcy51c2VySW5wdXQgPSBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIHNjcm9sbChzY3JvbGxIZWlnaHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgwKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgYnlQYXNzVXNlcklucHV0KGJvdGRhdGE6IHN0cmluZywgaT86IG51bWJlcikge1xuICAgICAgICAvKmNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctYnRuJyk7XG4gICAgICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1idG4nKTtcbiAgICAgICAgfSovXG4gICAgICAgIGNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKTtcbiAgICAgICAgZm9yIChsZXQgYnRuIG9mIEFycmF5LmZyb20oYnV0dG9ucykpIHtcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYnRuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZW5kQm90Q29tbWFuZC5lbWl0KGJvdGRhdGEpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKTtcbiAgICAgICAgICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1idG4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxufVxuIiwiPCEtLTxkaXYgY2xhc3M9XCJib3QtY29udGFpbmVyXCIgIFtjbGFzc109XCJJc01vYmlsZSA/ICdib3QtbW9iaWxlJyA6ICcnXCIgW3N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcicgOiAnIzEwMDY1MiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7J31cIi0tPlxuXG4gIDwhLS08Y2FudmFzIGNsYXNzPVwib3JiLWNhbnZhc1wiPjwvY2FudmFzPlxuICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5X19pbm5lclwiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj4tLT5cbiAgPGRpdiBjbGFzcz1cImJvdC1jb250YWluZXJcIiAgW2NsYXNzXT1cIklzTW9iaWxlID8gJ2JvdC1tb2JpbGUnIDogJydcIiBbc3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJyA6ICcjMTAwNjUyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDsnfVwiXG4gICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9odG1sXCI+XG4gIDxkaXYgY2xhc3M9XCJib3Qtdmlld1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaXJzdFZpc2l0ICYmIGZpcnN0VXNhZ2VTdG9yeVwiPlxuICAgICAgPGJvdC1maXJzdC12aXNpdCBbZmlyc3RVc2FnZVN0b3J5XT1cImZpcnN0VXNhZ2VTdG9yeVwiIFthc3NldHNdPVwiYXNzZXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgKHJlYWR5KT1cImVtaXQoJGV2ZW50KVwiPjwvYm90LWZpcnN0LXZpc2l0PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlyc3RWaXNpdCB8fCAhZmlyc3RVc2FnZVN0b3J5XCI+XG4gICAgICA8YnV0dG9uIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoJ2V4aXQnLCAwKVwiIGlkPVwiZXhpdC1idG5cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+PC9idXR0b24+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3QtYXNzaXN0YW50LXdyYXBwZXJcIiAqbmdJZj1cIkFzc2lzdGFudE1vZGVcIj5cbiAgICAgICAgPCEtLTxkaXYgKm5nSWY9XCIhYm90TGlzdGVuaW5nXCIgY2xhc3M9XCJib3QtbG9nb1wiIGlkPVwiYm90bG9nb1wiPlxuICAgICAgICAgIDxpbWcgW3NyY109XCJhc3NldHMuRnVsbFNpemVMb2dvXCI+XG4gICAgICAgIDwvZGl2Pi0tPlxuICAgICAgICA8IS0tPGRpdiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6ICc0MCUnfVwiIGNsYXNzPVwiYm90LWxvZ28gYm90LWxpc3RlbmluZ1wiPlxuICAgICAgICAgIDxkaXYgW25nU3R5bGVdPVwieyd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTB2aCknfVwiIGNsYXNzPVwibS1jYXJsLW5vdGlmaWNhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tY2FybC1ub3RpZmljYXRpb24tY3VlIG0tY3VlXCI+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJib3RMaXN0ZW5pbmdcIiBjbGFzcz1cImEtY3VlLXZvaWNlXCIgaWQ9XCJib3RcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWwgdm9pY2UxXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS12b2ljZS1lbCB2b2ljZTNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtdm9pY2UtZWwgdm9pY2U0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYS1jdWUtaWNvblwiIGlkPVwiYm90LWljb25cIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgPGRpdiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6ICc0MCUnfVwiIGNsYXNzPVwiYm90XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTEgaGlkZGVuXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTIgaGlkZGVuXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTMgaGlkZGVuXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWRpc2N1c3Npb24td3JhcHBlclwiIHN0eWxlPVwibWluLWhlaWdodDogNjAlOyBtYXgtaGVpZ2h0OiA2MCU7IGhlaWdodDogNjAlOyAvKm1heC1oZWlnaHQ6IDEyMHB4OyovXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RVc2VySW5wdXQgJiYgIWFmdGVyUHJvY2Vzc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItaW5wdXRcIiAqbmdJZj1cIkxhc3RVc2VySW5wdXQgJiYgTGFzdFVzZXJJbnB1dD8ubWVzc2FnZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICAgICAge3tMYXN0VXNlcklucHV0Lm1lc3NhZ2V9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+e3tMYXN0VXNlcklucHV0LmRhdGV9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJMYXN0Qm90QW5zd2VyXCI+XG4gICAgICAgICAgICA8ZGl2IFtjbGFzcy5ib3QtYW5zd2VyLWFmdGVyLXByb2Nlc3NdPVwiYWZ0ZXJQcm9jZXNzXCIgY2xhc3M9XCJib3QtYW5zd2VyIGhpZGRlblwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiTGFzdEJvdEFuc3dlci50ZXh0XCI+XG4gICAgICAgICAgICAgICAgPCEtLTxzcGFuICpuZ0lmPVwiIUxhc3RCb3RBbnN3ZXIudGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJylcIiBpZD1cInRleHRcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY2hhbmdlZCAmJiBMYXN0Qm90QW5zd2VyLnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCIgY2xhc3M9XCJmYWRlXCIgW2lubmVySFRNTF09XCJMYXN0Qm90QW5zd2VyLnRleHQgfCBzYWZlSHRtbFwiPjwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhTGFzdEJvdEFuc3dlci50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKSAmJiBjaGFuZ2VkICYmIHNob3dUZXh0XCIgY2xhc3M9XCJmYWRlXCIgW2lubmVySFRNTF09XCJMYXN0Qm90QW5zd2VyLnRleHQgfCBzYWZlSHRtbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIkxhc3RCb3RBbnN3ZXIudGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJylcIiBjbGFzcz1cImZhZGVcIiBpZD1cImxvYWRpbmctY3JlYXRpb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPCEtLTxicj4tLT5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJMYXN0Qm90QW5zd2VyLm1lZGlhcyAmJiBMYXN0Qm90QW5zd2VyLm1lZGlhcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAmJiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgJiYgTGFzdEJvdEFuc3dlci5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgJiYgIUxhc3RCb3RBbnN3ZXIudGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJylcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWdnZXN0IG9mIExhc3RCb3RBbnN3ZXIubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdWdnZXN0LmZvcm1hdCA9PT0gJ2J1dHRvbidcIiAgPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic3VnZ2VzdC52YWx1ZT8udGl0bGUgPT0gJ1Rlcm1pbmVyJyAmJiBjaGFuZ2VkIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdRdWl0JyAmJiBjaGFuZ2VkXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICAgfVwiICBjbGFzcz1cImJvdC1idXR0b24gYm90LWJ1dHRvbi1sZWZ0IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdOb3V2ZWxsZSBEZW1hbmRlJyAmJiBjaGFuZ2VkIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlID09ICdOZXcgUmVxdWVzdCcgJiYgY2hhbmdlZFwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxuICAgICAgICAgICAgIH1cIiAgY2xhc3M9XCJib3QtYnV0dG9uIGJvdC1idXR0b24tcmlnaHQgc2hvdy1idG5cIiAoY2xpY2spPVwiYnlQYXNzVXNlcklucHV0KHN1Z2dlc3Q/LnZhbHVlPy5vbkNsaWNrLCBpKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic3VnZ2VzdC5sYWJlbHx8IHN1Z2dlc3QudmFsdWU/LmRpc3BsYXllZE1lc3NhZ2UgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwic3VnZ2VzdC52YWx1ZT8udGl0bGUgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ1Rlcm1pbmVyJyAmJiBzdWdnZXN0LnZhbHVlPy50aXRsZSAhPSAnUXVpdCcgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ05vdXZlbGxlIERlbWFuZGUnICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdOZXcgUmVxdWVzdCcgJiYgY2hhbmdlZFwiXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnlcbiAgICAgICAgICAgIH1cIiAgY2xhc3M9XCJib3QtYnV0dG9uIGJvdC1idXR0b24tZ3JleSBzaG93LWJ0blwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2ssIGkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYWZ0ZXJQcm9jZXNzICYmIGNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtRWxlbWVudHMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZnRlci1wcm9jZXNzLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZnRlci1wcm9jZXNzLXN1YmZvcm1cIiAqbmdGb3I9XCJsZXQgZm9ybUVsZW1lbnRzIG9mIGNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtRWxlbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZm9ybSBvZiBmb3JtRWxlbWVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmb3JtLnR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBmb3JtPy5kaXNwbGF5ID8gZm9ybS5kaXNwbGF5OiAnYmxvY2snfVwiIGNsYXNzPVwiYm90LWNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbY2hlY2tlZF09XCJmb3JtPy5jaGVja2VkID09IHRydWUgPyAndHJ1ZSc6ICdmYWxzZSdcIiBbaWRdPVwiZm9ybT8uaWRcIiBbbmFtZV09XCJmb3JtPy5pZFwiIFt0eXBlXT0nZm9ybT8udHlwZScgdmFsdWU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgW2Zvcl09XCJmb3JtPy5pZFwiIGNsYXNzPVwiYm90LWNoZWNrYm94LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgZm9ybS5sYWJlbCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW2NsYXNzXT1cImZvcm0/LmNsYXNzXCIgW2lkXT1cImZvcm0/LmlkXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZm9ybT8uZGlzcGxheSA/IGZvcm0uZGlzcGxheTogJ2Jsb2NrJ31cIiAqbmdTd2l0Y2hDYXNlPVwiJ3RleHQnXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGF0dGVybl09XCJmb3JtPy5wYXR0ZXJuXCIgW3BsYWNlaG9sZGVyXT1cImZvcm0/LnBsYWNlaG9sZGVyXCIgW3R5cGVdPVwiZm9ybT8udHlwZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImZvcm0/LnZhbHVlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2NsYXNzXT1cImZvcm0/LmNsYXNzXCIgKm5nU3dpdGNoQ2FzZT1cIidkaXYnXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZm9ybT8uZGlzcGxheSA/IGZvcm0uZGlzcGxheTogJ2Jsb2NrJ31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgZm9ybT8uY29udGVudCkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgW2NsYXNzXT1cImZvcm0/LmNsYXNzXCIgW2lkXT1cImZvcm0/LmlkXCIgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBmb3JtPy5kaXNwbGF5ID8gZm9ybS5kaXNwbGF5OiAnYmxvY2snfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwidHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgZm9ybT8ucGxhY2Vob2xkZXIpXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlucHV0VHlwZSA9PT0gJ251bWJlcidcIj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWhpZGVJbnB1dE51bWJlclwiIGNsYXNzPVwiYm90LWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCBbdHlwZV09XCJpbnB1dFR5cGVcIiBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgbWluPVwiMlwiIFttYXhdPVwiaW5wdXRMaW1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50UGxhY2VIb2xkZXJcIj4tLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1udW1iZXItZGl2IGluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1udW1iZXItZGl2LWFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTnVtYmVyKDEpXCIgY2xhc3M9XCJhcnJvdy11cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ3VwXzInXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTnVtYmVyKC0xKVwiIGNsYXNzPVwiYXJyb3ctZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ2Rvd25fMidcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIHt7IHVzZXJJbnB1dCB9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtY29udGFpbmVyLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJoaWRlSW5wdXROdW1iZXIgPSB0cnVlXCIgY2xhc3M9XCJib3QtYnV0dG9uIHNlbmQtYnRuIGhpZGRlblwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlNlY29uZGFyeVxuICAgICAgICAgICAgICAgICAgfVwiIChjbGljayk9XCJfc2VuZCgpXCIgW2Rpc2FibGVkXT1cIiF1c2VySW5wdXRcIj5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlID09PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VuZEJ0biB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtaW5wdXQtd3JhcHBlclwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFmdGVyUHJvY2VzcyAmJiBjb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUJ1dHRvbnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIFtjbGFzc109XCJidG4uY2xhc3NcIiAqbmdGb3I9XCJsZXQgYnRuIG9mIGNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtQnV0dG9uc1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGJ0bj8uZGlzcGxheSA/IGJ0bi5kaXNwbGF5OiAnYmxvY2snfVwiPlxuICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsIGJ0bi5sYWJlbCkgfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dFwiIGlkPVwiYm90LWlucHV0LWRpdlwiICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICd0ZXh0J1wiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBbKG5nTW9kZWwpXT1cInVzZXJJbnB1dFwiIChrZXl1cC5lbnRlcik9XCJ1c2VySW5wdXQgJiYgX3NlbmQoKVwiIChrZXl1cCk9XCJ1c2VyV3JpdGluZygkZXZlbnQpXCIgW21heGxlbmd0aF09XCJpbnB1dExpbWl0XCJcbiAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50UGxhY2VIb2xkZXJcIiBjbGFzcz1cImhpZGRlblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInXCIgY2xhc3M9XCJib3QtY29udGFpbmVyLWJ0blwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3QtYnV0dG9uIHNlbmQtYnRuIGhpZGRlblwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgICAgfVwiIChjbGljayk9XCJfc2VuZCgpXCIgW2Rpc2FibGVkXT1cIiF1c2VySW5wdXRcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlICE9PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgICAgICAgICB7eyBzZW5kQnRuTXNnIH19XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPCEtLTxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHNlbmRCdG4gfX1cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPi0tPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlucHV0VHlwZSAhPT0gJ251bWJlcidcIiBjbGFzcz1cImJvdC1idXR0b24tc2NyZWVuIGhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiJ3NjYW5fMTEnXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAge3sgYnRuU2NyZWVuIH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaW5wdXRUeXBlICE9PSAnbnVtYmVyJ1wiIGNsYXNzPVwiYm90LWJ1dHRvbi1hdHRhY2ggaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICB7eyBuYkF0dGFjaG1lbnRzIH19XG4gICAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCInYXR0YWNobWVudCdcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWlucHV0LWRpc2FibGVcIiAqbmdJZj1cImRpc2FibGVVc2VySW5wdXRcIj5cbiAgICAgICAgICAgICAgPGk+e3sgc2VsZWN0IH19PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYm90LWNoYXQtd3JhcHBlclwiICpuZ0lmPVwiIUFzc2lzdGFudE1vZGVcIj5cbiAgICAgICAge3tBc3Npc3RhbnRNb2RlfX1cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1kaXNjdXNzaW9uLXdyYXBwZXJcIiAjc2Nyb2xsTWUgW3Njcm9sbFRvcF09XCJzY3JvbGxNZS5zY3JvbGxUbygwLCA5OTk5OTk5KVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtY2hhdFwiPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbnRyeSBvZiBkaXNwbGF5RGF0YVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkuZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VudHJ5Lm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWVcIj57e2VudHJ5LmRhdGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZW50cnkuZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtYW5zd2VyXCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkudGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNoYW5nZWRcIiBjbGFzcz1cIlwiIFtpbm5lckhUTUxdPVwiZW50cnkudGV4dCB8IHNhZmVIdG1sXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGJyPi0tPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkubWVkaWFzICYmIGVudHJ5Lm1lZGlhcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAmJiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICYmIGVudHJ5Lm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWdnZXN0IG9mIGVudHJ5Lm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Z2dlc3QuZm9ybWF0ID09PSAnYnV0dG9uJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNoYW5nZWRcIiBbc3R5bGVdPVwie1xuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICB9XCIgY2xhc3M9XCJib3QtYnV0dG9uXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWlucHV0LXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWlucHV0XCIgKm5nSWY9XCIhZGlzYWJsZVVzZXJJbnB1dCAmJiBzaG93SW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwidXNlcklucHV0XCIgKGtleXVwLmVudGVyKT1cInVzZXJJbnB1dCAmJiBfc2VuZCgpXCIgKGtleXVwKT1cInVzZXJXcml0aW5nKCRldmVudClcIiBtYXhsZW5ndGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50UGxhY2VIb2xkZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjaGFuZ2VkXCIgY2xhc3M9XCJib3QtYnV0dG9uXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlNlY29uZGFyeVxuICAgICAgICAgICAgfVwiIChjbGljayk9XCJfc2VuZCgpXCIgW2Rpc2FibGVkXT1cIiF1c2VySW5wdXRcIj57eyBzZW5kQnRuIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWlucHV0LWRpc2FibGVcIiAqbmdJZj1cImRpc2FibGVVc2VySW5wdXRcIj5cbiAgICAgICAgICAgIDxpPnt7IHNlbGVjdCB9fTwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3QtbG9nb1wiPlxuICAgICAgICAgIDxpbWcgW3NyY109XCJhc3NldHMuRnVsbFNpemVMb2dvXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==