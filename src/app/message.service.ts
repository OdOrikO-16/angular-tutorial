import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  // メッセージ追加
  add(message: string) {
    this.messages.push(message);
  }
  // メッセージクリア
  clear() {
    this.messages = [];
  }

  constructor() { }
}
