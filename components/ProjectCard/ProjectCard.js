import './projectCard.css';

const ProjectCard = (props) => (
    <div className="project-card-container project-card-image">
        {/*<div className="project-card-top-grp">*/}
        {/*</div>*/}
        {/*<div className="project-card-mid-grp">*/}

        {/*</div>*/}
        {/*<div className="project-card-bottom-grp">*/}
            {/*<div className="project-card-info-grp">*/}
                {/*<div className="project-card-info">*/}


                    {/*<div className="project-card-state">*/}

                    {/*</div>*/}
                {/*</div>*/}

            {/*</div>*/}


        {/*</div>*/}

        <div className="project-card-top"></div>
        <div className="project-card-mid">
            <h3>{props.title}</h3>
        </div>
        <div className="project-card-bottom">
            <div className="project-card-bottom-info">
                <p>{props.info}</p>
                <div className='project-card-color-accent'></div>
            </div>
            <div className="project-card-bottom-state">
                <img src="/static/svg/tx-img.svg" alt="US State" width="110" height="110"/>
            </div>
        </div>

        <style jsx>
            {
                `
                    .project-card-image {
                        background: url("/static/img/${props.image}");
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-color: var(--etblack);
                        width: 400px;
                        height: 450px;

                    }

                `
            }
        </style>
    </div>
)

export default ProjectCard