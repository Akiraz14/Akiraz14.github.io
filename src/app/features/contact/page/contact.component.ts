import { ChangeDetectorRef, Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

//third-party
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import Swal from 'sweetalert2';

import { ContactService } from './../services/contact.service';
import { EMAIL_PATTERN } from '@shared/models';
import { RecaptchaComponent } from '../components/recaptcha/recaptcha.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule,
    RecaptchaComponent,
    //third-party
    TranslocoModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  //third-party
  private translocoService = inject(TranslocoService);

  //reCaptcha Change
  private cdr = inject(ChangeDetectorRef);

  public minName = 4;
  public maxName = 50;
  public minSubject = 10;
  public maxSubject = 100;
  public minMessage = 25;
  public maxMessage = 1000;

  public contactForm: FormGroup = this.fb.group({
    // name: ['', [Validators.required, Validators.minLength(this.minSubject), Validators.maxLength(this.maxSubject)]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(EMAIL_PATTERN.regExp)]],
    subject: ['', [Validators.required, Validators.minLength(this.minSubject), Validators.maxLength(this.maxSubject)]],
    message: ['', [Validators.required, Validators.minLength(this.minMessage), Validators.maxLength(this.maxMessage)]],
    // recaptcha: [false, [Validators.requiredTrue]],
  });

  public isFormDisabled = signal(false);
  private disabledEffect = effect(() => {
    if (this.isFormDisabled()) this.contactForm.disable();
    else this.contactForm.enable();
  });

  private _reCaptchaValid = false;

  wasTouched(field: string): boolean {
    if (!this.contactForm.get(field)) { return false; }
    return this.contactForm.get(field)!.touched;
  }

  fieldLength(field: string): number {
    return (`${this.contactForm.get(field)?.value}` ?? '').length;
  }

  isReCaptchaValid(isValid: boolean): void {
    this.contactForm.get('recaptcha')?.reset(isValid);
  }

  showSuccessMessage(): void {
    Swal.fire({
      icon: "success",
      title: this.translocoService.translate('contact.successMessage.title'),
      text: this.translocoService.translate('contact.successMessage.message'),
    });
  }

  showErrorMessage(): void {
    Swal.fire({
      icon: "error",
      title: this.translocoService.translate('contact.errorMessage.title'),
      text: this.translocoService.translate('contact.errorMessage.message'),
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid || this.contactForm.pending) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isFormDisabled.set(true);
    Swal.fire({
      title: this.translocoService.translate('contact.sendingMessage.title'),
      text: this.translocoService.translate('contact.sendingMessage.message'),
      confirmButtonText: this.translocoService.translate('contact.sendingMessage.confirm'),
      showCancelButton: true,
      cancelButtonText: this.translocoService.translate('contact.sendingMessage.cancel'),
    }).then((result) => {
      if (!result.isConfirmed) {
        this.isFormDisabled.set(false);
        return;
      }
      
      this.contactService.sendMessage({ ...this.contactForm.value })
      .subscribe(resp => {
          if (resp) {
            this.contactForm.reset();
            this.showSuccessMessage();
          }
          else { this.showErrorMessage(); }

          this.cdr.detectChanges();
          this.isFormDisabled.set(false);
        });
      
    });
  }

}
