import Link from "next/link";
import { GetServerSideProps } from "next";
import { getComponentCollection } from "../boards/components/components";
import { getBoard } from "../lib/helpers";
import { Page } from "../lib/types";

export default ({ slug }: Page) => {
  const Components = getComponentCollection(slug);

  return (
    <div>
      <Link href="/">home</Link>
      {true && <Components.Footer />}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      slug: getBoard(context),
    },
  };
};
