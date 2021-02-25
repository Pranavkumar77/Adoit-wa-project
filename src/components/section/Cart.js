import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'

import '../css/Cart.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount(){
        this.context.getTotal();
    }
    
    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
        }else{
            return (
                <>
                    <div className="my_cart">My Cart ({cart.length}items)</div>
                    <div className="subtotal"><p>Sub Total</p><h3>RS {total}</h3></div>
                    <div className="delivery_charges"><p>Delivery Charges</p><h3>Free</h3></div>
                    {
                        cart.map(item =>(
                            
                            <div className="cart_item"key={item._id}>
                                
                                <img className="cart_img"src={item.src} alt=""/>
                                <div className="product_description">
                                    <div className="pd1">
                                        <div className="product_discount_cart">{item.discount}</div>
                                        <span>{item.title}</span>
                                        <p>{item.quantity}</p>
                                        
                                    </div>
                                   
            
                                    <div className="pd2">
                                        <div>
                                        <button  onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button  onClick={() => increase(item._id)}> + </button>
                                        </div>
                                        <span>RS {item.price * item.count}</span>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    
                        <Link className="checkout_button" to="/payment"><p>Proceed To Checkout</p><h3>RS {total} </h3></Link>
                        
                   
                </>
                )
            }
        }
}

export default Cart
