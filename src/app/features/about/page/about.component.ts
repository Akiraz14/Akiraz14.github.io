import { Component } from '@angular/core';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    //third-party
    TranslocoModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
