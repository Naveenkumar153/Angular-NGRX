import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BlogModel } from '@src/store/Blog/Blog.model';

describe('MasterService', () => {
  let service: MasterService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterService],
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(MasterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(httpMock).toBeTruthy();
  });

  it("should handle an all blogs list", async () => {
    const url = 'http://localhost:3000/blogs';
    const dummyBlogs = [
      {
        "id": 1,
        "title": "Angular-55fasdffsfd",
        "description": "Angular is a platform and framework for building single-page client applications using HTML and TypeScript."
      },
      {
        "id": 2,
        "title": "React",
        "description": "React is a JavaScript library for building user interfaces."
      },
      {
        "id": 3,
        "title": "Vue",
        "description": "Vue.js is a progressive framework for building user interfaces."
      }
    ]

    await service.getAllBlogs().subscribe(data => {
      console.log("data",data);
      expect(data).toEqual(dummyBlogs);
    });
    const req = httpMock.expectOne(url);

    expect(req.request.method).toBe('GET');
    req.flush(dummyBlogs);
  });

  it("should handle error while fetching data", async () => {
    const url = 'http://localhost:3000/blogs';
    const errorMsg = 'An error occurred';
    
    await service.getAllBlogs().subscribe({
      next: () => fail('expected an error'),
      error: (error: HttpErrorResponse) => {
        expect(error).toBeTruthy();
        expect(error?.message).toContain(errorMsg);
      }
    });
    
    
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.error(new ErrorEvent('An error occurred', { message:errorMsg }));
  });

});
