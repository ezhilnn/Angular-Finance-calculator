import { Component } from '@angular/core';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrl: './compound.component.css'
})
export class CompoundComponent {
  totalInterest: number | null = null;

  calculateInterest(form: any): void {
    const principalAmount: number = form.value.principal;
    const annualInterestRate: number = form.value.rate / 100;
    const investmentDuration: number = form.value.time;
    const compoundedFrequency: number = form.value.compounded;

    const total: number = principalAmount * Math.pow(1 + (annualInterestRate / compoundedFrequency), compoundedFrequency * investmentDuration);
    this.totalInterest = total;
  }
}
