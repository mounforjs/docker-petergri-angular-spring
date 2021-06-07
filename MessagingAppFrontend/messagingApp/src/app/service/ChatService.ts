import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Chat} from "../model/Chat";
import {ChatDTO} from "../model/ChatDTO";
import {MessageDTO} from "../model/MessageDTO";

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

  constructor(private http: HttpClient) {
  }

  /*  getChat(chatRoom:ChatDTO): Observable<ChatDTO> {
      return this.http.get<ChatDTO>(this.getChatUrl,{params: {chatId: chatRoom.chatId}});
    }*/

  getChats(): Observable<ChatDTO[]> {
    return this.http.get<ChatDTO[]>(this.getChatsUrl);
  }

  getMessages(chatId: string | null): Observable<MessageDTO[]> {
    return this.http.get<MessageDTO[]>(this.getMessagesUrl + "?chatId=" + chatId);
  }

  addNewChat(chat: ChatDTO): Observable<ChatDTO> {
    return this.http.post<ChatDTO>(this.addChatUrl, chat, httpOptions);
  }

  sendMessage(message: MessageDTO, chat: ChatDTO): Observable<MessageDTO[]> {
    return this.http.post<MessageDTO[]>(this.addMessageUrl +"?chatId=" + chat.chatId + "&messageContent=" + message.content + "&messageSender=" + message.senderId , {});
  }

}
