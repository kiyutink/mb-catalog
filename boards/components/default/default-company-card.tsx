import React from "react";
import Link from "next/link";
import { Media } from "reactstrap";
import { Company } from "../../../lib/types";

interface DefaultCompanyCardProps {
  company: Company;
}

const DefaultCompanyCard: React.FC<DefaultCompanyCardProps> = ({ company }) => {
  return (
    <Link href="/jobs/company/[id]" as={`/jobs/company/${company.id}`}>
      <a className="text-decoration-none">
        <Media className="text-body">
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            height="80"
            width="80"
          />
          <Media body className="p-2 text-truncate">
            <Media heading tag="h5" className="text-truncate">
              {company.name}
            </Media>
            <div className="d-flex align-items-center">
              <i className="fas fa-sm fa-map-marker-alt" />
              <span className="ml-1">{company.city.name}</span>
            </div>
          </Media>
        </Media>
      </a>
    </Link>
  );
};

export default DefaultCompanyCard;
