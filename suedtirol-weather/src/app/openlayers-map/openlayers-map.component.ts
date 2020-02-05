import { Component, OnInit } from "@angular/core";

import { Map, View, Feature, Overlay } from "ol";
import { Tile, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { fromLonLat } from "ol/proj";
import { Point } from "ol/geom";
import { Style, Icon } from "ol/style";

import { WeatherService } from "../shared/weather-service";
import { Station } from "../shared/station";

const styles = {
    "station": new Style({
        image: new Icon({
            anchor: [0.5, 0.5],
            src: "assets/icons/marker.svg"
        })
    })
};

@Component({
    selector: "sw-openlayers-map",
    templateUrl: "./openlayers-map.component.html",
    styleUrls: ["./openlayers-map.component.scss"]
})
export class OpenlayersMapComponent implements OnInit {
    map: Map = null;
    stations: Station[] = [];
    displayedStation: Station = null;

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        const popupOverlay = new Overlay({
            element: document.getElementById('popup'),
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
        });
        this.map = new Map({
            target: document.getElementById("mapdiv"),
            layers: [
                new Tile({
                    source: new OSM()
                }),
            ],
            overlays: [ popupOverlay ],
            view: new View({
                center: fromLonLat([11.4, 46.4]),
                extent: [991422.9083115582, 5565076.201588878, 1566229.3610160837, 6144163.127877373],
                zoom: 9
            })
        });
        this.map.on("singleclick", (event) => {
            const features = this.map.getFeaturesAtPixel(event.pixel);
            if(features.length > 0) {
                popupOverlay.setPosition(event.coordinate);
                const station = this.stations[features[0].getId()];
                this.displayedStation = station;
            } else {
                popupOverlay.setPosition(undefined);
            }
        });
        this.map.on('pointermove', (event) => {
            const features = this.map.getFeaturesAtPixel(event.pixel);
            const target = this.map.getTarget();
            if(target instanceof HTMLElement) {
                target.style.cursor = features.length > 0 ? 'pointer' : '';
            }
        });

        this.weatherService.getAllStations().then((stations) => {
            this.stations = stations;

            const markers = stations.map((station, id) => {
                let marker = new Feature({
                    type: "station",
                    geometry: new Point(fromLonLat([station.longitude, station.latitude]))
                });
                marker.setId(id);
                return marker;
            });
            const vectorLayer = new VectorLayer({
                source: new VectorSource({
                    features: markers,
                }),
                style: function(feature) {
                    return styles[feature.get("type")];
                }
            });

            this.map.addLayer(vectorLayer);
        });
    }
}
