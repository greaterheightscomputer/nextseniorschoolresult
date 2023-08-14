'use client';
import Form from '../Form';
import ButtonSubmit from '../ButtonSubmit';
import { resetPasswordWithCredentials } from '@/actions/authActions';

const ResetPasswordComponent = ({ token }) => {
  async function handleResetPassword(formData) {
    const password = formData.get('password');
    // console.log({ password });
    const res = await resetPasswordWithCredentials({ token, password });
    if (res?.msg) alert(res?.msg);
  }

  return (
    <div>
      <h1>Reset Password</h1>
      <Form action={handleResetPassword}>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <ButtonSubmit value="Reset Password" />
      </Form>
    </div>
  );
};

export default ResetPasswordComponent;
