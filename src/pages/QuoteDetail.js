import { Route, useParams, Link } from "react-router-dom";
import Comments from "./../components/comments/Comments";
import HighlightedQuotes from "./../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "p1", text: "learnreact1" },
  { id: "q2", author: "p2", text: "learnreact2" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <>
      <HighlightedQuotes text={quote.text} author={quote.author} />

      <Route path="/quotes/:quoteId" exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </>
  );
};
export default QuoteDetail;
