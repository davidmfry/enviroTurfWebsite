import Head from 'next/head';
import Link from 'next/link';
import './layout.css';

import Footer from '../components/Footer/Footer';

const Layout = (props) => (
    <div>
        <Head>
            <title>EnviroTurf</title>
            <meta name="viewport" content="width=device-width"/>
            <meta charSet="UTF-8"/>
            {/*<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"/>*/}
            <link href="https://fonts.googleapis.com/css?family=Rubik:400,700,900" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet"/>
            <link rel="stylesheet" href="/_next/static/style.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossOrigin="anonymous"/>
        </Head>
        <div className='container'>
            <div className="nav">
                <label htmlFor="show-menu" className="show-menu">&#9776;</label>
                <input type="checkbox" id="show-menu" role="button"/>
                <img className="nav-logo" src="/static/img/ets-logo.png" alt="" width="160"/>
                <ul id="menu">
                    <li><Link href="/"><a>HOME</a></Link></li>
                    <li>
                        <a href="">About</a>
                        <ul className="hidden">
                            <li><a href="#">Meet Our Team</a></li>
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Mission Statement</a></li>
                        </ul>
                    </li>
                    <li><a href="">Products</a></li>
                    <li>
                        <a href="">Project Gallery</a>
                        <ul className="hidden">
                            <li><Link href="/project-gallery/baseball-softball"><a>Baseball/Softball</a></Link></li>
                            <li><Link href="/project-gallery/football-soccer"><a>Football/Soccer</a></Link></li>
                        </ul>
                    </li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>

            {props.children}
        </div>
        <Footer/>
    </div>
)

export default Layout