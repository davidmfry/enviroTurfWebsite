import ImageGrid from '../ImageGrid/ImageGrid'

class SchoolItem extends React.Component
{


    render ()
    {
        return (
            <div className="school-item-container">
                <div className="school-item-title">
                    <h2>{this.props.name}</h2>
                </div>
                <div className="school-item-grid">
                    <ImageGrid images={this.props.images}/>
                </div>

                <style jsx>
                    {
                        `

                            .school-item-title
                            {
                                background: var(--etgray);
                                color: var(--etwhite);
                                height: auto;
                                padding: .5rem 0;
                            }

                            .school-item-container h2
                            {
                                margin: 2rem 1rem;
                                text-transform: uppercase;
                            }

                            .school-item-grid {
                                margin-top: 1.5rem;
                            }



                            @media (min-width: 700px)
                            {
                                .school-item-container
                                {
                                    margin: 2rem 2rem;
                                }

                                .school-item-grid {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                }
                            }
                        `
                    }
                </style>
            </div>
        )
    }
}

export default  SchoolItem