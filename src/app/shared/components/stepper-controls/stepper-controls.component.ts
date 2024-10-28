import { Component } from '@angular/core';

import { StepperService } from '../../services/stepper.service';

import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  standalone: true,
  selector: 'app-stepper-controls',
  templateUrl: './stepper-controls.component.html',
  styleUrl: './stepper-controls.component.css',
  imports: [
    CustomButtonComponent,
  ],
})
export class StepperControlsComponent {
  public currentStep: number = 0;
  public isCompleteStep: boolean = true;

  constructor(private stepperService: StepperService) {}

  nextStep() {
    if (this.isCompleteStep) {
      this.stepperService.changeStatusStep(false);
      this.stepperService.changeStep(this.currentStep + 1);
    } 
  }

  backStep() {
    this.stepperService.changeStep(this.currentStep - 1);
  }

  resetStep() {
    this.stepperService.resetStep();
  }
  ngOnInit() {
    this.stepperService.currentStep.subscribe((step) => {
      this.currentStep = step;
    });

    this.stepperService.currentStepCompleted.subscribe((status) => {
      this.isCompleteStep = status;
    });
    
  }
  
}
