{
    //
    // type assertion --> tumi amar thake base bujo 
    // jokon ami base bujbo typeScript thake

    let anything: any;
    anything = 'Next Level Web Development Course';
    anything = true;
    anything = 23;
    (anything as number)

    const kgToGm = (value: string | number): string | number | undefined => {
        if (value === 'string') {
            const convertKg = parseFloat(value) * 1000;
            return `The convert value is: ${convertKg}`;
        } else if (typeof value === 'number') {
            return ( value * 1000);
        }
    }

    const result = kgToGm(1000) as number;
    const result2 = kgToGm('20 kg') as string;


    type CustomErr = {
        message: string
    }
    try {

    } catch (error) {
        console.log((error as CustomErr).message);
    }














    //
}
