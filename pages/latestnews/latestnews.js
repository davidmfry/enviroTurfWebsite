import Layout from '../../components/Layout'

import './latestnewssinglepage.css';

class LatestNewsSinglePage extends React.Component
{
    constructor (props)
    {
        super(props)
        this.state = {
            featuredImage: "/static/img/grass.jpeg"
        }
    }

    render()
    {
        return (
            <div className="news-page-container">
                <div className="news-page-wrapper">
                    <div className="news-page-img">
                    </div>
                    <p className='news-caption'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae dolore eveniet fuga fugiat, nisi officia perspiciatis porro repudiandae temporibus.</p>

                    <h1 className="news-headline">News Headline</h1>
                    <p className="news-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi commodi consectetur culpa dolorem doloremque dolorum et fuga hic libero, mollitia nesciunt nobis obcaecati optio quaerat qui quibusdam quis quisquam saepe totam ut veniam, vero voluptatum. Ad adipisci amet assumenda at atque aut error minus numquam reprehenderit? Distinctio, omnis, tenetur!</p>
                    <p className="news-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consectetur consequatur magni mollitia, neque nesciunt placeat quas, reiciendis rem unde vero voluptatibus. A alias aliquid animi aspernatur atque cupiditate dicta distinctio doloribus eligendi fugit, id inventore ipsa magni neque provident ratione reiciendis rem sit suscipit voluptate. Corporis dignissimos, provident!</p>

                    <h1 className="news-headline">
                        This is something important rember!
                    </h1>

                    <p className="news-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi commodi consectetur culpa dolorem doloremque dolorum et fuga hic libero, mollitia nesciunt nobis obcaecati optio quaerat qui quibusdam quis quisquam saepe totam ut veniam, vero voluptatum. Ad adipisci amet assumenda at atque aut error minus numquam reprehenderit? Distinctio, omnis, tenetur!</p>
                    <p className="news-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consectetur consequatur magni mollitia, neque nesciunt placeat quas, reiciendis rem unde vero voluptatibus. A alias aliquid animi aspernatur atque cupiditate dicta distinctio doloribus eligendi fugit, id inventore ipsa magni neque provident ratione reiciendis rem sit suscipit voluptate. Corporis dignissimos, provident!</p>

                    <p className="news-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi commodi consectetur culpa dolorem doloremque dolorum et fuga hic libero, mollitia nesciunt nobis obcaecati optio quaerat qui quibusdam quis quisquam saepe totam ut veniam, vero voluptatum. Ad adipisci amet assumenda at atque aut error minus numquam reprehenderit? Distinctio, omnis, tenetur!</p>
                    <p className="news-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi consectetur consequatur magni mollitia, neque nesciunt placeat quas, reiciendis rem unde vero voluptatibus. A alias aliquid animi aspernatur atque cupiditate dicta distinctio doloribus eligendi fugit, id inventore ipsa magni neque provident ratione reiciendis rem sit suscipit voluptate. Corporis dignissimos, provident!</p>
                </div>


                <style jsx>
                    {
                        `
                            .news-page-img {

                            background: url("${this.state.featuredImage}");
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
        <LatestNewsSinglePage/>
    </Layout>
)