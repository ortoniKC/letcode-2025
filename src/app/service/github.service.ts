import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUserDetail(user: string) {
    return this.http.get(`https://api.github.com/users/${user}`);
  }

  getRepos(repoURL: string) {
    return this.http.get(repoURL);
  }
}
