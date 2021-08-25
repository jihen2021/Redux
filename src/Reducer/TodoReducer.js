const initialState={
    todos:[
        {id:1,title:"react",completed:true},
        {id:2,title:"css",completed:false},
        {id:3,title:"html",completed:true},

    ],
};

const TodoReducer=(state=initialState,{type,payload})=>{

switch (type) {
    case 'ADD':return{
     ...state,todos:[...state.todos,payload]
    };
        
       case 'DELETE':return{
           ...state,todos:state.todos.filter((todo)=>todo.id!==payload)
       };

       
       case 'EDIT':return{
       ...state,
       todos:state.todos.map(elt=>elt.id===payload ? {...elt,title:elt.title}:elt)

    };

    case 'TOGGLE_COMPLETE':
        return {...state,todos:state.todos.map(elt=>elt.id===payload ? {...elt,completed:!elt.completed}:elt)};
    case 'SEARCH':
      return {...state,todos:state.todos.filter(elt=>elt.title.toLowerCase().match(payload.toLowerCase().trim()))};
    default:
        return state;
}

}
export default TodoReducer