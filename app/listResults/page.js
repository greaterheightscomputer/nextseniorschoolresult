import { getAllResults } from '@/actions/resultAction';
import Feature from '@/components/Feature';
import Pagination from '@/components/Pagination';
import ResultFormList from '@/components/ResultFormList';
import ResultList from '@/components/ResultList';

// const ListResult = (context) => {
//   console.log(context);
//   return <div>ListResult</div>;
// };
// export default ListResult;

const ListResult = async ({ params, searchParams }) => {
  const { results, totalPage } = await getAllResults(searchParams);
  return (
    <div>
      <ResultFormList />
      <Feature />
      {results && <ResultList results={results} />}
      {totalPage && <Pagination totalPage={totalPage} />}
    </div>
  );
};
export default ListResult;
