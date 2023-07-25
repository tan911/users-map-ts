import { faker } from '@faker-js/faker';

export class Company {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        };
    }

    details(): string {
        return `
        Name: ${this.name}. <br>
        Phrase: ${this.catchPhrase}. <br>
        Location: 
        [${this.location.lat}, ${this.location.lng}]
        `;
    }
}
