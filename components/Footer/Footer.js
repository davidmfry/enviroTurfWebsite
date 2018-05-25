import Link from 'next/link';
import './footer.css';

const Footer = (props) => (
    <footer>
        <div className="footer-logo">
            <Link href="/"><a><img src="/static/img/ets-logo.png" alt="EnvioTurf logo" width="240"/></a></Link>
        </div>

        <div className='footer-social'>
            <div className="footer-social-icon">
                <a href=""><img  src="/static/social/twitter.png" alt="twitter icon"/></a>
            </div>
            <div className="footer-social-icon">
                <img src="/static/social/facebook.png" alt="facebook icon"/><a href=""></a>
            </div>
            <div className="footer-social-icon">
                <a href=""><img src="/static/social/instagram.png" alt="instagram icon"/></a>
            </div>
            <div className="footer-social-icon">
                <a href=""><img src="/static/social/linkedin-icon.png" alt="linkedin icon"/></a>
            </div>
        </div>


        <div className='footer-address'>
            <h5>Contact Information</h5>
            <p>EnviroTurf <br/>
                PO BOX 321471
                2580 Lakeland Drive<br/>
                Flowood, MS 39232 <br/>
                Email: info@enviroturf.us<br/>
                Phone: 601.664.1010
                Fax: 601.664.1030

            </p>
        </div>

        <div className="footer-links">
            <h5>Quick Links</h5>
            <a href="http://www.sporturf.com">Sport Turf</a>
            <a href="http://www.syntheticturfcouncil.org">Synthetic Turf Council</a>

            <div className="footer-sport-icons">
                <img src="/static/img/Sport-Turf-Seal.png" alt="Sport Turf Seal" width="210"/>
                <img src="/static/img/Synthetic-Turf-Council-Seal.png" alt="Synthetic Turf Council Seal" width="100"/>
            </div>
        </div>



        <p className="copyright">Some Kind of Idea &copy; 2018</p>
        
    </footer>
)

export default Footer