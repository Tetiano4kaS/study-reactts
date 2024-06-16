const baseURL='https://jsonplaceholder.typicode.com';

const urls={
    users:{
        base:'/users',
        byId:(id:number):string=>`/${id}`
    }
};

export {baseURL, urls}