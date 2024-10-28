import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepperService } from '../../../shared/services/stepper.service';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-rental-property-form',
  templateUrl: './rental-property-form.component.html',
  styleUrl: './rental-property-form.component.css',
})
export class RentalPropertyFormComponent {
  public form: FormGroup;
  public dontUsePlatform: boolean;

  constructor(
    private fb: FormBuilder,
    private stepperService: StepperService,
    private formService: FormService
  ) {
    const formData = this.formService.getCurrentData();

    this.dontUsePlatform = formData.dontUsePlatform;
    this.form = this.fb.group({
      address: [formData.address, Validators.required],
      address2: [formData.address2],
      city: [formData.city, Validators.required],
      state: [formData.state, Validators.required],
      zip: [formData.zip, Validators.required],
      frequency: [formData.frequency, Validators.required],
      started: [formData.started, Validators.required],
      dontUsePlatform: [formData.dontUsePlatform],
      platformLink: [formData.platformLink],
      businessName: [formData.businessName],
    });
  }

  ngOnInit() {

    this.form.statusChanges.subscribe(() => {
      const isCompleted = this.handleIsCompletedForm();
      this.stepperService.changeStatusStep(isCompleted);
      this.formService.changeValue(this.form.value);
      this.dontUsePlatform = this.form.value.dontUsePlatform;
    });

    this.stepperService.currentStep.subscribe((step) => {
      if (step == 1) {
        const isCompleted = this.handleIsCompletedForm();
        this.stepperService.changeStatusStep(isCompleted);
      }
    })
  }

  handleIsCompletedForm() {
    const value = this.form.value;
    const optionals = ['address2', 'dontUsePlatform', 'businessName'];
    let isCompleted = true;

    for (let field in value) {
      if (field == 'platformLink' && value.dontUsePlatform) continue;
      if (optionals.includes(field)) continue;
      if (value[field] == '') isCompleted = false;
    }
    return isCompleted;
  }

}
