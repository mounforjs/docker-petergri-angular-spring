import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Chat} from "../model/Chat";
import {ChatDTO} from "../model/ChatDTO";
import {MessageDTO} from "../model/MessageDTO";
import {SessionService} from "./SessionService";
import {DBSwitchService} from "./DBSwitchService";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // MySQL Endpoints
  getChatsUrl: string = process.env.BACKEND_URL + '/getChats';
  getMessagesUrl: string = process.env.BACKEND_URL + '/getMessages';
  getChatUrl: string = process.env.BACKEND_URL + '/getChat/';
  addChatUrl: string = process.env.BACKEND_URL + '/addNewChat';
  addMessageUrl: string = process.env.BACKEND_URL + '/addMessage';
  getMemberIdsOfGivenChatUrl: string = process.env.BACKEND_URL + '/getMemberIdsOfGivenChat';
  addMemberToChatUrl: string = process.env.BACKEND_URL + '/addMemberToChat';
  getChatUsingNameAndCreatorIdUrl: string = process.env.BACKEND_URL + '/getChatUsingNameAndCreatorId';
  checkIfMemberUrl: string = process.env.BACKEND_URL + '/checkIfMember';
  getChatsForUserIdUrl: string = process.env.BACKEND_URL + '/getChatsForUserId';

  // MongoDB Endpoints
  addChatMongoUrl: string = process.env.BACKEND_URL + '/mongo/addNewChat';
  addMemberToChatMongoUrl: string = process.env.BACKEND_URL + '/mongo/addMemberToChat';
  getMemberIdsOfGivenChatMongoUrl: string = process.env.BACKEND_URL + '/mongo/getMemberIdsOfGivenChat';


  constructor(private http: HttpClient) {
  }

  async getMembers(chatId: string | null): Promise<String[]> {
    if (DBSwitchService.isMongoDB) {
      return await this.http.get<String[]>(this.getMemberIdsOfGivenChatMongoUrl + "?chatId=" + chatId).toPromise();
    } else {
      return await this.http.get<String[]>(this.getMemberIdsOfGivenChatUrl + "?chatId=" + chatId).toPromise();
    }

  }

  async getChats(): Promise<ChatDTO[]> {
    return await this.http.get<ChatDTO[]>(this.getChatsUrl).toPromise();
  }

  async getMessages(chatId: string | null): Promise<MessageDTO[]> {
    return await this.http.get<MessageDTO[]>(this.getMessagesUrl + "?chatId=" + chatId).toPromise();
  }

  async addNewChat(chat: ChatDTO): Promise<ChatDTO> {
    if (DBSwitchService.isMongoDB) {
      return await this.http.post<ChatDTO>(this.addChatMongoUrl, chat, httpOptions).toPromise();
    } else {
      return await this.http.post<ChatDTO>(this.addChatUrl, chat, httpOptions).toPromise();
    }
  }

  async addMessage(message: MessageDTO): Promise<MessageDTO> {
    return await this.http.post<MessageDTO>(this.addMessageUrl, message, httpOptions).toPromise();
  }

  async addMemberToChat(chatId: string | null, memberId: string | null) {
    if (DBSwitchService.isMongoDB) {
      return await this.http.post<ChatDTO>(this.addMemberToChatMongoUrl + "?chatId=" + chatId + "&memberId=" + memberId, httpOptions).toPromise();
    } else {
      return await this.http.post<ChatDTO>(this.addMemberToChatUrl + "?chatId=" + chatId + "&memberId=" + memberId, httpOptions).toPromise();
    }
  }

  async getChatUsingNameAndCreatorId(chat: ChatDTO) {
    return await this.http.post<ChatDTO>(this.getChatUsingNameAndCreatorIdUrl + "?chatName=" + chat.chatName + "&creatorId=" + chat.creatorId, httpOptions).toPromise();
  }

  async checkIfMember(chat: ChatDTO, memberId: string): Promise<boolean> {
    return await this.http.post<boolean>(this.checkIfMemberUrl + "?chatId=" + chat.chatId + "&memberId=" + memberId, httpOptions).toPromise();
  }

  async getChatsForUserId(): Promise<ChatDTO[]> {
    return await this.http.get<ChatDTO[]>(this.getChatsForUserIdUrl + "?userId=" + SessionService.getCurrentUser().userId).toPromise();
  }
}
