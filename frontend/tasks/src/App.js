import logo from './logo.svg';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import SubTask from './components/SubTask';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './App.css';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch("http://localhost:8000/tasks")
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: "GET_TASKS", payload: res });
      });
    
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskForm />} />
        <Route path="tasks" element={<Task />} />
        <Route path="tasks/:id" element={<SubTask />} />
      </Routes>
    </div>
  );
}

export default App;
