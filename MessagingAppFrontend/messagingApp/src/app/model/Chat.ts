import {User} from "./User";
import {Message} from "./Message";

export class Chat {
  id: string = "";
  name: string | null = "";
  users: User[] = [];
  messages: Message[] = [];
}
