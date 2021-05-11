import {Component, Input, OnInit} from '@angular/core';
import {Message} from "../../model/Message";
import {Chat} from "../../model/Chat";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  @Input()
  chat:Chat = new Chat();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params)
    });
  }

}
