
import {tasksData} from './data'
import Button from './Button'
import { useState } from 'react'

export default function Card(){

    const [index,setIndex] = useState[0];
    function handleClick(){
        setIndex(index +1)
    }

return(
<>
    <Button classGiven="nextbutton" label="Next" onSmash={handleClick}/>
<div>
    <h3>{tasksData[index].text}</h3>
    <p>{tasksData[index].status}</p>
</div>
</>
)
}