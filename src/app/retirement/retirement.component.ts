import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-retirement',
  templateUrl: './retirement.component.html',
  styleUrl: './retirement.component.css'
})
export class RetirementComponent {
  totalSavings: number | undefined;

  calculateTotalSavings(form: NgForm): void {
    const currentAge: number = form.value.currentAge;
    const desiredRetirementAge: number = form.value.desiredRetirementAge;
    const currentSavings: number = form.value.currentSavings;
    const monthlySaving: number = form.value.monthlySaving;
    const interestRate: number = form.value.interestRate;

    // Calculate the number of years until retirement
    const yearsUntilRetirement: number = desiredRetirementAge - currentAge;

    // Calculate total savings needed based on retirement income goal
    const futureValue: number = monthlySaving * 12 * yearsUntilRetirement; // Future value of monthly savings
    const interestRateDecimal: number = interestRate / 100;
    const presentValue: number = futureValue / Math.pow(1 + interestRateDecimal, yearsUntilRetirement); // Present value of future savings
    const totalSavingsNeeded: number = presentValue + currentSavings; // Total savings needed

    this.totalSavings = totalSavingsNeeded;
  }
}
