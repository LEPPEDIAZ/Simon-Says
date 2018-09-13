import React, {Component} from 'react';
import MenuItems from "./MenuItems";
import CartItems from "./CartItems";
import {connect} from 'react-redux';
import ManagerView from "./ManagerView";


class HomePage extends Component {

    render() {
        return (
            <div >
                <h1>Bienvenidos</h1>
                        
                                                        <div >
                                                                <h2 >Menu</h2>
                                                        </div>
                                                        <div >
                                                            <div >
                                                                {console.log(this.props.stateArray.inventory)}
                                                                {
                                                                    this.props.stateArray.inventory.map((item,index) => {
                                                                        return(
                                                                            <MenuItems
                                                                                key={index}
                                                                                item={item}
                                                                            />
                                                                        );
                                                                    })
                                                                }
                                                            </div>
                                                            <ManagerView />
                                                        </div>
                                
                                                    <div >
                                                        <div >
                                                            <h2 >Bolsa</h2>
                                                        </div>
                                                        <div >
                                                            <div>

                                                                {

                                                                }

                                                                <CartItems />

                                                                {

                                                                }

                                                                {

                                                                }
                                                                {

                                                                }

                                                            </div>
                                                        </div>
                                                    </div>
                                              
                                   
        
                                <div >
                                    <h2 >Total: Q{this.props.stateArray.total.totalvalue}</h2>
                                </div>
                            </div>
                        
                 
               
        );
    }
}

function mapStateToProps(stateArray) {
    console.log(stateArray);

    return {stateArray};
}


export default connect(mapStateToProps, null)(HomePage);