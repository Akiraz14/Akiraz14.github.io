import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { environment } from '@env';
import { Skill } from '../models';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  
  private http = inject(HttpClient);
  
  private readonly apiUrl: string = environment.skillsApiUrl;

  getSkills(): Observable<Skill[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Skill[]>(url);
  }

}
