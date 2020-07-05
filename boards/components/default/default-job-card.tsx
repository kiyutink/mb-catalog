import React from "react";
import classNames from "classnames";
import { Media } from "reactstrap";
import Link from "next/link";
import { Job } from "../../../lib/types";
import { Img } from "../shared/img";
import { Salary } from "../shared/salary";

interface DefaultJobCardProps {
  job: Job;
  className?: string;
}

const DefaultJobCard: React.FC<DefaultJobCardProps> = ({ job, className }) => {
  const { company, id, title, salaryMin, salaryMax, locations } = job;

  const jobLinkProps = {
    href: "/job/[id]",
    as: `/job/${id}`,
  };
  return (
    <Media
      className={classNames("box border align-items-center rounded", className)}
    >
      <Media left className="py-3 pl-3">
        <Img
          src={company.logo}
          alt={`${company.name} logo`}
          width="80"
          height="80"
          className="mr-3 d-none d-md-inline clickable"
        />
      </Media>
      <Media body className="py-3">
        <h4>
          <Link {...jobLinkProps}>
            <a className="text-body text-decoration-none">{title}</a>
          </Link>
        </h4>
        <div className="mb-1">
          <Link href="/jobs/company/[id]" as={`/jobs/company/${company.id}`}>
            <a className="text-body py-1 text-decoration-none">
              <span>{company.name}</span>
            </a>
          </Link>
        </div>
        <div className="d-flex flex-wrap">
          {salaryMin > 0 && salaryMax > 0 && (
            <span className="mt-1 mr-4">
              <Salary salaryMax={salaryMax} salaryMin={salaryMin} />
            </span>
          )}
          {locations.slice(0, 3).map((l) => (
            <span key={l.placeId} className="mt-1 mr-2">
              <i className="fas fa-map-marker-alt" /> {l.name}
            </span>
          ))}
          {locations.length > 3 && (
            <span className="mt-1">(and {locations.length - 3} more)</span>
          )}
        </div>
      </Media>
      <Media right className="align-self-stretch">
        <Link {...jobLinkProps}>
          <a className="px-4 h-100 d-flex align-items-center text-decoration-none">
            <i className="fas fa-angle-right fa-lg text-body p-1" />
          </a>
        </Link>
      </Media>
    </Media>
  );
};

export default DefaultJobCard;
