import './baseball-softball.css'
import Layout from '../../components/Layout';
import SchoolItem from '../../components/Map/SchoolItem';

class BaseBallSoftBall extends React.Component
{
    constructor (props)
    {
        super(props)
        this.state = {
        }
    }

    componentDidMount ()
    {

    }

    renderImages = () =>
    {

        const schoolsObj = [
            {
                name: "Corinth High School - Corinth, MS",
                images: ["/static/img/Baseball-Softball/Corinth-1.jpg",
                    "/static/img/Baseball-Softball/Corinth-2.jpg",
                    "/static/img/Baseball-Softball/Corinth-3.jpg"]
            },
            {
                name: "Lou Brock Spotrs Complex, Lindenwood Univ. - St Charles, MO",
                images: [
                    "/static/img/Baseball-Softball/Lou Brock Sports Complex_St Charles, MO_2.jpg",
                    "/static/img/Baseball-Softball/Lou Brock Sports Complex_St Charles, MO_1.jpg"]
            },
            {
                name: "Ole Miss - Oxford, MS",
                images: ["/static/img/Baseball-Softball/Ole-Miss-1.png"]
            },
            {
                name: "Sabetha Baseball Field - Sabetha, KS",
                images: ["/static/img/Baseball-Softball/Sabetha-1.jpg",
                    "/static/img/Baseball-Softball/Sabetha-2.jpg"]
            },

        ];
        return (
            schoolsObj.map( (school) => (
                <SchoolItem name={school.name} images={school.images}/>
            ))
        );

    }

    render ()
    {
        return (
            <Layout>
            <div className="baseball-softball-container">
                <h1>Completed Projects <br/>(Baseball/Softball)</h1>
                <div className="baseball-softball-image-box-container">
                    {this.renderImages()}
                </div>

            </div>
            </Layout>
        )
    }
}

export default BaseBallSoftBall