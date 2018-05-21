
import Slide from './Slide';
import Arrow from './Arrow';

class ImageSlider extends React.Component
{
    state = {
        slideCount: 0,
        imageList: ['/static/img/topBannerSlides/briawood.JPG', "/static/img/topBannerSlides/Jackson-MS.jpg", "/static/img/topBannerSlides/MRA.jpg"],
        time: 3000
    };

    // nextSlide = () => {
    //     this.setState({slideCount: this.state.slideCount += 1})
    // };
    //
    // previousSlide = () => {
    //     this.setState({slideCount: this.state.slideCount -= 1})
    // };

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
        //setTimeout(() => console.log("testing-didMoount"), 1000);
        window.setInterval(() => this.changeImg(), this.state.time)
    }

    componentDidUpdate()
    {

    }

    render ()
    {
        return (
            <img src={this.state.imageList[this.state.slideCount]}  width="100%" height="900" alt=""/>
        )
    }
}

export default ImageSlider