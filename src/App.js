import React,{useState} from 'react';
import { Switch,Route} from "react-router-dom";
import './App.css';
import Cart from './Cart';
import Home from './Home';
import Navbar from './Navbar';
import Notfound from './Notfound';


function App() {
  const [product,setproduct]=useState([]);
  const [sname,setsname] = useState('');
     function search(name){
    return setsname(name);
  }
 return (
          
    <>
     <Navbar search={search} product={product} />
     <Switch>
       
            <Route exact path="/" >
              <Home sname={sname} product={product} setproduct={setproduct}/>
                
            </Route>
           
            <Route exact path="/cart" >
              <Cart product={product} setproduct={setproduct}/>
                
            </Route>
            <Route exact  path="" component={Notfound}/> 
           
        </Switch>
            
     
    </>
    
  );
}

export default App;
