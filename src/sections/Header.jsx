import React from 'react'
import GradientButton from '../components/GradientButton'

const Header = ({nav}) => {
  return (
     <header className="navbar">
          <img
            src={nav.data.logo.src}
            alt={nav.data.logo.alt}
            className="logo"
          />

          <nav>
            {nav.data.links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <GradientButton>{nav.data.cta}</GradientButton>
        </header> 
  )
}

export default Header