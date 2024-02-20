import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

import { SharedFunctionsService } from '@shared/services/shared-functions.service';
import { MenuItem } from '@core/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    //third-party
    TranslocoModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private sharedFunctions = inject(SharedFunctionsService);
  
  public menuItems: MenuItem[] = [
    // { title: 'home', route: '/home' },
    { title: 'about', route: 'about' },
    { title: 'projects', route: 'projects' },
    { title: 'skills', route: 'skills' },
    { title: 'education', route: 'education' },
    { title: 'contact', route: 'contact' },
  ];
  
  scrollToSection(id: string, event: Event): void {
    this.sharedFunctions.scrollToSection(id, event);
  }

}
