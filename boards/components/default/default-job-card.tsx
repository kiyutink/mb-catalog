import React from "react";
import { Media } from "reactstrap";
import Link from "next/link";
import { Job } from "../../../lib/types";

interface DefaultJobCardProps {
  job: Job;
}

const DefaultJobCard: React.FC<DefaultJobCardProps> = ({ job }) => {
  return (
    <Media className="p-3 border align-items-center">
      <Media left>
        <img
          src={job.company.logo}
          alt={`${job.company.name} logo`}
          width="80"
          height="80"
          className="mr-3 d-none d-md-inline clickable"
        />
      </Media>
      <Media body>
        <h4 className="mb-1">
          <Link href="/job/[id]" as={`/job/${job.id}`}>
            <a className="text-body">{job.title}</a>
          </Link>
        </h4>
        <div className="mb-1">
          <Link href="#">
            <a className="text-body">
              <span>{job.company.name}</span>
            </a>
          </Link>
        </div>
        <div className="d-flex flex-wrap">
          {job.salaryMin > 0 && job.salaryMax > 0 && (
            <span>
              {job.salaryMin} - {job.salaryMax}
            </span>
          )}
          {job.locations.slice(0, 3).map((l) => (
            <span key={l.placeId}>
              <i className="fas fa-sm fa-map-marker-alt" /> {l.name}
            </span>
          ))}
          {job.locations.length > 3 && (
            <span>And {job.locations.length - 3} more</span>
          )}
        </div>
      </Media>
    </Media>
  );
};

export default DefaultJobCard;
