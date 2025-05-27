import { createContext, useReducer } from "react";
import { TasksProvider } from "../Component/TasksContext";

 const TaskContext = createContext();
 
 

 export function TasksProvider({children}){


    cosnt[tasks, dispatch] = useReducer(
        toastReducer,
        initialToast
    );
    return(
        <TaskContext.Provider value={{toast, dispatch}}>
       {children}
        </TaskContext.Provider>
    )
 }