import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight } from 'ngx-nowbrains-animations';
/* TODO remove it */
import { animate, style, transition, trigger } from "@angular/animations";
import * as i0 from "@angular/core";
import * as i1 from "../translate.service";
import * as i2 from "../konverso.service";
import * as i3 from "ngx-nowbrains-animations";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
import * as i6 from "nowboard-icon";
import * as i7 from "../first-visit/first-visit.component";
import * as i8 from "../custom-checkbox-calendar/custom-checkbox-calendar.component";
import * as i9 from "../pipe/safe-html.pipe";
function DesktopFullScreenComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bot-first-visit", 3);
    i0.ɵɵlistener("ready", function DesktopFullScreenComponent_ng_container_2_Template_bot_first_visit_ready_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("firstUsageStory", ctx_r0.firstUsageStory)("assets", ctx_r0.assets);
} }
const _c0 = function (a0) { return { color: a0 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 14)(2, "div", 15);
    i0.ɵɵelement(3, "div", 16);
    i0.ɵɵelementStart(4, "span", 17);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoHeightTest", ctx_r6.animations.FadeSlideInOut(ctx_r6.animationHeightTTX * 2, ctx_r6.animationSlideValue));
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("user-input-top", (ctx_r6.LastUserInput == null ? null : ctx_r6.LastUserInput.message) != "");
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOutTest", ctx_r6.animations.FadeSlideInOut(ctx_r6.animationTTX * 1.5, ctx_r6.animationSlideValue));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction1(8, _c0, ctx_r6.assets == null ? null : ctx_r6.assets.ColorSet == null ? null : ctx_r6.assets.ColorSet.Secondary));
    i0.ɵɵproperty("innerHTML", ctx_r6.LastUserInput.message, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.LastUserInput.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 21);
    i0.ɵɵpipe(2, "safeHtml");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r14.animations.FadeSlideInOut(ctx_r14.animationTTX, -100))("innerHTML", i0.ɵɵpipeBind1(2, 2, ctx_r14.LastBotAnswer.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 22);
    i0.ɵɵelementContainerEnd();
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_ng_container_1_Template, 3, 4, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_ng_container_2_Template, 2, 0, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r10.LastBotAnswer.text.includes("loading-dots") && ctx_r10.changed && ctx_r10.showText);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r10.afterProcess);
} }
const _c1 = function (a0, a1) { return { borderColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); const suggest_r18 = ctx_r25.$implicit; const i_r19 = ctx_r25.index; const ctx_r24 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r24.byPassUserInput(suggest_r18 == null ? null : suggest_r18.value == null ? null : suggest_r18.value.onClick, i_r19)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r18 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r21 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r21.assets == null ? null : ctx_r21.assets.ColorSet == null ? null : ctx_r21.assets.ColorSet.Primary, ctx_r21.assets == null ? null : ctx_r21.assets.ColorSet == null ? null : ctx_r21.assets.ColorSet.Primary));
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r21.animations.FadeSlideInOut(ctx_r21.animationTTX, -100))("innerHTML", suggest_r18.label || (suggest_r18.value == null ? null : suggest_r18.value.displayedMessage) || (suggest_r18.value == null ? null : suggest_r18.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_ng_container_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); const suggest_r18 = ctx_r29.$implicit; const i_r19 = ctx_r29.index; const ctx_r28 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r28.byPassUserInput(suggest_r18 == null ? null : suggest_r18.value == null ? null : suggest_r18.value.onClick, i_r19)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r18 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r22 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary));
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r22.animations.FadeSlideInOut(ctx_r22.animationTTX, -100))("innerHTML", suggest_r18.label || (suggest_r18.value == null ? null : suggest_r18.value.displayedMessage) || (suggest_r18.value == null ? null : suggest_r18.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_ng_container_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); const suggest_r18 = ctx_r33.$implicit; const i_r19 = ctx_r33.index; const ctx_r32 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r32.byPassUserInput(suggest_r18 == null ? null : suggest_r18.value == null ? null : suggest_r18.value.onClick, i_r19)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r18 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r23 = i0.ɵɵnextContext(5);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c1, ctx_r23.assets == null ? null : ctx_r23.assets.ColorSet == null ? null : ctx_r23.assets.ColorSet.Primary, ctx_r23.assets == null ? null : ctx_r23.assets.ColorSet == null ? null : ctx_r23.assets.ColorSet.Primary));
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r23.animations.FadeSlideInOut(ctx_r23.animationTTX, -100))("innerHTML", suggest_r18.label || (suggest_r18.value == null ? null : suggest_r18.value.displayedMessage) || (suggest_r18.value == null ? null : suggest_r18.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_ng_container_1_button_1_Template, 1, 7, "button", 25);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_ng_container_1_button_2_Template, 1, 7, "button", 26);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_ng_container_1_button_3_Template, 1, 7, "button", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r18 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r18.value == null ? null : suggest_r18.value.title) == "Terminer" && ctx_r20.changed || (suggest_r18.value == null ? null : suggest_r18.value.title) == "Quit" && ctx_r20.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r18.value == null ? null : suggest_r18.value.title) == "Nouvelle Demande" && ctx_r20.changed || (suggest_r18.value == null ? null : suggest_r18.value.title) == "New Request" && ctx_r20.changed);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (suggest_r18.value == null ? null : suggest_r18.value.title) && (suggest_r18.value == null ? null : suggest_r18.value.title) != "Terminer" && (suggest_r18.value == null ? null : suggest_r18.value.title) != "Quit" && (suggest_r18.value == null ? null : suggest_r18.value.title) != "Nouvelle Demande" && (suggest_r18.value == null ? null : suggest_r18.value.title) != "New Request" && ctx_r20.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_ng_container_1_Template, 4, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r18.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 31)(2, "div", 32)(3, "i");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r17.animations.FadeSlideInOut(ctx_r17.animationTTX, -100));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r17.select);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 23);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_ng_container_3_Template, 5, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r11.LastBotAnswer.medias[0].required_actions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.disableUserInput);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_custom_checkbox_calendar_5_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "custom-checkbox-calendar", 33);
    i0.ɵɵlistener("calendarChange", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_custom_checkbox_calendar_5_Template_custom_checkbox_calendar_calendarChange_0_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r37.bindCalendar($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("@FadeSlideInOutKonversoHeightTest", ctx_r12.animations.FadeSlideInOut(ctx_r12.animationTTX, ctx_r12.animationSlideValue))("state", ctx_r12.afterProcess)("calendarTemplate", ctx_r12.calendarTemplate)("columnOverride", ctx_r12.calendarKeyOverride);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r39.sendBtn, " ");
} }
const _c2 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34)(2, "div", 35)(3, "div", 36)(4, "button", 37);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r40.changeNumber(1)); });
    i0.ɵɵelement(5, "nb-icon", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 39);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r41); const ctx_r42 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r42.changeNumber(-1)); });
    i0.ɵɵelement(7, "nb-icon", 38);
    i0.ɵɵelementEnd()();
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 40)(10, "button", 41);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r41); const ctx_r43 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r43._send()); });
    i0.ɵɵtemplate(11, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_ng_container_11_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoOpacityOut", ctx_r13.animations.FadeSlideInOut(ctx_r13.animationTTX, ctx_r13.animationSlideValue));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("icon", "up_2")("size", 1.5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", "down_2")("size", 1.5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.userInput, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(10, _c2, ctx_r13.assets == null ? null : ctx_r13.assets.ColorSet == null ? null : ctx_r13.assets.ColorSet.Primary, ctx_r13.assets == null ? null : ctx_r13.assets.ColorSet == null ? null : ctx_r13.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r13.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r13.inputType === "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18)(2, "div", 19);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_3_Template, 3, 2, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_4_Template, 4, 2, "ng-container", 2);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_custom_checkbox_calendar_5_Template, 1, 4, "custom-checkbox-calendar", 20);
    i0.ɵɵtemplate(6, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_ng_container_6_Template, 12, 13, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r7.LastBotAnswer.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.LastBotAnswer.medias && ctx_r7.LastBotAnswer.medias.length && ctx_r7.LastBotAnswer.medias[0].required_actions && ctx_r7.LastBotAnswer.medias[0].required_actions.length > 0 && !ctx_r7.LastBotAnswer.text.includes("loading-dots"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.afterProcess);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.inputType === "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 42);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r44.getCalendar()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 43);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.translate.translate(ctx_r8.service.locale, "VALIDATE_AVAILABILITY"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r8.translate.translate(ctx_r8.service.locale, "SKIP"), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "textarea", 46);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_3_Template_textarea_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r49 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r49.userInput = $event); })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_3_Template_textarea_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r50); const ctx_r51 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r51.userInput && ctx_r51._send()); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_3_Template_textarea_keyup_1_listener($event) { i0.ɵɵrestoreView(_r50); const ctx_r52 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r52.userWriting($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r47 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r47.userInput)("maxlength", ctx_r47.inputLimit)("placeholder", ctx_r47.currentPlaceHolder);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r53 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r53.sendBtnMsg, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵelement(1, "nb-icon", 38);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "scan_11")("size", 1.5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r54.btnScreen, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_button_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r56 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r56.translate.translate(ctx_r56.service.locale, "ATTACHMENT"), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_button_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r57.translate.translate(ctx_r57.service.locale, "ATTACHMENTS"), " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r58.openUpload.emit(true)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_button_5_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_button_5_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelement(4, "nb-icon", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r55.fileNb, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r55.fileNb <= 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r55.fileNb > 1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", "attachment")("size", 1.5);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 40)(2, "button", 47);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r61); const ctx_r60 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r60._send()); });
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_button_4_Template, 3, 3, "button", 48);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_button_5_Template, 5, 5, "button", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r48 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(6, _c2, ctx_r48.assets == null ? null : ctx_r48.assets.ColorSet == null ? null : ctx_r48.assets.ColorSet.Primary, ctx_r48.assets == null ? null : ctx_r48.assets.ColorSet == null ? null : ctx_r48.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r48.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r48.inputType !== "number");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r48.inputType !== "number" && ctx_r48.IsMobile);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r48.inputType !== "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 44)(2, "div", 45);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_3_Template, 2, 3, "ng-container", 2);
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_ng_container_4_Template, 6, 9, "ng-container", 2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r46.animations.FadeSlideInOut(ctx_r46.animationTTX, ctx_r46.animationSlideValueAdd));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r46.inputType === "text");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r46.inputType !== "number");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_ng_container_1_Template, 5, 3, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r9.disableUserInput && ctx_r9.showInput);
} }
const _c3 = function () { return { "height": "40%" }; };
function DesktopFullScreenComponent_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
    i0.ɵɵelement(2, "div", 9)(3, "div", 10)(4, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 12);
    i0.ɵɵtemplate(6, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_6_Template, 6, 10, "ng-container", 2);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template, 7, 4, "ng-container", 2);
    i0.ɵɵelementStart(8, "div", 13);
    i0.ɵɵtemplate(9, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_9_Template, 5, 2, "ng-container", 2);
    i0.ɵɵtemplate(10, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_10_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoOpacityOut", ctx_r4.animations.FadeSlideInOut(ctx_r4.animationTTX, ctx_r4.animationSlideValue))("ngStyle", i0.ɵɵpureFunction0(6, _c3));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", ctx_r4.LastUserInput && !ctx_r4.afterProcess);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.LastBotAnswer);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.afterProcess && ctx_r4.config.AfterProcessScenario.FormButtons.length > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r4.afterProcess);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵelement(2, "div", 16);
    i0.ɵɵelementStart(3, "span", 17);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r66 = i0.ɵɵnextContext().$implicit;
    const ctx_r67 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@FadeSlideInOutKonversoTranslateOut", ctx_r67.animations.FadeSlideInOut(ctx_r67.animationTTX, ctx_r67.animationSlideValue));
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(5, _c2, ctx_r67.assets == null ? null : ctx_r67.assets.ColorSet == null ? null : ctx_r67.assets.ColorSet.Primary, ctx_r67.assets == null ? null : ctx_r67.assets.ColorSet == null ? null : ctx_r67.assets.ColorSet.Secondary));
    i0.ɵɵproperty("innerHTML", entry_r66.message, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r66.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 63);
    i0.ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const entry_r66 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(1, 1, entry_r66.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template, 2, 3, "span", 62);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r70 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r70.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 65);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r80); const suggest_r75 = i0.ɵɵnextContext(2).$implicit; const ctx_r78 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r78.byPassUserInput(suggest_r75 == null ? null : suggest_r75.value == null ? null : suggest_r75.value.onClick)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r75 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r77 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(3, _c1, ctx_r77.assets == null ? null : ctx_r77.assets.ColorSet == null ? null : ctx_r77.assets.ColorSet.Primary, ctx_r77.assets == null ? null : ctx_r77.assets.ColorSet == null ? null : ctx_r77.assets.ColorSet.Primary));
    i0.ɵɵproperty("innerHTML", suggest_r75.label || (suggest_r75.value == null ? null : suggest_r75.value.displayedMessage) || (suggest_r75.value == null ? null : suggest_r75.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 64);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r76 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r76.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r75 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r75.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r66 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", entry_r66.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 61);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r66 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", entry_r66.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r66.medias && entry_r66.medias.length && entry_r66.medias[0].required_actions && entry_r66.medias[0].required_actions.length);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template, 5, 8, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r66 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r66.date);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !entry_r66.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 68);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r86); const ctx_r85 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r85._send()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r84 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c2, ctx_r84.assets == null ? null : ctx_r84.assets.ColorSet == null ? null : ctx_r84.assets.ColorSet.Primary, ctx_r84.assets == null ? null : ctx_r84.assets.ColorSet == null ? null : ctx_r84.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r84.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r84.sendBtn, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "input", 66);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r88); const ctx_r87 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r87.userInput = $event); })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_enter_1_listener() { i0.ɵɵrestoreView(_r88); const ctx_r89 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r89.userInput && ctx_r89._send()); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r88); const ctx_r90 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r90.userWriting($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template, 2, 7, "button", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r64 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r64.userInput)("placeholder", ctx_r64.currentPlaceHolder);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r64.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r65 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r65.select);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "div", 53, 54)(4, "div", 55);
    i0.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template, 3, 2, "ng-container", 24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 56);
    i0.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template, 3, 3, "div", 57);
    i0.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template, 3, 1, "div", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 59);
    i0.ɵɵelement(10, "img", 60);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const _r62 = i0.ɵɵreference(3);
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.AssistantMode, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("scrollTop", _r62.scrollTo(0, 9999999));
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
    const _r92 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 4);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r92); const ctx_r91 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r91.byPassUserInput("exit", 0)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_Template, 11, 7, "div", 5);
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
const ANIMATION_TTX = 750;
const ANIMATION_TTX_ADD = 250;
const ANIMATION_SLIDE_VALUE = -50;
const ANIMATION_SLIDE_VALUE_ADD = -25;
const ANIMATION_HEIGHT_TTX = 1250;
const ANIMATION_TYPE_CUBIC_BEZIER = 'cubic-bezier(0.39, 0.58, 0.57, 1)';
export const FadeSlideInOutKonversoTranslateOutTest = trigger('FadeSlideInOutKonversoTranslateOutTest', [
    transition(':enter', [
        style({ opacity: 0, top: '{{percent_start}}%' }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, style({ opacity: 1, top: '0%' }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('{{ttx}}ms ease-in-out', style({ opacity: 0 }))
    ])
]);
export const FadeSlideInOutKonversoHeightTest = trigger('FadeSlideInOutKonversoHeightTest', [
    transition(':enter', [
        style({ height: 0 }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, style({ height: '*' }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('{{ttx}}ms ease-in-out', style({ opacity: 0 }))
    ])
]);
/* TODO remove it */
export class DesktopFullScreenComponent {
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
        this.openUpload = new EventEmitter(false);
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
        this.changed = false;
        if (document.getElementById('text') && !this.LastBotAnswer?.text.includes('loading-dots')) {
            document.getElementById('text').innerHTML = '';
        }
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
        }
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
        this.sendBotCommand.emit(botdata);
    }
}
DesktopFullScreenComponent.ɵfac = function DesktopFullScreenComponent_Factory(t) { return new (t || DesktopFullScreenComponent)(i0.ɵɵdirectiveInject(i1.TranslateService), i0.ɵɵdirectiveInject(i2.KonversoService), i0.ɵɵdirectiveInject(i3.AnimationsService), i0.ɵɵdirectiveInject('__NgxKonverso__')); };
DesktopFullScreenComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile", showInput: "showInput", NumberPlaceHolder: "NumberPlaceHolder", afterProcess: "afterProcess", fileNb: "fileNb" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent", sendCalendar: "sendCalendar", openUpload: "openUpload" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], ["id", "exit-btn", 2, "display", "none", 3, "click"], ["class", "bot-assistant-wrapper", 4, "ngIf"], ["class", "bot-chat-wrapper", 4, "ngIf"], [1, "bot-assistant-wrapper"], [1, "bot", 3, "ngStyle"], [1, "circle1"], [1, "circle2"], [1, "circle3"], [1, "bot-discussion-wrapper", 2, "min-height", "60%", "max-height", "60%", "height", "60%", "/*max-height", "120px"], [1, "position-relative", "bot-input-wrapper"], [1, "overflow-hidden", "d-flex", "flex-column", "w-100", "user-input-container"], [1, "user-input"], [1, "data", 3, "innerHTML"], [1, "time"], [1, "position-relative", "bot-answer"], [1, "d-flex", "flex-column", "w-100", "position-relative", "bot-answer__text"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange", 4, "ngIf"], [1, "w-100", "justify-content-center", 3, "innerHTML"], ["id", "loading-creation"], [1, "mt35", "d-flex", "justify-content-center", "w-100", "position-relative", "bot-answer__buttons"], [4, "ngFor", "ngForOf"], ["class", "bot-button bot-button-left show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-right show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-grey show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "bot-button-left", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-right", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-grey", "show-btn", 3, "innerHTML", "click"], [1, "position-relative", "bot-answer__disable-input"], [1, "bot-input-disable"], [3, "state", "calendarTemplate", "columnOverride", "calendarChange"], [1, "bot-input"], [1, "input-number-div"], [1, "input-number-div-arrow"], [1, "arrow-up", 3, "click"], [3, "icon", "size"], [1, "arrow-down", 3, "click"], [1, "bot-container-btn"], [1, "bot-button", "send-btn", "input-number-btn", 3, "disabled", "click"], [1, "primary", "rounded", "validate-after-btn", 2, "display", "inline-block", 3, "click"], [1, "rounded", "secondary", "skip-after-btn", 2, "display", "inline-block"], ["id", "bot-input-div", 1, "d-flex", "flex-column", "w-100", "position-realtive", "bot-input"], [1, "w-100", "h-100", "d-flex", "flex-column", "position-absolute", "bot-input__controls"], [3, "ngModel", "maxlength", "placeholder", "ngModelChange", "keyup.enter", "keyup"], [1, "bot-button", "send-btn", 3, "disabled", "click"], ["class", "bot-button-screen", 4, "ngIf"], ["class", "bot-button-attach", 3, "click", 4, "ngIf"], [1, "bot-button-screen"], [1, "bot-button-attach", 3, "click"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper", 3, "scrollTop"], ["scrollMe", ""], [1, "bot-chat"], [1, "bot-input-wrapper"], ["class", "bot-input", 4, "ngIf"], ["class", "bot-input-disable", 4, "ngIf"], [1, "bot-logo"], [3, "src"], [1, "bot-answer"], ["class", "", 3, "innerHTML", 4, "ngIf"], [1, "", 3, "innerHTML"], ["class", "bot-button", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", 3, "innerHTML", "click"], ["type", "text", "maxlength", "200", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter", "keyup"], ["class", "bot-button", 3, "style", "disabled", "click", 4, "ngIf"], [1, "bot-button", 3, "disabled", "click"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, dependencies: [i4.DefaultValueAccessor, i4.NgControlStatus, i4.MaxLengthValidator, i4.NgModel, i5.NgForOf, i5.NgIf, i5.NgStyle, i6.NowboardIconComponent, i7.FirstVisitComponent, i8.CustomCheckboxCalendarComponent, i9.SafeHtmlPipe], styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:transparent}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification[_ngcontent-%COMP%]{transform:translate(0)!important}}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9A147F!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4E5CA8!important}.voice4[_ngcontent-%COMP%]{background:#ABC1F1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{animation:pulse 2s ease 0s infinite}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}"], data: { animation: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight, FadeSlideInOutKonversoTranslateOutTest, FadeSlideInOutKonversoHeightTest] // TODO remove it
     } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DesktopFullScreenComponent, [{
        type: Component,
        args: [{ selector: 'bot-full-screen', animations: [FadeSlideInOut, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutKonversoHeight, FadeSlideInOutKonversoTranslateOutTest, FadeSlideInOutKonversoHeightTest] // TODO remove it
                , template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\r\n\r\n  <!--<canvas class=\"orb-canvas\"></canvas>\r\n  <div class=\"overlay\">\r\n    <div class=\"overlay__inner\">\r\n    </div>\r\n  </div>-->\r\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\r\n     xmlns=\"http://www.w3.org/1999/html\">\r\n  <div class=\"bot-view\">\r\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\r\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\r\n                       (ready)=\"emit($event)\"></bot-first-visit>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\r\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\r\n\r\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\r\n        <!-- TODO do we need id, remove it? -->\r\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\r\n          <img [src]=\"assets.FullSizeLogo\">\r\n        </div>-->\r\n        <!--<div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\r\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\r\n            <div class=\"m-carl-notification-cue m-cue\">\r\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\r\n                <div class=\"a-cue-voice-el voice1\"></div>\r\n                <div class=\"a-cue-voice-el voice2\"></div>\r\n                <div class=\"a-cue-voice-el voice3\"></div>\r\n                <div class=\"a-cue-voice-el voice4\"></div>\r\n                <div class=\"a-cue-voice-el\"></div>\r\n              </div>\r\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\r\n            </div>\r\n          </div>\r\n        </div>-->\r\n\r\n        <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" [ngStyle]=\"{'height': '40%'}\" class=\"bot\">\r\n          <div class=\"circle1\"></div>\r\n          <div class=\"circle2\"></div>\r\n          <div class=\"circle3\"></div>\r\n        </div>\r\n        \r\n        <div  class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\r\n          <!-- USER INPUT -->\r\n          <ng-container *ngIf=\"LastUserInput && !afterProcess\">\r\n            <div [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationHeightTTX*2, animationSlideValue)\" class=\"overflow-hidden d-flex flex-column w-100 user-input-container\">\r\n              <div [@FadeSlideInOutKonversoTranslateOutTest]=\"animations.FadeSlideInOut(animationTTX*1.5, animationSlideValue)\" [class.user-input-top]=\"LastUserInput?.message != ''\"  class=\"user-input\">\r\n                <div class=\"data\" [style]=\"{\r\n                        color : assets?.ColorSet?.Secondary\r\n                      }\" [innerHTML]=\"LastUserInput.message\">\r\n                </div>\r\n                <span class=\"time\">{{LastUserInput.date}}</span>\r\n              </div>  \r\n            </div>\r\n          </ng-container>  \r\n\r\n          <!-- TODO remove it -->\r\n<!--           <div>\r\n            disableUserInput: <span>{{ disableUserInput }}</span>\r\n          </div>\r\n          <div>\r\n            showInput: <span>{{ showInput }}</span>\r\n          </div>\r\n          <div>\r\n            afterProcess: <span>{{ afterProcess }}</span>\r\n          </div>\r\n          <div>\r\n            LastBotAnswer.text: <span>{{ LastBotAnswer.text | json}}</span>\r\n          </div>\r\n          <div>\r\n            &nbsp;\r\n          </div>\r\n          <div>\r\n            LastBotAnswer: <span>{{ LastBotAnswer | json}}</span>\r\n          </div>\r\n -->          <!-- TODO remove it -->\r\n\r\n          <!-- BOT ANSWER -->\r\n          <ng-container *ngIf=\"LastBotAnswer\">\r\n            <div class=\"position-relative bot-answer\">\r\n              <div class=\"d-flex flex-column w-100 position-relative bot-answer__text\">\r\n\r\n                <!-- BOT ANSWER TEXT -->\r\n                <ng-container *ngIf=\"LastBotAnswer.text\">\r\n                  <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\r\n                  <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\r\n                  -->\r\n                  <ng-container *ngIf=\"!LastBotAnswer.text.includes('loading-dots') && changed && showText\">\r\n                    <span [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"w-100 justify-content-center\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"!afterProcess\">\r\n                    <span id=\"loading-creation\"></span>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n\r\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\r\n                && LastBotAnswer.medias[0].required_actions\r\n                && LastBotAnswer.medias[0].required_actions.length > 0\r\n                && !LastBotAnswer.text.includes('loading-dots')\">\r\n                <!-- BOT ANSWER BUTTONS -->\r\n                <div class=\"mt35 d-flex justify-content-center w-100 position-relative bot-answer__buttons\">\r\n                  <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\r\n                    <ng-container *ngIf=\"suggest.format === 'button'\">\r\n                        <button\r\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\r\n                          *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\r\n                            borderColor : assets?.ColorSet?.Primary,\r\n                            color : assets?.ColorSet?.Primary\r\n                          }\"\r\n                          class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\r\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\r\n                        </button>\r\n                        <button\r\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\r\n                          *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\r\n                            borderColor : assets?.ColorSet?.Primary,\r\n                            color : assets?.ColorSet?.Primary\r\n                          }\"\r\n                          class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\r\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\r\n                        </button>\r\n                        <button\r\n                          [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\"\r\n                          *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\"\r\n                            [style]=\"{\r\n                            borderColor : assets?.ColorSet?.Primary,\r\n                            color : assets?.ColorSet?.Primary\r\n                          }\"\r\n                          class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\r\n                          [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\r\n                      </button>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </div>\r\n\r\n                <ng-container *ngIf=\"disableUserInput\">\r\n                  <div class=\"position-relative bot-answer__disable-input\">\r\n                    <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, -100)\" class=\"bot-input-disable\">\r\n                      <i>{{ select }}</i>\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n              </ng-container>\r\n              <!-- BOT ANSWER BUTTONS -->\r\n\r\n              <!--<ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormElements.length > 0\">\r\n                <div class=\"after-process-form\">\r\n                  <div class=\"after-process-subform\" *ngFor=\"let formElements of config.AfterProcessScenario.FormElements\">\r\n                    <ng-container *ngFor=\"let form of formElements\">\r\n                      <ng-container [ngSwitch]=\"form.type\">\r\n                        <div *ngSwitchCase=\"'checkbox'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" class=\"bot-checkbox\">\r\n                          <input [checked]=\"form?.checked == true ? 'true': 'false'\" [id]=\"form?.id\" [name]=\"form?.id\" [type]='form?.type' value=\"false\">\r\n                          <label [for]=\"form?.id\" class=\"bot-checkbox-label\">\r\n                            {{ translate.translate(service.locale, form.label) }}\r\n                          </label>\r\n                        </div>\r\n\r\n                        <input [class]=\"form?.class\" [id]=\"form?.id\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" *ngSwitchCase=\"'text'\"\r\n                        [pattern]=\"form?.pattern\" [placeholder]=\"form?.placeholder\" [type]=\"form?.type\"\r\n                        [value]=\"form?.value\">\r\n\r\n                        <div [class]=\"form?.class\" *ngSwitchCase=\"'div'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\">\r\n                          {{ translate.translate(service.locale, form?.content) }}\r\n                        </div>\r\n\r\n                        <textarea [class]=\"form?.class\" [id]=\"form?.id\" *ngSwitchCase=\"'textarea'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\"\r\n                        [placeholder]=\"translate.translate(service.locale, form?.placeholder)\"></textarea>\r\n                      </ng-container>\r\n                    </ng-container>\r\n                  </div>\r\n                </div>\r\n              </ng-container>-->\r\n\r\n              <custom-checkbox-calendar\r\n                [@FadeSlideInOutKonversoHeightTest]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\"\r\n                *ngIf=\"afterProcess\"\r\n                [state]=\"afterProcess\"\r\n                (calendarChange)=\"bindCalendar($event)\"\r\n                [calendarTemplate]=\"calendarTemplate\"\r\n                [columnOverride]=\"calendarKeyOverride\">\r\n              </custom-checkbox-calendar>\r\n\r\n              <ng-container *ngIf=\"inputType === 'number'\">\r\n                <div [@FadeSlideInOutKonversoOpacityOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"bot-input\">\r\n                                  <!--<input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" min=\"2\" [max]=\"inputLimit\"\r\n                       [placeholder]=\"currentPlaceHolder\">-->\r\n                  <div class=\"input-number-div\">\r\n                    <div class=\"input-number-div-arrow\">\r\n                      <button (click)=\"changeNumber(1)\" class=\"arrow-up\">\r\n                        <nb-icon [icon]=\"'up_2'\" [size]=\"1.5\"></nb-icon>\r\n                      </button>\r\n\r\n                      <button (click)=\"changeNumber(-1)\" class=\"arrow-down\">\r\n                        <nb-icon [icon]=\"'down_2'\" [size]=\"1.5\"></nb-icon>\r\n                      </button>\r\n                    </div>\r\n\r\n                    {{ userInput }}\r\n                  </div>\r\n\r\n                  <div class=\"bot-container-btn\">\r\n                    <button class=\"bot-button send-btn input-number-btn\" [style]=\"{\r\n                      backgroundColor : assets?.ColorSet?.Primary,\r\n                      color : assets?.ColorSet?.Secondary\r\n                  }\" (click)=\"_send()\" [disabled]=\"!userInput\">\r\n\r\n                      <ng-container *ngIf=\"inputType === 'number'\">\r\n                        {{ sendBtn }}\r\n                      </ng-container>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <div class=\"position-relative bot-input-wrapper\">\r\n            <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormButtons.length > 0\">\r\n              <!--<button [class]=\"btn.class\" *ngFor=\"let btn of config.AfterProcessScenario.FormButtons\" [ngStyle]=\"{'display': btn?.display ? btn.display: 'block'}\">\r\n                {{ translate.translate(service.locale, btn.label) }}\r\n              </button>-->\r\n              <button (click)=\"getCalendar()\" class=\"primary rounded validate-after-btn\" style=\"display: inline-block;\">\r\n                {{ translate.translate(service.locale, 'VALIDATE_AVAILABILITY') }}\r\n              </button>\r\n\r\n              <button class=\"rounded secondary skip-after-btn\" style=\"display: inline-block;\">\r\n                {{ translate.translate(service.locale, 'SKIP') }}\r\n              </button>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"!afterProcess\">\r\n              <ng-container *ngIf=\"!disableUserInput && showInput\">\r\n                <div class=\"d-flex flex-column w-100 position-realtive bot-input\" id=\"bot-input-div\">\r\n                  <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValueAdd)\" class=\"w-100 h-100 d-flex flex-column position-absolute bot-input__controls\">\r\n\r\n                    <ng-container *ngIf=\"inputType === 'text'\">\r\n                      <textarea [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" [maxlength]=\"inputLimit\"\r\n                        [placeholder]=\"currentPlaceHolder\"></textarea>\r\n                    </ng-container>\r\n  \r\n                    <ng-container *ngIf=\"inputType !== 'number'\">\r\n                      <div class=\"bot-container-btn\">\r\n                        <button class=\"bot-button send-btn\" [style]=\"{\r\n                          backgroundColor : assets?.ColorSet?.Primary,\r\n                          color : assets?.ColorSet?.Secondary}\"\r\n                          (click)=\"_send()\"\r\n                          [disabled]=\"!userInput\">\r\n    \r\n                          <ng-container *ngIf=\"inputType !== 'number'\">\r\n                            {{ sendBtnMsg }}\r\n                          </ng-container>\r\n    \r\n                          <!--<ng-container *ngIf=\"inputType === 'number'\">\r\n                            {{ sendBtn }}\r\n                          </ng-container>-->\r\n                        </button>\r\n    \r\n                        <button *ngIf=\"inputType !== 'number' && IsMobile\" class=\"bot-button-screen\">\r\n                          <nb-icon [icon]=\"'scan_11'\" [size]=\"1.5\"></nb-icon>\r\n                          {{ btnScreen }}\r\n                        </button>\r\n    \r\n                        <button *ngIf=\"inputType !== 'number'\" class=\"bot-button-attach\" (click)=\"openUpload.emit(true)\">\r\n                          {{ fileNb }}\r\n    \r\n                          <ng-container *ngIf=\"fileNb <= 1\">\r\n                            {{ translate.translate(service.locale, 'ATTACHMENT') }}\r\n                          </ng-container>\r\n    \r\n                          <ng-container *ngIf=\"fileNb > 1\">\r\n                            {{ translate.translate(service.locale, 'ATTACHMENTS') }}\r\n                          </ng-container>\r\n    \r\n                          <nb-icon [icon]=\"'attachment'\" [size]=\"1.5\"></nb-icon>\r\n                        </button>\r\n                      </div>\r\n                    </ng-container>\r\n\r\n                  </div>\r\n                </div>\r\n              </ng-container>  \r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\r\n        {{AssistantMode}}\r\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\r\n          <div class=\"bot-chat\">\r\n            <ng-container *ngFor=\"let entry of displayData\">\r\n              <ng-container *ngIf=\"entry.date\">\r\n                <div [@FadeSlideInOutKonversoTranslateOut]=\"animations.FadeSlideInOut(animationTTX, animationSlideValue)\" class=\"user-input\">\r\n                  <div class=\"data\" [style]=\"{\r\n                     backgroundColor : assets?.ColorSet?.Primary,\r\n                     color : assets?.ColorSet?.Secondary\r\n                    }\" [innerHTML]=\"entry.message\">\r\n                  </div>\r\n                  <span class=\"time\">{{entry.date}}</span>\r\n                </div>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!entry.date\">\r\n                <div class=\"bot-answer\">\r\n                  <ng-container *ngIf=\"entry.text\">\r\n                    <span *ngIf=\"changed\" class=\"\" [innerHTML]=\"entry.text | safeHtml\"></span>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\r\n                   && entry.medias[0].required_actions\r\n                   && entry.medias[0].required_actions.length\">\r\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\r\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\r\n                        <button *ngIf=\"changed\" [style]=\"{\r\n                     borderColor : assets?.ColorSet?.Primary,\r\n                     color : assets?.ColorSet?.Primary\r\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\r\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\r\n                      </ng-container>\r\n                    </ng-container>\r\n                  </ng-container>\r\n\r\n                </div>\r\n              </ng-container>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <div class=\"bot-input-wrapper\">\r\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\r\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\r\n                   [placeholder]=\"currentPlaceHolder\">\r\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\r\n                     backgroundColor : assets?.ColorSet?.Primary,\r\n                     color : assets?.ColorSet?.Secondary\r\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\r\n            </button>\r\n          </div>\r\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\r\n            <i>{{ select }}</i>\r\n          </div>\r\n        </div>\r\n        <div class=\"bot-logo\">\r\n          <img [src]=\"assets.FullSizeLogo\">\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n  </div>\r\n</div>\r\n", styles: ["@keyframes gradient{0%{background-position:50% 0%}50%{background-position:50% 100%}to{background-position:50% 0%}}@keyframes pulsebot{0%{transform:scale(1)}50%{transform:scale(1.3)}to{transform:scale(1)}}.bot-listening{height:100%;background:transparent}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:transparent}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:transparent}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translate(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9D107D 1px,#9D107D 3%,#580b58 60%);box-shadow:0 0 10px 5px #00000040;animation:pulsebot 3.5s ease infinite}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9A147F!important}.voice2{background:#773691!important}.voice3{background:#4E5CA8!important}.voice4{background:#ABC1F1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:hovering 6s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){animation:hovering 7s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:hovering 8s ease 0s infinite reverse both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){animation:hovering 9s ease 0s infinite both}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:hovering 10s ease 0s infinite reverse both}.m-carl-notification .m-cue .speaking{animation:pulse 2s ease 0s infinite}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0px 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0px 0px 0px;opacity:.4}@keyframes hovering{0%{transform:rotate(0) translate(18px) rotate(0)}to{transform:rotate(360deg) translate(18px) rotate(-360deg)}}@keyframes pulse{0%{transform:scale(1)}10%{transform:scale(1.15)}15%{transform:scale(1.25)}20%{transform:scale(1.05)}30%{transform:scale(1.3)}40%{transform:scale(1)}50%{transform:scale(1.25)}55%{transform:scale(1.1)}60%{transform:scale(1)}65%{transform:scale(1.3)}70%{transform:scale(1.2)}80%{transform:scale(1.15)}90%{transform:scale(1.25)}to{transform:scale(1.05)}}\n"] }]
    }], function () { return [{ type: i1.TranslateService }, { type: i2.KonversoService }, { type: i3.AnimationsService }, { type: undefined, decorators: [{
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
        }], openUpload: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9rb252ZXJzby9zcmMvbGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJaEcsT0FBTyxFQUVILGNBQWMsRUFDZCxnQ0FBZ0MsRUFDaEMsa0NBQWtDLEVBQ2xDLDRCQUE0QixFQUMvQixNQUFNLDBCQUEwQixDQUFDO0FBWWxDLG9CQUFvQjtBQUNwQixPQUFPLEVBQUMsT0FBTyxFQUFhLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNiL0UsNkJBQW9EO0lBQ2xELDBDQUN3QztJQUF2QiwrTEFBUyxlQUFBLG1CQUFZLENBQUEsSUFBQztJQUFDLGlCQUFrQjtJQUM1RCwwQkFBZTs7O0lBRkksZUFBbUM7SUFBbkMsd0RBQW1DLHlCQUFBOzs7O0lBa0NoRCw2QkFBcUQ7SUFDbkQsK0JBQXNMLGNBQUE7SUFFbEwsMEJBR007SUFDTixnQ0FBbUI7SUFBQSxZQUFzQjtJQUFBLGlCQUFPLEVBQUEsRUFBQTtJQUd0RCwwQkFBZTs7O0lBVFIsZUFBMEc7SUFBMUcsK0lBQTBHO0lBQ0ssZUFBcUQ7SUFBckQsNEdBQXFEO0lBQWxLLGlKQUE0RztJQUM3RixlQUVWO0lBRlUsa0pBRVY7SUFBQywyRUFBbUM7SUFFekIsZUFBc0I7SUFBdEIsK0NBQXNC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QVM7a0JBQWxCLE1BQU07WUFDRyxZQUFZO2tCQUFyQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0RlZmF1bHRBc3NldHMsIEtvbnZlcnNvSW50ZXJmYWNlLCBPcGVuQ2hhdEJvdFJlc3BvbnNlLCBVc2VySW5wdXR9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XHJcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcclxuaW1wb3J0IHtUcmFuc2xhdGVTZXJ2aWNlfSBmcm9tICcuLi90cmFuc2xhdGUuc2VydmljZSc7XHJcbmltcG9ydCB7XHJcbiAgICBBbmltYXRpb25zU2VydmljZSxcclxuICAgIEZhZGVTbGlkZUluT3V0LFxyXG4gICAgRmFkZVNsaWRlSW5PdXRLb252ZXJzb09wYWNpdHlPdXQsXHJcbiAgICBGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0LFxyXG4gICAgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodFxyXG59IGZyb20gJ25neC1ub3dicmFpbnMtYW5pbWF0aW9ucyc7XHJcblxyXG5kZWNsYXJlIHZhciBQSVhJOiBhbnk7XHJcbmNvbnN0IGRlZmF1bHRJbnB1dFR5cGUgPSAndGV4dCc7XHJcbmNvbnN0IGRlZmF1bHRJbnB1dExpbWl0ID0gMzAwO1xyXG5jb25zdCBBTklNQVRJT05fVFRYID0gNzUwO1xyXG5jb25zdCBBTklNQVRJT05fVFRYX0FERCA9IDI1MDtcclxuY29uc3QgQU5JTUFUSU9OX1NMSURFX1ZBTFVFID0gLTUwO1xyXG5jb25zdCBBTklNQVRJT05fU0xJREVfVkFMVUVfQUREID0gLTI1O1xyXG5jb25zdCBBTklNQVRJT05fSEVJR0hUX1RUWCA9IDEyNTA7XHJcblxyXG5cclxuLyogVE9ETyByZW1vdmUgaXQgKi9cclxuaW1wb3J0IHthbmltYXRlLCBrZXlmcmFtZXMsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG5jb25zdCBBTklNQVRJT05fVFlQRV9DVUJJQ19CRVpJRVIgPSAnY3ViaWMtYmV6aWVyKDAuMzksIDAuNTgsIDAuNTcsIDEpJztcclxuXHJcbmV4cG9ydCBjb25zdCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0VGVzdCA9IHRyaWdnZXIoJ0ZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXRUZXN0JywgW1xyXG4gICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICBzdHlsZSh7b3BhY2l0eTogMCwgdG9wOiAne3twZXJjZW50X3N0YXJ0fX0lJ30pLFxyXG4gICAgICBhbmltYXRlKGB7e3R0eH19bXMgJHtBTklNQVRJT05fVFlQRV9DVUJJQ19CRVpJRVJ9YCwgc3R5bGUoe29wYWNpdHk6IDEsIHRvcDogJzAlJ30pKVxyXG4gICAgXSksXHJcbiAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICAgIHN0eWxlKHtvcGFjaXR5OiAxfSksXHJcbiAgICAgIGFuaW1hdGUoJ3t7dHR4fX1tcyBlYXNlLWluLW91dCcsIHN0eWxlKHtvcGFjaXR5OiAwfSkpXHJcbiAgICBdKVxyXG4gIF0pXHJcblxyXG4gIGV4cG9ydCBjb25zdCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0VGVzdCA9IHRyaWdnZXIoJ0ZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRUZXN0JywgW1xyXG4gICAgdHJhbnNpdGlvbignOmVudGVyJyxbXHJcbiAgICAgICAgc3R5bGUoe2hlaWdodDogMH0pLFxyXG4gICAgICAgIGFuaW1hdGUoYHt7dHR4fX1tcyAke0FOSU1BVElPTl9UWVBFX0NVQklDX0JFWklFUn1gLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSlcclxuICAgIF0pLFxyXG4gICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICAgIHN0eWxlKHtvcGFjaXR5OiAxfSksXHJcbiAgICAgICAgYW5pbWF0ZSgne3t0dHh9fW1zIGVhc2UtaW4tb3V0Jywgc3R5bGUoe29wYWNpdHk6IDB9KSlcclxuICAgICAgXSlcclxuICBdKTtcclxuLyogVE9ETyByZW1vdmUgaXQgKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdib3QtZnVsbC1zY3JlZW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgICAvL2FuaW1hdGlvbnM6IFtGYWRlU2xpZGVJbk91dCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb09wYWNpdHlPdXQsIEZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXQsIEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRdXHJcbiAgICBhbmltYXRpb25zOiBbRmFkZVNsaWRlSW5PdXQsIEZhZGVTbGlkZUluT3V0S29udmVyc29PcGFjaXR5T3V0LCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0LCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvSGVpZ2h0LCBGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0VGVzdCwgRmFkZVNsaWRlSW5PdXRLb252ZXJzb0hlaWdodFRlc3RdIC8vIFRPRE8gcmVtb3ZlIGl0XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIEFzc2lzdGFudE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGFzc2V0czogRGVmYXVsdEFzc2V0cztcclxuICAgIEBJbnB1dCgpIGZpcnN0VmlzaXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XHJcbiAgICBASW5wdXQoKSBkaXNwbGF5RGF0YTogKFVzZXJJbnB1dCB8IE9wZW5DaGF0Qm90UmVzcG9uc2UpW107XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlVXNlcklucHV0OiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgTGFzdFVzZXJJbnB1dDogVXNlcklucHV0O1xyXG4gICAgQElucHV0KCkgTGFzdEJvdEFuc3dlcjogT3BlbkNoYXRCb3RSZXNwb25zZTtcclxuICAgIEBJbnB1dCgpIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcclxuICAgIEBJbnB1dCgpIElzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBzaG93SW5wdXQ6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBOdW1iZXJQbGFjZUhvbGRlcjogc3RyaW5nW107XHJcbiAgICBASW5wdXQoKSBhZnRlclByb2Nlc3MgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGZpbGVOYiA9IDA7XHJcblxyXG4gICAgQE91dHB1dCgpIHJlYWR5U2VuZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XHJcbiAgICBAT3V0cHV0KCkgc2VuZDogRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4obnVsbCk7XHJcbiAgICBAT3V0cHV0KCkgc2VuZEJvdENvbW1hbmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KG51bGwpO1xyXG4gICAgQE91dHB1dCgpIHNlbmRFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4obnVsbCk7XHJcbiAgICBAT3V0cHV0KCkgc2VuZENhbGVuZGFyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PihudWxsKTtcclxuICAgIEBPdXRwdXQoKSBvcGVuVXBsb2FkIDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSlcclxuICAgIHB1YmxpYyB1c2VySW5wdXQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjdXJyZW50UGxhY2VIb2xkZXI6IHN0cmluZyA9ICcnO1xyXG4gICAgcHVibGljIHNlbmRCdG4gPSAnJztcclxuICAgIHB1YmxpYyBzZW5kQnRuTXNnID0gJyc7XHJcbiAgICBwdWJsaWMgc2VsZWN0ID0gJyc7XHJcbiAgICBwdWJsaWMgY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgcHVibGljIGJvdExpc3RlbmluZyA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNob3dXcmFwcGVyID0gdHJ1ZTtcclxuICAgIHB1YmxpYyBzaG93VGV4dCA9IHRydWU7XHJcbiAgICBwdWJsaWMgaW5wdXRUeXBlOiBzdHJpbmcgPSBkZWZhdWx0SW5wdXRUeXBlO1xyXG4gICAgcHVibGljIGlucHV0TGltaXQ6IG51bWJlciA9IGRlZmF1bHRJbnB1dExpbWl0O1xyXG4gICAgcHJpdmF0ZSBuZXdNZXNzYWdlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG1lc3NhZ2VDdXJyZW50ID0gJyc7XHJcbiAgICBwcml2YXRlIG1zZ0FycmF5ID0gW107XHJcbiAgICBwcml2YXRlIGJvdExpc3RlbmluZ1RpbWVyID0gMDtcclxuICAgIHByaXZhdGUgYW5pbV9kb25lID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHJlbG9hZGVkID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRpbWVyO1xyXG4gICAgcHVibGljIGJ0blNjcmVlbiA9ICcnO1xyXG4gICAgcHVibGljIG5iQXR0YWNobWVudHMgPSAwO1xyXG4gICAgY29uZmlnOiBLb252ZXJzb0ludGVyZmFjZTtcclxuICAgIHByaXZhdGUgZGF5cyA9IFtdO1xyXG4gICAgcHVibGljIGNhbGVuZGFyQXZhaWxhYmlsaXR5ID0ge307XHJcbiAgICBwdWJsaWMgY2FsZW5kYXJUZW1wbGF0ZSA9IHtcclxuICAgICAgICBtb3JuaW5nOiB7YWxsOiB0cnVlLCBtb25kYXk6IHRydWUsIHR1ZXNkYXk6IHRydWUsIHdlZG5lc2RheTogdHJ1ZSwgdGh1cnNkYXk6IHRydWUsIGZyaWRheTogdHJ1ZX0sXHJcbiAgICAgICAgYWZ0ZXJub29uOiB7YWxsOiB0cnVlLCBtb25kYXk6IHRydWUsIHR1ZXNkYXk6IHRydWUsIHdlZG5lc2RheTogdHJ1ZSwgdGh1cnNkYXk6IHRydWUsIGZyaWRheTogdHJ1ZX1cclxuICAgIH1cclxuICAgIHB1YmxpYyBjYWxlbmRhcktleU92ZXJyaWRlID0ge1xyXG4gICAgICAgIG1vcm5pbmc6ICdNT1JOSU5HX0FMTCcsXHJcbiAgICAgICAgYWZ0ZXJub29uOiAnQUZURVJOT09OX0FMTCcsXHJcbiAgICAgICAgbW9uZGF5OiAnTU9OREFZJyxcclxuICAgICAgICB0dWVzZGF5OiAnVFVFU0RBWScsXHJcbiAgICAgICAgd2VkbmVzZGF5OiAnV0VETkVTREFZJyxcclxuICAgICAgICB0aHVyc2RheTogJ1RIVVJTREFZJyxcclxuICAgICAgICBmcmlkYXk6ICdGUklEQVknXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFuaW1hdGlvblRUWCA9IEFOSU1BVElPTl9UVFg7XHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uVHR4QWRkID0gQU5JTUFUSU9OX1RUWF9BREQ7XHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uU2xpZGVWYWx1ZSA9IEFOSU1BVElPTl9TTElERV9WQUxVRTtcclxuICAgIHB1YmxpYyBhbmltYXRpb25TbGlkZVZhbHVlQWRkID0gQU5JTUFUSU9OX1NMSURFX1ZBTFVFX0FERDtcclxuICAgIHB1YmxpYyBhbmltYXRpb25IZWlnaHRUVFggPSBBTklNQVRJT05fSEVJR0hUX1RUWDtcclxuXHJcbiAgICBjaGFuZ2VOdW1iZXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmICgoK3RoaXMudXNlcklucHV0ICsgdmFsdWUpID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9ICgrdGhpcy51c2VySW5wdXQgKyB2YWx1ZSkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgcHVibGljIHNlcnZpY2U6IEtvbnZlcnNvU2VydmljZSwgcHVibGljIGFuaW1hdGlvbnM6IEFuaW1hdGlvbnNTZXJ2aWNlLFxyXG4gICAgICAgIEBJbmplY3QoJ19fTmd4S29udmVyc29fXycpIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UpIHtcclxuICAgICAgICBzZXJ2aWNlLmxhbmcuc3Vic2NyaWJlKChyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlLmxvY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQnRuID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEJ0bk1zZyA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRU5EX01FU1NBR0UnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTEVDVCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5TY3JlZW4gPSB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0NSRUVOU0hPVCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGF5cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAnTU9OREFZJyxcclxuICAgICAgICAgICAgICAgICAgICAnVFVFU0RBWScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1dFRE5FU0RBWScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RIVVJTREFZJyxcclxuICAgICAgICAgICAgICAgICAgICAnRlJJREFZJyxcclxuICAgICAgICAgICAgICAgICAgICAnU0FUVVJEQVknLFxyXG4gICAgICAgICAgICAgICAgICAgICdTVU5EQVknLFxyXG4gICAgICAgICAgICAgICAgICAgICdNT05EQVknLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcygpIHtcclxuICAgICAgICBpZiAodGhpcy5hZnRlclByb2Nlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5MYXN0Qm90QW5zd2VyLnRleHQgPSB0aGlzLmNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Cb3RNZXNzYWdlW3RoaXMuc2VydmljZS5sb2NhbGVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50c1swXVswXS5sYWJlbCA9PSAnSm91ciAxJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRheTEgPSB0aGlzLmRheXNbbmV3IERhdGUoKS5nZXREYXkoKSAtIDFdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRheTIgPSB0aGlzLmRheXNbbmV3IERhdGUoKS5nZXREYXkoKV07XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF5MyA9IHRoaXMuZGF5c1tuZXcgRGF0ZSgpLmdldERheSgpICsgMV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtRWxlbWVudHNbMF1bMF0ubGFiZWwgPSBkYXkxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUVsZW1lbnRzWzFdWzBdLmxhYmVsID0gZGF5MjtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50c1syXVswXS5sYWJlbCA9IGRheTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykgJiYgIXRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJykpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoJzxudW1iZXI+JykgJiYgdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0LmluY2x1ZGVzKCc8L251bWJlcj4nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJbnB1dCA9ICcxJztcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAnbnVtYmVyJztcclxuICAgICAgICAgICAgdGhpcy5pbnB1dExpbWl0ID0gOTk5O1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuTnVtYmVyUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5OdW1iZXJQbGFjZUhvbGRlci5sZW5ndGgpXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSBkZWZhdWx0SW5wdXRUeXBlO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0TGltaXQgPSBkZWZhdWx0SW5wdXRMaW1pdDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuYW5pbV9kb25lKSB7XHJcbiAgICAgICAgICAgIGxldCB0MiA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXIgJiYgIXRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJykgJiYgdGhpcy5hbmltX2RvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHQyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCc8YnIvPicpLmpvaW4oYCBgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZlYWN1dGU7Jykuam9pbignw6knKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZlZ3JhdmU7Jykuam9pbignw6gnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPFtePl0qPj8vZ20sICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJyZuYnNwOycpLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1zZ0FycmF5ID0gc3RyaW5nLnNwbGl0KCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ3VycmVudCAhPT0gc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUN1cnJlbnQgPSBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubG9vcGVyKGFycmF5LCB0aW1lcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0XHJcbiAgICAgICAgICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXHJcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyZlYWN1dGU7Jykuam9pbignw6knKVxyXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcmZWdyYXZlOycpLmpvaW4oJ8OoJylcclxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXHJcbiAgICAgICAgICAgICAgICAuc3BsaXQoJyZuYnNwOycpLmpvaW4oJycpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tc2dBcnJheSA9IHN0cmluZy5zcGxpdCgnJyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDdXJyZW50ICE9PSBzdHJpbmcgJiYgc3RyaW5nICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUN1cnJlbnQgPSBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kQ2FsZW5kYXIoJGV2ZW50OiBhbnkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdiaW5kQ2FsZW5kYXIgJGV2ZW50JywgJGV2ZW50KVxyXG4gICAgICAgIGRlbGV0ZSAkZXZlbnQuYWxsXHJcbiAgICAgICAgdGhpcy5jYWxlbmRhckF2YWlsYWJpbGl0eSA9ICRldmVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYWxlbmRhcigpIHtcclxuICAgICAgICB0aGlzLnNlbmRDYWxlbmRhci5lbWl0KHRoaXMuY2FsZW5kYXJBdmFpbGFiaWxpdHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGxhdW5jaExvb3AoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubXNnQXJyYXkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubmV3TWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLm1zZ0FycmF5ID0gdGhpcy5tZXNzYWdlQ3VycmVudC5zcGxpdChcIlwiKTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvb3BlcigpO1xyXG4gICAgICAgIH0sIDYwKTtcclxuICAgIH1cclxuXHJcbiAgICBsb29wZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXNnQXJyYXkubGVuZ3RoID4gMCAmJiAhdGhpcy5yZWxvYWRlZCkge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgKz0gdGhpcy5tc2dBcnJheS5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXRUeXBlID0gZGVmYXVsdElucHV0VHlwZTtcclxuICAgICAgICB0aGlzLmlucHV0TGltaXQgPSBkZWZhdWx0SW5wdXRMaW1pdDtcclxuICAgICAgICBpZiAodGhpcy5QbGFjZUhvbGRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLlBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuUGxhY2VIb2xkZXIubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VyV3JpdGluZyhrZXk6IGFueSkge1xyXG4gICAgICAgIGlmIChrZXkuY29kZSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleS5jb2RlID09PSAnQmFja3NwYWNlJykge1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgKz0gMjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbWl0KCRldmVudCkge1xyXG4gICAgICAgIHRoaXMuZmlyc3RWaXNpdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVhZHlTZW5kLmVtaXQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF9zZW5kKCkge1xyXG4gICAgICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXI/LmVuZE9mVG9waWMgJiYgdGhpcy5MYXN0VXNlcklucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dC5tZXNzYWdlID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhOiBVc2VySW5wdXQgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMudXNlcklucHV0LFxyXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcclxuICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlbmQuZW1pdCh1c2VyRGF0YSk7XHJcbiAgICAgICAgdGhpcy51c2VySW5wdXQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNjcm9sbChzY3JvbGxIZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgwKTtcclxuICAgICAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnlQYXNzVXNlcklucHV0KGJvdGRhdGE6IHN0cmluZywgaT86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2VuZEJvdENvbW1hbmQuZW1pdChib3RkYXRhKTtcclxuICAgIH1cclxufVxyXG4iLCI8IS0tPGRpdiBjbGFzcz1cImJvdC1jb250YWluZXJcIiAgW2NsYXNzXT1cIklzTW9iaWxlID8gJ2JvdC1tb2JpbGUnIDogJydcIiBbc3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJyA6ICcjMTAwNjUyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDsnfVwiLS0+XHJcblxyXG4gIDwhLS08Y2FudmFzIGNsYXNzPVwib3JiLWNhbnZhc1wiPjwvY2FudmFzPlxyXG4gIDxkaXYgY2xhc3M9XCJvdmVybGF5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheV9faW5uZXJcIj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2Pi0tPlxyXG4gIDxkaXYgY2xhc3M9XCJib3QtY29udGFpbmVyXCIgIFtjbGFzc109XCJJc01vYmlsZSA/ICdib3QtbW9iaWxlJyA6ICcnXCIgW3N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcicgOiAnIzEwMDY1MiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7J31cIlxyXG4gICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS9odG1sXCI+XHJcbiAgPGRpdiBjbGFzcz1cImJvdC12aWV3XCI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmlyc3RWaXNpdCAmJiBmaXJzdFVzYWdlU3RvcnlcIj5cclxuICAgICAgPGJvdC1maXJzdC12aXNpdCBbZmlyc3RVc2FnZVN0b3J5XT1cImZpcnN0VXNhZ2VTdG9yeVwiIFthc3NldHNdPVwiYXNzZXRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAocmVhZHkpPVwiZW1pdCgkZXZlbnQpXCI+PC9ib3QtZmlyc3QtdmlzaXQ+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZmlyc3RWaXNpdCB8fCAhZmlyc3RVc2FnZVN0b3J5XCI+XHJcbiAgICAgIDxidXR0b24gKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dCgnZXhpdCcsIDApXCIgaWQ9XCJleGl0LWJ0blwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj48L2J1dHRvbj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib3QtYXNzaXN0YW50LXdyYXBwZXJcIiAqbmdJZj1cIkFzc2lzdGFudE1vZGVcIj5cclxuICAgICAgICA8IS0tIFRPRE8gZG8gd2UgbmVlZCBpZCwgcmVtb3ZlIGl0PyAtLT5cclxuICAgICAgICA8IS0tPGRpdiAqbmdJZj1cIiFib3RMaXN0ZW5pbmdcIiBjbGFzcz1cImJvdC1sb2dvXCIgaWQ9XCJib3Rsb2dvXCI+XHJcbiAgICAgICAgICA8aW1nIFtzcmNdPVwiYXNzZXRzLkZ1bGxTaXplTG9nb1wiPlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgIDwhLS08ZGl2IFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogJzQwJSd9XCIgY2xhc3M9XCJib3QtbG9nbyBib3QtbGlzdGVuaW5nXCI+XHJcbiAgICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cInsndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEwdmgpJ31cIiBjbGFzcz1cIm0tY2FybC1ub3RpZmljYXRpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tY2FybC1ub3RpZmljYXRpb24tY3VlIG0tY3VlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImJvdExpc3RlbmluZ1wiIGNsYXNzPVwiYS1jdWUtdm9pY2VcIiBpZD1cImJvdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlMlwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlM1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsIHZvaWNlNFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLXZvaWNlLWVsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEtY3VlLWljb25cIiBpZD1cImJvdC1pY29uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+LS0+XHJcblxyXG4gICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvT3BhY2l0eU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6ICc0MCUnfVwiIGNsYXNzPVwiYm90XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZTJcIj48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUzXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiAgY2xhc3M9XCJib3QtZGlzY3Vzc2lvbi13cmFwcGVyXCIgc3R5bGU9XCJtaW4taGVpZ2h0OiA2MCU7IG1heC1oZWlnaHQ6IDYwJTsgaGVpZ2h0OiA2MCU7IC8qbWF4LWhlaWdodDogMTIwcHg7Ki9cIj5cclxuICAgICAgICAgIDwhLS0gVVNFUiBJTlBVVCAtLT5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJMYXN0VXNlcklucHV0ICYmICFhZnRlclByb2Nlc3NcIj5cclxuICAgICAgICAgICAgPGRpdiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRUZXN0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uSGVpZ2h0VFRYKjIsIGFuaW1hdGlvblNsaWRlVmFsdWUpXCIgY2xhc3M9XCJvdmVyZmxvdy1oaWRkZW4gZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIHVzZXItaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXRUZXN0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYKjEuNSwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIiBbY2xhc3MudXNlci1pbnB1dC10b3BdPVwiTGFzdFVzZXJJbnB1dD8ubWVzc2FnZSAhPSAnJ1wiICBjbGFzcz1cInVzZXItaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhXCIgW3N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cIiBbaW5uZXJIVE1MXT1cIkxhc3RVc2VySW5wdXQubWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWVcIj57e0xhc3RVc2VySW5wdXQuZGF0ZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+ICBcclxuXHJcbiAgICAgICAgICA8IS0tIFRPRE8gcmVtb3ZlIGl0IC0tPlxyXG48IS0tICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBkaXNhYmxlVXNlcklucHV0OiA8c3Bhbj57eyBkaXNhYmxlVXNlcklucHV0IH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBzaG93SW5wdXQ6IDxzcGFuPnt7IHNob3dJbnB1dCB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgYWZ0ZXJQcm9jZXNzOiA8c3Bhbj57eyBhZnRlclByb2Nlc3MgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIExhc3RCb3RBbnN3ZXIudGV4dDogPHNwYW4+e3sgTGFzdEJvdEFuc3dlci50ZXh0IHwganNvbn19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgTGFzdEJvdEFuc3dlcjogPHNwYW4+e3sgTGFzdEJvdEFuc3dlciB8IGpzb259fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gLS0+ICAgICAgICAgIDwhLS0gVE9ETyByZW1vdmUgaXQgLS0+XHJcblxyXG4gICAgICAgICAgPCEtLSBCT1QgQU5TV0VSIC0tPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIkxhc3RCb3RBbnN3ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIGJvdC1hbnN3ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIHBvc2l0aW9uLXJlbGF0aXZlIGJvdC1hbnN3ZXJfX3RleHRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIEJPVCBBTlNXRVIgVEVYVCAtLT5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJMYXN0Qm90QW5zd2VyLnRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuICpuZ0lmPVwiIUxhc3RCb3RBbnN3ZXIudGV4dC5pbmNsdWRlcygnbG9hZGluZy1kb3RzJylcIiBpZD1cInRleHRcIj48L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImNoYW5nZWQgJiYgTGFzdEJvdEFuc3dlci50ZXh0LmluY2x1ZGVzKCdsb2FkaW5nLWRvdHMnKVwiIGNsYXNzPVwiZmFkZVwiIFtpbm5lckhUTUxdPVwiTGFzdEJvdEFuc3dlci50ZXh0IHwgc2FmZUh0bWxcIj48L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAtLT5cclxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFMYXN0Qm90QW5zd2VyLnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpICYmIGNoYW5nZWQgJiYgc2hvd1RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbQEZhZGVTbGlkZUluT3V0S29udmVyc29UcmFuc2xhdGVPdXRdPVwiYW5pbWF0aW9ucy5GYWRlU2xpZGVJbk91dChhbmltYXRpb25UVFgsIC0xMDApXCIgY2xhc3M9XCJ3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgW2lubmVySFRNTF09XCJMYXN0Qm90QW5zd2VyLnRleHQgfCBzYWZlSHRtbFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhYWZ0ZXJQcm9jZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJsb2FkaW5nLWNyZWF0aW9uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiTGFzdEJvdEFuc3dlci5tZWRpYXMgJiYgTGFzdEJvdEFuc3dlci5tZWRpYXMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAmJiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAmJiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICYmICFMYXN0Qm90QW5zd2VyLnRleHQuaW5jbHVkZXMoJ2xvYWRpbmctZG90cycpXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEJPVCBBTlNXRVIgQlVUVE9OUyAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdDM1IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHctMTAwIHBvc2l0aW9uLXJlbGF0aXZlIGJvdC1hbnN3ZXJfX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc3VnZ2VzdCBvZiBMYXN0Qm90QW5zd2VyLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInN1Z2dlc3QuZm9ybWF0ID09PSAnYnV0dG9uJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzdWdnZXN0LnZhbHVlPy50aXRsZSA9PSAnVGVybWluZXInICYmIGNoYW5nZWQgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgPT0gJ1F1aXQnICYmIGNoYW5nZWRcIiBbc3R5bGVdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJib3QtYnV0dG9uIGJvdC1idXR0b24tbGVmdCBzaG93LWJ0blwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2ssIGkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgLTEwMClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic3VnZ2VzdC52YWx1ZT8udGl0bGUgPT0gJ05vdXZlbGxlIERlbWFuZGUnICYmIGNoYW5nZWQgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgPT0gJ05ldyBSZXF1ZXN0JyAmJiBjaGFuZ2VkXCIgW3N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYm90LWJ1dHRvbiBib3QtYnV0dG9uLXJpZ2h0IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic3VnZ2VzdC5sYWJlbHx8IHN1Z2dlc3QudmFsdWU/LmRpc3BsYXllZE1lc3NhZ2UgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzdWdnZXN0LnZhbHVlPy50aXRsZSAmJiBzdWdnZXN0LnZhbHVlPy50aXRsZSAhPSAnVGVybWluZXInICYmIHN1Z2dlc3QudmFsdWU/LnRpdGxlICE9ICdRdWl0JyAmJiBzdWdnZXN0LnZhbHVlPy50aXRsZSAhPSAnTm91dmVsbGUgRGVtYW5kZScgJiYgc3VnZ2VzdC52YWx1ZT8udGl0bGUgIT0gJ05ldyBSZXF1ZXN0JyAmJiBjaGFuZ2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJvdC1idXR0b24gYm90LWJ1dHRvbi1ncmV5IHNob3ctYnRuXCIgKGNsaWNrKT1cImJ5UGFzc1VzZXJJbnB1dChzdWdnZXN0Py52YWx1ZT8ub25DbGljaywgaSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic3VnZ2VzdC5sYWJlbHx8IHN1Z2dlc3QudmFsdWU/LmRpc3BsYXllZE1lc3NhZ2UgfHwgc3VnZ2VzdC52YWx1ZT8udGl0bGUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGlzYWJsZVVzZXJJbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9zaXRpb24tcmVsYXRpdmUgYm90LWFuc3dlcl9fZGlzYWJsZS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW0BGYWRlU2xpZGVJbk91dEtvbnZlcnNvVHJhbnNsYXRlT3V0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCAtMTAwKVwiIGNsYXNzPVwiYm90LWlucHV0LWRpc2FibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpPnt7IHNlbGVjdCB9fTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8IS0tIEJPVCBBTlNXRVIgQlVUVE9OUyAtLT5cclxuXHJcbiAgICAgICAgICAgICAgPCEtLTxuZy1jb250YWluZXIgKm5nSWY9XCJhZnRlclByb2Nlc3MgJiYgY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1FbGVtZW50cy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWZ0ZXItcHJvY2Vzcy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZnRlci1wcm9jZXNzLXN1YmZvcm1cIiAqbmdGb3I9XCJsZXQgZm9ybUVsZW1lbnRzIG9mIGNvbmZpZy5BZnRlclByb2Nlc3NTY2VuYXJpby5Gb3JtRWxlbWVudHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmb3JtIG9mIGZvcm1FbGVtZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZm9ybS50eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBmb3JtPy5kaXNwbGF5ID8gZm9ybS5kaXNwbGF5OiAnYmxvY2snfVwiIGNsYXNzPVwiYm90LWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFtjaGVja2VkXT1cImZvcm0/LmNoZWNrZWQgPT0gdHJ1ZSA/ICd0cnVlJzogJ2ZhbHNlJ1wiIFtpZF09XCJmb3JtPy5pZFwiIFtuYW1lXT1cImZvcm0/LmlkXCIgW3R5cGVdPSdmb3JtPy50eXBlJyB2YWx1ZT1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIFtmb3JdPVwiZm9ybT8uaWRcIiBjbGFzcz1cImJvdC1jaGVja2JveC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgZm9ybS5sYWJlbCkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbY2xhc3NdPVwiZm9ybT8uY2xhc3NcIiBbaWRdPVwiZm9ybT8uaWRcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBmb3JtPy5kaXNwbGF5ID8gZm9ybS5kaXNwbGF5OiAnYmxvY2snfVwiICpuZ1N3aXRjaENhc2U9XCIndGV4dCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGF0dGVybl09XCJmb3JtPy5wYXR0ZXJuXCIgW3BsYWNlaG9sZGVyXT1cImZvcm0/LnBsYWNlaG9sZGVyXCIgW3R5cGVdPVwiZm9ybT8udHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJmb3JtPy52YWx1ZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBbY2xhc3NdPVwiZm9ybT8uY2xhc3NcIiAqbmdTd2l0Y2hDYXNlPVwiJ2RpdidcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBmb3JtPy5kaXNwbGF5ID8gZm9ybS5kaXNwbGF5OiAnYmxvY2snfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsIGZvcm0/LmNvbnRlbnQpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFtjbGFzc109XCJmb3JtPy5jbGFzc1wiIFtpZF09XCJmb3JtPy5pZFwiICpuZ1N3aXRjaENhc2U9XCIndGV4dGFyZWEnXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogZm9ybT8uZGlzcGxheSA/IGZvcm0uZGlzcGxheTogJ2Jsb2NrJ31cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwidHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgZm9ybT8ucGxhY2Vob2xkZXIpXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPi0tPlxyXG5cclxuICAgICAgICAgICAgICA8Y3VzdG9tLWNoZWNrYm94LWNhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICBbQEZhZGVTbGlkZUluT3V0S29udmVyc29IZWlnaHRUZXN0XT1cImFuaW1hdGlvbnMuRmFkZVNsaWRlSW5PdXQoYW5pbWF0aW9uVFRYLCBhbmltYXRpb25TbGlkZVZhbHVlKVwiXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImFmdGVyUHJvY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICBbc3RhdGVdPVwiYWZ0ZXJQcm9jZXNzXCJcclxuICAgICAgICAgICAgICAgIChjYWxlbmRhckNoYW5nZSk9XCJiaW5kQ2FsZW5kYXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICBbY2FsZW5kYXJUZW1wbGF0ZV09XCJjYWxlbmRhclRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgIFtjb2x1bW5PdmVycmlkZV09XCJjYWxlbmRhcktleU92ZXJyaWRlXCI+XHJcbiAgICAgICAgICAgICAgPC9jdXN0b20tY2hlY2tib3gtY2FsZW5kYXI+XHJcblxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb09wYWNpdHlPdXRdPVwiYW5pbWF0aW9ucy5GYWRlU2xpZGVJbk91dChhbmltYXRpb25UVFgsIGFuaW1hdGlvblNsaWRlVmFsdWUpXCIgY2xhc3M9XCJib3QtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgW3R5cGVdPVwiaW5wdXRUeXBlXCIgWyhuZ01vZGVsKV09XCJ1c2VySW5wdXRcIiAoa2V5dXAuZW50ZXIpPVwidXNlcklucHV0ICYmIF9zZW5kKClcIiAoa2V5dXApPVwidXNlcldyaXRpbmcoJGV2ZW50KVwiIG1pbj1cIjJcIiBbbWF4XT1cImlucHV0TGltaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50UGxhY2VIb2xkZXJcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LW51bWJlci1kaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtbnVtYmVyLWRpdi1hcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hhbmdlTnVtYmVyKDEpXCIgY2xhc3M9XCJhcnJvdy11cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCIndXBfMidcIiBbc2l6ZV09XCIxLjVcIj48L25iLWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VOdW1iZXIoLTEpXCIgY2xhc3M9XCJhcnJvdy1kb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidkb3duXzInXCIgW3NpemVdPVwiMS41XCI+PC9uYi1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHt7IHVzZXJJbnB1dCB9fVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtY29udGFpbmVyLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3QtYnV0dG9uIHNlbmQtYnRuIGlucHV0LW51bWJlci1idG5cIiBbc3R5bGVdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XHJcbiAgICAgICAgICAgICAgICAgIH1cIiAoY2xpY2spPVwiX3NlbmQoKVwiIFtkaXNhYmxlZF09XCIhdXNlcklucHV0XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlucHV0VHlwZSA9PT0gJ251bWJlcidcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VuZEJ0biB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlIGJvdC1pbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhZnRlclByb2Nlc3MgJiYgY29uZmlnLkFmdGVyUHJvY2Vzc1NjZW5hcmlvLkZvcm1CdXR0b25zLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiBbY2xhc3NdPVwiYnRuLmNsYXNzXCIgKm5nRm9yPVwibGV0IGJ0biBvZiBjb25maWcuQWZ0ZXJQcm9jZXNzU2NlbmFyaW8uRm9ybUJ1dHRvbnNcIiBbbmdTdHlsZV09XCJ7J2Rpc3BsYXknOiBidG4/LmRpc3BsYXkgPyBidG4uZGlzcGxheTogJ2Jsb2NrJ31cIj5cclxuICAgICAgICAgICAgICAgIHt7IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsIGJ0bi5sYWJlbCkgfX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJnZXRDYWxlbmRhcigpXCIgY2xhc3M9XCJwcmltYXJ5IHJvdW5kZWQgdmFsaWRhdGUtYWZ0ZXItYnRuXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XHJcbiAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnVkFMSURBVEVfQVZBSUxBQklMSVRZJykgfX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJvdW5kZWQgc2Vjb25kYXJ5IHNraXAtYWZ0ZXItYnRuXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XCI+XHJcbiAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0tJUCcpIH19XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhZnRlclByb2Nlc3NcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIHBvc2l0aW9uLXJlYWx0aXZlIGJvdC1pbnB1dFwiIGlkPVwiYm90LWlucHV0LWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgYW5pbWF0aW9uU2xpZGVWYWx1ZUFkZClcIiBjbGFzcz1cInctMTAwIGgtMTAwIGQtZmxleCBmbGV4LWNvbHVtbiBwb3NpdGlvbi1hYnNvbHV0ZSBib3QtaW5wdXRfX2NvbnRyb2xzXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICd0ZXh0J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFsobmdNb2RlbCldPVwidXNlcklucHV0XCIgKGtleXVwLmVudGVyKT1cInVzZXJJbnB1dCAmJiBfc2VuZCgpXCIgKGtleXVwKT1cInVzZXJXcml0aW5nKCRldmVudClcIiBbbWF4bGVuZ3RoXT1cImlucHV0TGltaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY3VycmVudFBsYWNlSG9sZGVyXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICBcclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlICE9PSAnbnVtYmVyJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1jb250YWluZXItYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3QtYnV0dG9uIHNlbmQtYnRuXCIgW3N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9zZW5kKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhdXNlcklucHV0XCI+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW5wdXRUeXBlICE9PSAnbnVtYmVyJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VuZEJ0bk1zZyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxuZy1jb250YWluZXIgKm5nSWY9XCJpbnB1dFR5cGUgPT09ICdudW1iZXInXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBzZW5kQnRuIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpbnB1dFR5cGUgIT09ICdudW1iZXInICYmIElzTW9iaWxlXCIgY2xhc3M9XCJib3QtYnV0dG9uLXNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidzY2FuXzExJ1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBidG5TY3JlZW4gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlucHV0VHlwZSAhPT0gJ251bWJlcidcIiBjbGFzcz1cImJvdC1idXR0b24tYXR0YWNoXCIgKGNsaWNrKT1cIm9wZW5VcGxvYWQuZW1pdCh0cnVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGZpbGVOYiB9fVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpbGVOYiA8PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnQVRUQUNITUVOVCcpIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmlsZU5iID4gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0FUVEFDSE1FTlRTJykgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIidhdHRhY2htZW50J1wiIFtzaXplXT1cIjEuNVwiPjwvbmItaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+ICBcclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm90LWNoYXQtd3JhcHBlclwiICpuZ0lmPVwiIUFzc2lzdGFudE1vZGVcIj5cclxuICAgICAgICB7e0Fzc2lzdGFudE1vZGV9fVxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3QtZGlzY3Vzc2lvbi13cmFwcGVyXCIgI3Njcm9sbE1lIFtzY3JvbGxUb3BdPVwic2Nyb2xsTWUuc2Nyb2xsVG8oMCwgOTk5OTk5OSlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtY2hhdFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbnRyeSBvZiBkaXNwbGF5RGF0YVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbnRyeS5kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtARmFkZVNsaWRlSW5PdXRLb252ZXJzb1RyYW5zbGF0ZU91dF09XCJhbmltYXRpb25zLkZhZGVTbGlkZUluT3V0KGFuaW1hdGlvblRUWCwgYW5pbWF0aW9uU2xpZGVWYWx1ZSlcIiBjbGFzcz1cInVzZXItaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGFcIiBbc3R5bGVdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlNlY29uZGFyeVxyXG4gICAgICAgICAgICAgICAgICAgIH1cIiBbaW5uZXJIVE1MXT1cImVudHJ5Lm1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiPnt7ZW50cnkuZGF0ZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFlbnRyeS5kYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90LWFuc3dlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkudGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiY2hhbmdlZFwiIGNsYXNzPVwiXCIgW2lubmVySFRNTF09XCJlbnRyeS50ZXh0IHwgc2FmZUh0bWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkubWVkaWFzICYmIGVudHJ5Lm1lZGlhcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICYmIGVudHJ5Lm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAmJiBlbnRyeS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucy5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWdnZXN0IG9mIGVudHJ5Lm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3VnZ2VzdC5mb3JtYXQgPT09ICdidXR0b24nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjaGFuZ2VkXCIgW3N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnlcclxuICAgICAgICAgICAgfVwiIGNsYXNzPVwiYm90LWJ1dHRvblwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2spXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInN1Z2dlc3QubGFiZWx8fCBzdWdnZXN0LnZhbHVlPy5kaXNwbGF5ZWRNZXNzYWdlIHx8IHN1Z2dlc3QudmFsdWU/LnRpdGxlIFwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3QtaW5wdXQtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dFwiICpuZ0lmPVwiIWRpc2FibGVVc2VySW5wdXQgJiYgc2hvd0lucHV0XCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldPVwidXNlcklucHV0XCIgKGtleXVwLmVudGVyKT1cInVzZXJJbnB1dCAmJiBfc2VuZCgpXCIgKGtleXVwKT1cInVzZXJXcml0aW5nKCRldmVudClcIiBtYXhsZW5ndGg9XCIyMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImN1cnJlbnRQbGFjZUhvbGRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiY2hhbmdlZFwiIGNsYXNzPVwiYm90LWJ1dHRvblwiIFtzdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XHJcbiAgICAgICAgICAgIH1cIiAoY2xpY2spPVwiX3NlbmQoKVwiIFtkaXNhYmxlZF09XCIhdXNlcklucHV0XCI+e3sgc2VuZEJ0biB9fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC1kaXNhYmxlXCIgKm5nSWY9XCJkaXNhYmxlVXNlcklucHV0XCI+XHJcbiAgICAgICAgICAgIDxpPnt7IHNlbGVjdCB9fTwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3QtbG9nb1wiPlxyXG4gICAgICAgICAgPGltZyBbc3JjXT1cImFzc2V0cy5GdWxsU2l6ZUxvZ29cIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=