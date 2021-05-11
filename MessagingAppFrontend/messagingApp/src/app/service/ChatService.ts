import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Chat} from "../model/Chat";
import {ChatDTO} from "../model/ChatDTO";

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
  getChatUrl: string = 'http://localhost:8080/getChat/';
  addChatUrl: string = 'http://localhost:8080/addNewChat';

  constructor(private http: HttpClient) {
  }

  getChat(chatRoom:ChatDTO): Observable<Chat> {
    return this.http.get<Chat>(this.getChatUrl,{params: {chatId: chatRoom.chatId}});
  }

  getChats(): Observable<ChatDTO[]> {
    return this.http.get<ChatDTO[]>(this.getChatsUrl);
  }

  addNewChat(chat: ChatDTO): Observable<ChatDTO> {
    return this.http.post<ChatDTO>(this.addChatUrl, chat, httpOptions);
  }

}
