import './latestnews.css';
import NewsItem from "../NewsItem/NewsItem";

import firebase from "../../config/firebase";

class LatestNews extends React.Component
{
    state = {
        items: []
    }

    componentDidMount()
    {
        const itemsRef = firebase.database().ref('latestnews');
        itemsRef.on('value', (snapshot) => {
            let items = snapshot.val();
            let newState = [];
            for (let item in items)
            {
                newState.push({
                    id: item,
                    headline: items[item].headline,
                    headline2: items[item].headline2,
                    headerImage: items[item].headerImage,
                    content: items[item].content,
                    description: items[item].description
                })

            }
            this.setState({
                items:newState.reverse()
            })
        })
    }

    render()
    {
        console.log(this.state.items);

        return (
            <div className="latest-news-container">
                <h1>Latest News</h1>
                <div className="latest-news-wrapper">
                    {this.state.items.map( (item) => (
                        <NewsItem key={item.id} id={item.id} image={item.headerImage} headline={item.headline} description={item.description}/>
                    ))}
                    {/*<NewsItem image="https://source.unsplash.com/random/300x200" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>*/}
                    {/*<NewsItem image="https://source.unsplash.com/random/300x201" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>*/}
                    {/*<NewsItem image="https://source.unsplash.com/random/300x202" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>*/}
                    {/*<NewsItem image="https://source.unsplash.com/random/300x203" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>*/}

                    {/*<NewsItem image="https://source.unsplash.com/random/300x204" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>*/}

                    {/*<NewsItem image="https://source.unsplash.com/random/300x205" headline="Headline for the latest news here" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet quam in risus tempor elementum. Donec porttitor, lectus quis placerat placerat, tellus magna convallis turpis, sed sagittis urna elit at sapien."/>*/}

                </div>

            </div>
        )
    }
}

export default LatestNews