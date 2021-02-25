import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {DataContext} from '../Context'

export class Payment extends Component {
    static contextType = DataContext;
   
    render() {
        const {total} = this.context;
        return (
            <div>
               <h2 style={{marginBottom:"30px"}}>Proceed To Payment</h2> 
               <StripeCheckout
                 stripeKey="pk_test_51IOnoACFBYgiRIqNwxPUStvWBC0KGPiL3TAiKedJYY49DBZt1a7edgo0tKr1LUDrOBAd0E1eq1fnxbO0nCpQBhxY004GVqSj1s"
                 name="Total Payment"
                 amount={total*100}
                 token={()=> alert("Your Payment is Successful!")}
                currency="INR"
               />
            </div>
        )
    }
}

export default Payment
