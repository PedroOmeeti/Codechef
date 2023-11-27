
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';

function Menu() {

  const [paginaAtual, mudaPaginaAtual] = useState()
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  return(
    <div>
    <Navbar color="dark" dark expand="md">
      <Link to="/" className='navbar-brand'>CodeChef</Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link className={paginaAtual === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('home')} to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link className={paginaAtual === 'cardapio' ? 'nav-link active' : 'nav-link'} onClick= {() => mudaPaginaAtual('cardapio')} to="/cardapio">Cardápio</Link>
          </NavItem>
          <NavItem>
            <Link className={paginaAtual === 'contato' ? 'nav-link active' : 'nav-link'} onClick={() => mudaPaginaAtual('contato')} to="/contato">Contato</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  )
}

export default Menu