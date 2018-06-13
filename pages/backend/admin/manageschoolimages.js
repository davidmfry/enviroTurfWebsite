import Head from 'next/head';
import firebase from "../../../config/firebase";

import './createnewsitem.css'

class ManageSchoolImages extends React.Component
{
    state = {
        usState: '',
        schoolName: '',
        imageURLs: ''
    }

    createImageArray (imagesString)
    {
        let imageUrlArray = imagesString.split(",");
        return imageUrlArray;
    }

    handleSubmit (values)
    {

        console.log(values);
        //getting a ref to a firebase database called message
        const itemsRef = firebase.database().ref('schoolimages');
        itemsRef.push(values);
        this.setState({
            usState: '',
            schoolName: '',
            imageURLs: ''
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
                <h1 className="news-item-title">Add School Image</h1>
                <form className="news-item">

                    <div>
                        <label>What state</label>
                        <input
                            type="text"
                            name='State'
                            value={this.state.headerImage}
                            onChange={e => this.setState({usState: e.target.value})}
                        />
                    </div>

                    <div>
                        <label>What school?</label>
                        <input
                            type="text"
                            name='schoolName'
                            value={this.state.description}
                            onChange={e => this.setState({schoolName: e.target.value})}
                        />
                    </div>

                    <div>
                        <label>Add image urls. They need to be separated by a comma (,) <br/> Example input: http://imagename.jpeg, http://www.something.com/imagename.jpg </label>
                        <input
                            type="text"
                            name='imageURLs'
                            value={this.state.imageURLs}
                            onChange={e => this.setState({imageURLs: e.target.value})}
                        />
                    </div>

                    <button className="btn" onClick={(e) => {
                        e.preventDefault();
                        this.handleSubmit(
                            {
                                usState: this.state.usState,
                                schoolName: this.state.schoolName,
                                imageURLs: this.createImageArray(this.state.imageURLs),
                            })
                    }}>Save News Item</button>
                </form>
            </div>
        )
    }
}

export default ManageSchoolImages