'use client';

import React from 'react';
import ButtonSubmit from './ButtonSubmit';
import useCustomRouter from '@/hooks/useCustomRouter';

const SearchForm = () => {
  const { pushQuery, query } = useCustomRouter();

  async function handleSearch(formData) {
    const searchStId = formData.get('student_id');
    const searchSession = formData.get('session');
    const searchClass = formData.get('class');

    pushQuery({ searchStId, searchSession, searchClass, page: 1 });
  }

  return (
    <form action={handleSearch}>
      <div className="flex gap-4 sm:flex-row flex-col">
        <div>
          <input
            type="search"
            name="student_id"
            placeholder="Search with Student ID"
            defaultValue={query.searchStId || ''}
            className="bg-slate-100 p-3 sm:max-w-fit w-full"
          />
        </div>
        <div>
          <input
            type="search"
            name="session"
            placeholder="Search with Session"
            defaultValue={query.searchSession || ''}
            className="bg-slate-100 p-3 sm:max-w-fit w-full"
          />
        </div>
        <div>
          <input
            type="search"
            name="class"
            placeholder="Search with Class"
            defaultValue={query.searchClass || ''}
            className="bg-slate-100 p-3 sm:max-w-fit w-full"
          />
        </div>
      </div>

      <ButtonSubmit value="search" className="m-0" />
    </form>
  );
};

export default SearchForm;
