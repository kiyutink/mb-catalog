import { GetServerSideProps } from "next";
import { Company, Job, JobStatuses } from "../lib/types/moberries-entities";
import { moberriesApi } from "../lib/moberries-api";
import { Board } from "../lib/types/boards";
import { Page } from "../lib/types/page";

export interface SharedCompanyPageProps extends Page {
  company: Company;
  jobs: Job[];
  jobsCount: number;
}

export abstract class AbstractDataAdapter<T1, T2, T3> {
  abstract board: Board;
  abstract init(): Promise<void>;
  abstract getIndexPageProps: GetServerSideProps<T1>;
  abstract getJobPageProps: GetServerSideProps<T2>;
  abstract getCompaniesPageProps: GetServerSideProps<T3>;
  getCompanyPageProps: GetServerSideProps<SharedCompanyPageProps> = async (
    context
  ) => {
    const companyId = Number(context.query.id);
    const { data: company } = await moberriesApi.getCompany({
      id: companyId,
    });
    const {
      data: { results: jobs, count: jobsCount },
    } = await moberriesApi.getCompanyJobList({
      id: companyId,
      status: JobStatuses.ACT,
    });
    return {
      props: {
        company,
        jobs,
        jobsCount,
        board: this.board,
      },
    };
  };
}
