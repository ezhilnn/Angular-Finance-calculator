import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-invesment-retuern',
  templateUrl: './invesment-retuern.component.html',
  styleUrl: './invesment-retuern.component.css'
})
export class InvesmentRetuernComponent {
  return!:number;
  onSubmit(f:NgForm){
    console.log(f.value);
    const initialAmount: number = parseFloat(f.value.first);
    const interestRate: number = parseFloat(f.value.second);
    const years: number = parseFloat(f.value.years);

    // Calculation logic for investment return
    const totalReturn: number = initialAmount * Math.pow(1 + (interestRate / 100), years);
    const profit: number = totalReturn - initialAmount;

    // Convert the totalReturn to number and set it to display in the UI
    this.return = +totalReturn.toFixed(2);
  }
}
