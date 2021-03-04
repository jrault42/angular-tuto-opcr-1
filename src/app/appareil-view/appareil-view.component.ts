import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  lastUpdate = new Date();
  isAuth = false;
  myAppareils: Array<any>;

  constructor(private appareilService: AppareilService) {
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
