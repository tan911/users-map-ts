import { map, latLng, tileLayer, MapOptions, Map, marker } from 'leaflet';

interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
}

export class CustomMap {
    private leafletMap: Map;

    constructor(element: string) {
        this.leafletMap = map(element, {
            center: [0, 0],
            zoom: 1
        });
    }

    displayMapMarker(mappable: Mappable): void {
        tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.leafletMap);

        marker([mappable.location.lat, mappable.location.lng]).addTo(this.leafletMap);
    }
}
