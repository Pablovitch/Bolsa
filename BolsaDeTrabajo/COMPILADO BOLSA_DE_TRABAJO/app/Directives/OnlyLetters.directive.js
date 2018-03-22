"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OnlyLetters = (function () {
    function OnlyLetters(el) {
        this.el = el;
    }
    OnlyLetters.prototype.onKeyDown = function (event) {
        var e = event;
        if (this.OnlyLetters) {
            if ([46, 8, 32, 9, 27, 13, 110, 192].indexOf(e.keyCode) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: Ctrl+C
                (e.keyCode == 67 && e.ctrlKey === true) ||
                // Allow: Ctrl+X
                (e.keyCode == 88 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if (e.shiftKey || (e.keyCode < 65 || e.keyCode > 90)) {
                e.preventDefault();
            }
        }
    };
    return OnlyLetters;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OnlyLetters.prototype, "OnlyLetters", void 0);
__decorate([
    core_1.HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OnlyLetters.prototype, "onKeyDown", null);
OnlyLetters = __decorate([
    core_1.Directive({
        selector: '[OnlyLetters]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], OnlyLetters);
exports.OnlyLetters = OnlyLetters;
//# sourceMappingURL=OnlyLetters.directive.js.map