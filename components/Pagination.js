'use client';

import useCustomRouter from '@/hooks/useCustomRouter';
import React from 'react';

const Pagination = ({ totalPage }) => {
  //   console.log({ totalPage });
  const newArray = [...Array(totalPage)].map((_, i) => i + 1);
  //   console.log(newArray);
  const { pushQuery, query } = useCustomRouter();

  return (
    <div className="flex gap-10 my-30 mx-0 justify-center text-center">
      {newArray.map((page) => (
        <button
          key={page}
          onClick={() => pushQuery({ page })}
          className="bg-slate-400 p-2 px-3 my-9"
          style={{ background: (query.page || 1) === page ? 'grey' : '' }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
