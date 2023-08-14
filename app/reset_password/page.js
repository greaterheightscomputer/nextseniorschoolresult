import ResetPasswordComponent from '@/components/Auth/ResetPassword';
import React from 'react';

// const ResetPasswordPage = (props) => {
//   console.log({ props });
//   return <ResetPasswordComponent />;
// };
// export default ResetPasswordPage;

const ResetPasswordPage = ({ searchParams: { token } }) => {
  //   console.log({ token });
  return <ResetPasswordComponent token={token} />;
};
export default ResetPasswordPage;
