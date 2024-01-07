import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CagrCalcComponent } from './cagr-calc/cagr-calc.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SIPComponent } from './sip/sip.component';
import { GoalSIPComponent } from './goal-sip/goal-sip.component';
import { PositionSizingComponent } from './position-sizing/position-sizing.component';
import { LUMPSUMFVComponent } from './lumpsum-fv/lumpsum-fv.component';
import { GOALLumpsumComponent } from './goal-lumpsum/goal-lumpsum.component';
import { Form } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { InvesmentRetuernComponent } from './invesment-retuern/invesment-retuern.component';
import { SavingsCalculatorComponent } from './savings-calculator/savings-calculator.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { RetirementComponent } from './retirement/retirement.component';
import { CompoundComponent } from './compound/compound.component';
import { InflationComponent } from './inflation/inflation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    CagrCalcComponent,
    HomeComponentComponent,
    SIPComponent,
    GoalSIPComponent,
    PositionSizingComponent,
    LUMPSUMFVComponent,
    GOALLumpsumComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    InvesmentRetuernComponent,
    SavingsCalculatorComponent,
    CreditCardComponent,
    RetirementComponent,
    CompoundComponent,
    InflationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
