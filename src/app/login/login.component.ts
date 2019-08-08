import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebcamImage} from 'ngx-webcam';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpWSService} from '../shared/services/http-ws.service';
import {Config} from '../create-account/test';
import {MatSnackBar} from '@angular/material';
import {MessageService} from '../shared/services/message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  // latest snapshot
  public webcamImage: WebcamImage = null;
  public userName: string = null;
  public loginAccountForm = null;
  private trigger: Subject<void> = new Subject<void>();
  private httpWSService: any;
  private userNameMsgError: string;

  constructor(httpWSService: HttpWSService, private _snackBar: MatSnackBar, private messageService: MessageService, public router: Router) {
    this.httpWSService = httpWSService;

  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public loginToApp(): void {
    this.trigger.next();

    const input = new FormData();
    input.append('file', this.webcamImage.imageAsDataUrl);
    this.httpWSService.doPost('user/recognition/' + this.userName, input).subscribe(
      (succ: Config) => {
        const snackBarRef = this._snackBar.open('Success', 'Success', {
          duration: 2000,
        });
        snackBarRef.afterDismissed().subscribe(() => {
          localStorage.setItem('user', this.userName);
          this.router.navigate(['/ml']);
        });
      }, (error: any) => {
        this._snackBar.open('Server error', 'Eror', {
          duration: 2000,
        });
      }
    );


  }

  public hasError = (controlName: string) => {
    const userNameErrors = this.loginAccountForm.controls[controlName].errors;
    if (userNameErrors) {

      if (userNameErrors.minlength) {
        this.userNameMsgError = this.messageService.getErrorMessage('INPUT.USER.VALIDATION', 'minlength');
      } else if (userNameErrors.maxlength) {
        this.userNameMsgError = this.messageService.getErrorMessage('INPUT.USER.VALIDATION', 'maxlength');
      } else if (userNameErrors.required) {
        this.userNameMsgError = this.messageService.getErrorMessage('INPUT.USER.VALIDATION', 'required');
      } else if (userNameErrors.userNameExists) {
        this.userNameMsgError = this.messageService.getErrorMessage('INPUT.USER.VALIDATION', 'userNameExists');
      }
    }
  };

  ngOnInit() {

    this.loginAccountForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.minLength(10)])
    });

  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }


}
