import Link from 'next/link';
import _ from 'lodash';
import firebase from '../../config/firebase';
import guid from '../../utils/guid';
import SchoolItem from './SchoolItem';
import './usstate.css';

class UsState extends React.Component
{
    constructor (props)
    {
        super(props)
        this.state = {
            schools: []
        }
    }



    componentDidMount ()
    {
        firebase.database().ref("states").child(`${this.props.usState}`).child('schools').on('value', (snapshot) => {
            const schoolsArray = [];
            _.map(snapshot.val(), (school) => {
                schoolsArray.push(school.schoolName);
            });

            this.setState({schools: schoolsArray})

        })
    }

    // renderStateImages = (stateName) =>
    // {
    //     let schoolsObj;
    //     switch (stateName)
    //     {
    //         case "Alabama":
    //
    //             schoolsObj = [
    //                 {
    //                     name: "American Christian Academy - Tuscaloosa, AL",
    //                     images: [
    //                         "/static/img/states/Alabama/aca2-007.jpg",
    //                         "/static/img/states/Alabama/aca2-ari.jpg"]
    //                 },
    //
    //                 {
    //                     name: "Briarwood Christian School - Birmingham, AL",
    //                     images: ["/static/img/states/Alabama/briarwood-1.JPG",
    //                         "/static/img/states/Alabama/briarwood-2.JPG",
    //                         "/static/img/states/Alabama/briarwood-3.JPG",
    //                         "/static/img/states/Alabama/briarwood-4.JPG"]
    //                 },
    //                 {
    //                     name: "Faulkner University - Montgomery, AL",
    //                     images: [
    //                         "/static/img/states/Alabama/Faulkner-1.jpg",
    //                         "/static/img/states/Alabama/Faulkner University_Montgomery, AL_a.jpg",
    //                         "/static/img/states/Alabama/Faulkner University_Montgomery, AL_b.jpg"
    //                     ]
    //                 },
    //                 {
    //                     name: "Miles College - Fairfield, AL",
    //                     images: ["/static/img/states/Alabama/Miles-1.jpg",
    //                         "/static/img/states/Alabama/Miles-3.jpg"]
    //                 },
    //                 {
    //                     name: "University of West Alabama - Livingston, AL",
    //                     images: ["/static/img/states/Alabama/UWA-009.JPG",
    //                         "/static/img/states/Alabama/UWA-012.JPG"]
    //                 }
    //             ];
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             );
    //         case "Arkansas":
    //
    //             schoolsObj = [
    //                 {
    //                     name: "Bryant High School - Bryant, AR",
    //                     images: [
    //                         "/static/img/states/Arkansas/Bryant-2.JPG",
    //                         "/static/img/states/Arkansas/Bryant-6.jpg"]
    //                 },
    //                 {
    //                     name: "Fountain Lake High School - Hot Springs, AR",
    //                     images: [
    //                         "/static/img/states/Arkansas/Fountain-2.jpg",
    //                         "/static/img/states/Arkansas/Fountain-3.jpg",
    //                         "/static/img/states/Arkansas/Fountain-4.jpg"]
    //                 },
    //                 {
    //                     name: "Lake Hamilton High School - Pearcy, AR",
    //                     images: ["/static/img/states/Arkansas/Hamilton-1.jpg",
    //                         "/static/img/states/Arkansas/Hamilton-4.jpg"
    //                         ]
    //                 },
    //                 {
    //                     name: "Little Rock Christian Academy - Little Rock, AR",
    //                     images: [
    //                         "/static/img/states/Arkansas/Christian-1.JPG",
    //                         "/static/img/states/Arkansas/Christian-3.JPG"]
    //                 },
    //                 {
    //                     name: "Little Rock Central High School - Little Rock, AR",
    //                     images: [
    //                         "/static/img/states/Arkansas/Central-2.JPG",
    //                         "/static/img/states/Arkansas/Central-5.JPG"]
    //                 },
    //
    //                 {
    //                     name: "Morrilton High School - Morrilton, AR",
    //                     images: ["/static/img/states/Arkansas/Morrilton-1.JPG",
    //                         "/static/img/states/Arkansas/Morrilton-3.JPG"]
    //                 },
    //                 {
    //                     name: "North Little Rock High School - Little Rock, AR",
    //                     images: ["/static/img/states/Arkansas/North-Little-Rock-1.jpg"]
    //                 },
    //                 {
    //                     name: "Russellville High School - Russellville, AR",
    //                     images: ["/static/img/states/Arkansas/Russellville-1.jpg"]
    //                 },
    //                 {
    //                     name: "Vilonia High School - Vilonia, AR",
    //                     images: [ "/static/img/states/Arkansas/Vilonia-1.JPG",
    //                         "/static/img/states/Arkansas/Vilonia-3.jpg",
    //                         "/static/img/states/Arkansas/Vilonia-4.JPG"]
    //                 },
    //
    //             ];
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             );
    //         case "Illinois":
    //
    //             schoolsObj = [
    //                 {
    //                     name:"Lindenwood University Bellville - Bellville, IL",
    //                     images: [
    //                         "/static/img/states/Illinois/Lindenwood-5.jpg",
    //                         "/static/img/states/Illinois/Lindenwood-6.jpg"]
    //                 }
    //             ]
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             );
    //         case "Kansas":
    //             schoolsObj = [
    //                 {
    //                     name:"Bethany College - Lindsborg, KS",
    //                     images: ["/static/img/states/Kansas/Bethany-1.JPG",
    //                         "/static/img/states/Kansas/Bethany-2.JPG",
    //                         "/static/img/states/Kansas/Bethany-3.JPG"]
    //                 }
    //             ];
    //
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             );
    //         case "Kentucky":
    //             schoolsObj = [
    //                 {
    //                     name: "Cambellsville University, Finley Stadium - Cambellsville, KY",
    //                     images: ["/static/img/states/Kentucky/Finley Stadium, Campbellsville University.jpg",
    //                     "/static/img/states/Kentucky/Cambellsville-1.jpg"]
    //                 }
    //             ];
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             );
    //         case "Louisiana":
    //             schoolsObj = [
    //                 {
    //                     name: "",
    //                     images: []
    //                 }
    //             ];
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             )
    //         case "Mississippi":
    //             schoolsObj = [
    //                 {
    //                     name: "Belhaven University - Jackson, MS",
    //                     images: ["/static/img/states/Mississippi/Belhaven-1.jpg"]
    //                 },
    //                 {
    //                     name: "D'lberville High School - Biloxi, MS",
    //                     images: ["/static/img/states/Mississippi/D_lberville-1.jpg"]
    //                 },
    //                 {
    //                     name: "East Central Community College - Decatur, MS",
    //                     images: ["/static/img/states/Mississippi/East-Central-1.jpg"]
    //                 },
    //                 {
    //                     name: "East Mississippi Community College - Scooba, MS",
    //                     images: ["/static/img/states/Mississippi/East Mississippi-1.jpg"]
    //                 },
    //                 {
    //                     name: "Hancock High School - Kiln, MS (Home of Brett Favre)",
    //                     images: [
    //                         "/static/img/states/Mississippi/Kiln High School, Mississippi. Where Brett Favre played" +
    //                         " HS.jpg",
    //                         "/static/img/states/Mississippi/Hancock-1.jpg"
    //                     ]
    //                 },
    //                 {
    //                     name: "Jackson Prep - Jackson, MS",
    //                     images: ["/static/img/states/Mississippi/Jackson-1.jpg"]
    //                 },
    //                 {
    //                     name: "Lafayette High School - Oxford, MS",
    //                     images: ["/static/img/states/Mississippi/Lafayette-1.jpg"]
    //                 },
    //                 {
    //                     name: "Madison Ridgeland Academy - Madison, MS",
    //                     images: ["/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_1.jpg",
    //                         "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_2.jpg",
    //                         "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_3.jpg",
    //                         "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_4.jpg",
    //                         "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_5.jpg"]
    //                 },
    //                 {
    //                     name: "Madison Central High School - Madison, MS",
    //                     images: ["/static/img/states/Mississippi/Madison Central High School - Madison, MS_3.JPG"]
    //                 },
    //                 {
    //                     name: "Meridian High School - Meridian, MS",
    //                     images: ["/static/img/states/Mississippi/Meridian-1.jpg",
    //                         "/static/img/states/Mississippi/Meridian-2.jpg",]
    //                 },
    //                 {
    //                     name: "Mississippi College - Clinton, MS",
    //                     images: ["/static/img/states/Mississippi/Mississippi College - Clinton, MS2.jpg"]
    //                 },
    //                 {
    //                     name: "Pearl High School - Pearl, MS",
    //                     images: [
    //                         "/static/img/states/Mississippi/Pearl High School - Pearl, MS_2.JPG",
    //                         "/static/img/states/Mississippi/Pearl High School - Pearl, MS_3.JPG"]
    //                 },
    //                 {
    //                     name: 'Picayune Memorial High School - Picayune, MS',
    //                     images: [
    //                         "/static/img/states/Mississippi/Picayune Memorial High School - Picayune, MS_2b.jpg",
    //                         "/static/img/states/Mississippi/Picayune-1.jpg"
    //                     ]
    //                 }
    //
    //             ];
    //
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             )
    //         case "Missouri":
    //             schoolsObj = [
    //                 {
    //                     name: "Lindenwood University - Saint Charles, MO",
    //                     images: ["/static/img/states/Missouri/100_0004.JPG",
    //                         "/static/img/states/Missouri/100_0014.JPG",
    //                         "/static/img/states/Missouri/Lindenwood Aerial.jpg"]
    //                 },
    //                 {
    //                     name: "Southwest Baptist University - Bolivar, MO",
    //                     images: ["/static/img/states/Missouri/Southwest Baptist University - Bolivar, MO.jpg", "/static/img/states/Missouri/Southwest Baptist Univ. - Bolivar, MO_a.jpg", "/static/img/states/Missouri/Southwest Baptist Univ. - Bolivar, MO_b.jpg", "/static/img/states/Missouri/Southwest Baptist Univ. - Bolivar, MO_c.jpg"]
    //                 }
    //             ];
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             )
    //         case "North Carolina":
    //             schoolsObj = [
    //                 {
    //                     name: "Weddington Chapel Park - Charlotte, NC",
    //                     images: [
    //                         "/static/img/states/North Carolina/Weddington-2.JPG",
    //                         "/static/img/states/North Carolina/Weddington-3.JPG"]
    //                 }
    //             ];
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             )
    //         case "Tennessee":
    //             schoolsObj = [
    //                 {
    //                     name: "City of Collierville, TN",
    //                     images: ["/static/img/states/Tennessee/Collierville-1.jpg"]
    //                 },
    //                 {
    //                     name: "University of Memphis - Memphis, TN",
    //                     images: [
    //                         "/static/img/states/Tennessee/UofM-1.JPG",
    //                         "/static/img/states/Tennessee/UofM-9.JPG"]
    //                 }
    //             ];
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             )
    //
    //         case 'Texas':
    //             schoolsObj = [
    //                 {
    //                     name: "Dekaney High School - Houston, TX",
    //                     images: ["/static/img/states/Texas/Dekaney-1.jpg"]
    //                 },
    //                 {
    //                     name: "Spring High School - Spring, Texas",
    //                     images: ["/static/img/states/Texas/Spring-1.jpg", "/static/img/states/Texas/Spring High School-Houston, TX_b.jpg", "/static/img/states/Texas/Spring High School-Houston, TX_a.jpg"]
    //                 },
    //                 {
    //                     name: "Westfield High School - Houston, TX",
    //                     images: [ "/static/img/states/Texas/Westfield-1.jpg",
    //                         "/static/img/states/Texas/Westfield-2.jpg", "/static/img/states/Texas/Westfield High School -" +
    //                         " Houston, TX_a.jpg", "/static/img/states/Texas/Westfield High School - Houston, TX_b.jpg", "/static/img/states/Texas/Westfield High School - Houston, TX_c.jpg"]
    //                 }
    //             ];
    //
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             )
    //         case "Virginia":
    //             schoolsObj = [
    //                 {
    //                     name: "T.C. Williams High School - Alexandria, VA",
    //                     images: ["/static/img/states/Virginia/TC-Williams-1.JPG",
    //                         "/static/img/states/Virginia/TC-Williams-2.jpg"]
    //                 },
    //             ];
    //             return (
    //                 schoolsObj.map( (school) => {
    //                     let schoolUrl = `/project-gallery/state/schoolpage?schoolName=${school.name}`;
    //                     return (<li className="school-names"><Link href={schoolUrl}><a><h2>{school.name}</h2></a></Link>
    //                     </li>)
    //                 })
    //             )
    //     }
    // }

    renderSchoolList()
    {
        return _.map(this.state.schools, (school, index) => {
            let schoolUrl = `/project-gallery/state/schoolpage`;
            return (
                <li key={index} className="school-names">
                    <Link
                        href={{pathname:schoolUrl, query: {schoolName: `${school}`,state: `${this.props.usState}`}}}>
                        <a>
                            <h2>{school}</h2>
                        </a>
                    </Link>
                </li>)
        })
    }

    render ()
    {
        return (
            <div className="us-state-container">
                <h1>{this.props.usState} Projects</h1>
                <ul >
                    {this.renderSchoolList()}
                </ul>

                <h3><Link href="/project-gallery/football-soccer"><a>Back to map</a></Link></h3>
            </div>
        )
    }
}

export default UsState