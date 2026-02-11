import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navbar = [
    { name: 'Air quality', link: '/air_stations' },
    { name: 'Cultural events', link: '/cultural_events' },
    { name: 'Euskalmet', link: '/euskalmet' }
  ];

}
