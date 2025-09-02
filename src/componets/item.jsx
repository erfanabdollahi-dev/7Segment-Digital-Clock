import React, { useContext } from "react";
import { TextContext } from "./testContext";


const Item = (props)=>{
    const context = useContext(TextContext)



    return (
        <div className="item"  >
            {props.children}
          
        </div>
    )
}


export default Item;