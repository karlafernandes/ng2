import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: '<div><input type="text"><button>Click me!</button></div>',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
