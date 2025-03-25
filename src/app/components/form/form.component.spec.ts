import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormComponent,BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalid when form is empty', () => {
    expect(component.userForm.invalid).toBeTruthy();
  });

  it('should form fileds are valid', () => {


    component.userForm.patchValue({
      userName:'testtest',
      password:'testtest'
    });
    component.submitForm();
    expect(component.userForm.valid).toBeTruthy();
  });

  it('should username filed are invalid', () => {
    component.userForm.patchValue({
      userName:'test',
      password:'testtest'
    });
    expect(component.userForm.invalid).toBeTruthy();
  });

  it('should password filed are invalid', () => {
    component.userForm.patchValue({
      userName:'test',
      password:'testtest'
    });
    expect(component.userForm.invalid).toBeTruthy();
  });
});
