import { useState } from 'react'
import {tasksData} from './data'
import Button from './Button'

export default function Card(){


    const filteredData = tasksData.filter((data)=>{
    filteredData = 
    })
    const [index,setIndex] = useState(0);
    const [fiter, setFilter] = useState(0);

    function handleNextClick(){
    setIndex((index) => (index + 1) % filteredData.length);
    }
    function handlePreviousClick(){
        setIndex((index) =>
            (index - 1 + filteredData.length) % filteredData.length
        );
    }

return(
<>
    <Button classGiven="nextbutton" label="Next" onSmash={handleNextClick}/>
    <Button classGiven="previousbutton" label="PREVIOUS" onSmash={handlePreviousClick}/>
    <Button classGiven="filterbutton" label="FILTER ALL()" onSmash={handlePreviousClick}/>


<div>
    <h3>{filteredData[index].text}</h3>
    <p>{filteredData[index].status}</p>
</div>
</>
)
}