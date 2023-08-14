'use client';
import { useRouter, useSearchParams } from 'next/navigation';

const Errors = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errMsg = searchParams.get('error');

  return (
    <div className="text-center">
      <h1 className="text-red-800 font-bold text-2xl pt-32 pb-5 px-10">
        Errors: {errMsg}
      </h1>
      <button
        onClick={() => router.back()}
        className=" bg-slate-950 text-xl p-3  text-fuchsia-100"
      >
        Try Again
      </button>
    </div>
  );
};

export default Errors;
