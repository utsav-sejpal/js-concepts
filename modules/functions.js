
let CarDetails = (name = 'Maruti') => {
    return 'Name of this car is ' + name;
}

let defaultCarDetails = () => {
    return 'Default car details';
}

let CarName = 'Audi';

export {
    defaultCarDetails as default,
    CarDetails,
    CarName
};