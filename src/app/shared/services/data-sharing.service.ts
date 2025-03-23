import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  constructor() { }

  private messageSource: Subject<string> = new BehaviorSubject<string>('Initial');

  currentMessage = this.messageSource.asObservable();

  sendMessage(str:string){
    this.messageSource.next(str);
  }

}
