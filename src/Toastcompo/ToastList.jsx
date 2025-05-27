const Toasts = [
    {id:1, message:'Succssefully Message'},
    {id:2, message: 'Information Messsage'},
    {id:3, message: 'Warning Messsage'},
]

export default function Toast(){
    return(
     <div className="Toasts">
        <button>
            sendMessage
        </button>
       <ul>
        {Toasts.map((toss)=>(
            <li key={toss.id}> {toss.message}</li>
        ))}
       </ul>
     </div>
    )
}