import React  from "react";
import App from "./App";
import Item from "./item";

const Log = (props)=>{
    
    return(
        <div className="log">
            
        {props.children.map((c)=>(
            <div className="log-item">
            <Item key={String(Math.random())+c}>{c}</Item>
            </div>
        ))}
        </div>
    )
    
}



export default Log;