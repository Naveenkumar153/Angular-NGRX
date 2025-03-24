import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';

xdescribe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogComponent]
    });
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
