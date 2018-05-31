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

                    @media screen and (min-width:0) and (min-resolution: .001dpcm)
                    {
                        .product-card-container strong {
                        color: ${props.ieColor};
                    }
                    }

                `
            }
        </style>
    </div>
)

export default ProductCard