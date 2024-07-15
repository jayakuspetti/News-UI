import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = "https://localhost:7093/api/news";
  private news : News[] = [];
  
  constructor(private http : HttpClient ) { 

  }

  getNewStories() {

    return this.http.get<News[]>(this.apiUrl);
  }
}
