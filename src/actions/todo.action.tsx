import {
  CREATE_TODO,
  RETRIEVE_TODOS,
  UPDATE_TODO,
  RETRIEVE_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS,
  SEARCH_TODOS,
} from "./types";
import todoService from "../services/todo.service";
const createToDo = (title, description) => async (dispach) => {
  try {
    const res = await todoService.create({ title, description, status: 'pending' });
    dispach({
      type: CREATE_TODO,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const updateToDo = (id, payload) => async (dispach) => {
  try {
    const res = await todoService.update(id, payload);
    dispach({
      type: UPDATE_TODO,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

 const getTodoById = (id) => async (dispach) => {
    try {
      const res = await todoService.get(id);
      console.log(res.data)
      dispach({
        type: RETRIEVE_TODO,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

const retrieveToDos = (query: any = {}) => async (dispach) => {
  try {
    const res = await todoService.getAll(query);
    dispach({
      type: RETRIEVE_TODOS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
const searchTodos = (query) => async (dispach) => {
  try {
    const res = await todoService.search(query);
    dispach({
      type: SEARCH_TODOS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
const deleteTodo = (id) => async (dispach) => {
  try {
    const res = await todoService.delete(id);
    dispach({
      type: DELETE_TODO,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export { createToDo, retrieveToDos, updateToDo, getTodoById, deleteTodo, searchTodos };
