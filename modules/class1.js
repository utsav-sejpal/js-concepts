import MyDetails, {getMessage1} from "./class.js"; // default import
import { default as defaultCarDetails, CarDetails, CarName } from "./functions.js"; // named import

// console.log('class1.js');
let details = new MyDetails('Test User 1');
// console.log('Imported Class' + details.getMessage());

// console.log(CarDetails('BMW'));
// console.log(CarDetails(CarName));
// console.log(defaultCarDetails());
// console.log(getMessage1('Default User'));
