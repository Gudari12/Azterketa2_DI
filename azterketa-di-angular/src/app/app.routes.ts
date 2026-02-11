import { Routes } from '@angular/router';
import { AirStations } from './air-stations/air-stations';
import { Station } from './station/station';
import {Events} from './events/events';
import {Euskalmet} from './euskalmet/euskalmet';


export const routes: Routes = [
    {
        path: 'air_stations',
        component: AirStations
    },
    {
        path: 'stations/:id',
        component: Station
    },
    {
        path: 'cultural_events',
        component: Events
    },
    {
        path: 'euskalmet',
        component: Euskalmet
    },
    {
        path: '',
        redirectTo: 'air_stations',
        pathMatch: 'full'
    }
];
