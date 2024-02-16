import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';
import { SideMenuComponent } from '@core/components/side-menu/side-menu.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
