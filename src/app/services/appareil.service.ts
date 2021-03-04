export class AppareilService {
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

  switchOnAll(): void {
    this.myAppareils.forEach(appareil => appareil.statusOn = true);
  }
  switchOffAll(): void {
    this.myAppareils.forEach(appareil => appareil.statusOn = false);
  }
  switchOnAppareil(i): void {
    this.myAppareils[i].statusOn = true;
  }
  switchOffAppareil(i): void {
    this.myAppareils[i].statusOn = false;
  }
}
