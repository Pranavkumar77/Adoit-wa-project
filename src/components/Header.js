import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'



export class Header extends Component {
    static contextType = DataContext;

    


    render() {
        const {cart} = this.context;
        return (
            <header>
      
                <div className="logo">
                    <h1><Link to="/">My Grocery Shop</Link></h1>
                </div>
                <nav>
                   
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <button style={{backgroundColor:"white",
                                            height: "35px",
                                            width:"80px",
                                            border: "1px solid grey",
                                            borderRadius: "20px"}}>Cart</button>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
