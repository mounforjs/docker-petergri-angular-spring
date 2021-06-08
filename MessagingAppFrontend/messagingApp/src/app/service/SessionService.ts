import {Injectable} from '@angular/core';
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  static get isAdmin(): boolean {
    return this._isAdmin;
  }

  static set isAdmin(value: boolean) {
    this._isAdmin = value;
  }

  static currentUser: User | undefined;
  private static _isAdmin: boolean = false;

  constructor() {
  }

  static getCurrentUser(): User {
    return <User>this.currentUser;
  }

  static setCurrentUser(user: User): void {
    this.currentUser = user;
  }
}
