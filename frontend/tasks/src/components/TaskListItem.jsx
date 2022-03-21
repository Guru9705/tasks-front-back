import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function TaskListItem({ item }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const deleteHandler = () => {
    console.log("delete");
    fetch(`http://localhost:8000/tasks/${item._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) =>
        fetch("http://localhost:8000/tasks")
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            dispatch({ type: "GET_TASKS", payload: res });
          })
      );
  };
  console.log(item.status);
  return (
    <div>
      <Link to={`${location.pathname}/${item._id}`}>
        {" "}
        <div>Task {item.title}</div>
      </Link>
      <div>{item.status ? "true" : "false"}</div>
      {item.subtasks.map((res) => {
        return (
          <div>
            {" "}
            Subtask
            <div>{res.title}</div>
            <div>{res.status}</div>
          </div>
        );
      })}
      <button>Edit</button>
      <button onClick={() => deleteHandler()}>Delete</button>
    </div>
  );
}
