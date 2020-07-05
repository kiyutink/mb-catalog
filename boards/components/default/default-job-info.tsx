import React from "react";
import { Job } from "../../../lib/types";
import { Media } from "reactstrap";
import Link from "next/link";
import { Img } from "../shared/img";

interface DefaultJobInfoProps {
  job: Job;
}

const DefaultJobInfo: React.FC<DefaultJobInfoProps> = ({ job }) => {
  return (
    <Media className="p-3 rounded-top border box mt-5 rounded">
      <Media left>
        <Img
          src={job.company.logo}
          alt={`${job.company.name} logo`}
          width="80"
          height="80"
          className="mr-3 d-none d-md-inline clickable"
        />
      </Media>
      <Media className="justify-content-between" body>
        <h4 className="d-flex justify-content-between align-items-center mb-1">
          {job.title}
        </h4>
        <div className="mb-1">
          <Link
            href="/jobs/company/[id]"
            as={`/jobs/company/${job.company.id}`}
          >
            <a className="text-body text-decoration-none">{job.company.name}</a>
          </Link>
        </div>
        <div className="d-flex flex-wrap tag-list">
          {job.locations.map((l) => (
            <span key={l.placeId} className="mr-2">
              <i className="fas fa-sm fa-map-marker-alt" /> {l.name}
            </span>
          ))}
        </div>
      </Media>
    </Media>
  );
};

export default DefaultJobInfo;
