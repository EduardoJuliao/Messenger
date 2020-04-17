import { CreateNewId } from "../helpers/id.helper";
import Vue from 'vue/types/umd';
import { Component } from 'vue';

@SocketIO({
   name: 'connect'
})

export default class MessageService extends Vue {

   public open() {
      if (localStorage.getItem("chat-sender-id") == null) {
         localStorage.setItem("chat-sender-idg", CreateNewId());
      }
   }

   public connect(chatId: string) {
      localStorage.setItem('chat-id', chatId);
   }

   public disconnect() {
      localStorage.removeItem('chat-id');
   }

   public sendMessage(message: string) {

   }

   public receiveMessage(message: string, from: string) {

   }
}