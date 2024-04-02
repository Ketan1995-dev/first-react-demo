import React from "react";
import ProductDetails from "./ProductDetails";
import PropTypes from 'prop-types';

class Product extends React.Component{

    render(){
        return (
            <div className="product">
                <img src={this.props.img} alt={this.props.altText} />
                <ProductDetails 
                 title={this.props.children} 
                 description={this.props.description} 
                 price={this.props.price}
                // {...this.props}
                />  
            </div>
        )
    }

}

Product.defaultProps = {
    altText:'Product',
    title:'T-Shirt'
}

Product.propTypes={
    price:PropTypes.number
}

export default Product;