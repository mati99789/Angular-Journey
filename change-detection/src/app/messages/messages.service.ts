import {Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private messages = signal<string[]>([])
  allMessages = this.messages.asReadonly()

  addMessage(message: string) {
    this.messages.update((prevMessage) => [...prevMessage, message])
  }

}
