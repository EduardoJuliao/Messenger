import { Component, OnInit } from '@angular/core';
import { ChatListModel } from '../../models/chat-list.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  chats: Array<ChatListModel> = [{
    name: 'Lolzinho',
    unreadMessageCount: 10
  },
  {
    name: 'SpeedRun',
    unreadMessageCount: 100
  },
  {
    name: 'Work',
    unreadMessageCount: 0
  }]

  constructor() { }

  ngOnInit() {
  }

}
