import './productcard.css';
const ProductCard = (props) => (
    <div className="product-card-container">
        {/*<img src={props.image} alt=""/>*/}
        <h1><strong>{props.title}</strong></h1>
        <p>{props.description}</p>

        <style jsx>
            {
                `
                    .product-card-container strong {
                        color: var(--${props.color});
                    }

                `
            }
        </style>
    </div>
)

export default ProductCard