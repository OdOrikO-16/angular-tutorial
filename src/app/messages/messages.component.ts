import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // テンプレート内でバインドして使用するためpublic
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
