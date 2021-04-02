import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Associate } from 'src/app/models/associate-model/associate.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  getManagerId(email: string): Observable<string> {
    return this.httpClient.post<string>(
      `${environment.BASE_URL}manager`,
      email
    );
  }
  getAssociate(email: string): Observable<Associate> {
    return this.httpClient.post<Associate>(
      `${environment.BASE_URL}associate`,
      email
    );
  }
}
