import ImageGrid from '../ImageGrid/ImageGrid'

class SchoolItem extends React.Component
{


    render ()
    {
        return (
            <div className="school-item-container">
                <h2>{this.props.name}</h2>
                <ImageGrid images={this.props.images}/>
                <style jsx>
                    {
                        `
                            .school-item-container
                            {
                                margin: 2rem 2rem;
                            }

                            .school-item-container h2
                            {
                                margin: 2rem 1rem;
                            }
                        `
                    }
                </style>
            </div>
        )
    }
}

export default  SchoolItem