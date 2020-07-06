import React, { Fragment } from "react";
import { Page } from "../../lib/types";
import { GetServerSideProps } from "next";
import { useComponents } from "../../hooks/use-components";

interface CompaniesPageProps {}

const Companies: React.FC<CompaniesPageProps> = () => {
  const { Header, Footer } = useComponents();
  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
};

export default Companies;

export const getServerSideProps: GetServerSideProps<CompaniesPageProps> = async (
  context
) => {
  return {
    props: {},
  };
};
