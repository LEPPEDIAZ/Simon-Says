import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../action/index'

class MenuItems extends Component {

    render() {

        const {item} = this.props;

        return (
      
                        <div>
                            <div >
                                <label>{ item.fooditem }</label>
                            </div>
                            <div>
                                <label> Q{ item.price } unidades 1 </label>
                            </div>
                            <div >
                                <input type="button" value="Add" 
                                       onClick={()=> {
                                           this.props.addToCart(item);
                                       }}/>
                            </div>
                        </div>
    
        );
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        addToCart : (item) => dispatch(addToCart(item))
    };
}

export default connect(null,mapDispatchToProps)(MenuItems);