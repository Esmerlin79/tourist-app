import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RentalProperty } from '../interfaces/rentalProperty.interfaces';

@Injectable({ providedIn: 'root' })
export class FormService {

  private _formData = new BehaviorSubject<RentalProperty>({
    address:"",
    address2:"",
    city:"",
    state:"",
    zip:"",
    frequency:"",
    started:"",
    dontUsePlatform:false,
    platformLink:"",
    businessName:""
  });
  
  private _isCompletedForm = new BehaviorSubject<boolean>(false);
  
  currentIsCompletedForm = this._isCompletedForm.asObservable();
  currentData = this._formData.asObservable();


  getCurrentData() {
    return this._formData.getValue();
  }

  changeValue(data: RentalProperty) {
    this._formData.next(data);
  
  }

  resetData() {
    this._formData.next({
      address:"",
      address2:"",
      city:"",
      state:"",
      zip:"",
      frequency:"",
      started:"",
      dontUsePlatform:false,
      platformLink:"",
      businessName:""
    });
  }
}