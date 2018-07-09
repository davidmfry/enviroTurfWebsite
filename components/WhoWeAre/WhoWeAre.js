import firebase, {homepageDBId} from '../../config/firebase';

import './whoweare.css';
import PropTypes from 'prop-types';

class WhoWeAre extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            whoWeAreInfo: ''
        }
    }

    componentDidMount() {
        firebase.database().ref("homepageitems").child(homepageDBId).on('value', (snapshot) => {
            this.setState({whoWeAreInfo: snapshot.val().whoWeAre})

        })
    }

    render() {
        return (
            <section className='who-we-are-container'>
                <div className="wrapper">
                    <div className="who-we-are-title">
                        <h1 className="who-we-are-title1">Who <br/> We Are</h1>
                        {/*<h1 className="who-we-are-title2">we are</h1>*/}
                    </div>
                    <div className="who-we-are-info">
                        <p>{this.state.whoWeAreInfo}</p>
                    </div>
                </div>


            </section>
        );
    }
}

WhoWeAre.propTypes = {};
WhoWeAre.defaultProps = {};


export default  WhoWeAre