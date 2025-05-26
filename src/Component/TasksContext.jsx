import {  createContext, useReducer } from "react";

 export const TaskContext = createContext(null);
 export const TaskDispatchContext = createContext (null);


export function TasksProvider({children}){
    const [tasks, dispatch] = useReducer(
        taskReducer, 
        todoLists
    );

 return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );

    function taskReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        task: action.task,
        completed: action.completed
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted' :{
      return tasks.filter(t => t.id !== action.id);
    }
    default:{
      throw Error('unknown action:' + action.type);
    }
  }
}



}

 const todoLists = [

    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Finish homework", completed: true },
    { id: 3, task: "Call the doctor", completed: false }
];

