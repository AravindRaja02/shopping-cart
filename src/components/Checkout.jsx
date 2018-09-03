import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Cart from '../containers/Cart';

class Checkout extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                    <div className="col-md-4">
                        <Cart />
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;