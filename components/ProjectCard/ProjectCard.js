import './projectCard.css';

const ProjectCard = (props) => (
    <div>
        <h3>{props.title}</h3>
        <div>
            <p>{props.info}</p>
        </div>
        <div>
            <img src="/static/svg/tx-img.svg" alt=""/>
        </div>
        <div className='project-card-color-accent'>

        </div>
    </div>
)

export default ProjectCard