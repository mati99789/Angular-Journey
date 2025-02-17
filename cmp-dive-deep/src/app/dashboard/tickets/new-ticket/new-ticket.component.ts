import {AfterViewInit, Component, ElementRef, OnInit, viewChild, ViewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-new-ticket',
    standalone: true,
    imports: [
        ButtonComponent,
        ControlComponent,
        FormsModule,
    ],
    templateUrl: './new-ticket.component.html',
    styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit{
    @ViewChild('form') private form?: ElementRef<HTMLFormElement>
    // New way
    // private form = viewChild<HTMLFormElement>('form');

    onSubmit(titleInput: string, requestInput: string, form: HTMLFormElement) {
        console.log(titleInput, requestInput);
        return this.form?.nativeElement.reset()
    }

    ngAfterViewInit(): void {
        console.log('AFTER VIEW INIT');
        console.log(this.form);
    }

    ngOnInit(): void {
        console.log('On INIT');
        console.log(this.form);
        
    }

}
