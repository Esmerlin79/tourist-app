import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { CustomStepperComponent } from './custom-stepper.component';
import { StepperItemComponent } from '../stepper-item/stepper-item.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'shared/Components/CustomStepper',
  component: CustomStepperComponent,
  decorators: [
    moduleMetadata({
      imports: [StepperItemComponent, CommonModule], 
    }),
  ],
  args: {
    stepperItems: [
      { index: 0, label: 'Step 1', completed: false, current: true },
      { index: 1, label: 'Step 2', completed: false, current: false },
      { index: 2, label: 'Step 3', completed: false, current: false },
    ],
  },
} as Meta<CustomStepperComponent>;

export const Default: StoryObj<CustomStepperComponent> = {
  args: {
    stepperItems: [
      { index: 0, label: 'Step 1', completed: false, current: true },
      { index: 1, label: 'Step 2', completed: false, current: false },
      { index: 2, label: 'Step 3', completed: false, current: false },
    ],
  },
};