import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inflation',
  templateUrl: './inflation.component.html',
  styleUrl: './inflation.component.css'
})
export class InflationComponent {
  adjustedAmount: number | undefined;

  calculateInflation(form: NgForm): void {
    const startingYear = parseInt(form.value.startingYear, 10);
    const startingAmount = parseFloat(form.value.startingAmount);
    const endingYear = parseInt(form.value.endingYear, 10);
    const inflationRate = parseFloat(form.value.inflationRate) / 100; // Convert percentage to decimal

    const yearsDifference = endingYear - startingYear;
    this.adjustedAmount = startingAmount * Math.pow((1 + inflationRate), yearsDifference);
  }
}
