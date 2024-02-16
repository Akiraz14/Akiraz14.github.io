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

  public collageDegrees: Education[] = [];
  public developerDegrees: Education[] = [];
  public languageDegrees: Education[] = [];

  public degreesActive: string = 'collage';

  ngOnInit(): void {
    this.translocoService.selectTranslateObject('collageDegrees', undefined, 'education')
    .subscribe(result => {
      this.collageDegrees = Object.values(result)
    });

    this.translocoService.selectTranslateObject('developerDegrees', undefined, 'education')
    .subscribe(result => {
      this.developerDegrees = Object.values(result)
    });
    
    this.translocoService.selectTranslateObject('languageDegrees', undefined, 'education')
    .subscribe(result => {
      this.languageDegrees = Object.values(result)
    });
  }

  showDegrees(degree: string): void {
    this.degreesActive = degree;
  }

  isActive(degree: string): boolean {
    return this.degreesActive === degree;
  }

}
