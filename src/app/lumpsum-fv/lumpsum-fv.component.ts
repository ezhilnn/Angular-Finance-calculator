import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lumpsum-fv',
  templateUrl: './lumpsum-fv.component.html',
  styleUrls: ['./lumpsum-fv.component.css']
})
export class LUMPSUMFVComponent {
  future: number | undefined;

  onSubmit(f: NgForm) {
    const presentValue: number = parseFloat(f.value.first);
    const rateOfInterest: number = parseFloat(f.value.second);
    const numberOfYears: number = parseFloat(f.value.years);

    // Formula to calculate future value using compound interest formula
    const monthlyRate: number = rateOfInterest / 100 / 12;
    const numMonths: number = numberOfYears * 12;
    const futureValue: number = presentValue * Math.pow((1 + monthlyRate), numMonths);

    this.future = +futureValue.toFixed(2);
  }
}
