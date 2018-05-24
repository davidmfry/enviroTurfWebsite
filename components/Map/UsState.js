import Link from 'next/link';
import guid from '../../utils/guid';

import './usstate.css';

class UsState extends React.Component
{
    constructor (props)
    {
        super(props)
        this.state = {
            focusedImage: ''
        }
    }



    componentDidMount () {
        switch (this.props.usState) {
            case "Alabama":
                this.setState({focusedImage: '/static/img/states/Alabama/aca2-03.JPG'});
                break;
            case "Arkansas":
                this.setState({focusedImage: '/static/img/states/Arkansas/Bryant-1.jpg'});
                break;
            case "Illinois":
                this.setState({focusedImage: '/static/img/states/Illinois/Lindenwood-1.jpg'});
                break;
            case "Kansas":
                this.setState({focusedImage: '/static/img/states/Kansas/Bethany-1.JPG'});
                break;
            case "Kentucky":
                this.setState({focusedImage: '/static/img/states/Kentucky/Cambellsville-1.jpg'});
                break;
            case "Louisiana":
                this.setState({focusedImage: ''});
                break;
            case "Mississippi":
                this.setState({focusedImage: '/static/img/states/Mississippi/Belhaven-1.jpg'});
                break;
            case "Missouri":
                this.setState({focusedImage: '/static/img/states/Missouri/SW-Baptist-1.jpg'});
                break;
            case "North Carolina":
                this.setState({focusedImage: '/static/img/states/North Carolina/Weddington-1.JPG'});
                break;
            case "Tennessee":
                this.setState({focusedImage: '/static/img/states/Tennessee/Collierville-1.jpg'});
                break;
            case 'Texas':
                this.setState({focusedImage: '/static/img/states/Texas/Dekaney-1.jpg'});
                break;
            case "Virginia":
                this.setState({focusedImage: '/static/img/states/Virginia/TC-Williams-1.JPG'});
                break;

        }
    }

    renderStateImages = (stateName) =>
    {
        let imageList;
        switch (stateName)
        {
            case "Alabama":
                imageList=[
                    "/static/img/states/Alabama/aca2-004.jpg",
                    "/static/img/states/Alabama/aca2-007.jpg",
                    "/static/img/states/Alabama/aca2-ari.jpg",
                    "/static/img/states/Alabama/briarwood-1.JPG",
                    "/static/img/states/Alabama/briarwood-2.JPG",
                    "/static/img/states/Alabama/briarwood-3.JPG",
                    "/static/img/states/Alabama/briarwood-4.JPG",
                    "/static/img/states/Alabama/Faulkner-1.jpg",
                    "/static/img/states/Alabama/Faulkner-2.JPG",
                    "/static/img/states/Alabama/Faulkner-3.JPG",
                    "/static/img/states/Alabama/Miles-1.jpg",
                    "/static/img/states/Alabama/Miles-2.jpg",
                    "/static/img/states/Alabama/Miles-3.jpg",
                    "/static/img/states/Alabama/UWA-009.JPG",
                    "/static/img/states/Alabama/UWA-011.JPG",
                    "/static/img/states/Alabama/UWA-012.JPG"];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
            case "Arkansas":
                imageList=["/static/img/states/Arkansas/Bryant-1.jpg",
                    "/static/img/states/Arkansas/Bryant-2.JPG",
                    "/static/img/states/Arkansas/Bryant-3.JPG",
                    "/static/img/states/Arkansas/Bryant-4.JPG",
                    "/static/img/states/Arkansas/Bryant-5.jpg",
                    "/static/img/states/Arkansas/Bryant-6.jpg",
                    "/static/img/states/Arkansas/Central-1.JPG",
                    "/static/img/states/Arkansas/Central-2.JPG",
                    "/static/img/states/Arkansas/Central-3.JPG",
                    "/static/img/states/Arkansas/Central-4.JPG",
                    "/static/img/states/Arkansas/Central-5.JPG",
                    "/static/img/states/Arkansas/Christian-1.JPG",
                    "/static/img/states/Arkansas/Christian-2.JPG",
                    "/static/img/states/Arkansas/Christian-3.JPG",
                    "/static/img/states/Arkansas/Christian-4.JPG",
                    "/static/img/states/Arkansas/Christian-5.JPG",
                    "/static/img/states/Arkansas/Fountain-1.jpg",
                    "/static/img/states/Arkansas/Fountain-2.jpg",
                    "/static/img/states/Arkansas/Fountain-3.jpg",
                    "/static/img/states/Arkansas/Fountain-4.jpg",
                    "/static/img/states/Arkansas/Fountain-5.jpg",
                    "/static/img/states/Arkansas/Fountain-6.JPG",
                    "/static/img/states/Arkansas/Fountain-7.JPG",
                    "/static/img/states/Arkansas/Hamilton-1.jpg",
                    "/static/img/states/Arkansas/Hamilton-2.jpg",
                    "/static/img/states/Arkansas/Hamilton-3.jpg",
                    "/static/img/states/Arkansas/Hamilton-4.jpg",
                    "/static/img/states/Arkansas/Hamilton-5.png",
                    "/static/img/states/Arkansas/Hamilton-6.png",
                    "/static/img/states/Arkansas/Morrilton-1.JPG",
                    "/static/img/states/Arkansas/Morrilton-2.JPG",
                    "/static/img/states/Arkansas/Morrilton-3.JPG",
                    "/static/img/states/Arkansas/Morrilton-4.JPG",
                    "/static/img/states/Arkansas/Morrilton-5.JPG",
                    "/static/img/states/Arkansas/North-Little-Rock-1.jpg",
                    "/static/img/states/Arkansas/Russellville-1.jpg",
                    "/static/img/states/Arkansas/Russellville-2.JPG",
                    "/static/img/states/Arkansas/Russellville-3.JPG",
                    "/static/img/states/Arkansas/Russellville-4.JPG",
                    "/static/img/states/Arkansas/Vilonia-1.JPG",
                    "/static/img/states/Arkansas/Vilonia-2.JPG",
                    "/static/img/states/Arkansas/Vilonia-3.jpg",
                    "/static/img/states/Arkansas/Vilonia-4.JPG",
                    "/static/img/states/Arkansas/Vilonia-5.JPG"];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
            case "Illinois":
                imageList=["/static/img/states/Illinois/Lindenwood-1.jpg",
                    "/static/img/states/Illinois/Lindenwood-2.jpg",
                    "/static/img/states/Illinois/Lindenwood-3.jpg",
                    "/static/img/states/Illinois/Lindenwood-4.jpg",
                    "/static/img/states/Illinois/Lindenwood-5.jpg",
                    "/static/img/states/Illinois/Lindenwood-6.jpg"];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
            case "Kansas":
                imageList=["/static/img/states/Kansas/Bethany-1.JPG",
                    "/static/img/states/Kansas/Bethany-2.JPG",
                    "/static/img/states/Kansas/Bethany-3.JPG"];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
            case "Kentucky":
                imageList=["/static/img/states/Kentucky/Cambellsville-1.jpg"];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
            case "Louisiana":
                imageList=[""];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
            case "Mississippi":
                imageList=["/static/img/states/Mississippi/Belhaven-1.jpg",
                    "/static/img/states/Mississippi/D_lberville-1.jpg",
                    "/static/img/states/Mississippi/East Mississippi-1.jpg",
                    "/static/img/states/Mississippi/East-Central-1.jpg",
                    "/static/img/states/Mississippi/Hancock-1.jpg",
                    "/static/img/states/Mississippi/Jackson-1.jpg",
                    "/static/img/states/Mississippi/Lafayette-1.jpg",
                    "/static/img/states/Mississippi/Madison-1.jpg",
                    "/static/img/states/Mississippi/MC-1.jpg",
                    "/static/img/states/Mississippi/Meridian-1.jpg",
                    "/static/img/states/Mississippi/Meridian-2.jpg",
                    "/static/img/states/Mississippi/Pearl-1.jpg",
                    "/static/img/states/Mississippi/Picayune-1.jpg"];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
            case "Missouri":
                imageList=["/static/img/states/Missouri/SW-Baptist-1.jpg"];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
            case "North Carolina":
                imageList=["/static/img/states/North Carolina/Weddington-1.JPG",
                    "/static/img/states/North Carolina/Weddington-2.JPG",
                    "/static/img/states/North Carolina/Weddington-3.JPG"];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
            case "Tennessee":
                imageList=["/static/img/states/Tennessee/Collierville-1.jpg",
                    "/static/img/states/Tennessee/UofM-1.JPG",
                    "/static/img/states/Tennessee/UofM-2.JPG",
                    "/static/img/states/Tennessee/UofM-3.JPG",
                    "/static/img/states/Tennessee/UofM-4.JPG",
                    "/static/img/states/Tennessee/UofM-5.JPG",
                    "/static/img/states/Tennessee/UofM-6.JPG",
                    "/static/img/states/Tennessee/UofM-7.JPG",
                    "/static/img/states/Tennessee/UofM-8.JPG",
                    "/static/img/states/Tennessee/UofM-9.JPG"];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
            case 'Texas':
                imageList=["/static/img/states/Texas/Dekaney-1.jpg",
                    "/static/img/states/Texas/Dekaney-2.jpg",
                    "/static/img/states/Texas/Spring-1.jpg",
                    "/static/img/states/Texas/Westfield-1.jpg",
                    "/static/img/states/Texas/Westfield-2.jpg"];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
            case "Virginia":
                imageList=["/static/img/states/Virginia/TC-Williams-1.JPG",
                    "/static/img/states/Virginia/TC-Williams-2.jpg"];
                return (
                    imageList.map( (image) => (
                        <div key={guid()} className="image-box">
                            <img
                                onClick={() => this.setState({focusedImage: image})}
                                src={image} alt=""
                                width="100%"
                                height="100%"/>
                        </div>
                    ))
                );
        }
    }

    render ()
    {
        return (
            <div className="us-state-container">
                <h1>{this.props.usState} Projects</h1>
                <div className="us-state-image-container">
                    <div className="us-state-bg-image">
                    </div>
                </div>


                <div className="image-box-container">
                    {this.renderStateImages(this.props.usState)}
                </div>

                <h3><Link href="/project-gallery/football-soccer"><a>Back to map</a></Link></h3>


                <style jsx>
                    {
                        `
                            .us-state-bg-image {

                            background: var(--etblack) url("${this.state.focusedImage}");
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;
                            width: 100%;
                            height: 700px;
                            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
                            }
                        `
                    }
                </style>
            </div>
        )
    }
}

export default UsState