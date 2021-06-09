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

  constructor(private http: HttpClient) {
  }

  /*  getChat(chatRoom:ChatDTO): Observable<ChatDTO> {
      return this.http.get<ChatDTO>(this.getChatUrl,{params: {chatId: chatRoom.chatId}});
    }*/

  getMembers(chatId: string | null): Observable<String[]> {
    return this.http.get<String[]>(this.getMemberIdsOfGivenChatUrl + "?chatId=" + chatId);
  }

  getChats(): Observable<ChatDTO[]> {
    return this.http.get<ChatDTO[]>(this.getChatsUrl);
  }

  getMessages(chatId: string | null): Observable<MessageDTO[]> {
    return this.http.get<MessageDTO[]>(this.getMessagesUrl + "?chatId=" + chatId);
  }

  addNewChat(chat: ChatDTO): Observable<ChatDTO> {
    return this.http.post<ChatDTO>(this.addChatUrl, chat, httpOptions);
  }

  addMessage(message: MessageDTO): Observable<MessageDTO> {
    return this.http.post<MessageDTO>(this.addMessageUrl, message, httpOptions);
  }

  addMemberToChat(chat: ChatDTO, memberId: string | null) {
    console.log(this.addMemberToChatUrl+"?chatId="+chat.chatId+"&memberId="+memberId);
    return this.http.post<ChatDTO>(this.addMemberToChatUrl+"?chatId="+chat.chatId+"&memberId="+memberId, httpOptions);
  }

  getChatUsingNameAndCreatorId(chat: ChatDTO) {
    return this.http.post<ChatDTO>(this.getChatUsingNameAndCreatorIdUrl+"?chatName="+chat.chatName+"&creatorId="+chat.creatorId, httpOptions);
  }
}
