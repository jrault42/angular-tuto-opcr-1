export class AppareilService {
  myAppareils = [
    {
      id: 1,
      name: 'Machine à laver',
      statusOn: true
    },
    {
      id: 2,
      name: 'Frigo',
      statusOn: true
    },
    {
      id: 3,
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

  getAppareilById(id: string) {
    return this.myAppareils.find(app => {
      return app.id.toString() === id;
    });
  }
}
