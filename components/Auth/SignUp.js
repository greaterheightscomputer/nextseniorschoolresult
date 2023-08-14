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
    <div>
      <h2>Sign Up with NextAuth Credentials</h2>

      <Form action={handleSignUpCredentials}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <ButtonSubmit value="Register" />
      </Form>
    </div>
  );
};

export default SignUp;
