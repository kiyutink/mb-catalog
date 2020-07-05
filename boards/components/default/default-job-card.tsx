import React from "react";
import classNames from "classnames"
import { Media } from "reactstrap";
import Link from "next/link";
import { Job } from "../../../lib/types";
import { Img } from "../shared/img";

interface DefaultJobCardProps {
  job: Job;
  className?: string;
}

const DefaultJobCard: React.FC<DefaultJobCardProps> = ({ job, className }) => {
  const { company, id, title, salaryMin, salaryMax, locations } = job;
  return (
    <Media
      className={classNames("box p-3 border align-items-center", className)}
    >
      <Media left>
        <Img
          src={company.logo}
          alt={`${company.name} logo`}
          width="80"
          height="80"
          className="mr-3 d-none d-md-inline clickable"
        />
      </Media>
      <Media body>
        <h4 className="mb-1">
          <Link href="/job/[id]" as={`/job/${id}`}>
            <a className="text-body">{title}</a>
          </Link>
        </h4>
        <div className="mb-1">
          <Link href="/jobs/company/[id]" as={`/jobs/company/${company.id}`}>
            <a className="text-body">
              <span>{company.name}</span>
            </a>
          </Link>
        </div>
        <div className="d-flex flex-wrap">
          {salaryMin > 0 && salaryMax > 0 && (
            <span>
              {salaryMin} - {salaryMax}
            </span>
          )}
          {locations.slice(0, 3).map((l) => (
            <span key={l.placeId}>
              <i className="fas fa-sm fa-map-marker-alt" /> {l.name}
            </span>
          ))}
          {locations.length > 3 && <span>And {locations.length - 3} more</span>}
        </div>
      </Media>
    </Media>
  );
};

export default DefaultJobCard;
