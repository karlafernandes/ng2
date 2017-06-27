import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
      'Message 1',
      'Message 2',
      'Message 3'
  ];

  constructor() { }

}
