import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StepperService {
  private _currentStepSource = new BehaviorSubject<number>(0);
  private _currentStepCompletedSource = new BehaviorSubject<boolean>(false);
  private _totalStepsSource = new BehaviorSubject<number>(0);

  public currentStep = this._currentStepSource.asObservable();
  public currentStepCompleted = this._currentStepCompletedSource.asObservable();
  public totalSteps = this._totalStepsSource.asObservable();

  setTotalSteps(steps: number) {
    this._totalStepsSource.next(steps);
  }

  changeStatusStep(status: boolean) {
    this._currentStepCompletedSource.next(status);
  }

  changeStep(step: number) {
    this._currentStepSource.next(step);
  }

  resetStep() {
    this._currentStepSource.next(0);
  }
}
