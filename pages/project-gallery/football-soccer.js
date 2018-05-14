import Layout from '../../components/Layout';
import './football-soccer.css';

import Map from '../../components/Map/Map';
import UsState from '../../components/Map/UsState';

class FootBallSoccer extends React.Component
{
    constructor (props)
    {
        super(props)
        this.state = {
            activeState: null
        }
    }

    render()
    {
        return (
            <Layout>
                  <div>
                      <h1>Completed Projects</h1>
                      <Map/>
                  </div>
            </Layout>
        )
    }
}

export default FootBallSoccer