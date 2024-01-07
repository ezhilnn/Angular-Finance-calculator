import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CagrCalcComponent } from './cagr-calc/cagr-calc.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SIPComponent } from './sip/sip.component';
import { GoalSIPComponent } from './goal-sip/goal-sip.component';
import { PositionSizingComponent } from './position-sizing/position-sizing.component';
import { LUMPSUMFVComponent } from './lumpsum-fv/lumpsum-fv.component';
import { GOALLumpsumComponent } from './goal-lumpsum/goal-lumpsum.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InvesmentRetuernComponent } from './invesment-retuern/invesment-retuern.component';
import { SavingsCalculatorComponent } from './savings-calculator/savings-calculator.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { RetirementComponent } from './retirement/retirement.component';
import { CompoundComponent } from './compound/compound.component';
import { InflationComponent } from './inflation/inflation.component';

const routes: Routes = [
  {
   path:'CAGR',component:CagrCalcComponent
  },
  {
    path:'',component:HomeComponentComponent
  },
  {
    path:'goalSIP',
    component:GoalSIPComponent
  },
  {
    path:'SIP',
    component:SIPComponent
  },
  {
    path:'positions',
    component:PositionSizingComponent
  },
  {
    path:'lumpsum',
    component:LUMPSUMFVComponent
  },
  {
    path:'goallumpsum',
    component:GOALLumpsumComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'investment-return',
    component:InvesmentRetuernComponent
  },{
    path:'savings',
    component:SavingsCalculatorComponent
  },{
    path:'credit',
    component:CreditCardComponent
  },{
    path:'retirement',
    component:RetirementComponent
  },{
    path:'compound',
    component:CompoundComponent
  },{
    path:'inflation',
    component:InflationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
