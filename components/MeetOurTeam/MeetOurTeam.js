import './meetourteam.css';
import React, {Component} from 'react';
import _ from 'lodash';
import firebase from "../../config/firebase";
import TeamMember from "../TeamMember/TeamMember";

class MeetOurTeam extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            teamMembers: []
        }
    }

    componentDidMount()
    {
        firebase.database().ref("teammembers").on('value', (snapshot) => {
            this.setState({teamMembers: snapshot.val()})

        })
    }

    renderTeamMembers()
    {
        return _.map(this.state.teamMembers, (teammember, key) => {
            return (
                <TeamMember
                    key={key}
                    linkedin={teammember.linkedInUrl}
                    image={teammember.profileImage}
                    name={`${teammember.firstName} ${teammember.lastName}`}
                    phoneNumber={teammember.phoneNumber}
                    bio={teammember.bio}
                />
            )
        })
    }
    render() {
        return (
            <div className="meet-our-team-container">
                <h1 className="meet-our-team-title">Meet Our Team</h1>
                <div className="meet-our-team-wrapper">
                    {this.renderTeamMembers()}
                </div>


            </div>
        );
    }
}


export default MeetOurTeam