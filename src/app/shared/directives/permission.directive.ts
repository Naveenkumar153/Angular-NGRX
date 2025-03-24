import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPermission]',
  standalone:true
})
export class PermissionDirective implements AfterViewInit{

  constructor(
    private elementRef:ElementRef,
    private renderer2:Renderer2,
  ) { }
  @Input({required:true, alias:'hello'}) permisstion!: number;
  private permissions: number[] = [1,2,3,4,5,6,7,8,9,10]; 

  ngAfterViewInit(): void {
    console.log('this.permisstion',this.permisstion);
     if(!this.permissions.includes(+this.permisstion)){
       this.renderer2.removeChild(this.elementRef.nativeElement.parentNode, this.elementRef.nativeElement);
     }
  };

}
