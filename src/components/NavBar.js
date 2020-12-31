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
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
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
              R. <i class="fas fa-laugh-wink"></i>
              
              </Link> 
              {/* calls function to handle the click */}
              <div className='menu-icon' onClick={handleClick}>
                  {/* if icon click > show menu > if click again return to bars */}
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
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
              </ul>
              {/* if true, return the button component */}
              {button && <Button buttonStyle='btn--outline'>BUTTON 1</Button>}
           </div>

        </nav>
       </>
    )
}

export default NavBar
