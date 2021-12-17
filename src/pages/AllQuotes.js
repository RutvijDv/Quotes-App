import QuotesList from "./../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "p1", text: "learnreact1" },
  { id: "q2", author: "p2", text: "learnreact2" },
];

const AllQuote = () => {
  return (
    <>
      <h1>All Quote</h1>
      <QuotesList quotes={DUMMY_QUOTES} />
    </>
  );
};
export default AllQuote;
