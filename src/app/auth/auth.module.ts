import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { RentalPropertyFormComponent } from './components/rental-property-form/rental-property-form.component';
import { CustomButtonComponent } from '../shared/components/custom-button/custom-button.component';
import { StepperControlsComponent } from '../shared/components/stepper-controls/stepper-controls.component';
import { CustomStepperComponent } from '../shared/components/custom-stepper/custom-stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OwnerTableComponent } from './components/owner-table/owner-table.component';
import { MobileStepperComponent } from '../shared/components/mobile-stepper/mobile-stepper.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { OwnerFormComponent } from './components/owner-form/owner-form.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RentalPropertyFormComponent,
    OwnerTableComponent,
    OwnerFormComponent,
  ],
  imports: [
    NavbarComponent,
    CustomButtonComponent,
    StepperControlsComponent,
    CustomStepperComponent,
    MobileStepperComponent,
    ModalComponent,

    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
  ],
  providers:[
 
  ]
})
export class AuthModule { }
