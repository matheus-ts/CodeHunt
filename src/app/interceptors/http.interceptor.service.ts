import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  BASE_URL = 'https://api.github.com';

  private prepareUri(url: string | Request): string {
    return this.BASE_URL + url;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      url: this.prepareUri(req.url.replace(this.BASE_URL, '')),
    });

    return next
      .handle(clonedReq)
      .pipe(catchError(error => this.handleError(error)));
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    if (err.status == 401) {
      return of(err.message);
    } else if (err.status == 403) {
      return of(err.message);
    }
    return throwError(err);
  }
}
