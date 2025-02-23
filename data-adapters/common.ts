import { Company, Job, JobStatuses } from "../lib/types/moberries-entities";
import { moberriesApi } from "../lib/moberries-api";
import { AbstractDataAdapter } from "./abstract-data-adapter";
import { GetServerSideProps } from "next";
import { Board } from "../lib/types/boards";
import { Page } from "../lib/types/page";
import { propOr, pluck, pipe } from "ramda";
import { sample, randomInteger } from "../lib/helpers";

export interface CommonIndexPageProps extends Page {
  companies: Company[];
  jobs: Job[];
  jobsCount: number;
}

export interface CommonJobPageProps extends Page {
  similarJobs: Job[];
  job: Job;
}

export interface CommonCompaniesPageProps extends Page {
  companies: Company[];
  companiesCount: number;
  board: Board;
}

export class CommonDataAdapter extends AbstractDataAdapter<
  CommonIndexPageProps,
  CommonJobPageProps,
  CommonCompaniesPageProps
> {
  constructor(board: Board) {
    super();
    this.board = board;
  }
  board: Board;
  init = async () => {};

  getCompaniesPageProps: GetServerSideProps<CommonCompaniesPageProps> = async (
    context
  ) => {
    const {
      data: { results: companies, count: companiesCount },
    } = await moberriesApi.getCompanyList({
      page: context.query.page,
      limit: 18,
      activeJobs: true,
      order: "used_jobs",
    });

    return {
      props: {
        companies,
        companiesCount,
        board: this.board,
      },
    };
  };

  getJobPageProps: GetServerSideProps<CommonJobPageProps> = async (context) => {
    const jobId = Number(context.query.id);

    const { data: job } = await moberriesApi.getJob({ id: jobId });

    const {
      data: { results: similarJobs },
    } = await moberriesApi.getJobList({
      limit: 6,
      page: randomInteger(0, 3),
      job_roles__category: pipe(
        pluck("category"),
        sample,
        propOr("", "id")
      )(job.jobRoles),
    });

    return {
      props: {
        job,
        similarJobs,
        board: this.board,
      },
    };
  };

  getIndexPageProps: GetServerSideProps<CommonIndexPageProps> = async (
    context
  ) => {
    const [
      {
        data: { results: companies },
      },
      {
        data: { results: jobs, count: jobsCount },
      },
    ] = await Promise.all([
      moberriesApi.getCompanyList({
        limit: 6,
        ordering: "used_jobs",
        activeJobs: true,
      }),
      moberriesApi.getJobList({
        page: context.query.page,
        status: JobStatuses.ACT,
        company: context.query.company,
        locations__place_id: context.query.location,
        job_roles__category: context.query.category,
        search: context.query.q,
        fields: [
          "title",
          "company",
          "locations",
          "salary_min",
          "id",
          "salary_max",
        ],
      }),
    ]);
    return {
      props: {
        companies,
        jobs,
        jobsCount,
        board: this.board,
      },
    };
  };
}
