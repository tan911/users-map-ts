import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './Map';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.displayMapMarker(user);
customMap.displayMapMarker(company);
