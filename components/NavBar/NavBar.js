import Link from 'next/link';
import './navbar.css';

class NavBar extends React.Component
{
    render()
    {
        return (
            <div className="nav">
                <label htmlFor="show-menu" className="show-menu">&#9776;</label>
                <input type="checkbox" id="show-menu" role="button"/>
                <img className="nav-logo" src="/static/img/ets-logo.png" alt="" width="160"/>
                <ul id="menu">
                    <li><Link href="/"><a>HOME</a></Link></li>
                    <li>
                    <a>About</a>
                    <ul className="hidden">
                        <li><Link href="/meetourteam"><a>Meet Our Team</a></Link></li>
                        <li><Link href="/whoweare"><a>Who We Are</a></Link></li>
                        {/*<li><a href="#testimonials">Testimonials</a></li>*/}
                        <li><Link href="/missionstatment"><a>Mission Statement</a></Link></li>
                    </ul>
                    </li>
                    <li><Link href="/products"><a href="">Products</a></Link></li>
                    <li>
                    <a>Project Gallery</a>
                    <ul className="hidden">
                        <li><Link href="/project-gallery/football-soccer"><a>Football/Soccer</a></Link></li>
                        <li><Link href="/project-gallery/baseball-softball"><a>Baseball/Softball</a></Link></li>

                    </ul>
                    </li>
                    <li><Link href="/contactus"><a href="">Contact Us</a></Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar