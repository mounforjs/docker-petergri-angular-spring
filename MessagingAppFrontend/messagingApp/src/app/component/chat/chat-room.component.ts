import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../../model/Chat";
import {Router} from "@angular/router";

@Component({
  selector: 'chat',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  @Input()
  chat: Chat = new Chat;
  constructor() {

  }

  ngOnInit(): void {
  }


}
