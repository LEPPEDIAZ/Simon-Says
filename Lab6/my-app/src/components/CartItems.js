import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from "../action/index";

class CartItems extends Component {

    render(){
        console.log(this.props);

        return (
            <div>
                {this.getdata()}
            </div>
        );
    }

     getdata(){
        console.log(this.props.stateArray);
        return this.props.stateArray.cart.map((item) => {
            return (
                            <div >
                                <div
                                    >
                                    <label>{item.fooditem}</label>
                                </div>
                                <div
                                    >
                                    <label>Precio: Q{item.price} <br/> Cantidad: {item.qty}</label>
                                </div>
                                <div
                                    >
                                    <input type="button" value="Remove"
                                          
                                           onClick={() => {
                                               this.props.removeFromCart(item);
                                           }}
                                    />
                                </div>
                            </div>
            );
        })
    }
}

function mapStateToProps(stateArray) {

    return {stateArray};
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart : (item) => dispatch(removeFromCart(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
