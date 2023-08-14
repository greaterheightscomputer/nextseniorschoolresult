'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

const ButtonSubmit = ({ value, ...props }) => {
  const { pending } = useFormStatus();
  // console.log('Button: ', { ...props });

  return (
    <button
      {...props}
      type="submit"
      disabled={pending}
      className="
      bg-slate-800
      text-white
      w-full
      sm:w-fit
      py-3
      px-10
      mt-2
      text-xl sm:text-left justify-center sm:mx-10 sm:mt-8"
    >
      {pending ? 'Loading...' : value}
    </button>
  );
};

export default ButtonSubmit;
