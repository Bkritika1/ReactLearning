import { useContext } from "react"
import { TaskContext, TaskDispatchContext } from './TasksContext'

export default function TaskList() {
    const tasks = useContext(TaskContext)
    return (
        <ul>

            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task}  />

                </li>

            ))}
        </ul>
    )
}
function Task({ task }) {
    const dispatch = useContext(TaskDispatchContext)
    return (
        <label>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            done: e.target.checked
                        }
                    });
                }}
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
