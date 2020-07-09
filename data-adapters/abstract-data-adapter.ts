import { GetServerSideProps } from "next";

export abstract class AbstractDataAdapter<T> {
  abstract init(): Promise<void>;
  abstract getIndexPageProps: GetServerSideProps<T>;
}
