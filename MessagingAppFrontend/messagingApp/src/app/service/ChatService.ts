import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Chat} from "../model/Chat";
import {ChatDTO} from "../model/ChatDTO";
import {MessageDTO} from "../model/MessageDTO";
import {SessionService} from "./SessionService";

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

  getChatsUrl: string = 'http://localhost:8080/getChats';
  getMessagesUrl: string = 'http://localhost:8080/getMessages';
  getChatUrl: string = 'http://localhost:8080/getChat/';
  addChatUrl: string = 'http://localhost:8080/addNewChat';
  addMessageUrl: string = 'http://localhost:8080/addMessage';
  getMemberIdsOfGivenChatUrl: string = 'http://localhost:8080/getMemberIdsOfGivenChat';
  addMemberToChatUrl: string = 'http://localhost:8080/addMemberToChat';
  getChatUsingNameAndCreatorIdUrl: string = 'http://localhost:8080/getChatUsingNameAndCreatorId';
  checkIfMemberUrl: string = 'http://localhost:8080/checkIfMember';
  getChatsForUserIdUrl: string = 'http://localhost:8080/getChatsForUserId';

  constructor(private http: HttpClient) {
  }

  /*  getChat(chatRoom:ChatDTO): Observable<ChatDTO> {
      return this.http.get<ChatDTO>(this.getChatUrl,{params: {chatId: chatRoom.chatId}});
    }*/

  async getMembers(chatId: string | null): Promise<String[]> {
    return await this.http.get<String[]>(this.getMemberIdsOfGivenChatUrl + "?chatId=" + chatId).toPromise();
  }

  async getChats(): Promise<ChatDTO[]> {
    return await this.http.get<ChatDTO[]>(this.getChatsUrl).toPromise();
  }

  async getMessages(chatId: string | null): Promise<MessageDTO[]> {
    return await this.http.get<MessageDTO[]>(this.getMessagesUrl + "?chatId=" + chatId).toPromise();
  }

  async addNewChat(chat: ChatDTO): Promise<ChatDTO> {
    return await this.http.post<ChatDTO>(this.addChatUrl, chat, httpOptions).toPromise();
  }

  async addMessage(message: MessageDTO): Promise<MessageDTO> {
    return await this.http.post<MessageDTO>(this.addMessageUrl, message, httpOptions).toPromise();
  }

  async addMemberToChat(chatId: string | null, memberId: string | null) {
    return await this.http.post<ChatDTO>(this.addMemberToChatUrl+"?chatId="+chatId+"&memberId="+memberId, httpOptions).toPromise();
  }

  async getChatUsingNameAndCreatorId(chat: ChatDTO) {
    return await this.http.post<ChatDTO>(this.getChatUsingNameAndCreatorIdUrl+"?chatName="+chat.chatName+"&creatorId="+chat.creatorId, httpOptions).toPromise();
  }

  async checkIfMember(chat: ChatDTO, memberId: string): Promise<boolean> {
    return await this.http.post<boolean>(this.checkIfMemberUrl+"?chatId="+chat.chatId + "&memberId="+memberId, httpOptions).toPromise();
  }

  async getChatsForUserId(): Promise<ChatDTO[]> {
    return await this.http.get<ChatDTO[]>(this.getChatsForUserIdUrl+"?userId="+SessionService.getCurrentUser().userId).toPromise();
  }
}
