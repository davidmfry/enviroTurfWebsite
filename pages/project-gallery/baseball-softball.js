import _ from 'lodash';

import './baseball-softball.css'
import firebase from '../../config/firebase';

import Layout from '../../components/Layout';
import SchoolItem from '../../components/Map/SchoolItem';

class BaseBallSoftBall extends React.Component
{
    constructor (props)
    {
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount()
    {
        firebase.database().ref("baseballsoftball").child("schools").on('value', (snapshot) => {
            this.setState({items: snapshot.val()})

        })
    }

    renderImages = () =>
    {

        return (
            _.map(this.state.items, (school, key) => (
                <SchoolItem key={key} name={school.schoolName} images={school.imageUrls}/>
            ))
        );

    }

    render ()
    {
        return (
            <Layout>
            <div className="baseball-softball-container">
                <h1>Completed Projects <br/>(Baseball/Softball)</h1>
                <div className="baseball-softball-image-box-container">
                    {this.renderImages()}
                </div>

            </div>
            </Layout>
        )
    }
}

export default BaseBallSoftBall