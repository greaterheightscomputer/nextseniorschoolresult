'use client';

import { useMyContext } from '@/context/Provider';
import React from 'react';

const ResultDetails = async () => {
  const { editResult, setEditResult } = useMyContext();
  // console.log(editResult);
  const firstTerm = editResult.resultPromotional[0];
  // console.log('firstTerm: ', firstTerm);
  const secondTerm = editResult.resultPromotional[1];
  const thirdTerm = editResult.resultPromotional[2];

  return (
    <div className="px-5 sm:px-10 py-20 flex-wrap">
      <p className="text-sm pb-3">Student ID: {thirdTerm.student_id}</p>
      <h1 className="sm:text-5xl text-3xl font-bold">
        {thirdTerm.student_name}
      </h1>
      <div className="flex sm:gap-14 gap-4 my-5 text-lg pt-4 flex-wrap leading-none font-semibold">
        <div>Session: {thirdTerm.session}</div>
        <div>Class: {thirdTerm.classes} </div>
        <div>Term Class:{thirdTerm.class_abc}</div>
      </div>
      <div>
        <h1 className="sm:text-3xl text-2xl font-bold my-3">
          Academic Performance{' '}
        </h1>
      </div>

      <table cellPadding={'2'} cellSpacing={'10'} width={'100%'}>
        <thead>
          <tr className="border-t-2  border-black">
            <th></th>
            <th colSpan={14} className="text-lg">
              Academic Performance Summary
            </th>
          </tr>
          <tr className="border-t-2  border-black leading-none">
            <th></th>
            <th colSpan={4} className="border-r-2 border-black">
              First Term Score
            </th>
            <th colSpan={4} className="border-r-2 border-black">
              Second Term Score
            </th>
            <th colSpan={4} className="border-r-2 border-black">
              Third Term Score
            </th>
            <th>
              Average
              <br />
              Performance
            </th>
          </tr>
          <tr className="border-t-2  border-black leading-none">
            <th></th>
            <th className="border-r-2 border-black">
              1st
              <br />
              Term
              <br />
              C.A
            </th>
            <th className="border-r-2 border-black">Exam</th>
            <th className="border-r-2 border-black">
              Total
              <br />
              Mark{' '}
            </th>
            <th className="border-r-2 border-black">
              Posi
              <br />
              tion
            </th>
            <th className="border-r-2 border-black">
              2nd
              <br />
              Term
              <br />
              C.A
            </th>
            <th className="border-r-2 border-black">Exam</th>
            <th className="border-r-2 border-black">
              Total
              <br />
              Mark{' '}
            </th>
            <th className="border-r-2 border-black">
              Posi
              <br />
              tion
            </th>
            <th className="border-r-2 border-black">
              3rd
              <br />
              Term
              <br />
              C.A
            </th>
            <th className="border-r-2 border-black">Exam</th>
            <th className="border-r-2 border-black">
              Total
              <br />
              Mark{' '}
            </th>
            <th className="border-r-2 border-black">
              Posi
              <br />
              tion
            </th>
          </tr>
          <tr className="border-t-2  border-black">
            <th>Max Obtainable Mark</th>
            <th className="border-r-2 border-l-2 border-black">40%</th>
            <th className="border-r-2 border-black">60%</th>
            <th className="border-r-2 border-black">100%</th>
            <th className="border-r-2 border-black"></th>
            <th className="border-r-2 border-black">40%</th>
            <th className="border-r-2 border-black">60%</th>
            <th className="border-r-2 border-black">100%</th>
            <th className="border-r-2 border-black"></th>
            <th className="border-r-2 border-black">40%</th>
            <th className="border-r-2 border-black">60%</th>
            <th className="border-r-2 border-black">100%</th>
            <th className="border-r-2 border-black"></th>
            <th>100%</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t-2  border-black">
            <td>English Language</td>
            <td className="text-center">{firstTerm?.eng}</td>
            <td className="text-center">{firstTerm?.exam?.eng}</td>
            <td className="text-center">
              {firstTerm?.eng + firstTerm?.exam?.eng
                ? firstTerm?.eng + firstTerm?.exam?.eng
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.eng}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm?.eng}</td>
            <td className="text-center">{secondTerm?.exam?.eng}</td>
            <td className="text-center">
              {secondTerm?.eng + secondTerm?.exam?.eng
                ? secondTerm?.eng + secondTerm?.exam?.eng
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.eng}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm?.eng}</td>
            <td className="text-center">{thirdTerm?.exam?.eng}</td>
            <td className="text-center">
              {thirdTerm?.eng + thirdTerm?.exam?.eng
                ? thirdTerm?.eng + thirdTerm?.exam?.eng
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.eng}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.eng +
                  firstTerm?.exam?.eng +
                  secondTerm?.eng +
                  secondTerm?.exam?.eng +
                  thirdTerm?.eng +
                  thirdTerm?.exam?.eng) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Mathematics</td>
            <td className="text-center">{firstTerm.maths}</td>
            <td className="text-center">{firstTerm?.exam?.maths}</td>
            <td className="text-center">
              {firstTerm?.maths + firstTerm?.exam?.maths
                ? firstTerm?.maths + firstTerm?.exam?.maths
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.maths}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.maths}</td>
            <td className="text-center">{secondTerm?.exam?.maths}</td>
            <td className="text-center">
              {secondTerm?.maths + secondTerm?.exam?.maths
                ? secondTerm?.maths + secondTerm?.exam?.maths
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.maths}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.maths}</td>
            <td className="text-center">{thirdTerm?.exam?.maths}</td>
            <td className="text-center">
              {thirdTerm?.maths + thirdTerm?.exam?.maths
                ? thirdTerm?.maths + thirdTerm?.exam?.maths
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.maths}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.maths +
                  firstTerm?.exam?.maths +
                  secondTerm?.maths +
                  secondTerm?.exam?.maths +
                  thirdTerm?.maths +
                  thirdTerm?.exam?.maths) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Pysics</td>
            <td className="text-center">{firstTerm.physic}</td>
            <td className="text-center">{firstTerm?.exam?.physic}</td>
            <td className="text-center">
              {firstTerm?.physic + firstTerm?.exam?.physic
                ? firstTerm?.physic + firstTerm?.exam?.physic
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.physic}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.physic}</td>
            <td className="text-center">{secondTerm?.exam?.physic}</td>
            <td className="text-center">
              {secondTerm?.physic + secondTerm?.exam?.physic
                ? secondTerm?.physic + secondTerm?.exam?.physic
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.physic}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.physic}</td>
            <td className="text-center">{thirdTerm?.exam?.physic}</td>
            <td className="text-center">
              {thirdTerm?.physic + thirdTerm?.exam?.physic
                ? thirdTerm?.physic + thirdTerm?.exam?.physic
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.physic}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.physic +
                  firstTerm?.exam?.physic +
                  secondTerm?.physic +
                  secondTerm?.exam?.physic +
                  thirdTerm?.physic +
                  thirdTerm?.exam?.physic) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Chemistry</td>
            <td className="text-center">{firstTerm.chemistry}</td>
            <td className="text-center">{firstTerm?.exam?.chemistry}</td>
            <td className="text-center">
              {firstTerm?.chemistry + firstTerm?.exam?.chemistry
                ? firstTerm?.chemistry + firstTerm?.exam?.chemistry
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.chemistry}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.chemistry}</td>
            <td className="text-center">{secondTerm?.exam?.chemistry}</td>
            <td className="text-center">
              {secondTerm?.chemistry + secondTerm?.exam?.chemistry
                ? secondTerm?.chemistry + secondTerm?.exam?.chemistry
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.chemistry}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.chemistry}</td>
            <td className="text-center">{thirdTerm?.exam?.chemistry}</td>
            <td className="text-center">
              {thirdTerm?.chemistry + thirdTerm?.exam?.chemistry
                ? thirdTerm?.chemistry + thirdTerm?.exam?.chemistry
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.chemistry}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.chemistry +
                  firstTerm?.exam?.chemistry +
                  secondTerm?.chemistry +
                  secondTerm?.exam?.chemistry +
                  thirdTerm?.chemistry +
                  thirdTerm?.exam?.chemistry) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Biology</td>
            <td className="text-center">{firstTerm.biology}</td>
            <td className="text-center">{firstTerm?.exam?.biology}</td>
            <td className="text-center">
              {firstTerm?.biology + firstTerm?.exam?.biology
                ? firstTerm?.biology + firstTerm?.exam?.biology
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.biology}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.biology}</td>
            <td className="text-center">{secondTerm?.exam?.biology}</td>
            <td className="text-center">
              {secondTerm?.biology + secondTerm?.exam?.biology
                ? secondTerm?.biology + secondTerm?.exam?.biology
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.biology}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.biology}</td>
            <td className="text-center">{thirdTerm?.exam?.biology}</td>
            <td className="text-center">
              {thirdTerm?.biology + thirdTerm?.exam?.biology
                ? thirdTerm?.biology + thirdTerm?.exam?.biology
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.biology}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.biology +
                  firstTerm?.exam?.biology +
                  secondTerm?.biology +
                  secondTerm?.exam?.biology +
                  thirdTerm?.biology +
                  thirdTerm?.exam?.biology) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Agricultural Science</td>
            <td className="text-center">{firstTerm.agric}</td>
            <td className="text-center">{firstTerm?.exam?.agric}</td>
            <td className="text-center">
              {firstTerm?.agric + firstTerm?.exam?.agric
                ? firstTerm?.agric + firstTerm?.exam?.agric
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.agric}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.agric}</td>
            <td className="text-center">{secondTerm?.exam?.agric}</td>
            <td className="text-center">
              {secondTerm?.agric + secondTerm?.exam?.agric
                ? secondTerm?.agric + secondTerm?.exam?.agric
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.agric}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.agric}</td>
            <td className="text-center">{thirdTerm?.exam?.agric}</td>
            <td className="text-center">
              {thirdTerm?.agric + thirdTerm?.exam?.agric
                ? thirdTerm?.agric + thirdTerm?.exam?.agric
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.agric}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.agric +
                  firstTerm?.exam?.agric +
                  secondTerm?.agric +
                  secondTerm?.exam?.agric +
                  thirdTerm?.agric +
                  thirdTerm?.exam?.agric) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Data Processing</td>
            <td className="text-center">{firstTerm.data_pro}</td>
            <td className="text-center">{firstTerm?.exam?.data_pro}</td>
            <td className="text-center">
              {firstTerm?.data_pro + firstTerm?.exam?.data_pro
                ? firstTerm?.data_pro + firstTerm?.exam?.data_pro
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.data_pro}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.data_pro}</td>
            <td className="text-center">{secondTerm?.exam?.data_pro}</td>
            <td className="text-center">
              {secondTerm?.data_pro + secondTerm?.exam?.data_pro
                ? secondTerm?.data_pro + secondTerm?.exam?.data_pro
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.data_pro}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.data_pro}</td>
            <td className="text-center">{thirdTerm?.exam?.data_pro}</td>
            <td className="text-center">
              {thirdTerm?.data_pro + thirdTerm?.exam?.data_pro
                ? thirdTerm?.data_pro + thirdTerm?.exam?.data_pro
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.data_pro}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.data_pro +
                  firstTerm?.exam?.data_pro +
                  secondTerm?.data_pro +
                  secondTerm?.exam?.data_pro +
                  thirdTerm?.data_pro +
                  thirdTerm?.exam?.data_pro) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Further Mathematics</td>
            <td className="text-center">{firstTerm.f_maths}</td>
            <td className="text-center">{firstTerm?.exam?.f_maths}</td>
            <td className="text-center">
              {firstTerm?.f_maths + firstTerm?.exam?.f_maths
                ? firstTerm?.f_maths + firstTerm?.exam?.f_maths
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.f_maths}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.f_maths}</td>
            <td className="text-center">{secondTerm?.exam?.f_maths}</td>
            <td className="text-center">
              {secondTerm?.f_maths + secondTerm?.exam?.f_maths
                ? secondTerm?.f_maths + secondTerm?.exam?.f_maths
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.f_maths}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.f_maths}</td>
            <td className="text-center">{thirdTerm?.exam?.f_maths}</td>
            <td className="text-center">
              {thirdTerm?.f_maths + thirdTerm?.exam?.f_maths
                ? thirdTerm?.f_maths + thirdTerm?.exam?.f_maths
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.f_maths}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.f_maths +
                  firstTerm?.exam?.f_maths +
                  secondTerm?.f_maths +
                  secondTerm?.exam?.f_maths +
                  thirdTerm?.f_maths +
                  thirdTerm?.exam?.f_maths) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Geography</td>
            <td className="text-center">{firstTerm.geo}</td>
            <td className="text-center">{firstTerm?.exam?.geo}</td>
            <td className="text-center">
              {firstTerm?.geo + firstTerm?.exam?.geo
                ? firstTerm?.geo + firstTerm?.exam?.geo
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.geo}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.geo}</td>
            <td className="text-center">{secondTerm?.exam?.geo}</td>
            <td className="text-center">
              {secondTerm?.geo + secondTerm?.exam?.geo
                ? secondTerm?.geo + secondTerm?.exam?.geo
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.geo}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.geo}</td>
            <td className="text-center">{thirdTerm?.exam?.geo}</td>
            <td className="text-center">
              {thirdTerm?.geo + thirdTerm?.exam?.geo
                ? thirdTerm?.geo + thirdTerm?.exam?.geo
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.geo}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.geo +
                  firstTerm?.exam?.geo +
                  secondTerm?.geo +
                  secondTerm?.exam?.geo +
                  thirdTerm?.geo +
                  thirdTerm?.exam?.geo) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Economics</td>
            <td className="text-center">{firstTerm.eco}</td>
            <td className="text-center">{firstTerm?.exam?.eco}</td>
            <td className="text-center">
              {firstTerm?.eco + firstTerm?.exam?.eco
                ? firstTerm?.eco + firstTerm?.exam?.eco
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.eco}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.eco}</td>
            <td className="text-center">{secondTerm?.exam?.eco}</td>
            <td className="text-center">
              {secondTerm?.eco + secondTerm?.exam?.eco
                ? secondTerm?.eco + secondTerm?.exam?.eco
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.eco}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.eco}</td>
            <td className="text-center">{thirdTerm?.exam?.eco}</td>
            <td className="text-center">
              {thirdTerm?.eco + thirdTerm?.exam?.eco
                ? thirdTerm?.eco + thirdTerm?.exam?.eco
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.eco}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.eco +
                  firstTerm?.exam?.eco +
                  secondTerm?.eco +
                  secondTerm?.exam?.eco +
                  thirdTerm?.eco +
                  thirdTerm?.exam?.eco) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Civic Education</td>
            <td className="text-center">{firstTerm.civic}</td>
            <td className="text-center">{firstTerm?.exam?.civic}</td>
            <td className="text-center">
              {firstTerm?.civic + firstTerm?.exam?.civic
                ? firstTerm?.civic + firstTerm?.exam?.civic
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.civic}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.civic}</td>
            <td className="text-center">{secondTerm?.exam?.civic}</td>
            <td className="text-center">
              {secondTerm?.civic + secondTerm?.exam?.civic
                ? secondTerm?.civic + secondTerm?.exam?.civic
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.civic}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.civic}</td>
            <td className="text-center">{thirdTerm?.exam?.civic}</td>
            <td className="text-center">
              {thirdTerm?.civic + thirdTerm?.exam?.civic
                ? thirdTerm?.civic + thirdTerm?.exam?.civic
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.civic}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.civic +
                  firstTerm?.exam?.civic +
                  secondTerm?.civic +
                  secondTerm?.exam?.civic +
                  thirdTerm?.civic +
                  thirdTerm?.exam?.civic) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Accounting</td>
            <td className="text-center">{firstTerm.account}</td>
            <td className="text-center">{firstTerm?.exam?.account}</td>
            <td className="text-center">
              {firstTerm?.account + firstTerm?.exam?.account
                ? firstTerm?.account + firstTerm?.exam?.account
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.account}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.account}</td>
            <td className="text-center">{secondTerm?.exam?.account}</td>
            <td className="text-center">
              {secondTerm?.account + secondTerm?.exam?.account
                ? secondTerm?.account + secondTerm?.exam?.account
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.account}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.account}</td>
            <td className="text-center">{thirdTerm?.exam?.account}</td>
            <td className="text-center">
              {thirdTerm?.account + thirdTerm?.exam?.account
                ? thirdTerm?.account + thirdTerm?.exam?.account
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.account}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.account +
                  firstTerm?.exam?.account +
                  secondTerm?.account +
                  secondTerm?.exam?.account +
                  thirdTerm?.account +
                  thirdTerm?.exam?.account) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Book Keeping</td>
            <td className="text-center">{firstTerm.bk_keeping}</td>
            <td className="text-center">{firstTerm?.exam?.bk_keeping}</td>
            <td className="text-center">
              {firstTerm?.bk_keeping + firstTerm?.exam?.bk_keeping
                ? firstTerm?.bk_keeping + firstTerm?.exam?.bk_keeping
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.bk_keeping}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.bk_keeping}</td>
            <td className="text-center">{secondTerm?.exam?.bk_keeping}</td>
            <td className="text-center">
              {secondTerm?.bk_keeping + secondTerm?.exam?.bk_keeping
                ? secondTerm?.bk_keeping + secondTerm?.exam?.bk_keeping
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.bk_keeping}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.bk_keeping}</td>
            <td className="text-center">{thirdTerm?.exam?.bk_keeping}</td>
            <td className="text-center">
              {thirdTerm?.bk_keeping + thirdTerm?.exam?.bk_keeping
                ? thirdTerm?.bk_keeping + thirdTerm?.exam?.bk_keeping
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.bk_keeping}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.bk_keeping +
                  firstTerm?.exam?.bk_keeping +
                  secondTerm?.bk_keeping +
                  secondTerm?.exam?.bk_keeping +
                  thirdTerm?.bk_keeping +
                  thirdTerm?.exam?.bk_keeping) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Fishries</td>
            <td className="text-center">{firstTerm.fishries}</td>
            <td className="text-center">{firstTerm?.exam?.fishries}</td>
            <td className="text-center">
              {firstTerm?.fishries + firstTerm?.exam?.fishries
                ? result?.fishries + firstTerm?.exam?.fishries
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.fishries}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.fishries}</td>
            <td className="text-center">{secondTerm?.exam?.fishries}</td>
            <td className="text-center">
              {secondTerm?.fishries + secondTerm?.exam?.fishries
                ? result?.fishries + secondTerm?.exam?.fishries
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.fishries}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.fishries}</td>
            <td className="text-center">{thirdTerm?.exam?.fishries}</td>
            <td className="text-center">
              {thirdTerm?.fishries + thirdTerm?.exam?.fishries
                ? result?.fishries + thirdTerm?.exam?.fishries
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.fishries}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.fishries +
                  firstTerm?.exam?.fishries +
                  secondTerm?.fishries +
                  secondTerm?.exam?.fishries +
                  thirdTerm?.fishries +
                  thirdTerm?.exam?.fishries) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Commerce</td>
            <td className="text-center">{firstTerm.commerce}</td>
            <td className="text-center">{firstTerm?.exam?.commerce}</td>
            <td className="text-center">
              {firstTerm?.commerce + firstTerm?.exam?.commerce
                ? firstTerm?.commerce + firstTerm?.exam?.commerce
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.commerce}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.commerce}</td>
            <td className="text-center">{secondTerm?.exam?.commerce}</td>
            <td className="text-center">
              {secondTerm?.commerce + secondTerm?.exam?.commerce
                ? secondTerm?.commerce + secondTerm?.exam?.commerce
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.commerce}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.commerce}</td>
            <td className="text-center">{thirdTerm?.exam?.commerce}</td>
            <td className="text-center">
              {thirdTerm?.commerce + thirdTerm?.exam?.commerce
                ? thirdTerm?.commerce + thirdTerm?.exam?.commerce
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.commerce}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.commerce +
                  firstTerm?.exam?.commerce +
                  secondTerm?.commerce +
                  secondTerm?.exam?.commerce +
                  thirdTerm?.commerce +
                  thirdTerm?.exam?.commerce) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Government</td>
            <td className="text-center">{firstTerm.govt}</td>
            <td className="text-center">{firstTerm?.exam?.govt}</td>
            <td className="text-center">
              {firstTerm?.govt + firstTerm?.exam?.govt
                ? firstTerm?.govt + firstTerm?.exam?.govt
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.govt}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.govt}</td>
            <td className="text-center">{secondTerm?.exam?.govt}</td>
            <td className="text-center">
              {secondTerm?.govt + secondTerm?.exam?.govt
                ? secondTerm?.govt + secondTerm?.exam?.govt
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.govt}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.govt}</td>
            <td className="text-center">{thirdTerm?.exam?.govt}</td>
            <td className="text-center">
              {thirdTerm?.govt + thirdTerm?.exam?.govt
                ? thirdTerm?.govt + thirdTerm?.exam?.govt
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.govt}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.govt +
                  firstTerm?.exam?.govt +
                  secondTerm?.govt +
                  secondTerm?.exam?.govt +
                  thirdTerm?.govt +
                  thirdTerm?.exam?.govt) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Yoruba</td>
            <td className="text-center">{firstTerm.yoruba}</td>
            <td className="text-center">{firstTerm?.exam?.yoruba}</td>
            <td className="text-center">
              {firstTerm?.yoruba + firstTerm?.exam?.yoruba
                ? firstTerm?.yoruba + firstTerm?.exam?.yoruba
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.yoruba}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.yoruba}</td>
            <td className="text-center">{secondTerm?.exam?.yoruba}</td>
            <td className="text-center">
              {secondTerm?.yoruba + secondTerm?.exam?.yoruba
                ? secondTerm?.yoruba + secondTerm?.exam?.yoruba
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.yoruba}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.yoruba}</td>
            <td className="text-center">{thirdTerm?.exam?.yoruba}</td>
            <td className="text-center">
              {thirdTerm?.yoruba + thirdTerm?.exam?.yoruba
                ? thirdTerm?.yoruba + thirdTerm?.exam?.yoruba
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.yoruba}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.yoruba +
                  firstTerm?.exam?.yoruba +
                  secondTerm?.yoruba +
                  secondTerm?.exam?.yoruba +
                  thirdTerm?.yoruba +
                  thirdTerm?.exam?.yoruba) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Literature in English</td>
            <td className="text-center">{firstTerm.eng_lit}</td>
            <td className="text-center">{firstTerm?.exam?.eng_lit}</td>
            <td className="text-center">
              {firstTerm?.eng_lit + firstTerm?.exam?.eng_lit
                ? firstTerm?.eng_lit + firstTerm?.exam?.eng_lit
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.eng_lit}</td>

            {/*Second term */}
            <td className="text-center">{secondTerm.eng_lit}</td>
            <td className="text-center">{secondTerm?.exam?.eng_lit}</td>
            <td className="text-center">
              {secondTerm?.eng_lit + secondTerm?.exam?.eng_lit
                ? secondTerm?.eng_lit + secondTerm?.exam?.eng_lit
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.eng_lit}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.eng_lit}</td>
            <td className="text-center">{thirdTerm?.exam?.eng_lit}</td>
            <td className="text-center">
              {thirdTerm?.eng_lit + thirdTerm?.exam?.eng_lit
                ? thirdTerm?.eng_lit + thirdTerm?.exam?.eng_lit
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.eng_lit}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.eng_lit +
                  firstTerm?.exam?.eng_lit +
                  secondTerm?.eng_lit +
                  secondTerm?.exam?.eng_lit +
                  thirdTerm?.eng_lit +
                  thirdTerm?.exam?.eng_lit) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>History</td>
            <td className="text-center">{firstTerm.history}</td>
            <td className="text-center">{firstTerm?.exam?.history}</td>
            <td className="text-center">
              {firstTerm?.history + firstTerm?.exam?.history
                ? firstTerm?.history + firstTerm?.exam?.history
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.history}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.history}</td>
            <td className="text-center">{secondTerm?.exam?.history}</td>
            <td className="text-center">
              {secondTerm?.history + secondTerm?.exam?.history
                ? secondTerm?.history + secondTerm?.exam?.history
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.history}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.history}</td>
            <td className="text-center">{thirdTerm?.exam?.history}</td>
            <td className="text-center">
              {thirdTerm?.history + thirdTerm?.exam?.history
                ? thirdTerm?.history + thirdTerm?.exam?.history
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.history}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.history +
                  firstTerm?.exam?.history +
                  secondTerm?.history +
                  secondTerm?.exam?.history +
                  thirdTerm?.history +
                  thirdTerm?.exam?.history) /
                3
              ).toFixed(1)}
            </th>
          </tr>
          <tr>
            <td>Home Economics</td>
            <td className="text-center">{firstTerm.home_eco}</td>
            <td className="text-center">{firstTerm?.exam?.home_eco}</td>
            <td className="text-center">
              {firstTerm?.home_eco + firstTerm?.exam?.home_eco
                ? firstTerm?.home_eco + firstTerm?.exam?.home_eco
                : ''}
            </td>
            <td className="text-center">{firstTerm?.position?.home_eco}</td>

            {/*Second term*/}
            <td className="text-center">{secondTerm.home_eco}</td>
            <td className="text-center">{secondTerm?.exam?.home_eco}</td>
            <td className="text-center">
              {secondTerm?.home_eco + secondTerm?.exam?.home_eco
                ? secondTerm?.home_eco + secondTerm?.exam?.home_eco
                : ''}
            </td>
            <td className="text-center">{secondTerm?.position?.home_eco}</td>

            {/*Third term*/}
            <td className="text-center">{thirdTerm.home_eco}</td>
            <td className="text-center">{thirdTerm?.exam?.home_eco}</td>
            <td className="text-center">
              {thirdTerm?.home_eco + thirdTerm?.exam?.home_eco
                ? thirdTerm?.home_eco + thirdTerm?.exam?.home_eco
                : ''}
            </td>
            <td className="text-center">{thirdTerm?.position?.home_eco}</td>

            {/*Average Performance*/}
            <th>
              {(
                (firstTerm?.home_eco +
                  firstTerm?.exam?.home_eco +
                  secondTerm?.home_eco +
                  secondTerm?.exam?.home_eco +
                  thirdTerm?.home_eco +
                  thirdTerm?.exam?.home_eco) /
                3
              ).toFixed(1)}
            </th>
          </tr>
        </tbody>
        <tr>
          <td></td>
        </tr>
        <tr className="border-b-2 border-black">
          <td></td>
        </tr>
        <tfoot align="left" className="border-b-2 border-black">
          <tr>
            <th colSpan={5}>
              Comment:{' '}
              {(
                (firstTerm?.eng +
                  firstTerm?.exam?.eng +
                  secondTerm?.eng +
                  secondTerm?.exam?.eng +
                  thirdTerm?.eng +
                  thirdTerm?.exam?.eng) /
                3
              ).toFixed(1) >= 50 &&
              (
                (firstTerm?.maths +
                  firstTerm?.exam?.maths +
                  secondTerm?.maths +
                  secondTerm?.exam?.maths +
                  thirdTerm?.maths +
                  thirdTerm?.exam?.maths) /
                3
              ).toFixed(1) >= 50 &&
              Number(
                (
                  (firstTerm?.physic +
                    firstTerm?.exam?.physic +
                    secondTerm?.physic +
                    secondTerm?.exam?.physic +
                    thirdTerm?.physic +
                    thirdTerm?.exam?.physic) /
                  3
                ).toFixed(1)
              ) +
                Number(
                  (
                    (firstTerm?.chemistry +
                      firstTerm?.exam?.chemistry +
                      secondTerm?.chemistry +
                      secondTerm?.exam?.chemistry +
                      thirdTerm?.chemistry +
                      thirdTerm?.exam?.chemistry) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.biology +
                      firstTerm?.exam?.biology +
                      secondTerm?.biology +
                      secondTerm?.exam?.biology +
                      thirdTerm?.biology +
                      thirdTerm?.exam?.biology) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.agric +
                      firstTerm?.exam?.agric +
                      secondTerm?.agric +
                      secondTerm?.exam?.agric +
                      thirdTerm?.agric +
                      thirdTerm?.exam?.agric) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.data_pro +
                      firstTerm?.exam?.data_pro +
                      secondTerm?.data_pro +
                      secondTerm?.exam?.data_pro +
                      thirdTerm?.data_pro +
                      thirdTerm?.exam?.data_pro) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.f_maths +
                      firstTerm?.exam?.f_maths +
                      secondTerm?.f_maths +
                      secondTerm?.exam?.f_maths +
                      thirdTerm?.f_maths +
                      thirdTerm?.exam?.f_maths) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.geo +
                      firstTerm?.exam?.geo +
                      secondTerm?.geo +
                      secondTerm?.exam?.geo +
                      thirdTerm?.geo +
                      thirdTerm?.exam?.geo) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.eco +
                      firstTerm?.exam?.eco +
                      secondTerm?.eco +
                      secondTerm?.exam?.eco +
                      thirdTerm?.eco +
                      thirdTerm?.exam?.eco) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.civic +
                      firstTerm?.exam?.civic +
                      secondTerm?.civic +
                      secondTerm?.exam?.civic +
                      thirdTerm?.civic +
                      thirdTerm?.exam?.civic) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.account +
                      firstTerm?.exam?.account +
                      secondTerm?.account +
                      secondTerm?.exam?.account +
                      thirdTerm?.account +
                      thirdTerm?.exam?.account) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.bk_keeping +
                      firstTerm?.exam?.bk_keeping +
                      secondTerm?.bk_keeping +
                      secondTerm?.exam?.bk_keeping +
                      thirdTerm?.bk_keeping +
                      thirdTerm?.exam?.bk_keeping) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.fishries +
                      firstTerm?.exam?.fishries +
                      secondTerm?.fishries +
                      secondTerm?.exam?.fishries +
                      thirdTerm?.fishries +
                      thirdTerm?.exam?.fishries) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.commerce +
                      firstTerm?.exam?.commerce +
                      secondTerm?.commerce +
                      secondTerm?.exam?.commerce +
                      thirdTerm?.commerce +
                      thirdTerm?.exam?.commerce) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.govt +
                      firstTerm?.exam?.govt +
                      secondTerm?.govt +
                      secondTerm?.exam?.govt +
                      thirdTerm?.govt +
                      thirdTerm?.exam?.govt) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.yoruba +
                      firstTerm?.exam?.yoruba +
                      secondTerm?.yoruba +
                      secondTerm?.exam?.yoruba +
                      thirdTerm?.yoruba +
                      thirdTerm?.exam?.yoruba) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.eng_lit +
                      firstTerm?.exam?.eng_lit +
                      secondTerm?.eng_lit +
                      secondTerm?.exam?.eng_lit +
                      thirdTerm?.eng_lit +
                      thirdTerm?.exam?.eng_lit) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.history +
                      firstTerm?.exam?.history +
                      secondTerm?.history +
                      secondTerm?.exam?.history +
                      thirdTerm?.history +
                      thirdTerm?.exam?.history) /
                    3
                  ).toFixed(1)
                ) +
                Number(
                  (
                    (firstTerm?.home_eco +
                      firstTerm?.exam?.home_eco +
                      secondTerm?.home_eco +
                      secondTerm?.exam?.home_eco +
                      thirdTerm?.home_eco +
                      thirdTerm?.exam?.home_eco) /
                    3
                  ).toFixed(1)
                ) >=
                150 ? (
                <span className="text-xl">Pass to the next class</span>
              ) : (
                <span className="text-xl">
                  You are to repeat the same class
                </span>
              )}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default ResultDetails;
