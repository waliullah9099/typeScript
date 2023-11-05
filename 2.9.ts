{
    // conditional type
    type a1 = null;
    type b1 = undefined;
    type x = a1 extends null ? true : false; // conditional type
    type y = a1 extends null ? null : b1 extends undefined ? undefined : any;

    type Vechicle = {
        bike: string;
        car: string;
        ship: string;
        plan: string
    }

    type CheckVechicke<T> = T extends keyof Vechicle ? true : false;

    type HasVechicle = CheckVechicke<'plan'>









}