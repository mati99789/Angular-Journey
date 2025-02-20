import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {InvestmentService} from "../../investment.service";


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = signal('0')
  enteredAnnualInvestment = signal('0')
  enteredExpectedInvestment = signal('5')
  enteredDuration = signal('10')

  constructor(private investmentService: InvestmentService) {
  }

  onSubmit() {
    const data = {
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedInvestment(),
    }
    this.investmentService.calculateInvestmentResults(data)

    this.enteredInitialInvestment.set('0')
    this.enteredAnnualInvestment.set('0')
    this.enteredExpectedInvestment.set('5')
    this.enteredDuration.set('10')

  }


}
