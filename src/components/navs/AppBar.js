import { NavLink } from 'react-router-dom';
import '../../styles/nav.styles.css';

function AppBar() {
  return (
    <header className="header">
      <h1 className="header-h1">Hacker news</h1>
      <nav>
        <NavLink to="/top" activeClassName="active">
          Top stories
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          Latest stories
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          Best stories
        </NavLink>
      </nav>
    </header>
  );
}

export default AppBar;
