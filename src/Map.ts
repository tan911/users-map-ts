import { map, tileLayer, Map, marker } from 'leaflet';

interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    details(): string;
}

interface SourceMap {
    element: string;
    tileLayer: string;
    attr: string;
}

export class CustomMap {
    private leafletMap: Map;
    private tileLayer: string;
    private attr: string;

    constructor(L: SourceMap) {
        this.attr = L.attr;
        this.tileLayer = L.tileLayer;
        this.leafletMap = map(L.element, {
            center: [0, 0],
            zoom: 1
        });
    }

    displayMapMarker(mappable: Mappable): void {
        tileLayer(this.tileLayer, {
            attribution: this.attr
        }).addTo(this.leafletMap);

        marker([mappable.location.lat, mappable.location.lng])
            .addTo(this.leafletMap)
            .bindPopup(mappable.details())
            .openPopup();
    }
}
