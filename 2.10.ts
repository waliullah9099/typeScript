{
    // mapped 
    const numbers: number[] = [1, 12, 13, 11, 14];
    const convertString: string[] = numbers.map(number => number.toString());
    console.log(typeof numbers, numbers);
    console.log(typeof convertString, convertString);


    type AreaNumber = {
        height: number;
        weidth: number
    }
    // type AreaString = {
    //     height: string;
    //     weidth: string
    // }

    type Height = AreaNumber['height']; // lookUp type

    type AreaString<T> = {
        // [index in 'height' | 'weidth']: string; // herdCoded
        [index in keyof T]: T[index]; // dynamic
    }

    const area1 : AreaString<{height: string, width: boolean}> = {
        height: '100',
        width: false
    }
















}