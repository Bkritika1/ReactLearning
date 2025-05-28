import { useContext } from "react"
import { ToastContext } from "./ToastContext"

export default function Form1(){
    const {dispatch} = useContext(ToastContext)
    return(
<button onClick={(e)=>{
    e.preventDefault();
    dispatch({
        type: 'warning',
         message: 'warning'
    })
}}
>SendWarning</button>

    )
}