import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-goal-sip',
  templateUrl: './goal-sip.component.html',
  styleUrls: ['./goal-sip.component.css']
})
export class GoalSIPComponent {
  MonthlySip: number | undefined;
  first: number | undefined;
  second: number | undefined;
  years: number | undefined;

  calculateMonthlySIP(goalAmount: number, numYears: number, rateOfInterest: number): number {
    const monthlyRate: number = rateOfInterest / 100 / 12;
    const numMonths: number = numYears * 12;

    // Formula to calculate monthly SIP amount based on future value (goalAmount)
    const monthlySIP: number = goalAmount * monthlyRate / ((Math.pow(1 + monthlyRate, numMonths) - 1) * (1 + monthlyRate));

    return +monthlySIP.toFixed(2);
  }

  onSubmit(f: NgForm) {
    const goalAmount: number = Number(f.value.first); // Goal amount from form
    const numberOfYears: number = Number(f.value.years); // Number of years from form
    const interestRate: number = Number(f.value.second); // Rate of interest from form

    this.MonthlySip = this.calculateMonthlySIP(goalAmount, numberOfYears, interestRate);
  }
}
