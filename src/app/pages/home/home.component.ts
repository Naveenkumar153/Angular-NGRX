import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { CounterComponent } from 'src/app/components/counter/counter.component';
import { NavBarModule } from 'src/app/components/nav-bar/nav-bar.module';
import { ChildComponent } from './child/child.component';
import { Subject, Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { RxjsComponent } from 'src/app/components/rxjs-operator.component';
import { DataSharingService } from '@src/shared/services/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports:[
    NavBarModule,
    NgFor,
    NgIf,
    ChildComponent,
    MatButtonModule,
    CommonModule,
    RxjsComponent
  ]
})
export class HomeComponent implements OnDestroy{
  // name:string = 'Naveen';
  // disabled = false;

  // comments:string[] = [];

  // addComment(comment:string){
  //   this.comments.push(comment);
  // }

  constructor(
    private messageSerivce:DataSharingService,
  ){

  }

  // sentDataToSerivce(){
  //   this.messageSerivce.sendMessage('Naveen');
  // }

  // cart: any[] = [];
  // private cartSubscription!: Subscription;
  
  // productSubject: Subject<{name:string,price:number}> = new Subject<{name:string,price:number}>();

  // childData:string = '';

  // inputEvent(input:string){
  //   console.log('string',input);
  //   this.childData = input;
  // };

  // updateProduct():void{
  //   this.productSubject.next({ name:'smartphone', price:599 });
  //   this.sentDataToSerivce();
  // };

  // receiveCartSubject(subject: Subject<{ action: string; product: any }>) {
  //   this.cartSubscription = subject.subscribe((data:{ action: string; product: any }) => {
  //     console.log('subject',data);
  //     if (data.action === 'add') {
  //       this.cart.push(data.product);
  //     }
  //   });
  // };

  ngOnDestroy() {
    // if (this.cartSubscription) {
    //   this.cartSubscription.unsubscribe();
    // }
  }

}
