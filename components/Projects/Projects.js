import './projects.css';
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = (props) => (
    <div className='project-container'>
        <h1>Projects</h1>
        <div className="project-wrapper">
            <ProjectCard title='Something about the field should go here' info="quick info about the field goes here." image={"spring-2.jpg"}/>
            <ProjectCard title='Something about the field should go here' info="quick info about the field goes here"/>
            <ProjectCard title='Something about the field should go here' info="quick info about the field goes here"/>
            <ProjectCard title='Something about the field should go here' info="quick info about the field goes here"/>
        </div>


    </div>
)

export default Projects