import { Component, Input } from '@angular/core';
import { StepperService } from '../../services/stepper.service';

@Component({
  standalone: true,
  selector: 'app-mobile-stepper',
  templateUrl: './mobile-stepper.component.html',
  styleUrl: './mobile-stepper.component.css',
})
export class MobileStepperComponent {
  public stepsItemCount: number = 0;
  public currentStep: number = 0;
  
  constructor(private stepperService: StepperService) {}

  ngOnInit() {
    this.stepperService.currentStep.subscribe((step) => {
      this.currentStep = step;
    });

    this.stepperService.totalSteps.subscribe((steps) => {
      this.stepsItemCount = steps;
    });
  }
}
