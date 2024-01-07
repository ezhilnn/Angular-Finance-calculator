import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-position-sizing',
  templateUrl: './position-sizing.component.html',
  styleUrls: ['./position-sizing.component.css']
})
export class PositionSizingComponent {
  Max: number | undefined;

  onSubmit(f: NgForm) {
    const capital: number = parseFloat(f.value.cap);
    const stoplossPercentage: number = parseFloat(f.value.sl);
    const buyingPrice: number = parseFloat(f.value.bp);
    const stoplossPrice: number = parseFloat(f.value.stop);

    // Calculate the maximum quantity that can be traded
    const maxQuantity: number = (capital * stoplossPercentage / 100) / (buyingPrice - stoplossPrice);

    this.Max = maxQuantity;
  }
}
