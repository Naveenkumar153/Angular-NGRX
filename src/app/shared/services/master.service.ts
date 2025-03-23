import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BlogModel } from "@src/store/Blog/Blog.model";
import { Observable } from "rxjs";
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
    }
}
