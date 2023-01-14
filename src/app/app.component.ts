import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Manifiesto', url: '/manifesto', icon: 'book' },
    { title: 'Definición', url: '/definition', icon: 'school' },
    { title: 'Teoría', url: '/theory', icon: 'library' },
    { title: 'Valores', url: '/values', icon: 'heart' },
    { title: 'El equipo', url: '/team', icon: 'people' },
    { title: 'Eventos', url: '/events', icon: 'git-commit' },
    { title: 'Artefactos', url: '/artifacts', icon: 'reader' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
