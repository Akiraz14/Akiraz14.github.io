import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

//third-party
import { TranslocoModule } from '@ngneat/transloco';
import { SkillsService } from '../services/skills.service';
import { Skill } from '../models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    //third-party
    TranslocoModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  
  private skillsService = inject(SkillsService);

  private skills: Skill[] = [];

  public languages: Skill[] = [];
  public frameworks: Skill[] = [];
  public tools: Skill[] = [];

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.skillsService.getSkills()
    .subscribe(skills => {
      this.skills = skills;

      this.languages = this.getLanguages();
      this.frameworks = this.getFrameworks();
      this.tools = this.getTools();

    });
  }

  private getLanguages(): Skill[] {
    return this.skills.filter(skill => skill.categories.includes('programming languages'));
  }
  
  private getFrameworks(): Skill[] {
    return this.skills.filter(skill => skill.categories.includes('frameworks'));
  }
  
  private getTools(): Skill[] {
    return this.skills.filter(skill => skill.categories.includes('tools'));
  }
  
}
