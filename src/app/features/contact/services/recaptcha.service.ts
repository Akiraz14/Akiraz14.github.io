import { Injectable, inject } from '@angular/core';
import { environment } from '@env';

//third-party
import { ReCaptchaV3Service } from 'ngx-captcha';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecaptchaService {
  
  private reCaptchaV3Service = inject(ReCaptchaV3Service);
  
  public readonly siteKey: string = environment.reCaptchaV3SiteKey;
  // Test key
  // private readonly siteKey: string = '6Ldb528UAAAAAMD7bdsxQz2gQSl-Jb-kGTyAHThi';
  private token: string = '';
  
  getReCaptchaV3Token(): Observable<string> {
    return new Observable<string>((observer) => {
      this.reCaptchaV3Service.execute(this.siteKey, '', (token) => {
        this.token = token;
        console.log(token)
        observer.next(token);
        if (!this.token) { observer.error('Invalid reCaptcha Token') };
      }, {
        useGlobalDomain: false,
        useEnterprise: false,
      });
    });
  }

}
