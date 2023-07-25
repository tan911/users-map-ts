import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './Map';
import { Leaflet } from './Leaflet';

const leaflet = new Leaflet();
const user = new User();
const company = new Company();
const customMap = new CustomMap(leaflet);

customMap.displayMapMarker(user);
customMap.displayMapMarker(company);
