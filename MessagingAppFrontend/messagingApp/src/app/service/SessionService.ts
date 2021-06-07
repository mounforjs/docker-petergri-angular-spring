import {Injectable} from '@angular/core';
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  static currentUser: User | undefined;

  constructor() {
  }

  static getCurrentUser(): User {
    return <User>this.currentUser;
  }

  static setCurrentUser(user: User): void {
    this.currentUser = user;
  }
}
