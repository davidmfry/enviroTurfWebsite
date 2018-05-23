import './baseball-softball.css'
import Layout from '../../components/Layout';
class BaseBallSoftBall extends React.Component
{
    constructor (props)
    {
        super(props)
        this.state = {
            focusedImage: ''
        }
    }

    componentDidMount ()
    {
        this.setState({focusedImage: "/static/img/Baseball-Softball/Corinth-1.jpg"})
    }

    renderImages = (stateName) =>
    {
        const imageList = ["http://res.cloudinary.com/enviroturf/image/upload/v1527009300/Corinth-1.jpg",
            "http://res.cloudinary.com/enviroturf/image/upload/v1527009301/Corinth-2.jpg",
            "http://res.cloudinary.com/enviroturf/image/upload/v1527009300/Corinth-3.jpg",
            "http://res.cloudinary.com/enviroturf/image/upload/v1527009301/Ole-Miss-1.png",
            "http://res.cloudinary.com/enviroturf/image/upload/v1527009301/Sabetha-2.jpg",
            "http://res.cloudinary.com/enviroturf/image/upload/v1527009300/Sabetha-1.jpg"];
        return (
            imageList.map( (image) => (
                <div className="baseball-softball-image-box">
                    <img onClick={() => this.setState({focusedImage: image})} src={image} alt="" width="100%" height="100%"/>
                </div>
            ))
        )
    }

    render ()
    {
        return (
            <Layout>
            <div className="baseball-softball-container">
                <h1>Baseball and Softball Completed Projects</h1>
                    <div className='baseball-softball-image-container'>
                        <div className="baseball-softball-bg-image">
                        </div>
                    </div>


                <div className="baseball-softball-image-box-container">
                    {this.renderImages()}
                </div>


                <style jsx>
                    {
                        `
                            .baseball-softball-bg-image {

                            background: var(--etblack) url("${this.state.focusedImage}");
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;
                            width: 100%;
                            height: 600px;
                            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
                            }
                        `
                    }
                </style>
            </div>
            </Layout>
        )
    }
}

export default BaseBallSoftBall