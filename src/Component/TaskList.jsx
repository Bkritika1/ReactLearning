
const todoLists = [

    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Finish homework", completed: true },
    { id: 3, task: "Call the doctor", completed: false }
];


export default function TaskList() {
    return (
        <ul>

            {todoLists.map((todo) => (
                <li key={todo.id}>
                    <Task task={todo.task} completed={todo.completed} />
                
                </li>

            ))}
        </ul>
    )
}
function Task({ task, completed }) {
    return (
        <label>
            <input type="checkbox"
                checked={completed}
            /> {task}
            <button>Edit</button>
            <button>Delete</button>
        </label>
    )
}
