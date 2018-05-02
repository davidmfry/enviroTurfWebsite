const ProductCard = (props) => (
    <div>
        <img src={props.image} alt=""/>
        <p><strong>{props.title}</strong>{props.description}</p>
    </div>
)

export default ProductCard