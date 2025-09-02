import React, { useContext }  from "react";
import App from "./App";
import Item from "./item";
import { TextContext } from "./testContext";

const Log = (props)=>{
    const context = useContext(TextContext)
    
    const handleDeleteItem = (indexToRemove)=>{
        
        context.setTimeArr(context.timearr.filter((_,index)=>  index !== indexToRemove))
        
    }
    
    return(
        <div className="log">
        
        {context.timearr.map((c,i)=>(
            <div className="log-item" onClick={() => handleDeleteItem(i)}>
            <Item key={String(Math.random())+c}>{c}</Item>
            </div>
        ))}
        </div>
    )
    
}



export default Log;