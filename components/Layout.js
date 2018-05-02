import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>EnviroTurf</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css?family=Rubik:400,700,900" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Space+Mono" rel="stylesheet"/>
            <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <div className='container'>
            {props.children}
        </div>
    </div>
)

export default Layout