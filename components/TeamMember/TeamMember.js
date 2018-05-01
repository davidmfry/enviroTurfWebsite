const TeamMember = (props) => (
    <div>
        <div className='team-member-image'></div>
        <a href="#"><img src="/static/img/linkedin-icon.png" alt="Linked in logo"/></a>
        <h3>{props.name}</h3>
        <h4>{props.phoneNumber}</h4>
        <p>{props.bio}</p>
    </div>
)

export default TeamMember