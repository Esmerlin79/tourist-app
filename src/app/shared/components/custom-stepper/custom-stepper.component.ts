import { Component, Input } from '@angular/core';

import { StepperItem } from '../../interfaces/custom-stepper/stepper.interfaces';

import { StepperService } from '../../services/stepper.service';

import { StepperItemComponent } from '../stepper-item/stepper-item.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrl: './custom-stepper.component.css',
  imports: [
    StepperItemComponent,
    CommonModule,
  ],
})
export class CustomStepperComponent {
  
  @Input() stepperItems: StepperItem[] = [];
  public currentStep: number = 0;

  constructor(private stepperService: StepperService) {}

  ngOnInit() {
    this.stepperService.currentStep.subscribe((step) => {
      this.currentStep = step;
      this.changeStepItems(step);
    })
    this.stepperService.currentStepCompleted.subscribe((status) => {
      this.changeStepItems(this.currentStep, status);
    })
    this.stepperService.setTotalSteps(this.stepperItems.length);
  }

  changeStepItems(step: number, status: boolean = false) {
    this.stepperItems.forEach((item) => {
      item.current = false;
      item.completed = false;
      
      if (item.index == step) {
        item.completed = status;
        item.current = true;
      }

      if (step > item.index) {
        item.completed = true;
      }
    });
  }
}
