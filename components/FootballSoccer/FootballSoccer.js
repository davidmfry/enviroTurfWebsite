import '../../pages/project-gallery/football-soccer.css';

import Map from '../../components/Map/Map';
import UsState from '../../components/Map/UsState';

class FootballSoccer extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            activeState: null
        }
    }

    render()
    {
        return (
            <div className="map-container">
                <h1>Completed Projects <br/>(Football/Soccer)</h1>
                <div className="map">
                    <Map/>
                </div>

            </div>
        )
    }
}

export default FootballSoccer