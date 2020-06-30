import {
  Navbar,
  Container,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand href="#" rel="noopener noreferrer" className="mr-auto">
          <img
            src="/assets/mb-logo-home.svg"
            alt="Moberries"
            width={185}
            height={40}
          />
        </NavbarBrand>

        <Nav navbar className="flex-row align-items-center">
          <NavItem>
            <NavLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Sign in
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
