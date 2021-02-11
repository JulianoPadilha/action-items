/* Dependencies */
import React from 'react';

/* Logo */
/* @ts-ignore */
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <div className="flex justify-center">
      <a href="/" title="Action Items">
        <img className="w-60 ml-auto mr-auto pt-6 pb-3" src={logo} alt="Action Items" />
      </a>
    </div>
  )
}

export default Header;