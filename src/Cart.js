import React, { useState } from 'react';


function Cart(props) {

    const[sum,setsum]=useState(0);
    const[item,setitem]=useState(0);
    var data = props.product;
    var sdata = props.setproduct;
   var totalprice=0;
 
         

//total price and calculation
    if (data == "") {
        console.log("no item")
    }
    else {
        var arr = data.map((el) => {
            return el.price;
        })

        var res = arr.reduce((first, second) => {
            return first + second;

        })

    }
    // delete item
    function remove(id,price) {
        var x = data.findIndex(item =>
            item.name == id
        )
        

        data.splice(x, 1);
        props.setproduct([...data]);
        setitem(item-1)
       var get=item*price;
       setsum(get-sum)
    
    

    }
    // Increment product quantity
    function decproduct(idn){
       
        var x=idn.id;

        if(idn.quant>1)
        {
            sdata((data)=>
        data.map((item)=>
        x==item.id?{...item,quant:idn.quant-1}:item
        ))
        }
    
        if(sum>0){
        setsum(sum-idn.price);
        }
        if(item>0){
        setitem(item-1)
        }
       
 }
 

   function incproduct(idn){
    
    var x=idn.id;

    sdata((data)=>
    data.map((item)=>
    x==item.id?{...item,quant:idn.quant+1}:item
    ))
   setitem(item+1)
     
     setsum(sum+idn.price);
   
   
}







    return (
        <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-8 col-md-8">
                        <h3>Shopping Cart</h3>
                        <hr />
                        <table className="mt-5 table table-hover text-center align-middle ">
                            <tbody>
                                {
                                    props.product.map((ele) => {
                                        totalprice+=ele.price*ele.quant;
                                        return (
                                            <tr >
                                                <td><img src={ele.img} width="100px" height="100px" /></td>
                                                <td className="fs-4">{ele.name}</td>
                                                <td className="fs-4"> 
                                                <i className="fas fa-minus fs-5 minusbtn" onClick={()=>decproduct(ele)}>
                                               </i>
                                                <span className="border px-3 py-1 mx-2">{ele.quant}</span>
                                                <i className="fas fa-plus fs-5 plusbtn" onClick={()=>incproduct(ele)}></i>
                                                 </td>

                                                <td className="fs-4">{ele.price}/-</td>
                                                <td><i onClick={() => remove(ele.name,ele.price)} className="fas fa-trash deletebtn"></i></td>

                                            </tr>

                                        )
                                    })
                                }
                            </tbody>

                        </table>
                        {
                            (data == "") ? "" : <button className="btn btn-primary d-block ms-auto" onClick={() => props.setproduct([])}>Clear All</button>
                        }


                    </div>
                    {
                        (data == "") ? <p>No Items added in the cart</p> : <div className="col-sm-4 col-sm-4 mt-5 ">
                            <div className="w-75 mt-5 ms-5">
                                <h4>Order Summary</h4>
                                <hr />

                                {/* <div>
                                    <span className="me-5">Total Items</span>
                                    <span style={{ marginLeft: "70px" }}>{props.product.length}</span>
                                </div> */}
                                <div>
                                    <span className="me-5">Shipping cost</span>
                                    <span className="ms-5">60/-</span>
                                </div>
                                <div>

                                    <span className="me-5">Total Price</span>


                                    <span className="ms-5">&#8377; {totalprice+60}/-</span>
                                </div>
                                <hr />
                                <button className="btn btn-warning px-5" onClick={() => alert('Order Placed')}>BUY</button>

                            </div>
                        </div>
                    }

                </div>

            </div>
        </>
    )
}

export default Cart;
