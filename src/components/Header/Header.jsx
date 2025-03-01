import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container header-container">
                    <h2><Link to={'/'}>shop</Link></h2>

                    <nav className="header-nav">
                        <Link to={'/'}>home</Link>
                        <Link to={'/cart'}>cart</Link>
                    </nav>
            </div>
        </header>
    );
}

export default Header;
