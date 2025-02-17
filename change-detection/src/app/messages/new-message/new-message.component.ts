import {Component, inject, output, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MessageService} from "../messages.service";

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
})
export class NewMessageComponent {
  private messagesService = inject(MessageService)
  enteredText = signal('');

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    this.messagesService.addMessage(this.enteredText())
    this.enteredText.set('');
  }
}
