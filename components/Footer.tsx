import React from 'react';
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className=''>
          <div className='space-y-4'>
            <Logo />
            <p>
              Discover curated furniture collections at Shopcartyt, blending
              style, and comfort to elevate your living spaces.
            </p>
            <SocialMedia
              className="text-shop-dark-color/60"
              iconClassName="border-shop-dark-color/60 hover:text-shop-light-green"
              tooltipClassName="bg-shop-dark-color text-white"
            />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
