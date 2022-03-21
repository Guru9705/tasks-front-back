//import ADD_TODOS from "./actionTypes";

import { initialState } from "./task.constant";

export const tasksReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "GET_TASKS": {
            console.log(payload)
            return {
                ...state,
                tasks: [...payload.tasks],
                curPage:payload.curPage
            }
          }
    case "ADD_TASKS": {
      var obj = {
        ...state,
        tasks: [...state.tasks, payload]
      };
      console.log("add",obj);
      return obj;
    }
    case "EDIT_TODOS": {
      return {
        data: state.data.map((s) => {
          if (s.id === payload.id) {
            s.name = payload.name;
            return s;
          }
          return s;
        })
      };
    }
    case "DELETE_TASKS": {
      return { tasks: state.tasks.filter((s) => s.id !== payload.id) };
    }

    default: {
      return state;
    }
  }
};
