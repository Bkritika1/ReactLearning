import Toast from "./ToastList";

export default function Form(){
    return(
        <form>
            <label>Name:<input type="text" placeholder="name"/></label>
            <label>Last Name:<input type="text" placeholder="lastname"/></label>
            <button>Send Message</button>
        </form>
    )
}