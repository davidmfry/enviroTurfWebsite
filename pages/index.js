import Head from 'next/head';
import Layout from '../components/Layout';

import './index.css';

// Component Sections
import IntroSection from "../components/InfoSection/IntroSection";
import WhoWeAre from "../components/WhoWeAre";
import BigQuote from "../components/BigQuote";
import WhatWeProvide from "../components/WhatWeProvide";
import MeetOurTeam from "../components/MeetOurTeam";
import Quote from "../components/Quote";
import VideoSection from "../components/VideoSection";
import LatestNews from "../components/LatestNews";
import Projects from "../components/Projects";
import Products from "../components/Products";
import Map from "../components/Map/Map";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar/NavBar";

const Index = (props) => (
    <Layout>
        <NavBar/>
        <IntroSection/>
        {/*<WhoWeAre/>*/}
        {/*<BigQuote/>*/}
        {/*<WhatWeProvide/>*/}
        {/*<MeetOurTeam/>*/}
        {/*<Quote/>*/}
        {/*<VideoSection/>*/}
        {/*<LatestNews/>*/}
        {/*<Projects/>*/}
        {/*<Products/>*/}
        {/*<Map/>*/}
        {/*<ContactUs/>*/}
        {/*<Footer/>*/}
    </Layout>
)

export default Index
