import { Component } from '@angular/core';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    //third-party
    TranslocoModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
