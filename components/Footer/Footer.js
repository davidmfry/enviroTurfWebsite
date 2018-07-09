import Link from 'next/link';
import _ from 'lodash';
import './footer.css';

import React, {Component} from 'react';


import firebase, {homepageDBId} from "../../config/firebase";

class Footer extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            address: '',
            city: '',
            usState: '',
            zipCode: '',
            email:'',
            phone: '',
            fax:'',
            twitter: '',
            facebook:'',
            instagram:'',
            linkedin:'',
            quickLinks: [],
        }
    }

    componentDidMount() {
        firebase.database().ref("homepageitems").child(homepageDBId).on('value', (snapshot) => {
            const {facebookUrl, footerAddress, footerCity, footerEmail,footerFax, footerPhone, footerState, footerZip, instagramUrl, linkedinUrl,quickLinks, twitterUrl} = snapshot.val();
            this.setState({
                address: footerAddress,
                city: footerCity,
                usState: footerState,
                zipCode: footerZip,
                email:footerEmail,
                phone: footerPhone,
                fax:footerFax,
                twitter: twitterUrl,
                facebook: facebookUrl,
                instagram: instagramUrl,
                linkedin: linkedinUrl,
                quickLinks,
            })


        })
    }
    renderQuickLinks()
    {
        return _.map(this.state.quickLinks, (link, key) => {
            return (
                <a key={key} href={link.url}>{link.name}</a>
            )
        })
    }

    render() {
        return (
            <footer>
                <div className="footer-logo">
                    <Link href="/"><a><img src="/static/img/ets-logo.png" alt="EnvioTurf logo" width="240"/></a></Link>
                </div>

                <div className='footer-social'>
                    <div className="footer-social-icon">
                        <a href={this.state.twitter}><img  src="/static/social/twitter.png" alt="twitter icon"/></a>
                    </div>
                    <div className="footer-social-icon">
                        <a href={this.state.facebook}><img src="/static/social/facebook.png" alt="facebook icon"/></a>
                    </div>
                    <div className="footer-social-icon">
                        <a href={this.state.instagram}><img src="/static/social/instagram.png" alt="instagram icon"/></a>
                    </div>
                    <div className="footer-social-icon">
                        <a href={this.state.linkedin}><img src="/static/social/linkedin-icon.png" alt="linkedin icon"/></a>
                    </div>
                </div>


                <div className='footer-address'>
                    <h5>Contact Information</h5>
                    <p>
                        EnviroTurf <br/>
                        {this.state.address}<br/>
                        {this.state.city}, {this.state.usState} {this.state.zipCode} <br/>
                        Email: {this.state.email}<br/>
                        Phone: {this.state.phone}<br/>
                        Fax: {this.state.fax}

                    </p>
                </div>

                <div className="footer-links">
                    <h5>Quick Links</h5>
                    {this.renderQuickLinks()}

                    <div className="footer-sport-icons">
                        <img src="/static/img/Sport-Turf-Seal.png" alt="Sport Turf Seal" width="210"/>
                        <img src="/static/img/Synthetic-Turf-Council-Seal.png" alt="Synthetic Turf Council Seal" width="100"/>
                    </div>
                </div>



                <p className="copyright">Some Kind of Idea &copy; 2018</p>

            </footer>
        );
    }
}

export default Footer