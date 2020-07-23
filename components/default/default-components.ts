import dynamic from "next/dynamic";
import { CompanyInfoLoader } from "../loaders/company-info-loader";
const DefaultCompanyCard = dynamic(() => import("./default-company-card"));
const DefaultSimilarJobs = dynamic(() => import("./default-similar-jobs"));
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
const DefaultJobShare = dynamic(() => import("./default-job-share"));
const DefaultCompaniesList = dynamic(() => import("./default-companies-list"));
const DefaultJobsFilter = dynamic(() => import("./default-jobs-filter"));

const DefaultComponents = {
  Header: DefaultHeader,
  Footer: DefaultFooter,
  PartnersWithMostJobs: DefaultPartnersWithMostJobs,
  JobList: DefaultJobList,
  JobCard: DefaultJobCard,
  CompanyInfo: DefaultCompanyInfo,
  CompanyCard: DefaultCompanyCard,
  JobInfo: DefaultJobInfo,
  JobDetails: DefaultJobDetails,
  JobDescription: DefaultJobDescripion,
  JobSidebar: DefaultJobSidebar,
  SimilarJobs: DefaultSimilarJobs,
  JobShare: DefaultJobShare,
  CompaniesList: DefaultCompaniesList,
  JobsFilter: DefaultJobsFilter,
};

export default DefaultComponents;
