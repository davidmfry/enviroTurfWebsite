import './newsitem.css'
const NewsItem = (props) => (
    <div className="news-item-container news-image">
        <div className="new-item-bottom-bar">
            <h4>{props.headline}</h4>
            <p>{props.description}</p>
        </div>

        <style jsx>
            {
                `
                    .news-image {
                        background: url(${props.image});
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        height: 400px;

                    }

                `
            }
        </style>
    </div>
)

export default NewsItem