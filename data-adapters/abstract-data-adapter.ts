import { GetServerSideProps } from "next";

export abstract class AbstractDataAdapter<T,S> {
  abstract init(): Promise<void>;
  abstract getIndexPageProps: GetServerSideProps<T>;
  abstract getJobPageProps: GetServerSideProps<S>;
}
