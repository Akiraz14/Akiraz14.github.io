import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@core/models';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

import { ThemeMenuComponent } from '../theme-menu/theme-menu.component';
import { LanguageMenuComponent } from '../language-menu/language-menu.component';

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

  public menuItems: MenuItem[] = [
    // { title: 'home', route: '/home' },
    { title: 'about', route: '/about' },
    { title: 'projects', route: '/projects' },
    { title: 'skills', route: '/skills' },
    { title: 'education', route: '/education' },
    { title: 'contact', route: '/contact' },
  ];

}
