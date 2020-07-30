import { Container, Button } from "reactstrap";
import Link from "next/link";

const LhoftHeader = () => {
  return (
    <div className="border-bottom">
      <Container className="d-flex flex-row justify-content-between align-items-center">
        <Link href="/">
          <a>
            <img
              width={130}
              alt="LHoFT"
              className="pt-4 d-block"
              src="/assets/logo-lhoft.svg"
            />
          </a>
        </Link>
        <Button
          color="primary"
          className="d-flex align-items-center py-1 login-button border-0"
        >
          <small className="text-uppercase text-nowrap">Partner login</small>
        </Button>
      </Container>
    </div>
  );
};

export default LhoftHeader;
