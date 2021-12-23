import React from 'react'
import "./Header.css";

function Header(){
    return(
        <div className="header" >
            
             <img className="img" src="https://tse3.mm.bing.net/th?id=OIP.C-t16BtoC9-A7paDfMkA_wHaEK&pid=Api&P=0&w=307&h=173" width="50px" height="50px"/> 
            <div>
        <input  className="input" type="text" placeholder="search for products,brands and more "/>
        <button className="login">Login</button>
        <br/>
        
        </div>
        </div>
    )
}
export default Header;