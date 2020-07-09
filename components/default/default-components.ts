import dynamic from "next/dynamic";
import { CompanyInfoLoader } from "../loaders/company-info-loader";
const DefaultPartnersWithMostJobs = dynamic(() =>
  import("./default-partners-with-most-jobs")
);
const DefaultJobList = dynamic(() => import("./default-job-list"));
const DefaultHeader = dynamic(() => import("./default-header"));
const DefaultFooter = dynamic(() => import("./default-footer"));
const DefaultJobCard = dynamic(() => import("./default-job-card"));
const DefaultCompanyInfo = dynamic(() => import("./default-company-info"), {
  loading: CompanyInfoLoader,
});
const DefaultJobInfo = dynamic(() => import("./default-job-info"));
const DefaultJobDetails = dynamic(() => import("./default-job-details"));
const DefaultJobDescripion = dynamic(() => import("./default-job-description"));
const DefaultJobSidebar = dynamic(() => import("./default-job-sidebar"));

const DefaultComponents = {
  Header: DefaultHeader,
  Footer: DefaultFooter,
  PartnersWithMostJobs: DefaultPartnersWithMostJobs,
  JobList: DefaultJobList,
  JobCard: DefaultJobCard,
  CompanyInfo: DefaultCompanyInfo,
  JobInfo: DefaultJobInfo,
  JobDetails: DefaultJobDetails,
  JobDescription: DefaultJobDescripion,
  JobSidebar: DefaultJobSidebar,
};

export default DefaultComponents;
