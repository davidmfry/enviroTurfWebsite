
import Slide from './Slide';
import Arrow from './Arrow';

class ImageSlider extends React.Component
{
    state = {
        slideCount: 0,
        imageList: [
            "http://res.cloudinary.com/enviroturf/image/upload/v1529509245/Front%20Page%20Images/TC-Williams-2.jpg",
            "http://res.cloudinary.com/enviroturf/image/upload/v1529508887/Front%20Page%20Images/MRA.jpg",
            "http://res.cloudinary.com/enviroturf/image/upload/v1529508887/Front%20Page%20Images/Mississippi-College.jpg",
            "http://res.cloudinary.com/enviroturf/image/upload/v1529508893/Front%20Page%20Images/briawood.jpg",
        ],
        time: 7000
    };

    changeImg = () => {


        if ( this.state.slideCount < this.state.imageList.length - 1 )
        {
            this.setState({slideCount: this.state.slideCount + 1})
        }
        else {
            this.setState({slideCount: 0});
        }

    };

    componentDidMount()
    {
        this.changeImg();
        window.setInterval(() => this.changeImg(), this.state.time)
    }

    componentDidUpdate()
    {

    }

    render ()
    {
        return (

        <div className="bg-image">
            {this.props.children}
            <style jsx>
                {
                    `
                    .bg-image{
                            position: absolute;
                            background: var(--etblack) url(${this.state.imageList[this.state.slideCount]});
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: cover;
                            width: 100%;
                            height: 600px;
                            z-index: -1;
                        }

                        @media screen and (min-width:0) and (min-resolution: .001dpcm)
                        {
                            background: url(http://res.cloudinary.com/enviroturf/image/upload/v1529508893/Front%20Page%20Images/briawood.jpg)
                        }


                    `
                }
            </style>
        </div>
        )
    }
}

export default ImageSlider

//{/*<img src={this.state.imageList[this.state.slideCount]}  width="100%" height="900" alt=""/>*/}