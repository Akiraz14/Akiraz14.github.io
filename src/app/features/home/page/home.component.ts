import { Component } from '@angular/core';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    //third-party
    TranslocoModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
