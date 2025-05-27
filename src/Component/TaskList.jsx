import { useContext, useState } from "react"
import { TaskContext, TaskDispatchContext } from './TasksContext'



export default function TaskList() {
    const tasks = useContext(TaskContext)
    return (
        <ul>

            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task} />

                </li>

            ))}
        </ul>
    )
}
function Task({ task }) {
    const dispatch = useContext(TaskDispatchContext)
    // const [isEditing, setisEditing] = useState(false)
    // const [editedText, setEditedText] = useState(task.task)
    return (
        <label>
            <input
                type="checkbox"
                checked={task.completed}
               
            />{task.task}
            <button>Edit</button>
            <button onClick={() => {      
                dispatch({            
                    type: 'deleted',
                    id: task.id
                })
            }}>Delete</button>
        </label>
    )
}
