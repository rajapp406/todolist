import { createSearchParams } from "react-router-dom";
import http from "../http-common";

class ToDoService {
  getAll(query) {
    const qParams = new URLSearchParams();
    qParams.append( 'title', query['title'] || '' )
    qParams.append( 'status', query?.['status']?.key || '' )
    return http.get(`/todos?${qParams.toString()}`);;
  }

  get(id) {
    return http.get(`/todos/${id}`);
  }

  create(data: any) {
    return http.post("/todos", data);
  }

  update(id: string, data: any) {
    return http.put(`/todos/${id}`, data);
  }

  delete(id: string) {
    return http.delete(`/todos/${id}`);
  }

  deleteAll() {
    return http.delete(`/todos`);
  }
  search(query) {
    console.log(query)
    let theURL

  theURL= new URL(`http://localhost:3002/api/v1/todos/search`);
  theURL.searchParams.set( 'title', query['title'] )
  theURL.searchParams.set( 'status', query['status']?.key )
    return http.get(theURL);
  }
  findByTitle(title: string) {
    return http.get(`/todos?title=${title}`);
  }
}

export default new ToDoService();