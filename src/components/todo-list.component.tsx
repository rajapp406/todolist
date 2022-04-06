import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DenseTable from "../core/table.component";
import {
  deleteTodo,
  retrieveToDos,
  searchTodos,
  updateToDo,
} from "../actions/todo.action";

import {
  Checked,
  ActionItem,
  TemplateLink,
  CheckboxUI,
} from "../core/util/format.util";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { TodoModel } from "../core/models/todo.model";
function useAction(dispacth) {
  const [selected, setSelected] = React.useState({});
  const navigate = useNavigate();
  const onSelect = (isSeleted, id) =>
    setSelected({ ...selected, [id]: isSeleted });

  const onDelete = (id) => dispacth(deleteTodo(id));

  const onComplete = (checked, id) => {
    dispacth(updateToDo(id, { status: checked ? "completed" : "pending" }));
  };
  const updateRecord = (id) => navigate(`/update/${id}`);
  const deleteSelected = () => {
    Object.keys(selected).filter((v) => selected[v]);
  };
  return {
    onDelete,
    deleteSelected,
    updateRecord,
    onComplete,
    onSelect,
    selected,
  };
}
export class HeaderRow {
  key: string;
  label: string;
  width: string;
  template: (val: any) => JSX.Element;
  constructor(
    key: string,
    label: string,
    width: string,
    template: (val: any) => JSX.Element
  ) {
    this.key = key;
    this.label = label;
    this.width = width;
    this.template = template;
  }
}
function TodoList(props = {} as any) {
  const { query } = props;
  const dispacth = useDispatch();
  const {
    onDelete,
    deleteSelected,
    updateRecord,
    onComplete,
    onSelect,
    selected,
  } = useAction(dispacth);
  console.log(onSelect, "onSelect");
  console.log(query);
  const checkBoxTemp = useCallback(
    (val) => (
      <CheckboxUI
        onChange={(checked) => onSelect(checked, val.id)}
        defaultValue={!!selected[val.id]}
      />
    ),
    [selected]
  );
  const titleTemp = useCallback((val) => <TemplateLink val={val} />, []);
  const actionTemp = (val) => (
    <ActionItem
      onComplete={onComplete}
      onUpdate={updateRecord}
      onDelete={(id) => onDelete(id)}
      val={val}
    />
  );
  const headers = [
    new HeaderRow("multi", "", "5%", checkBoxTemp),
    new HeaderRow("checked", "", "5%", Checked),
    new HeaderRow("title", "Title", "60%", titleTemp),
    new HeaderRow("action", "Action", "35%", actionTemp),
  ];

  const config = {
    rowsPerPage: 6,
    pageOptions: [10, 20, 100],
  };

  const list = useSelector((state: any) => state.todoReducer) || [];

  useEffect(() => {
    dispacth(retrieveToDos(query || {}));
  }, [query]);

  return (
    <div style={{width: '30%'}}>
      {list.length ? (
        <div>
          <div className="flex">
            <div>
              <Button variant="contained" onClick={deleteSelected}>
                Delete
              </Button>
              <Button variant="contained">Select All</Button>
            </div>
          </div>
          <DenseTable
            rows={new TodoModel(list)}
            headers={headers}
            config={config}
          />
        </div>
      ) : (
        "No Records Found"
      )}
    </div>
  );
}

export default TodoList;
