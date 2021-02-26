import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Aashirvad Select Whole wheat Sharbati Atta",
                "src": "//cdn.grofers.com/app/images/products/full_screen/pro_7.jpg",
                "discount":"20% off",
                "price": 23,
                "quantity": "5 kg" ,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Chakki Atta",
                "src": "//cdn.grofers.com/app/images/products/full_screen/pro_388639.jpg",
                "discount":"20% off",
                "price": 19,
                "quantity": "5 kg" ,
                "count": 1
            },
            {
                "_id": "3",
                "title": "Grofers Mothers Choice  Soyabin Oil",
                "src": "https://cdn.grofers.com/app/images/products/normal/pro_425557.jpg?ts=1593085402",
                "discount":"20% off",
                "price": 50,
                "quantity": "5 kg" ,
                "count": 1
            },
            {
                "_id": "4",
                "title": "Parachute 100% Pure Coconut Oil",
                "src": "//cdn.grofers.com/app/images/products/normal/pro_392004.jpg?ts=1610701653",
                "discount":"20% off",
                "price": 35,
                "quantity": "5 kg" ,
                "count": 1
            },
            {
                "_id": "5",
                "title": "MDH Mutton Meat Masala",
                "src": "//cdn.grofers.com/app/images/products/full_screen/pro_18912.jpg",
                "discount":"20% off",
                "price": 73,
                "quantity": "100 g" ,
                "count": 1
            },
            {
                "_id": "6",
                "title": "Rajdhani Besan",
                "src": "//cdn.grofers.com/app/images/products/full_screen/pro_23653.jpg",
                "discount":"20% off",
                "price": 56,
                "quantity": "5 kg" ,
                "count": 1
            },
            {
                "_id": "7",
                "title": "Tata Salt",
                "src": "//cdn.grofers.com/app/images/products/full_screen/pro_105.jpg",
                "discount":"20% off",
                "price": 17,
                "quantity": "5 kg" ,
                "count": 1
            },
            {
                "_id": "8",
                "title": "Kissan Tomotto Ketchup",
                "src": "https://5.imimg.com/data5/OB/FL/MY-13920102/kissan-fresh-tomato-ketchup-1kg-bottle-500x500.jpg",
                "discount":"20% off",
                "price": 120,
                "quantity": "1 kg" ,
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


