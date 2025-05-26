import { useState } from 'react'
import {tasksData} from './data'
import Button from './Button'


const FILTERS = ["all", "incomplete", "in-progress", "completed"];
export default function Card(){
    const [index,setIndex] = useState(0);
    const [filter, setFilter] = useState(0);

    const filteredData = tasksData.filter((task)=>{
       if(FILTERS[filter]=="all"){
            return true;
        }
        return task.status==FILTERS[filter];
    })
    function handleNextClick(){
    setIndex((index) => (index + 1) % filteredData.length);
    }
    function handlePreviousClick(){
        setIndex((index) =>
            (index - 1 + filteredData.length) % filteredData.length
        );
    }
function handleToggleClick(){
        setFilter(
            (f)=>(f+1)%FILTERS.length
        );
        setIndex(0);
    }




return(
<>
    <Button classGiven="nextbutton" label="Next" onSmash={handleNextClick}/>
    <Button classGiven="previousbutton" label="PREVIOUS" onSmash={handlePreviousClick}/>
    <Button classGiven="filterbutton" label={`Toggle: ${FILTERS[filter]}`} onSmash={handleToggleClick}/>


<div>
    <h3>{filteredData[index].text}</h3>
    <p>{filteredData[index].status}</p>
</div>
</>
)
}


 