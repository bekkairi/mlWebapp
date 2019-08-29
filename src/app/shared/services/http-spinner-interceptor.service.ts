import { Injectable } from '@angular/core';
import {SpinnerServiceService} from './spinner-service.service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpSpinnerInterceptorService implements HttpInterceptor{

  count = 0;

  constructor( private spinnerServiceService: SpinnerServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinnerServiceService.show();

    this.count++;

    return next.handle(req)

      .pipe ( tap (

        event => console.log(event),

        error => console.log( error )

        ), finalize(() => {

          this.count--;

          if ( this.count === 0 ) { this.spinnerServiceService.hide (); }
        })
      );
  }
}
