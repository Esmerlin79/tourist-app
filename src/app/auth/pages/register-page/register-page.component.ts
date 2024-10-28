import { Component } from '@angular/core';
import { StepperItem } from '../../../shared/interfaces/custom-stepper/stepper.interfaces';
import { StepperService } from '../../../shared/services/stepper.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  public currentStep: number = 0;
  public stepperItems: StepperItem[] = [
    {
      index: 0,
      label: 'Owner',
      completed: false,
      current: false,
    },
    {
      index: 1,
      label: 'Rental Property',
      completed: false,
      current: false,
    },
    {
      index: 2,
      label: 'Rental Property Reporting',
      completed: false,
      current: false,
    },
    {
      index: 3,
      label: 'Rental Property Licenses',
      completed: false,
      current: false,
    },
    {
      index: 4,
      label: 'Agreements',
      completed: false,
      current: false,
    },
  ];

  constructor(private stepperService: StepperService) {}

  ngOnInit() {
    this.stepperService.currentStep.subscribe((step) => {
      this.completStep(step);
      this.currentStep = step;
    });
  }

  completStep(step: number) {
    if(step !== 1) {
      this.stepperService.changeStatusStep(true);
    }
  }
}
