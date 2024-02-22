import { ChangeDetectorRef, Component, EventEmitter, Output, ViewChild, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

//third-party
import { NgxCaptchaModule, ReCaptcha2Component } from 'ngx-captcha';

import { environment } from '@env';

@Component({
  selector: 'app-recaptcha',
  standalone: true,
  imports: [ ReactiveFormsModule, NgxCaptchaModule, ],
  templateUrl: './recaptcha.component.html',
  styles: ``
})
export class RecaptchaComponent {

  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  
  public readonly siteKey: string = environment.reCaptchaV2SiteKey;
  // Test key
  // public readonly siteKey = '6LcvoUgUAAAAAJJbhcXvLn3KgG-pyULLusaU4mL1';
 
  @ViewChild('captchaElem', { static: false })
  public captchaElem?: ReCaptcha2Component;

  @Output()
  public isReCaptchaValid = new EventEmitter<boolean>();
  
  public recaptchaForm = this.fb.group({
    recaptcha: ['', [Validators.required]],
  });

  private captchaIsLoaded = false;
  private captchaSuccess = signal(false);
  private captchaIsExpired = false;
  private captchaResponse?: string;
  private captchaSuccessEffect = effect(() => {
    this.isReCaptchaValid.emit(this.captchaSuccess());
  });

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'en';
  public type: 'image' | 'audio' = 'image';
  public useGlobalDomain: boolean = false;

  handleReset(): void {
    // this.captchaSuccess = false;
    this.captchaSuccess.set(false);
    this.captchaResponse = undefined;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  handleSuccess(captchaResponse: string): void {
    // this.captchaSuccess = true;
    this.captchaSuccess.set(true);
    this.captchaResponse = captchaResponse;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  handleLoad(): void {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  handleExpire(): void {
    // this.captchaSuccess = false;
    this.captchaSuccess.set(false);
    this.captchaIsExpired = true;
    this.cdr.detectChanges();
  }

  getCurrentResponse(): void {
    const currentResponse = this.captchaElem!.getCurrentResponse();
    if (!currentResponse) {
      alert('There is no current response - have you submitted captcha?');
    } else {
      alert(currentResponse);
    }
  }

  getResponse(): void {
    const response = this.captchaElem!.getResponse();
    if (!response) {
      alert('There is no response - have you submitted captcha?');
    } else {
      alert(response);
    }
  }

  reload(): void {
    this.captchaElem!.reloadCaptcha();
  }

  getCaptchaId(): void {
    alert(this.captchaElem!.getCaptchaId());
  }

  reset(): void {
    this.captchaElem!.resetCaptcha();
  }
}
