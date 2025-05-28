import { createContext, useReducer } from "react";

  export const ToastContext = createContext(null);
 
 
const initialToast=[]

 export function ToastProvider({children }){

    const[Toast, dispatch] = useReducer(
        toastReducer,
        initialToast
    );
    return(
        <ToastContext.Provider value={{Toast, dispatch}}> {/* here context used  */}
       {children}
        </ToastContext.Provider>
    )
 }


 function toastReducer(Toasts, action){
  switch (action.type){
    // case'success':{
    //     return[...Toasts,{
    //         id: new Date(),
    //         message: 'success',
    //         duration: 3000

    //     } ];
    // }
    case 'success': {
  return [
    ...Toasts,
    {
      id: action.id,
      message: action.message || 'Success',
      duration: action.duration || 3000,
    },
  ];
}
    case'warning':{
        return[...Toasts,{
          id: new Date(),
           message: 'warning'
        }]
    }
     case "remove":
      return Toasts.filter((toast) => toast.id !== action.id);
     default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
 }

 

//  const  initialToast = [
//     {id:1,  type: 'success' , message:'Succssefully Message'},
//     {id:2, type:'informatuon', message: 'Information Messsage'},
//     {id:3, type:'warning',  message: 'Warning Messsage'},
// ]
