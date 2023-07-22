import { map, latLng, tileLayer, MapOptions, Map } from "leaflet";

export class CustomMap {
    private leafletMap: Map;

    constructor(element: string) {
        this.leafletMap = map(element, {
            center: [0, 0],
            zoom: 1
        })
    }
}

// tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     tileSize: 512,
//     zoomOffset: -1,
//     minZoom: 1,
//     crossOrigin: true
// }).addTo(myMap);
