import {Injectable, signal} from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages$ = new BehaviorSubject<string[]>([]);
  private _messages: string[] = [];

  get AllMessages(): string[] {
    return [...this._messages];
  }

  addMessage(message: string) {
    this.messages$.next([...this._messages, message])
  }

}
