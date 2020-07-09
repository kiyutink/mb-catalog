import React from "react";
import { Job } from "../../lib/types/moberries-entities";
import Link from "next/link";

interface DefaultSimilarJobsProps {
  jobs: Job[];
}

const DefaultSimilarJobs: React.FC<DefaultSimilarJobsProps> = ({ jobs }) => {
  return (
    <div className="box rounded">
      <h5 className="p-3 m-0">These might interest you as well</h5>
      <ul className="list-unstyled m-0">
        {jobs.map((j) => (
          <li key={j.id} className="border-top px-3 py-2">
            <div className="d-block">
              <Link href="/job/[id]" as={`/job/${j.id}`}>
                <a>{j.title}</a>
              </Link>
            </div>
            <small>{j.company.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DefaultSimilarJobs;
