import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, switchMap, tap, timer } from 'rxjs';

import { environment } from '@env';
import { ContactMessage } from '@shared/models';
import { RecaptchaService } from './recaptcha.service';

interface MailResponse { ok: boolean; }

@Injectable({ providedIn: 'root' })
export class ContactService {

  private http = inject(HttpClient);
  private recaptchaService = inject(RecaptchaService);
  
  private readonly apiUrl = environment.contactApiUrl;

  sendMessage(message: ContactMessage): Observable<boolean> {
    const url = `${this.apiUrl}`;
    return this.http.post<MailResponse>(url, message)
    .pipe(
      map(resp => {
        if (resp.ok) return true;
        return false;
      }),
      catchError(error => {
        console.error(error);
        return of(false);
      })
    );
  }
  
  sendMessageV3(message: ContactMessage): Observable<boolean> {
    const url = `${this.apiUrl}`;
    return this.recaptchaService.getReCaptchaV3Token()
    .pipe(
      switchMap(token => this.http.post<MailResponse>(url, message)),
      map(resp => {
        if (resp.ok) return true;
        return false;
      }),
      catchError(error => {
        console.error(error);
        return of(false);
      })
    );
  }
  
  sendMessageTest(message: ContactMessage): Observable<boolean> {
    const url = `${this.apiUrl}`;
    return timer(2000)
    .pipe(
      map(() => false),
      catchError(error => {
        console.error(error);
        return of(false);
      })
    );
  }
}
