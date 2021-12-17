import { useEffect } from "react";
import QuotesList from "./../components/quotes/QuoteList";
import useHttp from "./../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import LoadingSpinner from "./../components/UI/LoadingSpinner";
import NoQuotesFound from "./../components/quotes/NoQuotesFound";

const AllQuote = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "error") {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <h1>All Quote</h1>
      <QuotesList quotes={loadedQuotes} />
    </>
  );
};
export default AllQuote;
