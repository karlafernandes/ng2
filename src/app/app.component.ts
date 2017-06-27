import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div><ul><li *ngFor="let message of mail.messages">{{message.text}}</li></ul><ul><app-simple-form *ngFor="let message of mail.messages" [message]="message.text" (update)="onUpdate(message.id, $event.text)"></app-simple-form></ul></div>'
})
export class AppComponent {

  onUpdate(id, text) {
    this.mail.update(id, text);
    console.log(id);
    console.log(text);
  }

  constructor(
      @Inject('mail') private mail){}
}
