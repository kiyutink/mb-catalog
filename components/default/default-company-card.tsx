import React from "react";
import Link from "next/link";
import { Media } from "reactstrap";
import { Company } from "../../lib/types";
import { Img } from "../shared/img";

interface DefaultCompanyCardProps {
  company: Company;
}

const DefaultCompanyCard: React.FC<DefaultCompanyCardProps> = ({ company }) => {
  const { logo, name, city, id } = company;
  return (
    <Link href="/jobs/company/[id]" as={`/jobs/company/${id}`}>
      <a className="text-decoration-none">
        <Media className="text-body box rounded overflow-hidden d-flex align-items-stretch">
          <Img src={logo} alt={`${name} logo`} height="80" width="80" />
          <Media body className="px-2 py-3 text-truncate">
            <Media heading tag="h5" className="text-truncate">
              {name}
            </Media>
            <div>
              <i className="fas fa-map-marker-alt" />
              <span className="ml-1">{city.name}</span>
            </div>
          </Media>
        </Media>
      </a>
    </Link>
  );
};

export default DefaultCompanyCard;
