{
    // constraints
    const courseStudent = <
        T extends { id: number, name: string, gmail: string }
    >(student: T) => {
        const course = 'next level 2';
        return {
            ...student,
            course
        }
    }

    const student2 = courseStudent<{
        id: number;
        name: string;
        gmail: string;
        previousStudent: boolean;
    }>({
        id: 111,
        name: 'nai',
        gmail: 'nai@gamil.com',
        previousStudent: true
    })
    const student3 = courseStudent({
        id: 222,
        name: 'nai',
        gmail: 'nai@gamil.com',
        isActice: false
    })
    const student4 = courseStudent({
        id: 333,
        name: 'tai',
        gmail: 'tai@gamil.com',
        emni: 'emni'
    })











}