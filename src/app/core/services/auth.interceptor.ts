import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = this.addToken(request);
    // console.log(request.headers);
    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>) {

    const token = this.token.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          token
        }
      });

      return request;
    }

    return request;
  }
}
