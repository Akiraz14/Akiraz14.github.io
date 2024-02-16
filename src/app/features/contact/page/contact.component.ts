import { Component } from '@angular/core';

//third-party
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    //third-party
    TranslocoModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
