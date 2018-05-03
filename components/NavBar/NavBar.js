import './navbar.css';
class NavBar extends React.Component
{
    render()
    {
        return (
            <div className="main-nav">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">WHO WE ARE</a></li>
                    <li><a href="#">PRODUCTS</a></li>
                    <li><a href="#">PROJECTS</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
            </div>
        )
    }
}

export default NavBar