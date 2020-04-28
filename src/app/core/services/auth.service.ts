import { TokenService } from './token.service';
import { AuthInterceptor } from '@core/services/auth.interceptor';
import { tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url_api;

  constructor(private af: AngularFireAuth, private http: HttpClient, private token: TokenService) { }

  createUser(email: string, password: string){
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  loginUser(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }
  logout() {
    return this.af.auth.signOut();
  }

  hasUser() {
    return this.af.authState;
  }

  loginResApi(email: string, password: string) {
    return this.http.post(this.url + 'auth', {email, password}).pipe(
      tap((data: {token: string}) => {
        this.token.saveToken(data.token);
      })
    );
  }
}
