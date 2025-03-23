import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DataSharingService } from '@src/shared/services/data-sharing.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    FormsModule,
    MatButtonModule
  ]
})
export class ChildComponent implements OnInit, OnDestroy{
  private subscription!:Subscription;
  private cartActionSubject = new Subject<{ action: string; product: any }>();

  name:string = '';
  currentProduct: any;
  @Output() inputEvent = new EventEmitter<string>();
  @Output() cartAction = new EventEmitter<Subject<any>>();
  @Input() productStream!: Subject<{name:string,price:number}>;

  constructor(
    private messageSerivce:DataSharingService
  ) { 
  }
  
  ngOnInit(): void {
    console.log('this.productStream',this.productStream);
    /**
     * Get data throught @input decorator using subject 
     */
    if(this.productStream){
      this.subscription = this.productStream.subscribe((product) => {
        console.log('product',product);
        this.currentProduct = product;
      });
    }
    /**
     * when cartActionSubject emit data pass it to parent component using @output decorator
     * 
     */
    this.cartAction.emit(this.cartActionSubject);

    this.messageSerivce.currentMessage.subscribe(msg => {
      console.log('msg',msg);
    });
  };

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  passInputValueToParent(){
    this.inputEvent.emit(this.name);
  };

  
  /**
   * Pass data to parent component using subject and @output decorator
   * 
   */
  addItemToCart():void{
      this.cartActionSubject.next({
        action: 'add',
        product: { id: 123, name: 'Smartphone', quantity: 1 }
      });
  }



}
