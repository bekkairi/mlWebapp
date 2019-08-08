import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpWSService {

  private mainUrl = 'http://localhost:9999/';

  constructor(private httpClient: HttpClient) {
  }

  public doGet<T>(childUrl: String) {

    return this.httpClient.get<T>(this.mainUrl + childUrl, {responseType: 'json'});

  }

  public doPost<T>(childUrl: String, input: FormData) {

    return this.httpClient.post<T>(this.mainUrl + childUrl, input, {responseType: 'json'});

  }

  public validate(name: String) {
    return 'valid ';
  }

}
