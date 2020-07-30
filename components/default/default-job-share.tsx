import React from "react";
import { Job } from "../../lib/types/moberries-entities";
import { popupCenter, getCurrentUrl } from "../../lib/helpers";

const handleLinkedinClick = ({ id }: Job) => {
  popupCenter(
    `https://www.linkedin.com/shareArticle?mini=true&url=${getCurrentUrl()}/job/${id}`,
    "Share in Linkedin",
    400,
    500
  );
};

const handleFacebookClick = ({ id }: Job) => {
  popupCenter(
    `https://www.facebook.com/sharer/sharer.php?u=${getCurrentUrl()}/job/${id}`,
    "Share in Facebook",
    400,
    500
  );
};

const handleTwitterClick = ({
  id,
  title,
  company: { name: companyName },
}: Job) => {
  popupCenter(
    `http://twitter.com/share?text=${title} ${companyName}&url=${getCurrentUrl()}/job/${id}&hashtags=moberries`,
    "Share in Twitter",
    400,
    500
  );
};

interface DefaultJobShareProps {
  job: Job;
}

const DefaultJobShare: React.FC<DefaultJobShareProps> = ({ job }) => {
  return (
      <div className="p-3 box mb-3 rounded border">
        <h5>Share</h5>
        <div className="d-flex">
          <div
            className="mr-3 clickable"
            onClick={() => handleLinkedinClick(job)}
          >
            <i className="fab fa-linkedin-in fa-2x text-muted" />
          </div>
          <div
            className="mr-3 clickable"
            onClick={() => handleFacebookClick(job)}
          >
            <i className="fab fa-facebook-f fa-2x text-muted" />
          </div>
          <div className="clickable" onClick={() => handleTwitterClick(job)}>
            <i className="fab fa-twitter fa-2x text-muted" />
          </div>
        </div>
      </div>
    );
};

export default DefaultJobShare;
