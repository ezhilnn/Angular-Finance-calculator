import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-goal-lumpsum',
  templateUrl: './goal-lumpsum.component.html',
  styleUrls: ['./goal-lumpsum.component.css']
})
export class GOALLumpsumComponent {
  future: number | undefined;

  onSubmit(f: NgForm) {
    const currentValue: number = parseFloat(f.value.first);
    const rateOfInterest: number = parseFloat(f.value.second);
    const numberOfYears: number = parseFloat(f.value.years);

    // Formula to calculate investment amount required to reach the goal based on compound interest
    const monthlyRate: number = rateOfInterest / 100 / 12;
    const numMonths: number = numberOfYears * 12;
    const investmentAmount: number = currentValue / Math.pow((1 + monthlyRate), numMonths);

    this.future = +investmentAmount.toFixed(2);
  }
}
