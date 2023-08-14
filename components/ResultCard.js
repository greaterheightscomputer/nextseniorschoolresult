'use client';

import { useTransition } from 'react';
import { useMyContext } from '@/context/Provider';
import { deleteResult } from '@/actions/resultAction';
import Link from 'next/link';

const ResultCard = ({ result }) => {
  // console.log(result);
  let [isPending, startTransition] = useTransition();
  const { setEditResult } = useMyContext(); //coming from Provider component

  async function handleDelete(resultId) {
    // console.log(resultId);
    if (window.confirm('Do you want to delete this Result?')) {
      await deleteResult(resultId);
    }
  }

  return (
    <div className="flex justify-between items-end px-3">
      <div className="flex gap-5 flex-wrap leading-none mt-3">
        <span>{result?.student_id}</span>
        <span>{result?.student_name}</span>
        <span>{result?.session}</span>
        <span>{result?.classes}</span>
        <span>{result?.term}</span>
        <span>{result?.class_abc}</span>
        <span>{result?.teacher}</span>
        <span>{result?.createdAt.toUTCString()}</span>
      </div>

      <div className="flex gap-5">
        <Link
          href={`/result/resultTerm/${result._id}`}
          className="bg-slate-700 text-cyan-50 py-2 px-3 sm:mb-2"
        >
          View
        </Link>
        <button
          onClick={() => setEditResult(result)}
          className="bg-orange-600 text-cyan-50 py-2 px-3 sm:mb-2"
        >
          Edit
        </button>
        <button
          className=" bg-red-950 text-cyan-50 py-2 px-3 sm:mb-2"
          onClick={() => startTransition(() => handleDelete(result._id))}
          disabled={isPending}
        >
          {isPending ? 'Loading...' : 'Delete'}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
