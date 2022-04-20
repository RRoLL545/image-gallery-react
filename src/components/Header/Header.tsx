import NavBar from '../NavBar/NavBar';
import './Header.css';

/**
 * Returns Header element
 * @returns Header element
 */
const Header = (): JSX.Element => {
  return (
    <>
      <header className="header">
        <div className="gallery-logo">
          <div className='logo-image'></div>
          <h1 className="h1-header">Image gallery</h1>
        </div>
        <NavBar />
      </header>
    </>
  )
}

export default Header;