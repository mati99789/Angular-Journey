import {Injectable, signal} from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages = signal<string[]>([])


  addMessage(message: string) {
    this.messages.update(oldMessages => [...oldMessages, message]);
  }

}
