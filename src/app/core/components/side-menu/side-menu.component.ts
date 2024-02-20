import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

import { SharedFunctionsService } from '@shared/services/shared-functions.service';
import { ThemeMenuComponent } from '../theme-menu/theme-menu.component';
import { LanguageMenuComponent } from '../language-menu/language-menu.component';
import { CURRENT_MENU, MenuItem } from '@core/models';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,RouterModule,
    ThemeMenuComponent,
    LanguageMenuComponent,
    //third-party
    TranslocoModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  private sharedFunctions = inject(SharedFunctionsService);

  public menuItems: MenuItem[] = CURRENT_MENU;
  
  scrollToSection(id: string, event: Event): void {
    this.sharedFunctions.scrollToSection(id, event);
  }
}
