import React, {Component} from 'react';
import _ from 'lodash';

import './products.css';
import ProductCard from "../ProductCard/ProductCard";
import firebase from "../../config/firebase";



class Products extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            products: {},
            productsArray: []

        }
    }

    componentDidMount()
    {
        firebase.database().ref("products").on('value', (snapshot) => {
            this.setState({products: snapshot.val(), productsArray: _.toArray(snapshot.val())})

        });


    }

    renderProduct(index)
    {
        if(this.state.productsArray[index])
        {
            return (
                <ProductCard
                    className={`product${index + 1}`}
                    color={this.state.productsArray[index].titleColor}
                    ieColor={this.state.productsArray[index].titleColor}
                    title={this.state.productsArray[index].title}
                    description={this.state.productsArray[index].description}/>
            )
        }





    }

    renderProducts()
    {

        let newArray = this.state.productsArray.slice(2);

        return _.map(newArray, (product, index) => {
            return (
                <ProductCard key={index} className={`product${index + 1}`}  color={product.titleColor} ieColor={product.titleColor} title={product.title} description={product.description}/>
            )
        })


    }


    render() {


        return (
            <div className="product-container">
                <h1>Products</h1>
                <div className="product-wrapper ">
                    <div className="product-grid">
                        {this.state.productsArray ? this.renderProduct(0) : null}


                        <div className="product-image pi2">
                            <img src="/static/img/EnviroTurfSF.png" alt="EnviroTurm SF Product"/>
                        </div>

                    </div>

                    <div className="product-grid">
                        {this.state.productsArray ? this.renderProduct(1) : null}

                        <div className="product-image pi1">
                            <img src="/static/img/EnviroTurfM.png" alt="EnviroTurm M Product"/>
                        </div>
                    </div>

                    <div className="product-grid">
                        {this.state.products ? this.renderProducts() : null}

                    </div>

                </div>

            </div>
        );
    }
}

export default Products