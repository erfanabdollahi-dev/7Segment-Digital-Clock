import React from "react";


const Item = (props)=>{
    return (
        <div className="item">
            {props.children}
          
        </div>
    )
}


export default Item;