import "./imagegrid.css";

const ImageGrid = (props) => {
    return (
        <div className="image-grid">
            {
                props.images.map( (image) => (
                    <div className="image-grid-box">
                        <img src={image} alt=""/>
                    </div>
                ))}
        </div>
    )
}

export default ImageGrid