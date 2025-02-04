import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getJoke() {
    return this.http.get(`https://icanhazdadjoke.com/`, {
      headers: {
        Accept: 'application/json',
      },
    });
  }
}
