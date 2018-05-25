import Link from 'next/link';
import guid from '../../utils/guid';
import SchoolItem from './SchoolItem';
import './usstate.css';

class UsState extends React.Component
{
    constructor (props)
    {
        super(props)
        this.state = {
        }
    }



    componentDidMount () {

    }

    renderStateImages = (stateName) =>
    {
        let schoolsObj;
        switch (stateName)
        {
            case "Alabama":

                schoolsObj = [
                    {
                        name: "American Christian Academy - Tuscaloosa, AL",
                        images: ["/static/img/states/Alabama/aca2-004.jpg",
                            "/static/img/states/Alabama/aca2-007.jpg",
                            "/static/img/states/Alabama/aca2-ari.jpg"]
                    },

                    {
                        name: "Briarwood Christian School - Birmingham, AL",
                        images: ["/static/img/states/Alabama/briarwood-1.JPG",
                            "/static/img/states/Alabama/briarwood-2.JPG",
                            "/static/img/states/Alabama/briarwood-3.JPG",
                            "/static/img/states/Alabama/briarwood-4.JPG"]
                    },
                    {
                        name: "Faulkner University - Montgomery, AL",
                        images: ["/static/img/states/Alabama/Faulkner-1.jpg",
                            "/static/img/states/Alabama/Faulkner-2.JPG",
                            "/static/img/states/Alabama/Faulkner-3.JPG"]
                    },
                    {
                        name: "Miles College - Fairfield, AL",
                        images: ["/static/img/states/Alabama/Miles-1.jpg",
                            "/static/img/states/Alabama/Miles-2.jpg",
                            "/static/img/states/Alabama/Miles-3.jpg"]
                    },
                    {
                        name: "University of West Alabama - Livingston, AL",
                        images: ["/static/img/states/Alabama/UWA-009.JPG",
                            "/static/img/states/Alabama/UWA-011.JPG",
                            "/static/img/states/Alabama/UWA-012.JPG"]
                    }
                ];
                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );
            case "Arkansas":

                schoolsObj = [
                    {
                        name: "Bryant High School - Bryant, AR",
                        images: [ "/static/img/states/Arkansas/Bryant-2.JPG",
                            "/static/img/states/Arkansas/Bryant-3.JPG",
                            "/static/img/states/Arkansas/Bryant-4.JPG",
                            "/static/img/states/Arkansas/Bryant-5.jpg",
                            "/static/img/states/Arkansas/Bryant-6.jpg"]
                    },
                    {
                        name: "Fountain Lake High School - Hot Springs, AR",
                        images: [ "/static/img/states/Arkansas/Fountain-1.jpg",
                            "/static/img/states/Arkansas/Fountain-2.jpg",
                            "/static/img/states/Arkansas/Fountain-3.jpg",
                            "/static/img/states/Arkansas/Fountain-4.jpg",
                            "/static/img/states/Arkansas/Fountain-5.jpg",
                            "/static/img/states/Arkansas/Fountain-6.JPG",
                            "/static/img/states/Arkansas/Fountain-7.JPG"]
                    },
                    {
                        name: "Lake Hamilton High School - Pearcy, AR",
                        images: ["/static/img/states/Arkansas/Hamilton-1.jpg",
                            "/static/img/states/Arkansas/Hamilton-2.jpg",
                            "/static/img/states/Arkansas/Hamilton-3.jpg",
                            "/static/img/states/Arkansas/Hamilton-4.jpg",
                            "/static/img/states/Arkansas/Hamilton-5.png",
                            "/static/img/states/Arkansas/Hamilton-6.png"]
                    },
                    {
                        name: "Little Rock Central High School - Little Rock, AR",
                        images: ["/static/img/states/Arkansas/Central-1.JPG",
                            "/static/img/states/Arkansas/Central-2.JPG",
                            "/static/img/states/Arkansas/Central-3.JPG",
                            "/static/img/states/Arkansas/Central-4.JPG",
                            "/static/img/states/Arkansas/Central-5.JPG"]
                    },
                    {
                        name: "Little Rock Christian Academy - Little Rock, AR",
                        images: ["/static/img/states/Arkansas/Christian-1.JPG",
                            "/static/img/states/Arkansas/Christian-2.JPG",
                            "/static/img/states/Arkansas/Christian-3.JPG",
                            "/static/img/states/Arkansas/Christian-4.JPG",
                            "/static/img/states/Arkansas/Christian-5.JPG"]
                    },
                    {
                        name: "Morrilton High School - Morrilton, AR",
                        images: ["/static/img/states/Arkansas/Morrilton-1.JPG",
                            "/static/img/states/Arkansas/Morrilton-2.JPG",
                            "/static/img/states/Arkansas/Morrilton-3.JPG",
                            "/static/img/states/Arkansas/Morrilton-4.JPG",
                            "/static/img/states/Arkansas/Morrilton-5.JPG"]
                    },
                    {
                        name: "North Little Rock High School - Little Rock, AR",
                        images: ["/static/img/states/Arkansas/North-Little-Rock-1.jpg"]
                    },
                    {
                        name: "Russellville High School - Russellville, AR",
                        images: ["/static/img/states/Arkansas/Russellville-1.jpg",
                            "/static/img/states/Arkansas/Russellville-2.JPG",
                            "/static/img/states/Arkansas/Russellville-3.JPG",
                            "/static/img/states/Arkansas/Russellville-4.JPG"]
                    },
                    {
                        name: "Vilonia High School - Vilonia, AR",
                        images: [ "/static/img/states/Arkansas/Vilonia-1.JPG",
                            "/static/img/states/Arkansas/Vilonia-2.JPG",
                            "/static/img/states/Arkansas/Vilonia-3.jpg",
                            "/static/img/states/Arkansas/Vilonia-4.JPG",
                            "/static/img/states/Arkansas/Vilonia-5.JPG"]
                    },

                ];
                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );
            case "Illinois":

                schoolsObj = [
                    {
                        name:"Lindenwood University Bellville - Bellville, IL",
                        images: ["/static/img/states/Illinois/Lindenwood-1.jpg",
                            "/static/img/states/Illinois/Lindenwood-2.jpg",
                            "/static/img/states/Illinois/Lindenwood-3.jpg",
                            "/static/img/states/Illinois/Lindenwood-4.jpg",
                            "/static/img/states/Illinois/Lindenwood-5.jpg",
                            "/static/img/states/Illinois/Lindenwood-6.jpg"]
                    }
                ]
                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );
            case "Kansas":
                schoolsObj = [
                    {
                        name:"Bethany College - Lindsborg, KS",
                        images: ["/static/img/states/Kansas/Bethany-1.JPG",
                            "/static/img/states/Kansas/Bethany-2.JPG",
                            "/static/img/states/Kansas/Bethany-3.JPG"]
                    }
                ];

                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );
            case "Kentucky":
                schoolsObj = [
                    {
                        name: "Cambellsville University, Finley Stadium - Cambellsville, KY",
                        images: ["/static/img/states/Kentucky/Cambellsville-1.jpg"]
                    }
                ];
                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );
            case "Louisiana":
                schoolsObj = [
                    {
                        name: "",
                        images: []
                    }
                ];
                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );
            case "Mississippi":
                schoolsObj = [
                    {
                        name: "Madison Ridgeland Academy - Madison, MS",
                        images: ["/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_1.jpg",
                            "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_2.jpg",
                            "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_3.jpg",
                            "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_4.jpg",
                            "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_5.jpg"]
                    },
                    {
                        name: "Madison Central High School - Madison, MS",
                        images: ["/static/img/states/Mississippi/Madison Central High School - Madison, MS_1.JPG",
                            "/static/img/states/Mississippi/Madison Central High School - Madison, MS_2.JPG",
                            "/static/img/states/Mississippi/Madison Central High School - Madison, MS_3.JPG",
                            "/static/img/states/Mississippi/Madison Central High School - Madison, MS_4.JPG",
                            "/static/img/states/Mississippi/Madison Central High School - Madison, MS_5.JPG"]
                    },
                    {
                        name: "Belhaven University - Jackson, MS",
                        images: ["/static/img/states/Mississippi/Belhaven-1.jpg"]
                    },
                    {
                        name: "D'lberville High School - Biloxi, MS",
                        images: ["/static/img/states/Mississippi/D_lberville-1.jpg"]
                    },
                    {
                        name: "East Central Community College - Decatur, MS",
                        images: ["/static/img/states/Mississippi/East-Central-1.jpg"]
                    },
                    {
                        name: "East Mississippi Community College - Scooba, MS",
                        images: ["/static/img/states/Mississippi/East Mississippi-1.jpg"]
                    },
                    {
                        name: "Hancock High School - Kiln, MS",
                        images: ["/static/img/states/Mississippi/Hancock-1.jpg"]
                    },
                    {
                        name: "Jackson Prep - Jackson, MS",
                        images: ["/static/img/states/Mississippi/Jackson-1.jpg"]
                    },
                    {
                        name: "Lafayette High School - Oxford, MS",
                        images: ["/static/img/states/Mississippi/Lafayette-1.jpg"]
                    },
                    {
                        name: "Meridian High School - Meridian, MS",
                        images: ["/static/img/states/Mississippi/Meridian-1.jpg",
                            "/static/img/states/Mississippi/Meridian-2.jpg",]
                    },
                    {
                        name: "Mississippi College - Clinton, MS",
                        images: ["/static/img/states/Mississippi/Mississippi College - Clinton, MS.jpg"]
                    },
                    {
                        name: "Pearl High School - Pearl, MS",
                        images: ["/static/img/states/Mississippi/Pearl High School - Pearl, MS_1.jpg",
                            "/static/img/states/Mississippi/Pearl High School - Pearl, MS_2.JPG",
                            "/static/img/states/Mississippi/Pearl High School - Pearl, MS_3.JPG",
                            "/static/img/states/Mississippi/Pearl High School - Pearl, MS_4.JPG",
                            "/static/img/states/Mississippi/Pearl High School - Pearl, MS_5.JPG"]
                    },

                ];

                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );

            case "Missouri":
                schoolsObj = [
                    {
                        name: "Lindenwood University - Saint Charles, MO",
                        images: ["/static/img/states/Missouri/100_0004.JPG",
                            "/static/img/states/Missouri/100_0007.JPG",
                            "/static/img/states/Missouri/100_0014.JPG",
                            "/static/img/states/Missouri/Hunter Stadium (Arial View).JPG",
                            "/static/img/states/Missouri/Lindenwood Aerial.jpg"]
                    },
                    {
                        name: "Southwest Baptist University - Bolivar, MO",
                        images: ["/static/img/states/Missouri/Southwest Baptist University - Bolivar, MO.jpg"]
                    }
                ];
                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );
            case "North Carolina":
                schoolsObj = [
                    {
                        name: "Weddington Chapel Park - Charlotte, NC",
                        images: ["/static/img/states/North Carolina/Weddington-1.JPG",
                            "/static/img/states/North Carolina/Weddington-2.JPG",
                            "/static/img/states/North Carolina/Weddington-3.JPG"]
                    }
                ];
                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );
            case "Tennessee":
                schoolsObj = [
                    {
                        name: "City of Collierville, TN",
                        images: ["/static/img/states/Tennessee/Collierville-1.jpg"]
                    },
                    {
                        name: "University of Memphis - Memphis, TN",
                        images: [
                            "/static/img/states/Tennessee/UofM-1.JPG",
                            "/static/img/states/Tennessee/UofM-2.JPG",
                            "/static/img/states/Tennessee/UofM-3.JPG",
                            "/static/img/states/Tennessee/UofM-4.JPG",
                            "/static/img/states/Tennessee/UofM-5.JPG",
                            "/static/img/states/Tennessee/UofM-6.JPG",
                            "/static/img/states/Tennessee/UofM-7.JPG",
                            "/static/img/states/Tennessee/UofM-8.JPG",
                            "/static/img/states/Tennessee/UofM-9.JPG"]
                    }
                ];
                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );

            case 'Texas':
                schoolsObj = [
                    {
                        name: "Dekaney High School - Houston, TX",
                        images: ["/static/img/states/Texas/Dekaney-1.jpg",
                            "/static/img/states/Texas/Dekaney-2.jpg",]
                    },
                    {
                        name: "Spring High School - Spring, Texas",
                        images: ["/static/img/states/Texas/Spring-1.jpg"]
                    },
                    {
                        name: "Westfield High School - Houston, TX",
                        images: [ "/static/img/states/Texas/Westfield-1.jpg",
                            "/static/img/states/Texas/Westfield-2.jpg"]
                    }
                ];

                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );
            case "Virginia":
                schoolsObj = [
                    {
                        name: "T.C. Williams High School - Alexandria, VA",
                        images: ["/static/img/states/Virginia/TC-Williams-1.JPG",
                            "/static/img/states/Virginia/TC-Williams-2.jpg"]
                    },
                ];
                return (
                    schoolsObj.map( (school) => (
                        <SchoolItem name={school.name} images={school.images}/>
                    ))
                );
        }
    }

    render ()
    {
        return (
            <div className="us-state-container">
                <h1>{this.props.usState} Projects</h1>
                {this.renderStateImages(this.props.usState)}
                <h3><Link href="/project-gallery/football-soccer"><a>Back to map</a></Link></h3>
            </div>
        )
    }
}

export default UsState