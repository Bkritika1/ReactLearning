import { useContext } from "react";
import { ToastContext, ToastProvider } from "./ToastContext";

export default function Form() {
  const { dispatch } = useContext(ToastContext)
  return (
    <form>
      <label>Name:<input type="text" placeholder="name" /></label>
      <label>Last Name:<input type="text" placeholder="lastname" /></label>
      {/* <button onClick={(e) => {
        e.preventDefault();
        dispatch({
          type: 'success',
          // message:'Succssefully Message' 
        })
      }}>Send Message</button> */}
<button onClick={(e) => {
  e.preventDefault();
  const id = Date.now();
  dispatch({
    type: 'success',
    id,
    message: 'Success',
    duration: 3000,
  });

  setTimeout(() => {
    dispatch({ type: 'remove', id });
  }, 3000);
}}>Send Message</button>


    </form>
  )
}