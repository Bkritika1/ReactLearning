import Form from "./Form";
import Form1 from "./Form1";
import Toast from "./ToastList";
export default function Parent(){
    return(
        <div className="parent">
             <h2>Option-A</h2>
        {/* <Toast/> */}
        {/* <Toast/> */}

     <Form/>
     <Toast/>
     <Form1/>
        </div>
    )
}