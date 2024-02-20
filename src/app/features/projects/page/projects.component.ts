import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

import { Project } from '../models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    //third-party
    TranslocoModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  public projects: Project[] = [
    {
      name: 'GamesApp',
      imgUrl: './assets/images/others/gamesApp.jpg',
      link: 'https://akiraz14.github.io/gamesApp/',
      creationDate: new Date(2024, 2, 8),
      technologies: ['Angular', 'TypeScript', 'SASS'],
    }
  ];
  
}
