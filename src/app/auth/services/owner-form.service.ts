import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Owner } from '../interfaces/owner.interfaces';

@Injectable({ providedIn: 'root' })
export class OwnerFormService {

  private _formData = new BehaviorSubject<Owner>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  public currentData = this._formData.asObservable();

  setCurrentData(data: Owner) {
    this._formData.next(data);
  }

  getCurrentData() {
    return this._formData.getValue();
  }

  changeValue(data: Owner) {
    this._formData.next(data);
  }

  resetData() {
    this._formData.next({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });
  }
}
