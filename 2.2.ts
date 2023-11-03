{
    // interface

    type User1 = {
        name: string;
        age: number
    }

    const user1: User1 = {
        name: 'sei',
        age: 14
    }


    // through interface does not define premitive
    // all premiticve use type alias 
    // in object use interface and type alias

    type rollNumber = number;

    interface User2 {
        name: string;
        age: number
    }
    interface UserWithRoll2 extends User2 {
        role: string;
    }
    const userWithRoll2: UserWithRoll2 = {
        name: 'koi',
        age: 11,
        role: 'dekai'
    }
    const user2 = {
        name: 'nai',
        age: 13
    }

    type UserWithRoll = User1 & { role: number };
    const UserWithRoll1: UserWithRoll = {
        name: 'sei',
        age: 12,
        role: 12
    }

    // possible to extends type in interface
    interface UserChoice extends User1 {
        choice: string;
    }
    const choiceOld: UserChoice = {
        name: 'valoi',
        age: 12,
        choice: 'tai to'
    }

    // js --> object, array --> object, function --> object
    type Roll = number[];
    const rollNumber1: Roll = [12, 21, 11, 12, 13, 10];

    interface Roll2 {
        [index: number]: number
    }
    const rollNumber2: Roll2 = [12, 21, 11, 12, 13, 10];


    type Add = (sum1: number, sum2: number) => number;
    const sum: Add = (sum1, sum2) => sum1 + sum2;

    interface Add2 {
        (a: number, b: number) : number
    }
    const sum2: Add2 = (a, b) => a+ b;










}