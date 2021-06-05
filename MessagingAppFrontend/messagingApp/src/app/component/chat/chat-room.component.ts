import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../../model/Chat";
import {ActivatedRoute} from "@angular/router";
import {ChatDTO} from "../../model/ChatDTO";
import {ChatService} from "../../service/ChatService";
import {MessageDTO} from "../../model/MessageDTO";

@Component({
  selector: 'chat',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  @Input()
  chat: ChatDTO = new ChatDTO;
  messages:MessageDTO[] = [];

  constructor(private route: ActivatedRoute, private chatService: ChatService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.chat.chatName = params.get('chatName');
      this.chat.chatId = params.get('chatId');
      this.chat.chatDescription = params.get('chatDescription');
      this.chat.creatorId = params.get('creatorId');
    })
    this.chatService.getMessages(this.chat.chatId).subscribe(messages => {
      this.messages = messages;
    });
  }

  sendMessage(messageBox: any) {
    let message = new MessageDTO();
    message.content = messageBox.value;
    message.senderId = "1";
    message.chatId = this.chat.chatId;
    this.chatService.sendMessage(message, this.chat).subscribe(messages => {
      this.messages = messages;
    });
  }
}
