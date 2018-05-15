import './introsection.css';

const IntroSection = (props) => (
    <div className='top-container'>
        <div className="bg-image"></div>
        <div className="title-group">
            {/*<div className="ets-logo"></div>*/}
            <h1 className="title-1">Enviro</h1>
            <h1 className="title-2">Turf</h1>
        </div>
        <p>The next generation in synthetic turf.</p>
        <i className="far fa-angle-double-down"></i>
    </div>
)

export default IntroSection