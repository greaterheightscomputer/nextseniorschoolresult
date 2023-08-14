'use client';

const errors = ({ error, reset }) => {
  return (
    <div className="grid min-h-full items-center px-6 py-24 sm:py-32 lg:px-8 bg-slate-900">
      <div className="tet-center flex flex-wrap flex-col">
        <p className="text-lg font-semibold text-emerald-70 text-white">
          There was a problem
        </p>
        <h3 className="text-3xl font-bold tracking-tight text-slate-300 text-center">
          {error.message || 'Invalid Student Detail'}
        </h3>
        <div className="flex flex-wrap gap-5 justify-center mt-10 items-center text-center">
          <button onClick={reset} className="bg-slate-700 p-3 px-8 text-3xl">
            Try again
          </button>

          {/*
          <h1 className="p-5 px-12 text-emerald-700 text-3xl">
            Refresh Your Browser
          </h1>
          */}
        </div>
      </div>
    </div>
  );
};

export default errors;
