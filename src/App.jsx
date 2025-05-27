import AddTask from "./Component/AddTask";
import TaskList from "./Component/TaskList";
import { TasksProvider } from "./Component/TasksContext";
import Parent from "./Toastcompo/parent";
import "./App.css";
export default function App() {
  
  return (
    <>
    
     <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
    <Parent/>
    </>
  )
}





