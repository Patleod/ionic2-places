import { Component } from '@angular/core';

/*
  Generated class for the Map component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'map',
  template: '<div id="map_around"></div>'
})
export class MapComponent {
  map: google.maps.Map;

  public init(lat: number, long: number, zoom: number=20) {
    this.map = new google.maps.Map(document.getElementById('map_around'), {
      center: new google.maps.LatLng(lat, long),
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.HYBRID
    });
  }

  constructor() {
    console.log('Hello Map Component');
  }

}

