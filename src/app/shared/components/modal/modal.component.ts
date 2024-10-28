import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  imports: [
    CommonModule
  ],
})
export class ModalComponent {
  @Input() show: boolean = false; 
  @Output() close = new EventEmitter<void>(); 

  onClose() {
    this.close.emit();
  }
}
