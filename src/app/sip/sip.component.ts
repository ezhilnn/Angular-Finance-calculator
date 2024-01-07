import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sip',
  templateUrl: './sip.component.html',
  styleUrls: ['./sip.component.css']
})
export class SIPComponent {
  future!: number;
  Amount_Invested!: number;
  Total_Earning!: number;
  first!: number;
  second!: number;
  years!: number;

  calculateSIPFutureValue(monthlySIP: number, numYears: number, rateOfInterest: number) {
    const monthlyRate = rateOfInterest / 100 / 12;
    const numMonths = numYears * 12;

    let futureValue = 0;
    let totalInvested = 0;

    for (let i = 0; i < numMonths; i++) {
      futureValue = (futureValue + monthlySIP) * (1 + monthlyRate);
      totalInvested += parseFloat(monthlySIP.toString()); // Ensure monthlySIP is treated as a number
    }

    const totalEarnings = futureValue - totalInvested;
    this.future = +futureValue.toFixed(2);
    this.Amount_Invested = +totalInvested.toFixed(2);
    this.Total_Earning = +totalEarnings.toFixed(2);

    return {
      futureValue: this.future,
      totalInvested: this.Amount_Invested,
      totalEarnings: this.Total_Earning,
    };
  }

  onSubmit(f: NgForm) {
    this.calculateSIPFutureValue(Number(f.value.first), Number(f.value.years), Number(f.value.second));
    console.log(f.value.first);
    console.log(f.value.years);
    console.log(f.value.second);
  }
}
