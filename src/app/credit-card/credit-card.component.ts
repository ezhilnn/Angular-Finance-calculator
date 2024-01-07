import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent {
  monthsToPayOff: number | undefined;
  totalInterestPaid: number | undefined;

  calculatePayoff(balance: number, interestRate: number, monthlyPayment: number): void {
    const monthlyInterestRate: number = interestRate / 100 / 12;
    let remainingBalance: number = balance;
    let month: number = 0;
    let totalInterest: number = 0;

    while (remainingBalance > 0) {
      month++;
      const interestPaid: number = remainingBalance * monthlyInterestRate;
      const principalPaid: number = monthlyPayment - interestPaid;

      totalInterest += interestPaid;
      remainingBalance -= principalPaid;

      if (month > 1200) { // Safety net to avoid infinite loops
        break;
      }
    }

    this.monthsToPayOff = month;
    this.totalInterestPaid = totalInterest;
  }

  onSubmit(f: NgForm): void {
    const balance: number = parseFloat(f.value.balance);
    const interestRate: number = parseFloat(f.value.interestRate);
    const monthlyPayment: number = parseFloat(f.value.monthlyPayment);

    this.calculatePayoff(balance, interestRate, monthlyPayment);
  }
}
