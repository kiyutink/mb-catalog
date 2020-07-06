import {
  Navbar,
  Container,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Link from "next/link";

export default () => {
  return (
    <Navbar color="dark" dark>
      <Container>
        <NavbarBrand className="mr-auto" tag="div">
          <a href="https://www.moberries.com">
            <img
              src="/assets/mb-logo-home.svg"
              alt="Moberries"
              width={185}
              height={40}
            />
          </a>
        </NavbarBrand>

        <Nav navbar className="flex-row align-items-center">
          <NavItem>
            <Link href="/">
              <a className="nav-link text-white mr-3">Catalog home</a>
            </Link>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://app.moberries.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              Sign up
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
