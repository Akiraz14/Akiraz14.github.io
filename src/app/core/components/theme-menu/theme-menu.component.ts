import { Component, HostBinding, signal } from '@angular/core';
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
    this.setTheme(theme);
  }

  private getCurrentTheme(): 'light'|'dark' {
    const theme = (document.documentElement.getAttribute('data-bs-theme') === 'light') ? 'light' : 'dark';
    return theme;
  }

  private setTheme(theme: 'light'|'dark'): void {
    document.documentElement.setAttribute('data-bs-theme', theme);
    this.currentTheme.set(theme);
  }

  changeTheme(): void {
    const theme = (this.getCurrentTheme() === 'light') ? 'dark' : 'light';
    this.setTheme(theme);
  }

}
