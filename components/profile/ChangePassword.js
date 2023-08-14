'use client';
import React from 'react';
import Form from '../Form';
import ButtonSubmit from '../ButtonSubmit';
import { ChangePasswordWithCredentials } from '@/actions/authActions';

const ChangePassword = () => {
  async function handleChangePassword(formData) {
    const old_pass = formData.get('old_pass');
    const new_pass = formData.get('new_pass');
    // console.log({ old_pass, new_pass });
    const res = await ChangePasswordWithCredentials({ old_pass, new_pass });
    if (res?.msg) alert(res?.msg);
  }
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Change Password</h2>
      <Form action={handleChangePassword}>
        <div className="flex flex-wrap flex-col gap-y-4">
          <input
            type="password"
            name="old_pass"
            placeholder="Old Password"
            required
            className="p-3 w-full"
          />
          <input
            type="password"
            name="new_pass"
            placeholder="New Password"
            required
            className="p-3 w-full"
          />
        </div>
        <ButtonSubmit value="Change Password" />
      </Form>
    </div>
  );
};

export default ChangePassword;
