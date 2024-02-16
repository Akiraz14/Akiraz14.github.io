import { Routes } from "@angular/router";
import { HomeComponent } from "@features/home/page/home.component";

export const MAIN_LAYOUT_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    loadComponent: () => import('@features/about/page/about.component').then(c => c.AboutComponent),
  },
  {
    path: 'projects',
    loadComponent: () => import('@features/projects/page/projects.component').then(c => c.ProjectsComponent),
  },
  {
    path: 'skills',
    loadComponent: () => import('@features/skills/page/skills.component').then(c => c.SkillsComponent),
  },
  {
    path: 'education',
    loadComponent: () => import('@features/education/page/education.component').then(c => c.EducationComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('@features/contact/page/contact.component').then(c => c.ContactComponent),
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];
