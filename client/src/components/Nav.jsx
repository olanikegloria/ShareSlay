import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" activeClassName="active">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/about" activeClassName="active">
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/services" activeClassName="active">
          Services
        </Navbar.Link>
        <Navbar.Link as={Link} to="/pricing" activeClassName="active">
          Pricing
        </Navbar.Link>
        <Navbar.Link as={Link} to="/contact" activeClassName="active">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
