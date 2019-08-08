import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebcamImage} from 'ngx-webcam';
import {HttpWSService} from '../shared/services/http-ws.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Config, UserValidators} from './test';
import {MessageService} from '../shared/services/message.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  providers: [HttpWSService]
})
export class CreateAccountComponent implements OnInit {

  // latest snapshot
  public webcamImage: WebcamImage = null;
  public userNameMsgError: any;
  public userName: string = null;
  public createAccountForm: FormGroup;
  private trigger: Subject<void> = new Subject<void>();
  private httpWSService: any;

  constructor(httpWSService: HttpWSService, private service: UserValidators, private _snackBar: MatSnackBar,
              private messageService: MessageService, public router: Router) {
    this.httpWSService = httpWSService;

  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  ngOnInit() {

    this.createAccountForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)],
        [this.service.userValidator()])
    });
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public createAccount(): void {
    this.trigger.next();
    const input = new FormData();
    input.append('file', this.webcamImage.imageAsDataUrl);
    this.httpWSService.doPost('user/createAccount/' + this.userName, input).subscribe(
      (succ: Config) => {
        const snackBarRef = this._snackBar.open('Success', 'Success', {
          duration: 2000,
        });
        snackBarRef.afterDismissed().subscribe(() => {
          localStorage.setItem('user', this.userName);
          this.router.navigate(['/']);
        });
        localStorage.setItem('user', this.userName)
        this.router.navigate(['/ml']);
      }, (error: any) => {
        this._snackBar.open('Server error', 'Eror', {
          duration: 2000,
        });
      }
    );

  }

  public hasError = (controlName: string) => {
    const userNameErrors = this.createAccountForm.controls[controlName].errors;
    this.userNameMsgError = '';
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


    return this.createAccountForm.controls[controlName].errors;
  }


}











