import React, { Fragment } from "react";
import { GetServerSideProps } from "next";
import { useComponents } from "../../hooks/use-components";
import { getBoard } from "../../lib/helpers";
import { getDataAdapter } from "../../data-adapters/data-adapters";
import { CommonCompaniesPageProps } from "../../data-adapters/common";
import { Container } from "reactstrap";
import { Pagination } from "../../components/shared/pagination";

interface CompaniesPageProps extends CommonCompaniesPageProps {}

const Companies: React.FC<CompaniesPageProps> = ({
  companies,
  companiesCount,
}) => {
  const { Header, Footer, CompaniesList } = useComponents();
  return (
    <Fragment>
      <Header />
      <Container>
        <h1 className="mt-5">Partners with most jobs</h1>
        <div className="text-muted mb-2">
          A preview of our most active partner companies.{" "}
          <a href="https://app.moberries.com/signup" target="_blank">
            Sign up
          </a>{" "}
          now to get access to our complete career network!
        </div>
        <CompaniesList companies={companies} />
        <Pagination
          itemsPerPage={18}
          totalCount={companiesCount}
          className="mb-5 mt-3"
        />
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Companies;

export const getServerSideProps: GetServerSideProps<CompaniesPageProps> = async (
  context
) => {
  const board = getBoard(context.req);
  const adapter = await getDataAdapter(board);

  return adapter.getCompaniesPageProps(context);
};
