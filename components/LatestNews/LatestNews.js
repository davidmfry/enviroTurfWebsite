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
        // changes the object into an array to the news items can show the newwest item first.
        let newsItemsArray = _.values(this.state.items)
        // console.log(newsItemsArray)
        newsItemsArray.reverse();

        let renderArray = []
        let keysArray = Object.keys(this.state.items)
        keysArray.reverse()

    //     _.map(this.state.items, (item, key) => {
    //         let newObj = {}
    //         newObj[`${key}`] = item;
    //
    //         renderArray.push(newObj)
    // })

        // renderArray.reverse();

        return _.map(newsItemsArray, (item, key) => {
            return (
                <Link key={keysArray[key]} as={`/latestnews/${keysArray[key]}`} href={`/latestnews/latestnews?id=${key}`}><a><NewsItem  id={keysArray[key]} image={item.headerImage} headline={item.headline} description={item.description}/></a></Link>
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