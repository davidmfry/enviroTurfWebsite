import './teammember.css'
const TeamMember = (props) => (
    <div className="team-member-container">
        <div className="team-member-group">
            <div className='team-member-image'></div>
            <a href={props.linkedin}>
                <div className='team-member-linkedin'></div>
            </a>

            <h3>{props.name}</h3>
            <h4>{props.phoneNumber}</h4>
            <p>{props.bio}</p>
        </div>
        <style jsx>
            {
                `
                    .team-member-image {
                    display: inline-block;
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    background-image: url("${props.image}");
                    background-repeat: no-repeat;
                    background-position: center center;
                    background-size: cover;

                    }
                `
            }

        </style>
    </div>
)

export default TeamMember