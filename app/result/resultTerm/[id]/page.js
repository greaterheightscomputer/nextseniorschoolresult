import { getOneResult } from '@/actions/resultAction';
import React from 'react';

// const ResultDetails = (context) => {
//   console.log(context); //its return { params: { id: '64b9f4cc8d42a18fcae3adf4' }, searchParams: {} } on the terminal
//   return <div>ResultDetails11111111111</div>;
// };
//http://localhost:3000/result/resultTerm/64d8c9823d81f8cc4a67e321
const ResultTerm = async ({ params: { id }, searchParams }) => {
  //   console.log(id);

  const result = await getOneResult(id);
  // console.log(result);
  return (
    <div className="px-5 sm:px-10 py-20 flex-wrap">
      <p className="text-sm pb-3">Student ID: {result.student_id}</p>
      <h1 className="sm:text-5xl text-3xl font-bold">{result.student_name}</h1>
      <div className="flex sm:gap-14 gap-4 my-5 text-lg pt-4 flex-wrap leading-none font-semibold">
        <div>Session: {result.session}</div>
        <div>Class: {result.classes} </div>
        <div>Term:{result.term}</div>
        <div>Term Class:{result.class_abc}</div>
      </div>
      <div>
        <h1 className="sm:text-3xl text-2xl font-bold my-3">
          {result.term} Academic Performance{' '}
        </h1>
      </div>

      <table cellPadding={'2'} cellSpacing={'10'} width={'100%'}>
        <thead>
          <tr className="border-t-2  border-black">
            <th colSpan={5} className="text-2xl">
              {result.term} Academic Summary
            </th>
          </tr>
          <tr className="border-t-2  border-black leading-none text-xl">
            <th colSpan={5}>{result.term} Score</th>
          </tr>
          <tr className="border-t-2  border-black leading-none">
            <th></th>
            <th className="border-r-2 border-l-2 border-black">
              {result.term}
              <br />
              C.A
            </th>
            <th className="border-r-2 border-black">Exam</th>
            <th className="border-r-2 border-black">
              Total
              <br />
              Mark{' '}
            </th>
            <th>Position</th>
          </tr>
          <tr className="border-t-2  border-black">
            <th>Max Obtainable Mark</th>
            <th className="border-r-2 border-l-2 border-black">40%</th>
            <th className="border-r-2 border-black">60%</th>
            <th className="border-r-2 border-black">100%</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t-2  border-black">
            <td>English Language</td>
            <td className="text-center">{result?.eng}</td>
            <td className="text-center">{result?.exam?.eng}</td>
            <td className="text-center">
              {result?.eng + result?.exam?.eng
                ? result?.eng + result?.exam?.eng
                : ''}
            </td>
            <td className="text-center">{result?.position?.eng}</td>
          </tr>
          <tr>
            <td>Mathematics</td>
            <td className="text-center">{result.maths}</td>
            <td className="text-center">{result?.exam?.maths}</td>
            <td className="text-center">
              {result?.maths + result?.exam?.maths
                ? result?.maths + result?.exam?.maths
                : ''}
            </td>
            <td className="text-center">{result?.position?.maths}</td>
          </tr>
          <tr>
            <td>Pysics</td>
            <td className="text-center">{result.physic}</td>
            <td className="text-center">{result?.exam?.physic}</td>
            <td className="text-center">
              {result?.physic + result?.exam?.physic
                ? result?.physic + result?.exam?.physic
                : ''}
            </td>
            <td className="text-center">{result?.position?.physic}</td>
          </tr>
          <tr>
            <td>Chemistry</td>
            <td className="text-center">{result.chemistry}</td>
            <td className="text-center">{result?.exam?.chemistry}</td>
            <td className="text-center">
              {result?.chemistry + result?.exam?.chemistry
                ? result?.chemistry + result?.exam?.chemistry
                : ''}
            </td>
            <td className="text-center">{result?.position?.chemistry}</td>
          </tr>
          <tr>
            <td>Biology</td>
            <td className="text-center">{result.biology}</td>
            <td className="text-center">{result?.exam?.biology}</td>
            <td className="text-center">
              {result?.biology + result?.exam?.biology
                ? result?.biology + result?.exam?.biology
                : ''}
            </td>
            <td className="text-center">{result?.position?.biology}</td>
          </tr>
          <tr>
            <td>Agricultural Science</td>
            <td className="text-center">{result.agric}</td>
            <td className="text-center">{result?.exam?.agric}</td>
            <td className="text-center">
              {result?.agric + result?.exam?.agric
                ? result?.agric + result?.exam?.agric
                : ''}
            </td>
            <td className="text-center">{result?.position?.agric}</td>
          </tr>
          <tr>
            <td>Data Processing</td>
            <td className="text-center">{result.data_pro}</td>
            <td className="text-center">{result?.exam?.data_pro}</td>
            <td className="text-center">
              {result?.data_pro + result?.exam?.data_pro
                ? result?.data_pro + result?.exam?.data_pro
                : ''}
            </td>
            <td className="text-center">{result?.position?.data_pro}</td>
          </tr>
          <tr>
            <td>Further Mathematics</td>
            <td className="text-center">{result.f_maths}</td>
            <td className="text-center">{result?.exam?.f_maths}</td>
            <td className="text-center">
              {result?.f_maths + result?.exam?.f_maths
                ? result?.f_maths + result?.exam?.f_maths
                : ''}
            </td>
            <td className="text-center">{result?.position?.f_maths}</td>
          </tr>
          <tr>
            <td>Geography</td>
            <td className="text-center">{result.geo}</td>
            <td className="text-center">{result?.exam?.geo}</td>
            <td className="text-center">
              {result?.geo + result?.exam?.geo
                ? result?.geo + result?.exam?.geo
                : ''}
            </td>
            <td className="text-center">{result?.position?.geo}</td>
          </tr>
          <tr>
            <td>Economics</td>
            <td className="text-center">{result.eco}</td>
            <td className="text-center">{result?.exam?.eco}</td>
            <td className="text-center">
              {result?.eco + result?.exam?.eco
                ? result?.eco + result?.exam?.eco
                : ''}
            </td>
            <td className="text-center">{result?.position?.eco}</td>
          </tr>
          <tr>
            <td>Civic Education</td>
            <td className="text-center">{result.civic}</td>
            <td className="text-center">{result?.exam?.civic}</td>
            <td className="text-center">
              {result?.civic + result?.exam?.civic
                ? result?.civic + result?.exam?.civic
                : ''}
            </td>
            <td className="text-center">{result?.position?.civic}</td>
          </tr>
          <tr>
            <td>Accounting</td>
            <td className="text-center">{result.account}</td>
            <td className="text-center">{result?.exam?.account}</td>
            <td className="text-center">
              {result?.account + result?.exam?.account
                ? result?.account + result?.exam?.account
                : ''}
            </td>
            <td className="text-center">{result?.position?.account}</td>
          </tr>
          <tr>
            <td>Book Keeping</td>
            <td className="text-center">{result.bk_keeping}</td>
            <td className="text-center">{result?.exam?.bk_keeping}</td>
            <td className="text-center">
              {result?.bk_keeping + result?.exam?.bk_keeping
                ? result?.bk_keeping + result?.exam?.bk_keeping
                : ''}
            </td>
            <td className="text-center">{result?.position?.bk_keeping}</td>
          </tr>
          <tr>
            <td>Fishries</td>
            <td className="text-center">{result.fishries}</td>
            <td className="text-center">{result?.exam?.fishries}</td>
            <td className="text-center">
              {result?.fishries + result?.exam?.fishries
                ? result?.fishries + result?.exam?.fishries
                : ''}
            </td>
            <td className="text-center">{result?.position?.fishries}</td>
          </tr>
          <tr>
            <td>Commerce</td>
            <td className="text-center">{result.commerce}</td>
            <td className="text-center">{result?.exam?.commerce}</td>
            <td className="text-center">
              {result?.commerce + result?.exam?.commerce
                ? result?.commerce + result?.exam?.commerce
                : ''}
            </td>
            <td className="text-center">{result?.position?.commerce}</td>
          </tr>
          <tr>
            <td>Government</td>
            <td className="text-center">{result.govt}</td>
            <td className="text-center">{result?.exam?.govt}</td>
            <td className="text-center">
              {result?.govt + result?.exam?.govt
                ? result?.govt + result?.exam?.govt
                : ''}
            </td>
            <td className="text-center">{result?.position?.govt}</td>
          </tr>
          <tr>
            <td>Yoruba</td>
            <td className="text-center">{result.yoruba}</td>
            <td className="text-center">{result?.exam?.yoruba}</td>
            <td className="text-center">
              {result?.yoruba + result?.exam?.yoruba
                ? result?.yoruba + result?.exam?.yoruba
                : ''}
            </td>
            <td className="text-center">{result?.position?.yoruba}</td>
          </tr>
          <tr>
            <td>Literature in English</td>
            <td className="text-center">{result.eng_lit}</td>
            <td className="text-center">{result?.exam?.eng_lit}</td>
            <td className="text-center">
              {result?.eng_lit + result?.exam?.eng_lit
                ? result?.eng_lit + result?.exam?.eng_lit
                : ''}
            </td>
            <td className="text-center">{result?.position?.eng_lit}</td>
          </tr>
          <tr>
            <td>History</td>
            <td className="text-center">{result.history}</td>
            <td className="text-center">{result?.exam?.history}</td>
            <td className="text-center">
              {result?.history + result?.exam?.history
                ? result?.history + result?.exam?.history
                : ''}
            </td>
            <td className="text-center">{result?.position?.history}</td>
          </tr>
          <tr>
            <td>Home Economics</td>
            <td className="text-center">{result.home_eco}</td>
            <td className="text-center">{result?.exam?.home_eco}</td>
            <td className="text-center">
              {result?.home_eco + result?.exam?.home_eco
                ? result?.home_eco + result?.exam?.home_eco
                : ''}
            </td>
            <td className="text-center">{result?.position?.home_eco}</td>
          </tr>
        </tbody>
        <tr>
          <td></td>
        </tr>
        <tr className="border-b-2  border-black">
          <td></td>
        </tr>
        <tfoot align="left">
          <tr>
            <th>No. in Class: {result?.exam?.no_in_class}</th>
            <th colSpan={2}>
              Total Term Score: {result?.exam?.total_term_score}
            </th>
            <th colSpan={2}>Position: {result?.exam?.position}</th>
          </tr>
          <tr className="border-b-2 border-t-2 border-black">
            <th colSpan={5}>
              Principal's Comments: {result?.exam?.principal}.
            </th>
          </tr>
          <tr>
            <td></td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default ResultTerm;
