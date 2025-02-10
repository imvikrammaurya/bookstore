import React from 'react';
import style from './Footer.module.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/free-brands-svg-icons';
import {faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
      <div className={style.footer}>
        <div className={style.footerSection}>
          <div className={style.footerSecA}>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
            <Link to='/user'>Profile</Link>
            <Link to='/favourite'>Favourite</Link>
            <Link to='/user'>Reviews</Link>
            <Link to='/about'>Help</Link>
          </div>
          <div className={style.footerSecA}>
            <Link to='/category/All'>All books</Link>
            <Link to='/category/Novel'>Novel</Link>
            <Link to='/category/Story'>Story</Link>
          </div>
          <div className={style.footerSecA}>
          </div>
          <div className={style.footerSecB}>
            <p>
              If you have any book details that are not available
              on our platform. you can inform us
            </p>
            <Link to='/sendInfo' >Click Here</Link>
          </div>
        </div>
        <div className={style.footerCopyright}>
          <div className={style.copyright}>
            <a rel="noreferrer" href='https://imvikrammaurya.github.io/Personal/' target='_blank'>Vikram Maurya</a>
            <p>Copyright reserved </p>
          </div>
          <div className={style.SocialFooter}>
            <a href='https://github.com/imvikrammaurya' rel="noreferrer" target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='https://www.linkedin.com/imvikrammaurya' rel="noreferrer" target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://www.instagram.com/imvikrammaurya/' rel="noreferrer" target='_blank'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
