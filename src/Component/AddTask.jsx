
import { useContext, useState } from 'react';
import { TaskDispatchContext } from './TasksContext';

let nextId = 5; 

export default function AddTask() {
  const [text, setText] = useState('');
const dispatch = useContext(TaskDispatchContext)

  return (
    <>
      <input
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: 'added',
            id: nextId++,
            task: text,
          });
          setText('');
        }}
      >
        Add
      </button>
    </>
  );
}
