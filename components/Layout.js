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
                    <title>EnviroTurf | The Next Generation in Synthetic Turf</title>
                    <meta name="description" content="Enviroturf was established in 2006 with a goal of providing superior products that are durable, cost efficient and aesthetically pleasing while maintaining a commitment to supplying the safest surface possible."/>
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