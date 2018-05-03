import './videoitem.css';

const VideoItem = (props) => {
    let videoSrc = `http://www.youtube.com/embed/${props.video}?autoplay=${props.autoplay}&rel=${props.rel}&modestbranding=${props.modest}`
    return (
        <div className="video-item-container">
            <iframe className="player" type="text/html" width='100%' height='300px' src={videoSrc} frameBorder="0"/>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default VideoItem