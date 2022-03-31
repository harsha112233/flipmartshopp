import React, { useState } from "react";
import './App.css'
function Items(props){ 
    const[disable,setdisable]=useState(false);
  
    function adddata(el){

        // alert("Item Added In The Cart")
       
        var productdata=props.product;
        props.setproduct([...productdata,el]);
        setdisable(true);
       
        

    }
    return(
        <>
      
            <div className="cart p-2 mb-4">
                <img src={props.img} className="mx-auto"  width="180px" height="250px"/>
                <div className="text-center">
                    <span>{props.name}</span><br/>
                    <b>&#8377;{props.price}/-</b>
              
                </div>
                <button disabled={disable}  onClick={()=>adddata(props)} className="btn btn-info mb-2">Add to Cart</button>
            </div>
    

        </>
    )
}
export default Items;