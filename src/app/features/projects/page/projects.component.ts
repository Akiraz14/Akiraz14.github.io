import { Component } from '@angular/core';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    //third-party
    TranslocoModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
