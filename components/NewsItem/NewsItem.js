const NewsItem = (props) => (
    <div className="news-item-container">
        <img src={props.image} alt=""/>
        <div className="new-item-bottom-bar">
            <h4>{props.headline}</h4>
            <p>{props.description}</p>
        </div>
    </div>
)

export default NewsItem