import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../model/Message";
import {Chat} from "../../model/Chat";
import {ActivatedRoute} from "@angular/router";
import {ChatDTO} from "../../model/ChatDTO";

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
