import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
  imports: [
    MatIcon,
    MatButtonModule,
    CommonModule,
  ],
})
export class CustomButtonComponent {

  @Input() label!: string;
  @Input() withStartIcon!: boolean;
  @Input() withEndIcon!: boolean;
  @Input() icon!: string;
  @Input() color!: 'danger' | 'info';
  @Input() disabled!: boolean;
  @Input() type: 'outline' | 'solid' = 'outline';
  @Output() onClick = new EventEmitter<void>();

  constructor() {}

  handleClick() {
    if (!this.disabled) this.onClick.emit();
  }
  
}
