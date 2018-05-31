import Head from 'next/head';
import firebase from "../../../config/firebase";

import './createnewsitem.css'

class CreateNewsItem extends React.Component
{
    state = {
        headline: "",
        headline2: "",
        content: "",
        description: "",
        headerImage: "",
    }

    handleSubmit (values)
    {

        console.log(values);

        //getting a ref to a firebase database called message
        const itemsRef = firebase.database().ref('latestnews');
        itemsRef.push(values);
        this.setState({
            headline: '',
            headline2: '',
            description: "",
            content: '',
            headerImage: '',
        });
    }

    render()
    {
        return (
            <div>
                <title>EnviroTurf</title>
                <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
                <meta charSet="UTF-8"/>
                {/*<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"/>*/}
                <link href="https://fonts.googleapis.com/css?family=Rubik:400,700,900" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet"/>
                <link rel="stylesheet" href="/_next/static/style.css" />
                </Head>
                <h1 className="news-item-title">Create a news Item</h1>
                <form className="news-item">
                    <div>
                        <label>Add the Headline</label>
                        <input
                            type="text"
                            name='headline'
                            value={this.state.headline}
                            onChange={e => this.setState({headline: e.target.value})}
                        />
                    </div>

                    {/*<div>*/}
                        {/*<label>Headline 2</label>*/}
                        {/*<input*/}
                            {/*type="text"*/}
                            {/*name='lastname'*/}
                            {/*value={this.state.headline2}*/}
                            {/*onChange={e => this.setState({headline2: e.target.value})}*/}
                        {/*/>*/}
                    {/*</div>*/}
                    <div>
                        <label>Add the header image - this should be a url (example:https://01iajxoiw1-flywheel.netdna-ssl.com/wp-content/uploads/2017/11/cute.jpg )</label>
                        <input
                            type="text"
                            name='headerImage'
                            value={this.state.headerImage}
                            onChange={e => this.setState({headerImage: e.target.value})}
                        />
                    </div>

                    <div>
                        <label>Add one line description for the news story</label>
                        <input
                            type="text"
                            name='oneline'
                            value={this.state.description}
                            onChange={e => this.setState({description: e.target.value})}
                        />
                    </div>

                    <div className="contact-us-message">
                        <label>Add the news content</label>
                        <textarea
                            rows="4"
                            cols="50"
                            value={this.state.content}
                            onChange={e => this.setState({content: e.target.value})}
                        ></textarea>
                    </div>

                    <button className="btn" onClick={(e) => {
                        e.preventDefault();
                        this.handleSubmit(
                            {
                                headline: this.state.headline,
                                headline2: this.state.headline2,
                                headerImage: this.state.headerImage,
                                content: this.state.content,
                                description: `${this.state.description}`,
                            })
                    }}>Save News Item</button>
                </form>
            </div>
        )
    }
}

export default CreateNewsItem