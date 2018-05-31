import Link from 'next/link';

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

    renderLatestNewsItems = () => {


        return (
            this.state.items.map( (item) => (
                <Link as={`/latestnews/${item.id}`} href={`/latestnews/latestnews?id=${item.id}`}><a><NewsItem key={item.id} id={item.id} image={item.headerImage} headline={item.headline} description={item.description}/></a></Link>
            ))
        )
    }

    render()
    {
        console.log(this.state.items);

        return (
            <div className="latest-news-container">
                <h1>Latest News</h1>
                <div className="latest-news-wrapper">
                    {this.renderLatestNewsItems()}
                </div>

            </div>
        )
    }
}

export default LatestNews