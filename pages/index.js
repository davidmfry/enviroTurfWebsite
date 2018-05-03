import Head from 'next/head';
import Layout from '../components/Layout';

import './index.css';

// Component Sections
import IntroSection from "../components/InfoSection/IntroSection";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import BigQuote from "../components/BigQuote/BigQuote";
import WhatWeProvide from "../components/WhatWeProvide/WhatWeProvide";
import MeetOurTeam from "../components/MeetOurTeam";
import Quote from "../components/Quote/Quote";
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
        <IntroSection/>
        <NavBar/>
        <WhoWeAre/>
        <BigQuote/>
        <div className="color-section"></div>
        <WhatWeProvide/>
        <MeetOurTeam/>
        <Quote/>
        <div className="color-section"></div>
        <VideoSection/>
        <LatestNews/>
        {/*<Projects/>*/}
        {/*<Products/>*/}
        {/*<Map/>*/}
        {/*<ContactUs/>*/}
        {/*<Footer/>*/}
    </Layout>
)

export default Index
