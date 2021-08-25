import { Add, DELETE, EDIT,TOGGLE_COMPLETE } from "./Actions-type";

export const add = (newTodo)=> {
    return {
        type: Add,
        payload:newTodo
    }
};
export const dlete =(id)=> {
    return {
        type: DELETE,
        payload:id,
    }
};
export const edit =({id,title})=> {
    return {
        type:EDIT,
        payload:{id,title},
    }
};
export const complete =(id)=> {
    return {
        type:TOGGLE_COMPLETE ,
        payload:id
      
    }
};

export const search =(title)=> {
    return {
        type:'SEARCH' ,
        payload:title
      
    }
};
