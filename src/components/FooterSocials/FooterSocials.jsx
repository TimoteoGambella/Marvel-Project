import React from 'react'

const FooterSocials = () => {
  return (
    <div className='footer-socials'>
      <div className='footer-socials-logos'>
        <a target={"_blank"} href="https://www.linkedin.com/" rel='noopener noreferrer' ><i class="fa-brands fa-linkedin-in"></i></a>
        <i id='socials-divider' class="fa-solid fa-minus"></i>
        <a target={"_blank"} href="https://www.behance.net/" rel='noopener noreferrer' ><i class="fa-brands fa-behance"></i></a>
      </div>
    </div>
  )
}

export default FooterSocials