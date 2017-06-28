import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-simple-form',
    template: '<input #myInput type="text" [ngClass]="{mousedown:isMouseDown}" (mousedown)="isMouseDown=true" (mouseup)="isMouseDown=false" (mouseleave)="isMouseDown=false" [(ngModel)]="message"><button (click)="update.emit({text:message})">Click me!</button>',
    styles: [':host {display:flex; flex-diration: column;} input:focus {font-weight: bold; outline: none;} button { border: none;} .mousedown { border: 2px solid green;}']
})
export class SimpleFormComponent implements OnInit {

    isMouseDown;

    @Input() message;

    @Output() update = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

}
