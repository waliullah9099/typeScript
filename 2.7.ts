{
    // generic constraints with keyof operator
    type Vehicales = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = 'bike' | 'car' | 'ship';  // maually
    type Owner2 = keyof Vehicales;

    const user: Owner = 'car';


    const getObjectValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }
    const user2 = {
        name: 'sei',
        age: 12,
        adress: 'Tala'
    }
    const car = {
        model: 'BMW',
        year: 120
    }

    const result = getObjectValue(user2, 'name')
    const result2 = getObjectValue(car, 'model')









}