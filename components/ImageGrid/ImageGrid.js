import _ from 'lodash'
import "./imagegrid.css";

const ImageGrid = (props) => {
    return (
        <div className="image-grid">
            {
                _.map(props.images, (image, key) => (
                    <div key={key}className="image-grid-box">
                        <img src={image} alt=""/>
                    </div>
                ))}
        </div>
    )
}

export default ImageGrid