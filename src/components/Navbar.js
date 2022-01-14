import {BrowserRouter as Router, NavLink} from 'react-router-dom'
const Navbar = (props) => {
    return (
        <header>
        <nav>
          <ul>
            <li><NavLink className='left' to={props.startPage}>Ekran główny</NavLink></li>
            <li><h1 className='logo'>{props.logo}</h1></li>
            <li><NavLink className='right' to="/about">O nas</NavLink></li>
            <li><NavLink className='right' to="/contact">Kontakt</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
export default Navbar;