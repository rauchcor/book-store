import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user';

const userInit: User = {
  isAdmin: true,
  password: '',
  username: 'Anonym'
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(userInit);
  user$: Observable<User> = this.userSubject.asObservable();

  constructor() { }

  isAdmin(): Observable<boolean> {
   return of(this.userSubject.value.isAdmin);
  }
}
