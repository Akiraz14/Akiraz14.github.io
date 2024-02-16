import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './theme-menu.component.html',
  styleUrl: './theme-menu.component.scss'
})
export class ThemeMenuComponent {

  public currentTheme = signal<'dark'|'light'>('dark');

  ngOnInit(): void {
    const theme = this.getCurrentTheme();
    this.currentTheme.set(theme);
  }

  private getCurrentTheme(): 'light'|'dark' {
    const theme = (document.documentElement.getAttribute('data-bs-theme') === 'light') ? 'light' : 'dark';
    return theme;
  }

  changeTheme(): void {
    const theme = (this.getCurrentTheme() === 'light') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);
    this.currentTheme.set(theme);
  }
}
