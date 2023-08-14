import ResultCard from './ResultCard';

const ResultList = async ({ results }) => {
  // console.log('ListResult: ', results);

  return (
    <div>
      {results.map((result) => (
        <ResultCard key={result._id} result={result} />
      ))}
    </div>
  );
};

export default ResultList;
