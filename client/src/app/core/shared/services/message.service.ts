import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from '../../models/message.model';
import { Observable } from 'rxjs';
import axios, { AxiosResponse } from "axios";
import { AxiosInstance } from "axios";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private axiosClient: AxiosInstance;

  constructor(private socket: Socket,
    private http: HttpClient) {

    this.axiosClient = axios.create({
      url: 'http://localhost:3000',
      timeout: 3000,
      headers: {
        "X-Initialized-At": Date.now().toString()
      }
    });

    this.socket.connect();

    this.socket.on('message', (result) => {
      console.log(result);
    });

    this.socket.on('recieve', () => {

    })
  }

  public sendMessage(message: Message): Promise<AxiosResponse<Message>> {
    return this.axiosClient.post('http://localhost:3000', message);
  }

  public recieveMessage(message: Message) {

  }
}
