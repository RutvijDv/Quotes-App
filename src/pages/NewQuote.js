import { useHistory } from "react-router-dom";
import QuoteForm from "./../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push("/quotes");
  };

  return (
    <>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
};
export default NewQuote;
