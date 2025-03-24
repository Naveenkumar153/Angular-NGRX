import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BlogModel } from "@src/store/Blog/Blog.model";
import { catchError, Observable, throwError } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MasterService {
constructor() { }
    private readonly blogUrl = 'http://localhost:3000/blogs';
    private http = inject(HttpClient);

    getBlogs():Observable<BlogModel[]> {
        return this.http.get<BlogModel[]>(this.blogUrl);
    };

    addBlogs(blogInput:BlogModel):Observable<BlogModel> {
        return this.http.post<BlogModel>(this.blogUrl, blogInput);
    };

    updateBlog(blogInput:BlogModel):Observable<BlogModel>{
        return this.http.put<BlogModel>(`${this.blogUrl}/${blogInput.id.toString()}`, blogInput);
    };

    deleteBlog(id:number):Observable<BlogModel> {
        return this.http.delete<BlogModel>(`${this.blogUrl}/${id}`);
    };

    getAllBlogs():Observable<BlogModel[]>{
        return this.http.get<BlogModel[]>(this.blogUrl).pipe(catchError(this.handleError));
    };

    private handleError(error:HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            return throwError(() => new Error('An error occurred:', error.error.message));
        }else{
            return throwError(() => new Error(`Backend returned code ${error.status}, body was: ${error.error}`));
        }
        // return throwError(() => new Error(`'Something bad happened; please try again later.'`));
    }
}
