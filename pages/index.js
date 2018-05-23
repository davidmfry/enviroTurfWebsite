import Head from 'next/head';
import ScrollableAnchor from 'react-scrollable-anchor';

import Layout from '../components/Layout';

import './index.css';

// Component Sections
import IntroSection from "../components/IntroSection/IntroSection";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import BigQuote from "../components/BigQuote/BigQuote";
import WhatWeProvide from "../components/WhatWeProvide/WhatWeProvide";
import MeetOurTeam from "../components/MeetOurTeam/MeetOurTeam";
import Quote from "../components/Quote/Quote";
import VideoSection from "../components/VideoSection/VideoSection";
import LatestNews from "../components/LatestNews/LatestNews";
import Projects from "../components/Projects/Projects";
import Products from "../components/Products/Products";
import Map from "../components/Map/Map";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const Index = (props) => (
    <Layout>
        <IntroSection/>
        <ScrollableAnchor id={'who-we-are'}>
            <WhoWeAre/>
        </ScrollableAnchor>
        <BigQuote/>
        <div className="color-section"></div>
        <WhatWeProvide/>
        <ScrollableAnchor id={'meet-our-team'}>
            <MeetOurTeam/>
        </ScrollableAnchor>
        {/*<Quote/>*/}
        <div className="color-section"></div>
        {/*<ScrollableAnchor id={'testimonials'}>*/}
                {/*<VideoSection/>*/}
        {/*</ScrollableAnchor>*/}
        <LatestNews/>
        {/*<Projects/>*/}
        {/*<Quote/>*/}
        <div className="color-section"></div>
        <Products/>
        <ContactUs/>
        {/*<Footer/>*/}
    </Layout>
)

export default Index
