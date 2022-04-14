import './NavBar.css'

/**
 * Returns NavBar element
 * @returns NavBar element
 */
const NavBar = (): JSX.Element => {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-bar-list">
        <li><a href="/" className="navigation-bar-list__item">Main page</a></li>
        <li><a href="/" className="navigation-bar-list__item">Other page</a></li>
        <li><a href="/" className="navigation-bar-list__item">Help page</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;