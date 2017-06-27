import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: '<div><input #myInput type="text"><button (click)="onClick(myInput.value)">Click me!</button></div>',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  onClick(value) {
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
