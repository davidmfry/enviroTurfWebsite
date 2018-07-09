import Link from 'next/link';
import _ from 'lodash';

import './latestnews.css';
import NewsItem from "../NewsItem/NewsItem";
import firebase from "../../config/firebase";

class LatestNews extends React.Component
{


    constructor(props)
    {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount()
    {
        firebase.database().ref("newsitems").on('value', (snapshot) => {
            this.setState({items: snapshot.val()})

        })
    }

    renderLatestNewsItems = () =>
    {
        return _.map(this.state.items, (item, key) => {

            return (
                <Link key={key} as={`/latestnews/${key}`} href={`/latestnews/latestnews?id=${key}`}><a><NewsItem  id={key} image={item.headerImage} headline={item.headline} description={item.description}/></a></Link>
            )
        });

    }

    render()
    {
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