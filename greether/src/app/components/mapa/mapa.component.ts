import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';


declare var mapboxgl: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements AfterViewInit {

  @Input() coords: string;
  @ViewChild('mapa') mapa: { nativeElement: any; };

  constructor() { }

  ngAfterViewInit() {

    const latLng = this.coords.split(',');
    const lat = Number(latLng[0]);
    const lng = Number(latLng[1]);

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudGlhZ29wYXMiLCJhIjoiY2wwcXlpZXd1MmVwdTNjbDRpYjR1cTR0aSJ9.bZ35exYUGg-Vmk2gXCgrCA';
    const map = new mapboxgl.Map({
      container:  this.mapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ lng, lat ],
      zoom: 15
    });

    const marker = new mapboxgl.Marker()
        .setLngLat( [ lng, lat ] )
        .addTo( map );


  }

}
