import { Component } from '@angular/core';

import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SideMenuComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
