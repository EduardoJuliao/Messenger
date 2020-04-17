import { MessageService } from './../../shared/services/message.service';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input('message')
  message: Message;

  constructor(messageService: MessageService) { }

  ngOnInit() {
  }

}
