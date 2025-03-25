import { TestBed } from '@angular/core/testing';
import { PermissionDirective } from './permission.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('PermissionDirective', () => {

  let directive:PermissionDirective;
  let mockElementRef:ElementRef;
  let mockERenderer2: jasmine.SpyObj<Renderer2>;

  beforeEach(() => {

    /**
     * ElementRef & Renderer2 cannot be injected directly
     *    These are not services that Angular provides through DI.
     *    ElementRef and Renderer2 are typically provided by Angular when used inside a component or directive.
     */

    mockElementRef = new ElementRef(document.createElement('div')); 
    mockERenderer2 = jasmine.createSpyObj('Renderer2',['removeChild']);

     TestBed.configureTestingModule({
       providers:[
        PermissionDirective,
        { provide: ElementRef, useValue: mockElementRef },
        { provide: Renderer2, useValue: mockERenderer2 }
       ]
     });
     directive = TestBed.inject(PermissionDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
    expect(mockElementRef).toBeTruthy();
    expect(mockERenderer2).toBeTruthy();
  });

  it('should remove element if permission not present', () => {
    directive.permisstion = 11;
    directive.ngAfterViewInit();
    expect(mockERenderer2.removeChild).toHaveBeenCalledWith(mockElementRef.nativeElement.parentNode, mockElementRef.nativeElement);
    // expect(mockERenderer2.removeChild).toHaveBeenCalled();
  });

  it('should not remove the element if permission is present', () => {
    directive .permisstion = 10;
    directive.ngAfterViewInit();
    expect(mockERenderer2.removeChild).not.toHaveBeenCalled();
  });
});
