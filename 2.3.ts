{

    // generec type
    type GenerecArray<T> = Array<T> // dynamic set type


    const number: number[] = [12, 11, 13];
    const number2: Array<number> = [12, 11, 13];

    const mentors: string[] = ['sei', 'nai', 'valoi'];
    const mentors2: GenerecArray<string> = ['sei', 'nai', 'valoi'];

    const booleanArray: boolean[] = [true, false, true];
    const booleanArray2: GenerecArray<boolean> = [true, false, true];

    const user: GenerecArray<{ name: string, age: number }> = [
        {
            name: 'sei',
            age: 12
        },
        {
            name: 'tai',
            age: 13
        }
    ]

    // when object will big, custom object create
    interface User {
        name: string;
        age: number
    }
    const user2: GenerecArray<User> = [
        {
            name: 'sei',
            age: 12
        },
        {
            name: 'tai',
            age: 13
        }
    ]


    // generic tuple
    type GenericTuple<X, Y> = [X, Y];
    const tara: GenericTuple<string, string> = ['sei', 'tai'];
    const classes: GenericTuple<number, number> = [4, 8];
    const aboutTara: GenericTuple<number, { name: string, age: number }> = [123, { name: 'sei', age: 12 }];


















}