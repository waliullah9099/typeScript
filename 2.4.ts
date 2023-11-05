{
    // interface (use for dynamic types)

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            realiseYear: number
        };
        watch: T;
        bike?: X
    }

    type HawueiWatch = {
        brand: string;
        price: number;
        display: string
    }
    const poorDeveloper: Developer<HawueiWatch> = {
        name: 'Sei',
        computer: {
            brand: 'HP',
            model: 'G3',
            realiseYear: 2016
        },
        watch: {
            brand: 'Hawuei',
            price: 1290,
            display: 'LED'
        }
    }
    interface SamsungWatch {
        brand: string;
        price: number;
        heartTrack: boolean;
        sleepTrack: boolean
    }
    interface Bike {
        model: string;
        engineeCapacity: string
    }
    const richDeveloper: Developer<SamsungWatch, Bike> = {
        name: 'tai',
        computer: {
            brand: 'Apple',
            model: '13 Pro',
            realiseYear: 2022
        },
        watch: {
            brand: 'Samsung',
            price: 9000,
            heartTrack: true,
            sleepTrack: false
        },
        bike: {
            model: 'Honda',
            engineeCapacity: '100cc'
        }
    }















}