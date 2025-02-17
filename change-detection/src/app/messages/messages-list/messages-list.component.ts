import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {MessageService} from "../messages.service";

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  private messagesService = inject(MessageService)
  messages = this.messagesService.allMessages;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
