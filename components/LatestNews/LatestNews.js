import './latestnews.css';
import NewsItem from "../NewsItem/NewsItem";

const LatestNews = (props) => (
    <div className="latest-news-container">
        <h1>Latest News</h1>
        <div className="latest-news-wrapper">
            <NewsItem image="https://source.unsplash.com/random/300x200" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>
            <NewsItem image="https://source.unsplash.com/random/300x201" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>
            <NewsItem image="https://source.unsplash.com/random/300x202" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>
            <NewsItem image="https://source.unsplash.com/random/300x203" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>

            <NewsItem image="https://source.unsplash.com/random/300x204" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>

            <NewsItem image="https://source.unsplash.com/random/300x205" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>

    </div>

    </div>
)

export default LatestNews