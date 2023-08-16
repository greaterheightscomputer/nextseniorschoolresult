'use client';

import { signUpWithCredentials } from '@/actions/authActions';
import ButtonSubmit from '../ButtonSubmit';
import Form from '../Form';

const SignUp = () => {
  async function handleSignUpCredentials(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    // console.log({ name, email, password });
    const res = await signUpWithCredentials({ name, email, password });
    // console.log(res);
    if (res?.msg) alert(res?.msg);
  }
  return (
    <div className="py-28 px-10 bg-slate-100">
      <h2 className="sm:text-3xl text-2xl font-bold mb-4">
        Sign Up with NextAuth Credentials
      </h2>

      <Form action={handleSignUpCredentials}>
        <div className="flex flex-wrap flex-col gap-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="p-3 w-full"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 w-full"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="p-3 w-full"
            />
          </div>
        </div>
        <ButtonSubmit value="Register" />
      </Form>
    </div>
  );
};

export default SignUp;
