'use client';

// import React, { useContext, useState } from 'react';

// const Context = React.createContext();

// export const useMyContext = () => useContext(Context);

// export const Provider = ({ children }) => {
//   const [editResult, setEditResult] = useState();

//   const value = { editResult, setEditResult };
//   return <Context.Provider value={value}>{children}</Context.Provider>;
// };

import React, { useContext, useState } from 'react';
import { SessionProvider } from 'next-auth/react';

const Context = React.createContext();

export const useMyContext = () => useContext(Context);

export const Provider = ({ children }) => {
  const [editResult, setEditResult] = useState();

  const value = { editResult, setEditResult };
  return (
    <SessionProvider>
      <Context.Provider value={value}>{children}</Context.Provider>;
    </SessionProvider>
  );
};
