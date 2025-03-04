import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BlogModel } from "../store/Blog/Blog.model";
@Injectable({
  providedIn: 'root'
})
export class MasterService {
constructor() { }
    private readonly blogUrl = 'http://localhost:3000/blogs';
    private http = inject(HttpClient);

    getBlogs():Observable<BlogModel[]> {
        return this.http.get<BlogModel[]>(this.blogUrl);
    }
}
