import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private jsonMessage: Array<ErrorMessages>;

  constructor(private httpClient: HttpClient) {

    this.httpClient.get<Array<ErrorMessages>>('assets//message/message.json').subscribe(
      data => this.jsonMessage = data
    );
  }

  getErrorMessage(component: string, type: string) {
    return this.jsonMessage.filter(e => e.COMPONENT === component)[0].MESSAGES.filter(e => e.TYPE === type)[0].MESSAGE;
  }
}

export interface ErrorMessage {
  TYPE: string;
  MESSAGE: string;
}

export interface ErrorMessages {
  COMPONENT: string;
  MESSAGES: Array<ErrorMessage>;
}
