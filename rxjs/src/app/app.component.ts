import {Component, effect, OnDestroy, OnInit, signal} from '@angular/core';
import {interval, map, Observable, Subscription, tap} from "rxjs";
import {toObservable, toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  clickCount = signal(0)

  //Convert to Observable
  clickCount$ = toObservable(this.clickCount)

  //Convert Observable to signal
  interval$ = interval(1000)
  intervalSignal = toSignal(this.interval$, {initialValue: 0})


  // Custom Observable
  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0
    const interval = setInterval(() => {
      if (timesExecuted > 3) {
        clearInterval(interval)
        subscriber.complete()
        return
      }
      console.log('Emitting new value... ' + timesExecuted)
      subscriber.next({message: 'New value'})
      timesExecuted++
    }, 2000)
  })

  private _subscription?: Subscription;


  private clickEffect = effect(() => {
    console.log(`Clicked button ${this.clickCount()} clicked`);
  });

  ngOnInit() {
    /*    this._subscription = interval(1000).pipe(
          map(value => value * 2),
          tap(val => console.log("This is a tap ", val))
        ).subscribe({
          next: value => console.log(value),
          error: err => console.error(err)
        });*/

    this._subscription = this.customInterval$.subscribe({
      next: e => console.log(e),
      complete: () =>  console.log('Completed')
    })
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

  onClick() {
    this.clickCount.update(prevCount => prevCount + 1);
  }
}
