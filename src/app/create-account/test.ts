import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {Observable, throwError, timer} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpWSService} from '../shared/services/http-ws.service';


@Injectable({
  providedIn: 'root'
})
export class UserValidators {
  constructor(private http: HttpClient, private httpWSService: HttpWSService) {
  }

  searchUser(text) {
    // debounce
    return timer(1000)
      .pipe(
        switchMap(() => {
          // Check if username is available
          return this.httpWSService.doGet<Config>('users/' + text);
        })
      );
  }

  userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.searchUser(control.value)
        .pipe(
          map(res => {
            // if username is already taken
            if (res.ret) {
              // return error
              return {'userNameExists': true};
            }
          }),
          catchError((e: any) => {

            return throwError(e);
          }),
        );
    };

  }

}

export interface Config {
  ret: string;
}
