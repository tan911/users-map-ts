export class Leaflet {
    element: string;
    tileLayer: string;
    attr: string;

    constructor() {
        this.element = 'map';
        this.tileLayer = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
        this.attr =
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    }
}
