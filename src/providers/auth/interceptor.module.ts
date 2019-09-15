import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthProvider } from './auth';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()

export class HttpsRequestInterceptor implements HttpInterceptor {
  
  constructor(
    private authProvider: AuthProvider) {
  }
    
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
    ): Observable<HttpEvent<any>> {
      const dupReq = req.clone({
        headers: req.headers.set('Authorization', this.authProvider.getToken),
      });
      return next.handle(dupReq);
    }
  }    
    
  @NgModule({
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpsRequestInterceptor,
        multi: true,
      },
    ],
  })   
    
export class Interceptor {}