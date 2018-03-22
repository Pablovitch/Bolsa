import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[OnlyLetters]'
})
export class OnlyLetters {

    constructor(private el: ElementRef) { }

    @Input() OnlyLetters: boolean;

    @HostListener('keydown', ['$event']) onKeyDown(event: any) {
        let e = <KeyboardEvent>event;
        if (this.OnlyLetters) {
            if ([46, 8, 32, 9, 27, 13, 110, 192, 20].indexOf(e.keyCode) !== -1 ||
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
            if (e.shiftKey ||( e.keyCode < 65 || e.keyCode > 90)) {
                e.preventDefault();
            }
        }
    }
}