import { Component, inject, signal } from '@angular/core';
import { Opendata } from '../opendata';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-air-stations',
  imports: [],
  templateUrl: './air-stations.html',
  styleUrl: './air-stations.css',
})
export class AirStations {
  opendata = inject(Opendata);
  data: any = signal(null);
  route = inject(ActivatedRoute);
  isLoading = signal(true);

  constructor() {
    this.isLoading.set(true);
    this.opendata.stations().subscribe({
      next: (response) => {
        const items = (response as any)?.features || [];
        this.data.set(items);
        console.log(this.data());
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Errorea aire-estazioak kargatzen: ', error);
        this.data.set([]);
        this.isLoading.set(false);
      }
    });
  }

}
