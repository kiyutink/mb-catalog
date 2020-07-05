import React from "react";
import Link from "next/link";
import { Media } from "reactstrap";
import { Company } from "../../../lib/types";
import { Img } from "../shared/img";

interface DefaultCompanyCardProps {
  company: Company;
}

const DefaultCompanyCard: React.FC<DefaultCompanyCardProps> = ({ company }) => {
  const { logo, name, city, id } = company;
  return (
    <Link href="/jobs/company/[id]" as={`/jobs/company/${id}`}>
      <a className="text-decoration-none">
        <Media className="text-body box">
          <Img src={logo} alt={`${name} logo`} height="80" width="80" />
          <Media body className="p-2 text-truncate">
            <Media heading tag="h5" className="text-truncate">
              {name}
            </Media>
            <div className="d-flex align-items-center">
              <i className="fas fa-sm fa-map-marker-alt" />
              <span className="ml-1">{city.name}</span>
            </div>
          </Media>
        </Media>
      </a>
    </Link>
  );
};

export default DefaultCompanyCard;
