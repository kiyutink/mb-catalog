import dynamic from "next/dynamic";
const DefaultPartnersWithMostJobs = dynamic(() =>
  import("./default-partners-with-most-jobs")
);
const DefaultJobList = dynamic(() => import("./default-job-list"));
const DefaultHeader = dynamic(() => import("./default-header"));
const DefaultFooter = dynamic(() => import("./default-footer"));
const DefaultJobCard = dynamic(() => import("./default-job-card"));

const DefaultComponents = {
  Header: DefaultHeader,
  Footer: DefaultFooter,
  PartnersWithMostJobs: DefaultPartnersWithMostJobs,
  JobList: DefaultJobList,
  JobCard: DefaultJobCard,
};

export default DefaultComponents;
