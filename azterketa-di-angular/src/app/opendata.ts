import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class Opendata {
  private http = inject(HttpClient);
  private api = "https://api.euskadi.eus/air-quality/stations";
  data = null;
  

  stations(): Observable<any[]> {
    return this.http.get<any>(this.api);
        
  }

  station_info(id: number): Observable<any[]> {
    return this.http.get<any>(this.api+
      '/'+id);
  }

}
