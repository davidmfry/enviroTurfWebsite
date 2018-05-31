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

                <ImageGrid images={this.props.images}/>
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



                            @media (min-width: 700px)
                            {
                                .school-item-container
                                {
                                    margin: 2rem 2rem;
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