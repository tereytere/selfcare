import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { UserService } from '../../services/user.service';
import { CITY_COORDINATES } from '../../data/city-coordinates';

interface CityLocation {
  name: string;
  latLng: [number, number];
}

@Component({
  selector: 'map-component',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit {
  private map!: L.Map;
  private defaultCenter: [number, number] = [40.43034866984487, -3.7066612157011805];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.initMap();
    this.fetchUserLocations();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.defaultCenter,
      zoom: 5,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

  }

  private fetchUserLocations(): void {
    this.userService.getLocation().then(response => {
      const cityNames = response.data;
      const cityLocations: CityLocation[] = this.mapCitiesToCoordinates(cityNames);
      this.addMarkersToMap(cityLocations);
    }).catch(error => {
      console.error('Error fetching user locations', error);
    });
  }

  private mapCitiesToCoordinates(cityNames: string[]): CityLocation[] {
    const cityLocations: CityLocation[] = [];
    cityNames.forEach(city => {
      const coordinates = CITY_COORDINATES[city];
      if (coordinates) {
        cityLocations.push({ name: city, latLng: coordinates });
      } else {
        console.warn(`Coordinates for ${city} not found.`);
      }
    });
    return cityLocations;
  }

  private jitterPosition(position: [number, number], maxOffset: number = 0.001): [number, number] {
    const latOffset = (Math.random() - 0.5) * maxOffset * 2;
    const lngOffset = (Math.random() - 0.5) * maxOffset * 2;
    return [position[0] + latOffset, position[1] + lngOffset];
  }

  private addMarkersToMap(cityLocations: CityLocation[]): void {
    cityLocations.forEach(city => {
      const jitteredLatLng = this.jitterPosition(city.latLng, 0.001);

      const markerIcon = new L.Icon({
        iconUrl: 'images/location.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
      });

      L.marker(jitteredLatLng, { icon: markerIcon })
        .addTo(this.map)
    });
  }

}
