import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Author, RequestAuthor, ResponseAuthors} from './author.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private url = 'https://olist-library-drf.herokuapp.com/api/v1/authors/';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<ResponseAuthors> {
    return this.http.get<ResponseAuthors>(this.url);
  }

  createAuthor(author: RequestAuthor): Observable<Author> {
    return this.http.post<Author>(this.url, author);
  }
}
