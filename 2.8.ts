{
    // promise 

    interface Todo {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }

    const getToDo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        console.log(data);
        return data;
    }
    getToDo();

    // simulated 
    type Something = { data: 'something' };
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { data: 'something' };
            if (data) {
                resolve(data);
            } else {
                reject('fail to load data ')
            }
        })
    }

    const loadData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        console.log(data);
        return data;
    }
    loadData();















}