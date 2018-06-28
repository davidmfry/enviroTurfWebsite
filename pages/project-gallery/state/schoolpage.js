import SchoolItem from "../../../components/Map/SchoolItem";
import Layout from "../../../components/Layout";
import firebase from "../../../config/firebase";


class schoolPage extends React.Component
{
    componentDidMount ()
    {
        const dbRef = firebase.database().ref();
        const statesRef = dbRef.child('states');

        statesRef.on("value", snap => {
            let items = snap.val();
            for(let item in items)
            {
                console.log(items[item].schools[0].images)
            }
        })
        // itemsRef.on('value', (snapshot) => {
        //     let items = snapshot.val();
        //     let newState = [];
        //     for (let item in items)
        //     {
        //         newState.push({
        //             id: item,
        //             headline: items[item].headline,
        //             headline2: items[item].headline2,
        //             headerImage: items[item].headerImage,
        //             content: items[item].content,
        //             description: items[item].description
        //         })
        //
        //     }
        //     this.setState({
        //         items:newState.reverse()
        //     })
        // })
    }

    renderImages = (schoolName) => {
        let imageArray;
        switch (schoolName) {
            case "American Christian Academy - Tuscaloosa, AL":
                return imageArray = [
                    "/static/img/states/Alabama/aca2-007.jpg",
                    "/static/img/states/Alabama/aca2-ari.jpg"];

            case "Briarwood Christian School - Birmingham, AL":
                return imageArray = ["/static/img/states/Alabama/briarwood-1.JPG",
                    "/static/img/states/Alabama/briarwood-2.JPG",
                    "/static/img/states/Alabama/briarwood-3.JPG",
                    "/static/img/states/Alabama/briarwood-4.JPG"];

            case "Faulkner University - Montgomery, AL":
                return imageArray = ["/static/img/states/Alabama/Faulkner-1.jpg"];

            case "Miles College - Fairfield, AL":
                return imageArray = ["/static/img/states/Alabama/Miles-1.jpg",
                    "/static/img/states/Alabama/Miles-3.jpg"];

            case "University of West Alabama - Livingston, AL":
                return imageArray = ["/static/img/states/Alabama/UWA-009.JPG",
                    "/static/img/states/Alabama/UWA-012.JPG"];
            case "Bryant High School - Bryant, AR":
                return imageArray = [
                    "/static/img/states/Arkansas/Bryant-2.JPG",
                    "/static/img/states/Arkansas/Bryant-6.jpg"];

            case "Fountain Lake High School - Hot Springs, AR":
                return imageArray = [
                    "/static/img/states/Arkansas/Fountain-2.jpg",
                    "/static/img/states/Arkansas/Fountain-3.jpg",
                    "/static/img/states/Arkansas/Fountain-4.jpg"];

            case "Lake Hamilton High School - Pearcy, AR":
                return imageArray = ["/static/img/states/Arkansas/Hamilton-1.jpg",
                    "/static/img/states/Arkansas/Hamilton-4.jpg"];

            case "Little Rock Central High School - Little Rock, AR":
                return imageArray = [
                    "/static/img/states/Arkansas/Central-2.JPG",
                    "/static/img/states/Arkansas/Central-5.JPG"];

            case "Little Rock Christian Academy - Little Rock, AR":
                return imageArray = [
                    "/static/img/states/Arkansas/Christian-1.JPG",
                    "/static/img/states/Arkansas/Christian-3.JPG"];

            case "Morrilton High School - Morrilton, AR":
                return imageArray = ["/static/img/states/Arkansas/Morrilton-1.JPG",
                    "/static/img/states/Arkansas/Morrilton-3.JPG"];

            case "North Little Rock High School - Little Rock, AR":
                return imageArray = ["/static/img/states/Arkansas/North-Little-Rock-1.jpg"];

            case "Russellville High School - Russellville, AR":
                return imageArray = ["/static/img/states/Arkansas/Russellville-1.jpg"];

            case "Vilonia High School - Vilonia, AR":
                return imageArray = ["/static/img/states/Arkansas/Vilonia-1.JPG",
                    "/static/img/states/Arkansas/Vilonia-3.jpg",
                    "/static/img/states/Arkansas/Vilonia-4.JPG"];

            case "Lindenwood University Bellville - Bellville, IL":
                return imageArray = [
                    "/static/img/states/Illinois/Lindenwood-5.jpg",
                    "/static/img/states/Illinois/Lindenwood-6.jpg"]

            case "Bethany College - Lindsborg, KS":
                return imageArray = ["/static/img/states/Kansas/Bethany-1.JPG",
                    "/static/img/states/Kansas/Bethany-2.JPG",
                    "/static/img/states/Kansas/Bethany-3.JPG"];

            case "Cambellsville University, Finley Stadium - Cambellsville, KY":
                return imageArray = ["/static/img/states/Kentucky/Finley Stadium, Campbellsville University.jpg"]

            case "Madison Ridgeland Academy - Madison, MS":
                return imageArray = ["/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_1.jpg",
                    "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_2.jpg",
                    "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_3.jpg",
                    "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_4.jpg",
                    "/static/img/states/Mississippi/Madison Ridgeland Academy - Madison, MS_5.jpg"]

            case "Madison Central High School - Madison, MS":
                return imageArray = ["/static/img/states/Mississippi/Madison Central High School - Madison, MS_3.JPG"]

            case "Belhaven University - Jackson, MS":
                return imageArray = ["/static/img/states/Mississippi/Belhaven-1.jpg"]

            case "D'lberville High School - Biloxi, MS":
                return imageArray = ["/static/img/states/Mississippi/D_lberville-1.jpg"]

            case "East Central Community College - Decatur, MS":
                return imageArray = ["/static/img/states/Mississippi/East-Central-1.jpg"]

            case "East Mississippi Community College - Scooba, MS":
                return imageArray = ["/static/img/states/Mississippi/East Mississippi-1.jpg"]

            case "Hancock High School - Kiln, MS (Home of Brett Favre)":
                return imageArray = ["/static/img/states/Mississippi/Kiln High School, Mississippi. Where Brett" +
                " Favre played HS.jpg"];

            case "Jackson Prep - Jackson, MS":
                return imageArray = ["/static/img/states/Mississippi/Jackson-1.jpg"]

            case "Lafayette High School - Oxford, MS":
                return imageArray = ["/static/img/states/Mississippi/Lafayette-1.jpg"]

            case "Meridian High School - Meridian, MS":
                return imageArray = ["/static/img/states/Mississippi/Meridian-1.jpg",
                    "/static/img/states/Mississippi/Meridian-2.jpg",]

            case "Mississippi College - Clinton, MS":
                return imageArray = ["/static/img/states/Mississippi/Mississippi College - Clinton, MS2.jpg"]

            case "Pearl High School - Pearl, MS":
                return imageArray = [
                    "/static/img/states/Mississippi/Pearl High School - Pearl, MS_2.JPG",
                    "/static/img/states/Mississippi/Pearl High School - Pearl, MS_3.JPG"]

            case "Lindenwood University - Saint Charles, MO":
                return imageArray = ["/static/img/states/Missouri/100_0004.JPG",
                "/static/img/states/Missouri/100_0014.JPG",
                "/static/img/states/Missouri/Lindenwood Aerial.jpg"]

            case "Southwest Baptist University - Bolivar, MO":
                return imageArray = ["/static/img/states/Missouri/Southwest Baptist University - Bolivar, MO.jpg"]
            case "Weddington Chapel Park - Charlotte, NC":
                return imageArray =  [
                "/static/img/states/North Carolina/Weddington-2.JPG",
                "/static/img/states/North Carolina/Weddington-3.JPG"]

            case "City of Collierville, TN":
                return imageArray =  ["/static/img/states/Tennessee/Collierville-1.jpg"]

            case"University of Memphis - Memphis, TN":
                return imageArray = [
                "/static/img/states/Tennessee/UofM-1.JPG",
                "/static/img/states/Tennessee/UofM-9.JPG"]

            case "Dekaney High School - Houston, TX":
                return imageArray =  ["/static/img/states/Texas/Dekaney-1.jpg"]

            case "Spring High School - Spring, Texas":
                return imageArray =  ["/static/img/states/Texas/Spring-1.jpg"]

            case "Westfield High School - Houston, TX":
                return imageArray =  [ "/static/img/states/Texas/Westfield-1.jpg",
                "/static/img/states/Texas/Westfield-2.jpg"]

            case "T.C. Williams High School - Alexandria, VA":
                return imageArray = ["/static/img/states/Virginia/TC-Williams-1.JPG",
                "/static/img/states/Virginia/TC-Williams-2.jpg"];

            case "Picayune Memorial High School - Picayune, MS":
                return imageArray =["/static/img/states/Mississippi/Picayune Memorial High School - Picayune," +
                " MS_2b.jpg.jpg"];

        }
    }


    render()
    {


        return (
            <Layout>
                <SchoolItem name={this.props.url.query.schoolName} images={this.renderImages(this.props.url.query.schoolName)}/>
            </Layout>
        )
    }

}

export default  schoolPage