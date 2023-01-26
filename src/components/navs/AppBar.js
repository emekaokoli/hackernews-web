import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { DataContext } from '../../context/store';
import '../../styles/nav.styles.css';

function AppBar() {
  const { searchText, setSearchText } = useContext(DataContext);

  let activeStyle = {
    color: 'tomato !important',
    textDecoration: 'none',
    backgroundColor: 'unset !important',
  };
  return (
    <header>
      <nav>
        <ul>
          <div className="header-logo">
            <NavLink to="/">Hacker news</NavLink>
          </div>
          <li className="nav-link">
            <NavLink
              to="/stories/top"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Top stories
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/stories/new"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Latest stories
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/stories/best"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              Best stories
            </NavLink>
          </li>
        </ul>

        <input
          className="search-bar-input"
          type="search"
          name={searchText}
          placeholder="Filter by story title"
          aria-label="Search box"
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value);
          }}
        />
      </nav>
      <Outlet />
    </header>
  );
}

export default AppBar;
