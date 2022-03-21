import { combineReducers } from "redux";
import { tasksReducer } from "./tasks/task.reducer";


export default combineReducers({
  tasks: tasksReducer,
});