import React from 'react';
import './Contact.css'
import {Link } from 'react-router-dom'


const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
function Contact() {
    return (
        <div className='contact-container'>
        <video src="/videos/lines-2.mp4" autoPlay loop muted />
       
     
           <div className="contact-intro">
               <h1>Let's Connect</h1>
                <div className='contact-underline'></div>
                   <p className='contact-sub-heading'></p>
               <div className='contact-bio'>
                  
                   <ul id='contact-list'>
                   <li>+61 417 139 641 </li>
                  <li> <Mailto  style="color:red" email="rachel.williams@outlook.com" subject="New Enquiry from www.rachelleannewilliams.com" body="To Rachel,"> rachel.leanne4@outlook.com </Mailto></li>
               </ul>
              
                <Link to="https://www.facebook.com/rachelleanne.williams" className='contact-social-links' >
                <i class='fab fa-facebook-f' />
                    </Link>
                    <Link to="https://www.instagram.com/rrach_leanne/" className='contact-social-links' >
                <i class='fab fa-instagram' />
                    </Link>
                    <Link to="https://twitter.com/rrach_leanne" className='contact-social-links' >
                <i class='fab fa-twitter' />
                    </Link>
                    <Link to="https://www.linkedin.com/in/rachelleannewilliams/" className='contact-social-links' >
                <i class='fab fa-linkedin' />
                    </Link>
                    <Link to="/contact" className='contact-social-links'>
                <i class='fab fa-github' />
                    </Link>
                

               
           </div>
           
           </div>       
   </div>
    )
}

export default Contact