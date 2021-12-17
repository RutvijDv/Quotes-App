import QuoteForm from "./../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return (
    <>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
};
export default NewQuote;
