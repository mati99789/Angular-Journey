import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

  queryParam = input('myapp', {alias: 'appSafeLink'});
  constructor() {
    console.log('SafeLinkDirective instantiated');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Are you sure you want to leave?');

    if (wantsToLeave) {
      const url = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        url + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
