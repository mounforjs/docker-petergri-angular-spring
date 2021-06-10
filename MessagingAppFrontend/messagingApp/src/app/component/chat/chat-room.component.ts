import {Component, Input, OnInit} from '@angular/core';
import {Chat} from "../../model/Chat";
import {ActivatedRoute, Router} from "@angular/router";
import {ChatDTO} from "../../model/ChatDTO";
import {ChatService} from "../../service/ChatService";
import {MessageDTO} from "../../model/MessageDTO";
import {SessionService} from "../../service/SessionService";

@Component({
  selector: 'chat',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  memberIds: String[] | undefined;

  @Input()
  chat: ChatDTO = new ChatDTO;
  messages:MessageDTO[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private chatService: ChatService) {
  }

  async ngOnInit(): Promise<void> {

    if (SessionService.getCurrentUser() === undefined) {
      this.router.navigate(['/login']);
      return;
    }

    this.route.paramMap.subscribe(params => {
      this.chat.chatName = params.get('chatName');
      this.chat.chatId = params.get('chatId');
      this.chat.chatDescription = params.get('chatDescription');
      this.chat.creatorId = params.get('creatorId');
    })
    this.chatService.getMessages(this.chat.chatId).subscribe(messages => {
        this.messages = messages;
    });

    this.chatService.getMembers(this.chat.chatId).subscribe(str => {
      this.memberIds = str;
    });

  }

  sendMessage(messageBox: any) {
    let message = new MessageDTO();
    message.content = messageBox.value;
    message.senderId = SessionService.getCurrentUser().userId;
    console.log("Sender is: " + message.senderId)
    message.chatId = this.chat.chatId;
    console.log(this.memberIds);
    let isMember = !!this.memberIds?.some(i => (i === ""+message.senderId));
    if(isMember) {
      this.chatService.addMessage(message).subscribe(message => {

      });
      this.messages.push(message);
    }
    else {
      console.log(message.chatId);
      console.log(message.senderId);
      console.log("User is not a member of this chat!");
    }
    console.log("isMember= " + isMember)
  }

  getCurrentUserId() {
    return SessionService.getCurrentUser().userId;
  }
}
