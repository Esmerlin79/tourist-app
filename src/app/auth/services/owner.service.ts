import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Owner } from '../interfaces/owner.interfaces';

@Injectable({ providedIn: 'root' })
export class OwnerService {
  private _owners = new BehaviorSubject<Owner[]>([]);

  public currentOwners = this._owners.asObservable();

  getCurrentData() {
    const resp = this.getOwners();
    this.changeValue(resp);
    return this._owners.getValue();
  }

  changeValue(data: Owner[]) {
    this._owners.next(data);
  }

  createOwner(data: Owner) {
    data.id = Date.now().toString();
    const ownersLocalStorage = localStorage.getItem('owners');
    if (ownersLocalStorage) {
      const owners = JSON.parse(ownersLocalStorage);
      owners.push(data);
      localStorage.setItem('owners', JSON.stringify(owners));
    } else {
      localStorage.setItem('owners', JSON.stringify([data]));
    }
    const ownersList = this.getOwners();
    this.changeValue(ownersList);
  }

  updateOwner(data: Owner) {
    const owners = localStorage.getItem('owners');
    if (owners) {
      const ownersList = JSON.parse(owners);
      ownersList.forEach((owner: Owner, index: number) => {
        if (owner.id === data.id) {
          ownersList[index] = data;
        }
      });
      localStorage.setItem('owners', JSON.stringify(ownersList));
    }
    const ownersList = this.getOwners();
    this.changeValue(ownersList);
  }

  deleteOwner(id: string) {
    const owners = localStorage.getItem('owners');
    if (owners) {
      const ownersList = JSON.parse(owners);
      ownersList.forEach((owner: Owner, index: number) => {
        if (owner.id === id) {
          ownersList.splice(index, 1);
        }
      });
      localStorage.setItem('owners', JSON.stringify(ownersList));
    }
    const ownersList = this.getOwners();
    this.changeValue(ownersList);
  }

  getOwners() {
    const owners = localStorage.getItem('owners');
    if (owners) {
      return JSON.parse(owners);
    } else {
      return [];
    }
  }
}
