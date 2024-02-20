import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SharedFunctionsService {

  scrollToSection(id: string, event: Event): void {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
