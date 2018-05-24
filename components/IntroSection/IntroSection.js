import './introsection.css';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

class IntroSection extends React.Component {





    render()
    {

        return (
            <div className="intro-section-container">
                <ImageSlider>
                    <div className="title-group">
                        <div className="ets-logo-container">
                            <img className="ets-logo" src="/static/img/ets-logo.png" alt=""/>
                        </div>
                        {/*<h1 className="title-1">Enviro</h1>*/}
                        {/*<h1 className="title-2">Turf</h1>*/}
                        <p>The next generation in synthetic turf.</p>
                    </div>

                    <object type="image/svg+xml" data="/static/svg/arrow-alt-circle-down.svg" className="arrowDown">

                    </object>

                </ImageSlider>
            </div>



        )
    }

}

export default IntroSection

{/*<div className="bg-image"></div>*/}
