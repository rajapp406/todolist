import { CREATE_TODO, DELETE_ALL_TODOS, DELETE_TODO, RETRIEVE_TODOS, RETRIEVE_TODO, UPDATE_TODO, SEARCH_TODOS } from "../actions/types";

const intialState = []
export default function todoReducer(todos = intialState, action){
    let {payload, type} = action;
    switch(type){
        case CREATE_TODO:
            return [...todos, payload];
        case RETRIEVE_TODOS:
            return payload;
        case RETRIEVE_TODO:
            return todos.filter((item: any) => item._id === payload._id);
        case DELETE_TODO:
            return todos.filter((item: any) => item._id !== payload._id);
        case UPDATE_TODO:
            return todos.map((item: any) =>{
                console.log(payload)
                if(item._id === payload._id){
                    return {...item, ...payload};
                }
                return item;

            })
            case SEARCH_TODOS:
                return payload;
        case DELETE_ALL_TODOS:
            return [];
            default:
                return todos;
    }
}