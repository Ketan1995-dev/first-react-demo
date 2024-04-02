

function ProductDetails(props){

    const {description,price} = props;

    return (
        <div className="product-details">
            <h2>{props.title}</h2>
            <p>Description : {description}</p>
            <p>Price : {price}</p>
        </div>
    );

}



export default ProductDetails;