import { Link } from "react-router-dom";
import './style.css';
function Header() {
    return(
    <header>
        <Link className='logo' to='/'>Multi Movies</Link>
        <Link className='favoritos' to='/favoritos'>My Movies</Link>
    </header>
    );
}

export default Header;