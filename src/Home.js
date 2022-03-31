import React from 'react'
import Banner from './Banner';
import Items from './Items';


function Home(props) {

    const data = [
        { id:1, name: 'Tshirt', price: 399, image: "https://m.media-amazon.com/images/I/71CPzIvedhL._UL1500_.jpg ", quant:1},
        { id:2, name: 'Jeans', price: 450, image: "https://m.media-amazon.com/images/I/61ZGXTSfA3L._UX679_.jpg", quant: 1},
        { id:3, name: 'Shoes', price: 299, image: "https://m.media-amazon.com/images/I/71M5-l4H-aL._UY675_.jpg", quant: 1},
        {  id:4,name: 'Jbl', price: 899, image: "https://m.media-amazon.com/images/I/71ByNT34bfL._SL1500_.jpg", quant: 1},
        { id:5, name: 'Laptop', price: 310, image: "https://images-eu.ssl-images-amazon.com/images/I/41Z5NEsKo9L._SY300_SX300_QL70_FMwebp_.jpg", quant: 1 },
        {  id:6,name: 'Furniture', price: 999, image: "https://m.media-amazon.com/images/I/615PzPtcuNS._SX679_.jpg", quant: 1 },
        {  id:7,name: 'Toy', price: 499, image: "https://m.media-amazon.com/images/I/61QQhMAuwUL._SL1268_.jpg", quant: 1 },
        { id:8, name: 'Redmi 9', price: 8999, image: "https://images-eu.ssl-images-amazon.com/images/I/4124hXa9UUL._SX300_SY300_QL70_FMwebp_.jpg ", quant: 1 }
    ];







    return (
        <>

            <Banner />


             <div className="row">
                 <div className="col-md-4">
                 <img className=" mt-5 pt-4 w-100" src="https://i.pinimg.com/originals/e0/d9/ad/e0d9adc710216588dfc4f5e4fd098931.png" width="350px" height="780px" />
                 </div>
                 <div className="col-md-8 mt-4">
                 <h3 className="ms-4">PRODUCTS</h3>
                    <hr />

                    <div className="item">
                        {
                            data.filter((ele)=>{
                                if(props.sname==undefined){
                                    return ele;
                                }
                               
                                else if(ele.name.toLowerCase().includes(props.sname.toLowerCase())){
                                    return ele
                                }
                             
                            }).map((ele) => {
                                return (

                                    <Items  id={ele.id}   setproduct={props.setproduct} product={props.product} name={ele.name} price={ele.price} img={ele.image} quant={ele.quant} />

                                )
                            })
                        }
                    </div>
                 </div>



             </div>
            
            <div className="row mt-2">
                <div className="col bg-dark text-white p-5 text-center">
                    <h3>@Copyright All rights reserved</h3>
                </div>

            </div>
            
                
                   
                
            
              

        </>
    )
}

export default Home;
