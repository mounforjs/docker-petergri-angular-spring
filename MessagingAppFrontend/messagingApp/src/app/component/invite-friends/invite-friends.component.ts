import {Component, Input, OnInit} from '@angular/core';
import {ChatService} from "../../service/ChatService";
import {ActivatedRoute, Router} from "@angular/router";
import {ChatDTO} from "../../model/ChatDTO";
import {SessionService} from "../../service/SessionService";
import {UserService} from "../../service/UserService";
import {User} from "../../model/User";

@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.component.html',
  styleUrls: ['./invite-friends.component.css']
})
export class InviteFriendsComponent implements OnInit {
  friends: User[] = [];
  selectedUsers:User[] = []


  @Input()
  chatId: string | null ='';

  constructor(private actRoute: ActivatedRoute, private chatService:ChatService, private router: Router, private userService : UserService) { }

  ngOnInit(): void {
    console.log(this.chatId);
    this.chatId = this.actRoute.snapshot.paramMap.get('chatId');
    this.userService.getUsers().subscribe(users => {
      for(let user in users) {
        if(SessionService.getCurrentUser().userId != users[user].userId) {
          this.friends.push(users[user]);
        }
      }
    });
  }

  selectInvitedFriend(friend: any) {
    console.log("Selected user!");
    if(this.selectedUsers.includes(friend)){
      const index = this.selectedUsers.indexOf(friend, 0);
      if (index > -1) {
        this.selectedUsers.splice(index, 1);
      }
    } else {
      this.selectedUsers.push(friend);
    }
  }

  inviteSelected() {
    console.log("inviteSelected call");
    for (let member in this.selectedUsers) {
      console.log("Inviting");
      this.chatService.addMemberToChat(this.chatId, this.friends[member].userId).then();
    }
    this.router.navigate(['../chatMenu']);
  }
}
