import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
     var x;
    
    function searchitem(el){
       x=el;
       
       props.search(el);
       
    }


    return (

        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top ">
                            <div className="container-fluid ">
                                <a className="navbar-brand  fw-bold text-white fst-italic" href="#">Flipmart </a>
                                <div className="input-group w-50 mt-3  mb-3">
                                    <input type="search"  onChange={(e)=>searchitem(e.target.value)} className="form-control " placeholder="Search here..." aria-label="Username" aria-describedby="basic-addon1" />
                                    {/* <span className="input-group-text" id="basic-addon1"><i class="fas fa-search"></i></span> */}
                                </div>

                                <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarNav">

                                    <div className="ms-auto navbar-nav " >
                                        <Link to='/' className="text-white d-block mx-auto fs-5  nav-link">Homes</Link>
                            

                                        <Link to="/cart" className="text-white d-block mx-auto fs-4"> <button className="btn btn-warning ms-3 me-4 position-relative"><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{props.product.length}</span><i className="fas fa-shopping-cart me-2"></i>Cart</button></Link>

                                    </div>


                                </div>

                            </div>
                        </nav>
        </>
    )
}

export default Navbar;