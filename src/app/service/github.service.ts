import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepos(url: string): Observable<any[]> {
    return this.http.get<any[]>(url); 
}

  getUserDetail(username: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${username}`);
  }
}