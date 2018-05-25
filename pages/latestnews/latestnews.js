import Layout from '../../components/Layout'

import './latestnewssinglepage.css';
import firebase from '../../config/firebase';


class LatestNewsSinglePage extends React.Component
{
    constructor (props)
    {
        super(props)
        this.state = {}

        this.formatContent = this.formatContent.bind(this);
    }

    componentDidMount()
    {
        console.log(this.props.newsId);
        const itemsRef = firebase.database().ref(`latestnews/${this.props.newsId}`);
        itemsRef.on('value', (snapshot) => {
            let item = snapshot.val();
            this.setState({...item})
        });

    }

    formatContent = (content) => {

    }

    render()
    {
        return (
            <div className="news-page-container">
                <h1>{this.state.headline}</h1>
                <div className="news-page-wrapper">

                    <div className="news-page-img">
                    </div>
                    <p className='news-caption'></p>

                    <h1 className="news-headline">{this.state.headline}</h1>
                    <p>{this.state.content}</p>
                </div>


                <style jsx>
                    {
                        `
                            .news-page-img {

                            background: url("${this.state.headerImage}");
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;
                            width: 100%;
                            height: 600px;

                            }
                        `
                    }
                </style>
            </div>
        )
    }
}


export default (props) => (
    <Layout>
        <LatestNewsSinglePage newsId={props.url.query.id} />
    </Layout>
)