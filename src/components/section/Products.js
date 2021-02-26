import React, { Component } from 'react'
import { BsChevronRight } from "react-icons/bs";
import {DataContext} from '../Context'
import '../css/Products.css'

export class Products extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div id="product">
               {
                   products.map(product =>(
                       <>
                    
                       <div className="card" key={product._id}>
                       <div className="product_discount">{product.discount}</div>
                         <div className="card_top">
                         
                            <img className="product_image" src={product.src} alt=""/>
                           
                            <span className="product_title" >{product.title}</span>
                           
                         </div>
                            <p>{product.quantity}</p>
                          
                          <div className="card_bottom">
                          <span>RS {product.price}</span>
                          <button className="button" onClick={()=> addCart(product._id)}>Add to cart</button>
                          </div>
                              
                          <button className="club_price">Club Price: RS 240<BsChevronRight/></button> 
                       </div>
                       </>
                   ))
               }
            </div>
        )
    }
}

export default Products
