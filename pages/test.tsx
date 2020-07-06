export default ({ a }: any) => <span>{a}</span>;
export const getStaticProps = async () => {
  return { props: { a: 3 } };
};
