import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    setTimeout(() => {
     this.isAuth = true;
    }, 4000);
  }
  isAuth = false;

  lastUpdate = new Date();

  myAppareils = [
    {
      name: 'Machine à laver',
      statusOn: true
    },
    {
      name: 'Frigo',
      statusOn: true
    },
    {
      name: 'Ordinateur',
      statusOn: false
    }
  ];

  onAllumer(): void {
    this.myAppareils.forEach(appareil => appareil.statusOn = true)
  }
}
