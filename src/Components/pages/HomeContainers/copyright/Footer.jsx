import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import  './footer.scss'

const Footer = () => {

    // const toggleHome = () => {
    //     scroll.scrollToTop();
    //   }

  return (
    <div className='FooterContainer'>
        <div className='FooterWrap'>
            <div className='SocialMedia'>
                <div className='SocialMediaWrap'>
                {/* <SocialLogo to ='/' onClick={toggleHome}>Poise</SocialLogo> */}
                <div className='WebsiteRights'>UrielSproutsLimited @ {new Date().getFullYear() }  All rights reserved</div>
                <div className='SocialIcons'>
                    <div className='SocialIconLink' href='//www.facebook.com' target ='_blank' aria-label="FaceBook">
                        <FaFacebook />
                    </div>
                    <div className='SocialIconLink' href='//Instagram.com' target ='_blank' aria-label="Instagram">
                        <FaInstagram />
                    </div>
                    <div className='SocialIconLink' href='//www.Youtube.com' target ='_blank' aria-label="Youtube">
                        <FaYoutube />
                    </div>
                    <div className='SocialIconLink' href='//www.twitter.com' target ='_blank' aria-label="Twitter">
                        <FaTwitter />
                    </div>
                    <div className='SocialIconLink' href='//www.linkedin.com' target ='_blank' aria-label="Linkedin">
                        <FaLinkedin />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer