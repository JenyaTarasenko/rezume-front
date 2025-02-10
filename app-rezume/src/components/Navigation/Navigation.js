import './style.css';


import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
// import { useLocation } from 'react-router-dom';


function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false); // Стейт для отслеживания открытия меню

  // const location = useLocation();


  // useEffect (()=>{

  //   if (location.pathname === "/"){

  //     window.scrollTo(0,0);
  //   }
  // }, [location])

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Переключаем открытие/закрытие меню
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#222222' }}>
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>

        {/* Кнопка бургер-меню */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`custom-toggler ${isOpen ? 'active' : ''}`} // Меняем класс в зависимости от состояния меню
          onClick={toggleMenu} // При клике меняем состояние
        >
          <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H34" stroke="#AEB3AA" stroke-opacity="0.4" stroke-width="3.5" stroke-linecap="round" />
            <path d="M2 14H34" stroke="#AEB3AA" stroke-opacity="0.4" stroke-width="3.5" stroke-linecap="round" />
            <path d="M2 26H34" stroke="#AEB3AA" stroke-opacity="0.4" stroke-width="3.5" stroke-linecap="round" />
          </svg>
        </Navbar.Toggle>

        {/* Выпадающее меню */}
        <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
          <Nav className="w-100 justify-content-center">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="technology" smooth={true} duration={500}>
              My technology
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
