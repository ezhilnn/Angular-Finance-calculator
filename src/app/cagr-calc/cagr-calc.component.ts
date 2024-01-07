import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cagr-calc',
  templateUrl: './cagr-calc.component.html',
  styleUrl: './cagr-calc.component.css'
})
export class CagrCalcComponent {
  returns!: number;
  first!:number;
  second!:number;
  years!:number;
calculate_cagr(beginning_value:number, ending_value:number, num_years:number){
    const cagr = (ending_value / beginning_value) ** (1 / num_years) - 1
    return cagr
}

  onSubmit(f:NgForm){
    this.first=f.value.first;
    this.second=f.value.second;
    this.years=f.value.years;
    this.returns=this.calculate_cagr(this.first,this.second,this.years);
  }
}
