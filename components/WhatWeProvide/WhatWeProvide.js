import React, {Component} from 'react';
import _ from 'lodash';

import './whatweprovide.css'
import PropTypes from 'prop-types';
import firebase, {homepageDBId} from '../../config/firebase';

class WhatWeProvide extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            whatWeProvide: []
        }
    }

    componentDidMount() {
        firebase.database().ref("homepageitems").child(homepageDBId).on('value', (snapshot) => {
            this.setState({whatWeProvide: snapshot.val().whatWeProvideList})

        })
    }

    renderWhatWeProvideList()
    {
        return _.map(this.state.whatWeProvide, (item, index) => {
            return (
                <li key={index}>{item}</li>
            )
        })
    }

    render() {
        return (
            <div className="what-we-provide-container">
                <div className="what-we-wrapper">
                    <div className="what-we-provide-title">
                        <h1>What we <br/> provide</h1>
                    </div>

                    <div className="what-we-provide-info">
                        <ul>
                            {this.renderWhatWeProvideList()}
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

WhatWeProvide.propTypes = {};
WhatWeProvide.defaultProps = {};



export default WhatWeProvide