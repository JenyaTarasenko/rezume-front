import './style.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import React from 'react';
// import { NavLink } from 'react-router-dom';


// function NavigationBar() {
//   return (
//     <Navbar expand="lg" style={{ backgroundColor: '#222222' }}>
//         <Container>
          
          
//           <Navbar.Toggle aria-controls="basic-navbar-nav" 
//           className="ms-auto"/>
//           <Navbar.Collapse id="basic-navbar-nav">
          
//               <Nav className="w-100 justify-content-center">
//                   <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
//                   <Nav.Link as={NavLink} to="/detail" exact>Detail</Nav.Link>
//                   <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
//               </Nav>
//           </Navbar.Collapse>
//         </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;

import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false); // Стейт для отслеживания открытия меню

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
            <Nav.Link as={NavLink} to="/detail" exact>
              Detail
            </Nav.Link>
            <Nav.Link as={NavLink} to="/" exact>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
