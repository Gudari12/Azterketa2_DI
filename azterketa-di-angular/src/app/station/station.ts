import { Component, inject, input, signal } from '@angular/core';
import { Opendata } from '../opendata';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-station',
  imports: [],
  templateUrl: './station.html',
  styleUrl: './station.css',
})
export class Station {
  opendata = inject(Opendata);
  data: any = signal(null);
  route = inject(ActivatedRoute);
  isLoading = signal(true);

  constructor() {
    this.isLoading.set(true);
    this.opendata.station_info(85).subscribe({
      next: (response) => {
        const items = (response as any)?.features || [];
        this.data.set(items);
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
