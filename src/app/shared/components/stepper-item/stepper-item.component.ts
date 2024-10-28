import { Component, Input } from '@angular/core';

import { StepperItem } from '../../interfaces/custom-stepper/stepper.interfaces';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-stepper-item',
  templateUrl: './stepper-item.component.html',
  styleUrl: './stepper-item.component.css',
  imports: [
    MatIcon,
    CommonModule
  ],
})
export class StepperItemComponent {
  @Input() data!: StepperItem;
}
