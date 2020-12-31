import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'
import { Button } from './Button'


function NavBar() {
    // set state > update the state to change whatever it was to what you want it to be. 
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

   // sets the click and reverses it when clicked
    const handleClick = () => setClick(!click)
    // set function to close menu when link or logo clicked on mobile/ipad device
    const closeMobileMenu = () => setClick(false)

    // function that displays the button on screensize
    const showButton = () => {
        
        setButton(true)
        
    };

    // hook to fix reload issue of button
    useEffect(() => {
        showButton();
    }, [])

    // pass resize > show button
    window.addEventListener('resize', showButton);

    return (
       <>
        <nav className="navbar">
           <div className="navbar-container">
              <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
             Rachel Williams
              </Link> 
              {/* calls function to handle the click */}
              <div className='menu-icon' onClick={handleClick}>
                  {/* if icon click > show menu > if click again return to bars */}
                      <i className={click ?  'fas fa-times' :  'fas fa-bars'} />
              </div>
              {/* if else show menu */}
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/portfolio" className='nav-links' onClick={closeMobileMenu}>
                        Portfolio
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                    
                </li>
                <li className='nav-item'>
                    <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
                <li className='social-item'>
                <Link to="https://www.facebook.com/rachelleanne.williams" className='social-links' onClick={closeMobileMenu}>
                <i class='fab fa-facebook-f' />
                    </Link>
                    <Link to="https://www.instagram.com/rrach_leanne/" className='social-links' onClick={closeMobileMenu}>
                <i class='fab fa-instagram' />
                    </Link>
                    <Link to="https://twitter.com/rrach_leanne" className='social-links' onClick={closeMobileMenu}>
                <i class='fab fa-twitter' />
                    </Link>
                    <Link to="https://www.linkedin.com/in/rachelleannewilliams/" className='social-links' onClick={closeMobileMenu}>
                <i class='fab fa-linkedin' />
                    </Link>
                    <Link to="/contact" className='social-links' onClick={closeMobileMenu}>
                <i class='fab fa-github' />
                    </Link>
                </li>
               
              </ul>
            
           </div>

        </nav>
       </>
    )
}

export default NavBar
