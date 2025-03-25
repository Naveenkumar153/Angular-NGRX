import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { blogsActions } from '@src/store/Blog/Blog.action';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  let mockStore = {
    select: jasmine.createSpy('select').and.returnValue(of([])),
    dispatch: jasmine.createSpy('dispatch')
  }; 

  let mockDialog = {
    open: jasmine.createSpy('open').and.returnValue({ afterClosed: of([]) }),
  };

  let mockSnackBar = {
    open: jasmine.createSpy('open').and.returnValue({ afterClosed: of([]) }),
  }

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [BlogComponent],
      providers:[
        { provide:Store, useValue:mockStore },
        { provide:MatDialog, useValue: mockDialog },
        { provide:MatSnackBar, useValue: mockSnackBar },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch load blogs action on init', () => {
    expect(mockStore.dispatch).toHaveBeenCalled()
  });
});
