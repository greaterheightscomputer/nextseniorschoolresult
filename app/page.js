// import { getAllResults } from '@/actions/resultAction';

import ResultForm from '@/components/ResultForm';

// export default async function Home() {
//   // console.log(process.env.MONGODB_URI);

//   const { results } = await getAllResults();
//   // console.log('HomeResults: ', results);

//   return (
//     <div>
//       <ResultForm />
//       <Feature />
//       {results && <ResultList results={results} />}
//     </div>
//   );
// }

//implementing searching
// export default async function Home(context) {
//   // console.log(context); //its return this on the terminal { params: {},  searchParams: { searchStId: 'S000007', searchSession: '2022/2023' }}
//   const { results } = await getAllResults();

//   return (
//     <div>
//       <ResultForm />
//       <Feature />
//       {results && <ResultList results={results} />}
//     </div>
//   );
// }

export default async function Home(
  {
    /* params, searchParams*/
  }
) {
  return (
    <div>
      <ResultForm />
    </div>
  );
}
