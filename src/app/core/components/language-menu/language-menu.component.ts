import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

//third-party
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

import { Language } from '@core/models';

@Component({
  selector: 'app-language-menu',
  standalone: true,
  imports: [
    CommonModule,
    //third-party
    TranslocoModule,
  ],
  templateUrl: './language-menu.component.html',
  styleUrl: './language-menu.component.scss'
})
export class LanguageMenuComponent {

  private translocoService = inject(TranslocoService);

  public langEn: Language = {
    code: 'en',
    name: 'English',
    shorthand: 'ENG',
    imgUrl: './assets/images/languages/en-circle-32.png',
  };

  public langEs: Language = {
    code: 'es',
    name: 'Spanish',
    shorthand: 'SPA',
    imgUrl: './assets/images/languages/es-circle-32.png',
  };

  private _currentLanguage = signal<Language>(this.langEn);
  public currentLanguage = computed(() => this._currentLanguage());

  ngOnInit(): void {
    const code = document.documentElement.getAttribute('lang') || 'en';
    this.changeLanguage(code === 'es' ? this.langEs : this.langEn);
  }

  changeLanguage(lang: Language): void {
    this._currentLanguage.set(lang);

    this.translocoService.setActiveLang(lang.code);
    document.documentElement.setAttribute('lang', lang.code);
  }

}
