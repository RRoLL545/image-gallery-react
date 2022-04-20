import './Footer.css';

/**
 * Returns Footer element
 * @returns Footer element
 */
const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="gallery-footer-logo">
          <div className='footer-logo-image'></div>
        </div>
        <div className="social-links">
          <ul className="social-links-list">
            <li className="social-link-item">
              <a href="https://vk.com" target="_blank" className="social-link" rel="noreferrer">
              </a>
            </li>
            <li className="social-link-item">
              <a href="https://t.me" target="_blank" className="social-link" rel="noreferrer">
              </a>
            </li>
            <li className="social-link-item">
              <a href="https://youtube.com" target="_blank" className="social-link" rel="noreferrer">
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-hr"/>
      <div className="bottom-footer">
        <div className="bottom-footer_date">© 2022</div>
        <h2 className="bottom-footer_heading">Image gallery</h2>
        <a href="https://github.com/RRoLL545" className="bottom-footer_github-link" target="_blank" rel="noreferrer"></a>
      </div>
    </footer>
  )
}

export default Footer;