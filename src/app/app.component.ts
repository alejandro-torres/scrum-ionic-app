import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Definición', url: '/definition', icon: 'folder-open' },
    { title: 'Teoría', url: '/theory', icon: 'folder-open' },
    { title: 'Valores', url: '/values', icon: 'folder-open' },
    { title: 'El equipo', url: '/team', icon: 'folder-open' },
    { title: 'Eventos', url: '/events', icon: 'folder-open' },
    { title: 'Artefactos', url: '/artifacts', icon: 'folder-open' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
