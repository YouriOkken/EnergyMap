import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TomTomConfig } from '@tomtom-org/maps-sdk/core';
import { TomTomMap } from '@tomtom-org/maps-sdk/map';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;

  ngOnInit(): void {
    TomTomConfig.instance.put({ apiKey: environment.tomTomKey, language: 'en-GB' });

    const map = new TomTomMap({
      mapLibre: {
        container: this.mapContainer.nativeElement,
        center: [6.532591, 52.112702],
        zoom: 12,
      }
    });

    map.mapLibreMap.on('load', () => {
      map.mapLibreMap.addSource('houses', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: { type: 'Point', coordinates: [6.532591, 52.112702] },
              properties: { netUsage: 10 }
            },
            {
              type: 'Feature',
              geometry: { type: 'Point', coordinates: [6.532474, 52.112676] },
              properties: { netUsage: -5 }
            }
          ]
        }
      });

      map.mapLibreMap.addLayer({
        id: 'houses-layer',
        type: 'circle',
        source: 'houses',
        paint: {
          'circle-radius': 8,
          'circle-color': [
            'case',
            ['>', ['get', 'netUsage'], 0], '#e74c3c', // deficit = red
            '#2ecc71' // surplus = green
          ],
          'circle-opacity': 0.8
        }
      });
    });
  }
}
