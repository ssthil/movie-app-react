import React from 'react';

const HOOQTV = {
  logo: 'https://www.rapidtvnews.com/images/2017/09/hooq-logo-11_Sept_2017.png',
  alt: 'hooq tv',
  logoWidth: 80,
  className: 'hooq-logo'
};

const Logo = () => (
  <a href="#!" className={HOOQTV.className}>
    <img src={HOOQTV.logo} alt={HOOQTV.alt} width={HOOQTV.logoWidth} />
  </a>
);

export default Logo;
