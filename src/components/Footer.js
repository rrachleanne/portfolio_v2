import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
        
          <div class='social-icons'>
            
            
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/rachelleanne.williams'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/rrach_leanne/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com/rrach_leanne'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/rachelleannewilliams/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link github'
              to='https://github.com/rrachleanne'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            
          </div>
          
        </div>
      </section>
      <section className='footer-subscription'>
      <p class='website-rights'>Designed by Rachel Williams © 2020</p>
      </section>
    </div>
  );
}

export default Footer;