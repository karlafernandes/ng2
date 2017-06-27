import { Component } from '@angular/core';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-root',
  template: '<div><app-simple-form></app-simple-form>{{mail.message}}</div>'
})
export class AppComponent {
  title = 'Lets get started';

  constructor(private mail:MailService){}
}
