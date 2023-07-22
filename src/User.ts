import { faker } from '@faker-js/faker';

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(name: string, location: { lat: number; lng: number }) {
    this.name = name;
    this.location = location;
  }
}
