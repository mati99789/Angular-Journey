import {Component, DestroyRef, inject, OnDestroy, OnInit, signal} from '@angular/core';

@Component({
    selector: 'app-server-status',
    standalone: true,
    imports: [],
    templateUrl: './server-status.component.html',
    styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
    currentStatus = signal<'offline' | 'online' | 'unknown'>('offline')
    // currentStatus: 'offline' | 'online' | 'unknown' = 'offline';
    // This is a one way to clear a compoent via ngOnDestroy
    // private interval?: ReturnType<typeof setInterval>;

    // Same as a ngOnDestroy but newer version at latest v16
    private destroyRef = inject(DestroyRef)

    constructor() {}

    ngOnInit() {
        console.log("NgOnInit")
        const interval = setInterval(() => {
            const rnd = Math.random();

            if (rnd < 0.5) {
                this.currentStatus.set('online');
            } else if (rnd < 0.9) {
                this.currentStatus.set('offline');
            } else {
                this.currentStatus.set('unknown');
            }
        }, 5000)

        this.destroyRef.onDestroy(() => {
            clearInterval(interval);
        })
    }

    ngAfterViewInit() {
        console.log("After view initialization");
    }

    // ngOnDestroy(): void {
    //     clearInterval(this.interval)
    // }


}
