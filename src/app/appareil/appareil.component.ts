import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilOn: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilOn ? 'allumé' : 'éteint';
  }
  getColor(): string {
    return this.appareilOn ? 'green' : 'red';
  }

}
