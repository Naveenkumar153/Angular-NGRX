import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustoumIf]'
})
export class CustoumIfDirective implements AfterViewInit{

  constructor(
    private elementRef: ElementRef,
    private renderre2: Renderer2
  ) { }

  @Input() value!:any;
  @Input() condition!:any;

  ngAfterViewInit(): void {
     
  }

}
