import { MessageService } from './core/shared/services/message.service';
import { Component } from '@angular/core';
import { Message } from './core/models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messages: Array<Message> = [{
    date: new Date(),
    text: 'Heyo 😍',
    sender: {
      id: 'dsfqwfeqw',
      name: 'Eduardo'
    }
  },
  {
    date: new Date(),
    text: 'hi 😳',
    sender: {
      id: 'dsfqwfeqw',
      name: 'Sido'
    }
  }]

  /**
   *
   */
  constructor(private messsageService: MessageService) {

  }

  public send() {
    var message = {
      sender: {
        id: 'fewiofnoinfeq',
        name: 'Eduardo'
      },
      date: new Date(),
      text: 'LMAO'
    }
    this.messsageService.sendMessage(message)
      .then(response => {
        this.messages.push(response.data);
      })
  }
}
