import Head from 'next/head';
import Link from 'next/link';
import './layout.css';
import NavBar from './NavBar/NavBar'
import NavBar2 from './NavBar/NavBar2'

import Footer from '../components/Footer/Footer';

class Layout extends React.Component {

    componentDidMount()
    {

    }

    render()
    {
        return (
            <div>
                <Head>
                    <title>EnviroTurf</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
                    <meta charSet="UTF-8"/>
                    {/*<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"/>*/}
                    <link href="https://fonts.googleapis.com/css?family=Rubik:400,700,900" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet"/>
                    <link rel="stylesheet" href="/_next/static/style.css" />



                </Head>
                <NavBar2/>
                {this.props.children}
                <Footer/>

            </div>
        )
    }
}

export default Layout