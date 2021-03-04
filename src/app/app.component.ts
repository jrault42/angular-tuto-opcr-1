import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;

  lastUpdate = new Date();

  myAppareils: Array<any>;

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
     this.isAuth = true;
    }, 4000);
  }

  ngOnInit(): void {
    this.myAppareils = this.appareilService.myAppareils;
  }

  onAllumer(): void {
    this.appareilService.switchOnAll();
  }

  onEteindre(): void {
    if (confirm('Voulez-vous vraiment tout éteindre ?')) {
      this.appareilService.switchOffAll();
    }
  }
}
