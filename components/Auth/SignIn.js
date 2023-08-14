'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import Form from '../Form';
import ButtonSubmit from '../ButtonSubmit';
import { forgotPasswordWithCredentials } from '@/actions/authActions';

const BASE_URL = process.env.NEXTAUTH_URL;

const SignIn = ({ callbackUrl }) => {
  // console.log('clientSignIn: ', { callbackUrl });
  async function handleCredentialsLogin(formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    // console.log({ email, password }); //{ callbackUrl: 'http://localhost:3000/' }
    await signIn('credentials', { email, password, callbackUrl });
  }

  async function handleForgotPassword(formData) {
    const email = formData.get('email');
    // console.log({ email });
    const res = await forgotPasswordWithCredentials({ email });
    if (res?.msg) alert(res?.msg);
  }
  return (
    <div className="py-20 px-4 sm:px-10 bg-slate-100">
      <h2 className="text-3xl font-bold mb-4">Sign In</h2>

      {/* Google Login */}
      <div className="my-10">
        <button
          className="bg-red-100 px-6 py-3 text-lg"
          onClick={() => signIn('google', { callbackUrl })}
        >
          Continue with Google
        </button>
      </div>

      {/* SignIn with credentials */}
      <Form action={handleCredentialsLogin}>
        <div className="flex flex-wrap flex-col gap-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-3 w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="p-3 w-full"
          />
        </div>
        <ButtonSubmit value="Credentials Login" />
      </Form>

      {/*Forgot Password*/}
      <h1 className="text-3xl font-bold mb-4 mt-10">Forgot Password?</h1>
      <Form action={handleForgotPassword}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="p-3 w-full"
        />
        <ButtonSubmit value="Forgot Password" />
      </Form>

      {/*Sign Up*/}
      <div className="mt-7 text-lg">
        <Link href="/signup" className="text-lg text-red-950">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
