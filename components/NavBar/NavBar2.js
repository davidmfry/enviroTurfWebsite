import Link from 'next/link';
import './navbar2.css';

class NavBar2 extends React.Component
{
    myFunction() {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    render()
    {
        return (
            <div className="topnav" id="myTopnav">
                <Link href="/"><a className={"active"}>Home</a></Link>
                <div className="dropdown">
                    <button className="dropbtn">About
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link href="/meetourteam"><a>Meet Our Team</a></Link>
                        <Link href="/whoweare"><a>Who We Are</a></Link>
                        <Link href="/missionstatment"><a>Mission Statement</a></Link>
                    </div>
                </div>
                <Link href="/products"><a>Products</a></Link>
                <div className="dropdown">
                    <button className="dropbtn">Project Gallery
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link href="/project-gallery/football-soccer"><a>Football/Soccer</a></Link>
                        <Link href="/project-gallery/baseball-softball"><a>Baseball/Softball</a></Link>
                    </div>
                </div>
                <Link href="/contactus"><a>Contact Us</a></Link>
                <a href="javascript:void(0);" style={{fontSize:25}} className="icon"
                   onClick={() => this.myFunction()}>&#9776;</a>
            </div>
        )
    }
}

export default NavBar2