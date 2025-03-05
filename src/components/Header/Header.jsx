import { Link } from "react-router-dom";
import './header.scss';
import { useSelector } from "react-redux";

const Header = () => {
    const categories = useSelector(s => s.reducer.categories);
    return (
        <header className="header">
            <div className="container header-container">
                    <h2 className="header-logo"><Link to={'/'}>shop</Link></h2>

                    <nav className="header-nav">
                        <Link to={'/'}>home</Link>
                        {
                            categories.map(item=>{
                                return <Link to={`/category/${item}`} key={item} >{item}</Link>
                            })
                        }
                        <Link to={'/cart'}>cart</Link>
                    </nav>
            </div>
        </header>
    );
}

export default Header;
