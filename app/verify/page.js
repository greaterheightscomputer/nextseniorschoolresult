import { verifyWithCredentials } from '@/actions/authActions';
import React from 'react';

// const VerifyPage = (props) => {
//   console.log({ props });
//   return <div>VerifyPage</div>;
// };
// export default VerifyPage;

const VerifyPage = async ({ searchParams: { token } }) => {
  //   console.log({ token });

  const res = await verifyWithCredentials(token);
  // console.log(res);
  return (
    <div>
      {res?.name} with {res?.email} {res?.msg}
    </div>
  );
};
export default VerifyPage;
