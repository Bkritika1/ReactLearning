import AddTask from "./Component/AddTask";
import TaskList from "./Component/TaskList";
import { TasksProvider } from "./Component/TasksContext";
import Parent from "./Toastcompo/parent";
// import { TasksProvider } from "./Toastcompo/TaskContext";
import "./App.css";
import { ToastProvider } from "./Toastcompo/ToastContext";
export default function App() {
  
  return (
    <>
    
     {/* <TasksProvider>
      <AddTask />
      <TaskList />

    </TasksProvider> */}
    <ToastProvider>
       <Parent/>

    </ToastProvider>
    </>
  )
}





