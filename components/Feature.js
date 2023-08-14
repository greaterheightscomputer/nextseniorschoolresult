import React from 'react';
import SearchForm from './SearchForm';
import Sort from './Sort';

const Feature = () => {
  return (
    <div className="flex gap-4 mx-4">
      <SearchForm />

      <Sort />
    </div>
  );
};

export default Feature;
