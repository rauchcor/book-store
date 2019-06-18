import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ACTIVE_INDEX } from '@angular/core/src/render3/interfaces/container';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private active: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  $active: Observable<boolean> = this.active.asObservable();
  constructor() { }

  get isActive(): boolean {
    return this.active.value;
  }
  set isActive(active: boolean) {
    this.active.next(active);
  }

  public log(logLevel: string, message: string) {
    if (this.isActive) {
      console.log(logLevel + ": " + message);
    }
  }
}
