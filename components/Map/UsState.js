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

    componentDidMount ()
    {
        this.setState({focusedImage: '/static/img/briarwood33.jpg'})
    }

    renderImages = (stateName) =>
    {
        switch (stateName)
        {
            case 'Texas':
                const imageList = ['/static/img/Slide01.jpg', '/static/img/Slide02.jpg', '/static/img/Slide03.jpg', '/static/img/Slide04.jpg', '/static/img/Slide05.jpg', '/static/img/Slide06.jpg'];
                return (
                    imageList.map( (image) => (
                        <div className="image-box">
                            <img onClick={() => this.setState({focusedImage: image})} src={image} alt="" width="100%" height="100%"/>
                        </div>
                    ))
                )
        }
    }

    render ()
    {
        return (
            <div className="us-state-container">
                <h1>{this.props.usState} Projects</h1>
                <div className="us-state-bg-image">
                </div>

                <div className="image-box-container">
                    {this.renderImages(this.props.usState)}
                </div>


                <style jsx>
                    {
                        `
                            .us-state-bg-image {

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
        )
    }
}

export default UsState