import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit} from '@angular/core';
import {MessageService} from "../messages.service";

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit {
  private messagesService = inject(MessageService)
  private cdRef = inject(ChangeDetectorRef)
  private destroyRef = inject(DestroyRef)

  messages : string[] = []

  ngOnInit() {
    const subscription = this.messagesService.messages$.subscribe((message) => {
      this.messages = message;
      this.cdRef.markForCheck();
    })

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }


  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
