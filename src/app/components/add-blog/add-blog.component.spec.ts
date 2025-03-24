import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogComponent } from './add-blog.component';

xdescribe('AddBlogComponent', () => {
  let component: AddBlogComponent;
  let fixture: ComponentFixture<AddBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBlogComponent]
    });
    fixture = TestBed.createComponent(AddBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
