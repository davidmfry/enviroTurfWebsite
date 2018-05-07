import Head from 'next/head';
import './layout.css';

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
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous"/>
        </Head>
        <div className='container'>
            <div className="nav">
                <label for="toggle">&#9776;</label>
                <img className="nav-logo" src="/static/img/Logo.png" alt=""/>
                <input type="checkbox" id="toggle"/>
                <div className="menu">
                    <a href="#">HOME</a>
                    <a href="#">WHO WE ARE</a>
                    <a href="#">PRODUCTS</a>
                    <a href="#">PROJECTS</a>
                    <a href="#">BLOG</a>
                    <a href="#">CONTACT US</a>
                </div>
            </div>
            {props.children}
        </div>
    </div>
)

export default Layout