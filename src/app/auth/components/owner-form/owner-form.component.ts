import { Component, Input, SimpleChanges } from '@angular/core';
import { ModalService } from '../../../shared/services/modal.service';
import { OwnerFormService } from '../../services/owner-form.service';
import { OwnerService } from '../../services/owner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Owner } from '../../interfaces/owner.interfaces';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrl: './owner-form.component.css'
})
export class OwnerFormComponent {

  @Input() data: Owner | null;
  public form: FormGroup;
  public isUpdate: boolean = false;

  constructor(
    private modalService: ModalService,
    private ownerFormService: OwnerFormService,
    private ownerService: OwnerService,
    private fb: FormBuilder
  ) {

    const formData = this.ownerFormService.getCurrentData();
    this.data = null
    this.form = this.fb.group({
      firstName: [formData.firstName, Validators.required],
      lastName: [formData.lastName, Validators.required],
      email: [formData.email, Validators.required],
      phone: [formData.phone, Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["data"]) {
      const previousValue = changes['data'].previousValue;
      const currentValue = changes['data'].currentValue;

      if (previousValue !== currentValue) {
        this.form.patchValue(currentValue);
        this.isUpdate = true;
      }
    }
  }

  resetFrom() {
    this.form.reset();
    this.form.value.id = null;
    this.isUpdate = false;
  }

  handleIsCompletedForm() {
    const value = this.form.value as any; 
    let isCompleted = true;

    for (let field in value) {
      if (field == 'id') continue;
      
      if (value[field] == '' || value[field] == null) {
        isCompleted = false;
        break;
      }
    }

    return isCompleted;
  }

  handleSave() {

    if (this.handleIsCompletedForm()) {
      if (this.isUpdate && this.data?.id) {
        this.ownerService.updateOwner({id: this.data?.id!, ...this.form.value});
      } else {
        this.ownerService.createOwner(this.form.value);
      }
      this.modalService.changeValue(false);
      this.resetFrom();
    } else{
      this.form.markAllAsTouched();
    }
  }

  handleGoBack() {
    this.modalService.changeValue(false);
    this.resetFrom();
  }
  

}
