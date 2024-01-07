import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-savings-calculator',
  templateUrl: './savings-calculator.component.html',
  styleUrl: './savings-calculator.component.css'
})
export class SavingsCalculatorComponent {
  total:number=0;
  onSubmit(f:NgForm){

    const initialDeposit: number = parseFloat(f.value.cap);
    const monthlyContribution: number = parseFloat(f.value.sl);
    const annualInterestRate: number = parseFloat(f.value.bp);
    const investmentDuration: number = parseFloat(f.value.stop);

    const monthlyInterestRate: number = annualInterestRate / 100 / 12;
    const months: number = investmentDuration * 12;

    let totalSavings: number = initialDeposit;
    for (let i = 0; i < months; i++) {
      totalSavings += monthlyContribution;
      totalSavings *= (1 + monthlyInterestRate);
    }

    this.total = +totalSavings.toFixed(2); // Assign the calculated total to the component property
  }
}
