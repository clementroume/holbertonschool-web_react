import React from 'react';
import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <footer className="App-footer">
      <p className="semi-emphasized">
        Copyright {getCurrentYear()} {getFooterCopy()}
      </p>
    </footer>
  );
}

export default Footer;
