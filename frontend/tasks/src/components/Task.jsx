import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import TaskListItem from "./TaskListItem";

export default function Task() {
  const taskData = useSelector((res) => res.tasks);
  const curPage = useSelector((res) => res.tasks.curPage);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("tasks-1", curPage);
  const prev = () => {
    fetch(`http://localhost:8000/tasks?page=${curPage - 1}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "GET_TASKS", payload: res });
      });
  };
  const next = () => {
    fetch(`http://localhost:8000/tasks?page=${curPage + 1}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "GET_TASKS", payload: res });
      });
  };
  //console.log("tasks-1", tasks);
  return (
    <div>
      {taskData.tasks.map((res) => (
        <div key={res.id} to={`/tasks/${res._id}`}>
          <hr />
          <TaskListItem item={res} />
          <hr />
        </div>
      ))}
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
    </div>
  );
}
