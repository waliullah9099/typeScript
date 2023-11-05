{
    // utility 

    // pick

    interface About {
        name: string;
        age: number;
        email?: string;
        phone?: string;
        isStudent?: boolean;
    }
    type ageName = Pick<About, 'name' | 'age'>; // get from other use Pick
    type contactEmail = Omit<About, 'name' | 'age'>; // remove from other use Omit
    type PersonRequire = Required<About>;
    // union
    type PersoenParsial = Partial<About>;
    // read only
    type PersonReadOnly = Readonly<About>
    const userPerson: PersonReadOnly = {
        name: 'sei',
        age: 13
    }
    // record 
    type MyObj = {
        a: string;
        b: string
    }
    type MyObj2 = Record<string, string>
    const useObj: MyObj2 = {
        a: 'aa',
        b: 'bb',
        c: 'cc',
        d: 'dd'
    }

    const emthyObj: Record<string, unknown> = {}





















}