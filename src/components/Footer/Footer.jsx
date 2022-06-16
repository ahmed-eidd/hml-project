import React from 'react';
import classes from './Footer.module.scss';
import { ReactComponent as LogoIcon } from '../../assets/whiteLogo.svg';
import { ReactComponent as FbIcon } from '../../assets/fb.svg';
import { ReactComponent as InstagramIcon } from '../../assets/in.svg';
import { ReactComponent as TwitterIcon } from '../../assets/tw.svg';
import { ReactComponent as AppStoreIcon } from '../../assets/apple.svg';
import { ReactComponent as GooglePlayIcon } from '../../assets/googleplay.svg';
import Link from '../Link/Link';
import FooterLinks from './FooterLinks/FooterLinks';
import { extendClasses } from '../../utilities/extendClasses';

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.Footer__ContentWrapper}>
        {/* Logo */}
        <LogoIcon className={classes.Footer__Logo} />

        {/* About */}
        <div className={classes.Footer__About}>
          <h3
            className={extendClasses(
              classes.Title,
              classes.Footer__About__Title
            )}
          >
            About
          </h3>
          <p className={classes.Footer__About__Text}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos
          </p>
          <div>
            <h3
              className={extendClasses(
                classes.Title,
                classes.Footer__About__FollowUs__Title
              )}
            >
              Follow Us
            </h3>
            <div className={classes.Footer__About__SocialMediaIcons}>
              <FbIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>

        {/* Categories */}
        <FooterLinks title='CATEGORIES'>
          <Link>Grocery</Link>
          <Link>Vegetables & Fruits</Link>
          <Link>Drinks</Link>
          <Link>Fresh Food</Link>
          <Link>Bakery</Link>
        </FooterLinks>

        {/* Quick Links */}
        <FooterLinks title='QUICK LINKS'>
          <Link>Privacy policy</Link>
          <Link>Terms & Conditions</Link>
          <Link>Contact Us</Link>
          <Link>FAQs</Link>
          <Link>Find A Store</Link>
        </FooterLinks>

        {/* Download Our Apps */}
        <div className={classes.Footer__Apps}>
          <h3
            className={extendClasses(
              classes.Title,
              classes.Footer__Apps__Title
            )}
          >
            Download our app
          </h3>
          <div className={classes.Footer__Apps__Icons}>
            <AppStoreIcon />
            <GooglePlayIcon />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p>© 2020 All rights reserved to HML</p>
    </div>
  );
};

export default Footer;
