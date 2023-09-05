import React from 'react';
import './Header.css';

//import { BsSearch } from 'react-icons/bs';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Masala Melodies Logo" />
      <nav>
        <ul className="nav-menu">
          <li><a href="#categories">Categories</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;




// <input
// type="text"
// placeholder="Search"
// className={`search-input ${isSearchExpanded ? 'visible' : ''}`}
// />
{/* <li className={isSearchExpanded ? 'search-expanded' : ''}>
<button className={`search-icon ${isSearchExpanded ? 'active' : ''}`} onClick={handleSearchClick}>
  <BsSearch />
</button>

</li> */}
    // const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  
    // const handleSearchClick = () => {
    //   setIsSearchExpanded(!isSearchExpanded);
    // };