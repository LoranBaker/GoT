import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserLogin } from '../models/userLogin';
import { UserRegistration } from '../models/userRegistration';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurlregistration = "https://localhost:7186/api/Auth/register";
  apiurllogin = "https://localhost:7186/api/Auth/login";
  apiurlauth = "https://localhost:7186/api/Auth";
  constructor(private http: HttpClient,private route:Router) {}

  public register(user: UserRegistration): Observable<UserRegistration[]> {
    return this.http.post<UserRegistration[]>(this.apiurlregistration, user);
  }

  public login(user: UserLogin): Observable<string> {
    return this.http.post(this.apiurllogin, user,{responseType:'text'});
  }

  public getMe(): Observable<string> {
    return this.http.get(this.apiurlauth, {responseType:'text'});
  }

  loggedIn(){
    return !!localStorage.getItem('authToken');
  }

  logoutUser(){
    localStorage.removeItem('authToken');
    this.route.navigate(['/login']);
  }


}
