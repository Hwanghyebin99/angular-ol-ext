import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import Stamen from 'ol/source/Stamen';
import OlTileLayer from 'ol/layer/Tile';
import Colorize from 'ol-ext/filter/Colorize';
import OLCesium from 'ol-cesium';
import olcs from '../../../node_modules/olcs/core';
import * as Cesium from 'cesium';
window['Cesium'] = Cesium;
window['CESIUM_BASE_URL'] = '/assets/cesium/';
/**
 * Map Component: load and display a map
 * @example
 * <app-map id="map"></app-map>
 */
@Component({
  selector: 'app-map',
  template: '',
  // Include ol style as global
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    '../../../node_modules/ol/ol.css',
    '../../../node_modules/ol-ext/dist/ol-ext.css'
  ],

})

export class MapComponent implements OnInit {

  map: OlMap;

  constructor(
  ) {}

  /**
   * Create map on Init
   */
  ngOnInit() {

     // The map
    this.map = new OlMap
     ({	target: 'map',
       view: new OlView
       ({	zoom: 8,
         center: [247044, 6549736.]
       }),
       layers: []
     });
    const filter = new Colorize({
      operation: 'grayscale',
    });
    let osm = new OlTileLayer({  source: new Stamen({ layer: 'watercolor' }),
    filter:filter });

    osm.addFilter(filter);
    this.map.addLayer(osm);
  }
}
