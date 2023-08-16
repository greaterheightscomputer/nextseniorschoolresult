'use client';

import { updateUserRole } from '@/actions/authActions';
import Form from '../Form';
import ButtonSubmit from '../ButtonSubmit';

const UpdateUserRole = ({ update, user }) => {
  async function handleUpdateRole(formData) {
    const email = formData.get('email');
    const role = formData.get('role');

    if (update) {
      //when update() is run client side, the page will re-render
      //server side won't re-render
      update({ email, role });
    }

    const userRole = await updateUserRole({ email, role });
    // console.log(userRole);
    if (userRole?.msg) alert(userRole?.msg);
  }

  return (
    <div className="my-20">
      {user?.role === 'admin' && (
        <Form action={handleUpdateRole}>
          <h2 className="text-3xl font-bold mb-4">Update User Role</h2>
          <div className="flex flex-wrap flex-col gap-y-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="email"
                //   defaultValue={user?.email}
                className="p-3 w-full"
              />
            </div>

            <div>
              <input
                type="text"
                name="role"
                placeholder="Role"
                // defaultValue={user?.role}
                className="p-3 w-full"
              />
            </div>
          </div>
          <ButtonSubmit value="Update User Role" />
        </Form>
      )}
    </div>
  );
};

export default UpdateUserRole;
