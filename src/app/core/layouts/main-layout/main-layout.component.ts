import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from '@core/components/footer/footer.component';
import { HeaderComponent } from '@core/components/header/header.component';

import { AboutComponent } from '@features/about/page/about.component';
import { ContactComponent } from '@features/contact/page/contact.component';
import { EducationComponent } from '@features/education/page/education.component';
import { HomeComponent } from '@features/home/page/home.component';
import { ProjectsComponent } from '@features/projects/page/projects.component';
import { SkillsComponent } from '@features/skills/page/skills.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    HeaderComponent,

    AboutComponent,
    ContactComponent,
    EducationComponent,
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
