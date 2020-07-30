import dynamic from "next/dynamic";
import DefaultPartnersWithMostJobs from "./default-partners-with-most-jobs";
import DefaultJobList from "./default-job-list";
import DefaultJobCard from "./default-job-card";
import DefaultCompanyInfo from "./default-company-info";
import DefaultCompanyCard from "./default-company-card";
import DefaultJobInfo from "./default-job-info";
import DefaultJobDetails from "./default-job-details";
import DefaultJobDescription from "./default-job-description";
import DefaultJobSidebar from "./default-job-sidebar";
import DefaultSimilarJobs from "./default-similar-jobs";
import DefaultJobShare from "./default-job-share";
import DefaultCompaniesList from "./default-companies-list";
import DefaultJobsFilter from "./default-jobs-filter";
import DefaultHero from "./default-hero";

const DefaultHeader = dynamic(() => import("./default-header"));
const DefaultFooter = dynamic(() => import("./default-footer"));

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
  JobDescription: DefaultJobDescription,
  JobSidebar: DefaultJobSidebar,
  SimilarJobs: DefaultSimilarJobs,
  JobShare: DefaultJobShare,
  CompaniesList: DefaultCompaniesList,
  JobsFilter: DefaultJobsFilter,
  Hero: DefaultHero,
};

export default DefaultComponents;
