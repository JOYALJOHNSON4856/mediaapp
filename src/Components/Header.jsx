import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div> <Navbar className="bg-info">
    <Container>
      <Navbar.Brand >
        <Link to={'/'} style={{textDecoration:'none', color:'black'}}>
        <i class="fa-solid fa-video me-3"></i>{' '}
        Video Player
        </Link>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header