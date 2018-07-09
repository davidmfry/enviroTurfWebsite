import Layout from '../components/Layout'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import firebase from '../config/firebase';

class MissionStatment extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            statement: ''
        }
    }

    componentDidMount() {
        firebase.database().ref("missionstatement").child('-LGv-eAUcZ8w3cDT4pPO').on('value', (snapshot) => {
            this.setState({statement: snapshot.val()})

        })
    }

    render() {
        if(!this.state.statement)
        {
            return (
                <Layout>
                    <h3>loading...</h3>
                </Layout>
            )
        }
        else
        {
            return (
                <Layout>
                    <div className="mission-container">
                        <h1>Mission Statement</h1>
                        {`${this.state.statement.statement}`}
                    </div>
                    <style jsx>
                        {
                            `
                        .mission-container {

                            margin: 0 1rem;
                            text-align: left;

                        }

                        @media (min-width: 700px)
                        {
                            .mission-container {
                                margin: 0 5rem;
                            }
                        }

                        @media (min-width: 1000px)
                        {
                            .mission-container {
                                margin: 0 10rem;
                            }
                        }

                        @media (min-width: 1500px)
                        {
                            .mission-container {
                                margin: 0 20rem;
                            }
                        }
                    `
                        }
                    </style>
                </Layout>
            )
        }

    }
}

export default MissionStatment