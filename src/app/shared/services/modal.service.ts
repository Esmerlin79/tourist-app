import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
 
  private _isOpenModal = new BehaviorSubject<boolean>(false);
  

  public currentIsOpen = this._isOpenModal.asObservable();

  getCurrentData() {
    return this._isOpenModal.getValue();
  }

  changeValue(data: boolean) {
    this._isOpenModal.next(data);
  }

  
}