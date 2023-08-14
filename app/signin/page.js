import SignIn from '@/components/Auth/SignIn';
import React from 'react';

// const SiginPage = (props) => {
//   console.log({ props }); //return { props: { params: {}, searchParams: {} } }
//   return <SignIn />;
// };

const SiginPage = ({ searchParams: { callbackUrl } }) => {
  console.log('serverSignIn: ', { callbackUrl });
  return <SignIn callbackUrl={callbackUrl || '/'} />;
};
export default SiginPage;
