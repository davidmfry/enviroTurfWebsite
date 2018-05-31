import Head from 'next/head';
import global from 'global';
import NoSSR from 'react-no-ssr';

if (typeof window !== 'undefined') {require('react-render-in-browser');}

import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

import ScrollableAnchor from 'react-scrollable-anchor';

import Layout from '../components/Layout';

import './index.css';

// Component Sections
import IntroSection from "../components/IntroSection/IntroSection";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import BigQuote from "../components/BigQuote/BigQuote";
import WhatWeProvide from "../components/WhatWeProvide/WhatWeProvide";
import MeetOurTeam from "../components/MeetOurTeam/MeetOurTeam";
import LatestNews from "../components/LatestNews/LatestNews";
import Products from "../components/Products/Products";
import ContactUs from "../components/ContactUs/ContactUs";


class Index extends React.Component{

    componentDidMount()
    {

    }

    render()
    {
        return (
            <Layout>
                <IntroSection/>
                <ScrollableAnchor id={'who-we-are'}>
                    <WhoWeAre/>
                </ScrollableAnchor>
                <BigQuote/>
                {/*<div className="color-section"></div>*/}
                <WhatWeProvide/>
                <ScrollableAnchor id={'meet-our-team'}>
                    <MeetOurTeam/>
                </ScrollableAnchor>
                <div className="color-section"></div>
                <LatestNews/>
                <div className="color-section"></div>
                <Products/>
                <ContactUs/>
            </Layout>
        );

    }
}


export default Index

// <Layout>

// </Layout>