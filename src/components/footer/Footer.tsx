import React from 'react'
import './Footer.css';
import SocialLink from './SocialLink';

function Footer() {
  return (
    <footer>
    <div className="footer-content">
        <h3>Asia Chemicals</h3>
        <p>The PU adhesive & binder brand which you can rely on, Engineering innovation for decades, manufacturing products of superior quality, Experts in the manufacture of high-quality PU binders for rubber as well as rebonded foam,rebonded foam,PU paints. </p>
        {/* <ul className="socials">
        <SocialLink  />
        </ul> */}
    </div>
    {/* <div className="footer-bottom">
        <p>copyright &copy; <a href="#">Foolish Developer</a>  </p>
                <div className="footer-menu">
                  <ul className="f-menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Blog</a></li>
                  </ul>
                </div>
    </div> */}

</footer>
  )
}

export default Footer