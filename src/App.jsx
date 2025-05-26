import AddTask from "./Component/AddTask";
import TaskList from "./Component/TaskList";
import { TasksProvider } from "./Component/TasksContext";
// import { todoLists } from "./Component/TasksContext";
export default function App() {
  
  return (
    <>
    
     <TasksProvider>
      <AddTask />
      <TaskList />
    </TasksProvider>
    </>
  )
}





