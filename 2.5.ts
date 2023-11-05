{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    };
    const countries = createArray('Bangladesh');

    const arrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    };
    const tarai = arrayWithGeneric<string>('Bangladesh');

    type User = {
        name: 'Shubho', age: 12, isStudent: true
    }
    const aboutTara = arrayWithGeneric<User>(
        {
            name: 'Shubho', age: 12, isStudent: true
        })

    // tuple
    const createArrayTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
        return [param1, param2]
    }
    const tarai2 = createArrayTuple('sei', 'tai');
    type User2 = {
        name: string, age: number
    }
    interface User3 {
        name: string, age: number
    }
    const tarai3 = createArrayTuple<User2, User3>({ name: 'sei', age: 12 }, { name: 'tai', age: 13 });


    // practice 2
    const createIdea = (param: string): string[] => {
        return [param]
    }
    const newIdea = createIdea('take a risk')
    const createIdeaWithGeneric = <T>(param: T): T[] => {
        return [param]
    }
    const newIdeaWithGeneric = createIdeaWithGeneric<string>('keep learning')

    // practice 3
    const addCourse = <X, Y, Z>(param1: X, param2: Y, param3: Z): [X, Y, Z] => {
        return [param1, param2, param3]
    }
    interface CourseType {
        name: 'Level 2', // literal
        instructor: string;
        price?: number;
    }
    const newCourse = addCourse<string, boolean, CourseType>('Programming Hero', true, {
        name: 'Level 2', instructor: 'Parsian'
    })

    // practice 4
    const courseStudent = <T>(student: T) => {
        const course = 'next level 2';
        return {
            ...student,
            course
        }
    }

    const student2 = courseStudent({
        name: 'nai', gmail: 'nai@gamil.com', previousStudent: true
    })
    const student3 = courseStudent({
        name: 'nai', gmail: 'nai@gamil.com', isActice: false
    })






















}