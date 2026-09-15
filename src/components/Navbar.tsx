import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'
import { Link as RouterLink } from 'react-router-dom'

export function NavBar() {
  return (
    <Navbar 
      isBordered 
      className="py-4"
      style={{ backgroundColor: '#AE887B', borderColor: '#D9BFB1' }}
    >
      <NavbarBrand>
        <RouterLink to="/" className="font-bold text-xl transition-colors" style={{ color: '#F0DED0' }}>
          Portfolio
        </RouterLink>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <RouterLink to="/about" className="transition-colors" style={{ color: '#E7E5D9' }}>
            About
          </RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink to="/projects" className="transition-colors" style={{ color: '#E7E5D9' }}>
            Projects
          </RouterLink>
        </NavbarItem>
        <NavbarItem>
          <RouterLink to="/contact" className="transition-colors" style={{ color: '#E7E5D9' }}>
            Contact
          </RouterLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
