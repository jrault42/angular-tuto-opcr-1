import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilOn: boolean;
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilOn ? 'allumé' : 'éteint';
  }
  getColor(): string {
    return this.appareilOn ? 'green' : 'red';
  }
  onSwitch(): void {
    this.appareilOn
      ? this.appareilService.switchOffAppareil(this.index)
      : this.appareilService.switchOnAppareil(this.index);
  }
}
