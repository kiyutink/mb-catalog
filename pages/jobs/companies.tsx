import React, { Fragment } from "react";
import { getComponentCollection } from "../../boards/components/components";
import { Page } from "../../lib/types";
import { GetServerSideProps } from "next";
import { getBoard } from "../../lib/helpers";

interface CompaniesPageProps extends Page {}

const Companies: React.FC<CompaniesPageProps> = ({ board }) => {
  const { Header, Footer } = getComponentCollection(board.slug);
  return (
    <Fragment>
      <Header />
      <Footer />
    </Fragment>
  );
};

export default Companies;

export const getServerSideProps: GetServerSideProps<CompaniesPageProps> = async (
  ctx
) => {
  const board = getBoard(ctx);
  return {
    props: {
      board,
    },
  };
};
