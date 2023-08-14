import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const useCustomRouter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = {};

  let searchStId = searchParams.get('searchStId'); //searchParams is getting or fetching it value from the browser url
  let searchSession = searchParams.get('searchSession');
  let searchClass = searchParams.get('searchClass');
  let sort = searchParams.get('sort');
  let page = searchParams.get('page');
  //   console.log(searchStId);
  //   console.log(searchSession);

  if (searchStId) query.searchStId = searchStId;
  if (searchSession) query.searchSession = searchSession;
  if (searchClass) query.searchClass = searchClass;
  if (sort) query.sort = sort;
  if (page) query.page = parseInt(page);
  //   console.log('searchStIdQuery: ', query);

  const pushQuery = ({
    searchStId,
    searchClass,
    searchSession,
    sort,
    page,
  }) => {
    if (
      searchStId !== undefined ||
      searchSession !== undefined ||
      searchClass !== undefined
    ) {
      searchStId === ''
        ? delete query.searchStId
        : (query.searchStId = searchStId);
      searchSession === ''
        ? delete query.searchSession
        : (query.searchSession = searchSession);
      searchClass === ''
        ? delete query.searchClass
        : (query.searchClass = searchClass);
    }
    if (sort !== undefined) {
      sort === 'student_id' ? delete query.sort : (query.sort = sort);
    }
    if (page !== undefined) {
      page === 1 ? delete query.page : (query.page = page);
    }

    // console.log('searchStId3: ', searchStId);
    // console.log('searchSession3: ', searchSession);

    const newQuery = new URLSearchParams(query).toString();
    // console.log(newQuery, query);
    router.push(`?${newQuery}`); //store or push the new query onto the browser url
  };

  return { pushQuery, query };
};

export default useCustomRouter;
