import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Chat} from "../model/Chat";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {

  getChatsUrl: string = 'http://localhost:8080/getChats';
  getChatUrl: string = 'http://localhost:8080/getChat/';
  addChatUrl: string = 'http://localhost:8080/addChat';

  constructor(private http: HttpClient) {
  }

  getChat(chat:Chat): Observable<Chat> {
    return this.http.get<Chat>(this.getChatUrl,{params: {chatId: chat.id}});
  }

  getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.getChatsUrl);
  }

  addNewChat(chat: Chat): Observable<Chat> {
    return this.http.post<Chat>(this.addChatUrl, chat, httpOptions);
  }

}
