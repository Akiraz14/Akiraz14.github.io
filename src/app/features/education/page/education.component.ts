import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';

//third-party
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';

import { Education } from '../models/education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    CommonModule,
    //third-party
    TranslocoModule,
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  private translocoService= inject(TranslocoService);

  public educationalDegrees: Education[] = [];

  ngOnInit(): void {
    this.translocoService.selectTranslateObject('educationalDegrees', undefined, 'education')
    .subscribe(result => {
      // console.log(result)
      
      this.educationalDegrees = Object.values(result)
      
      // console.log(this.educationalDegrees)
    });
  }

}
