
import { FaHome } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import './Header.scss'
// import Header from '../components/Header
import Search from "./Search";
// import "./index.scss"

function Header() {
    return(
        <header className='header'>
     

    {/* Logo */}
    <div className='header__logo'>
        <FaHome/>
        </div>

    {/* Text */}
    <div className='header__text'>
        <h1>Todoist</h1>
    </div>

    <div className="header__search">
          <Search />
        </div>


</header>
    )
}


export default Header;