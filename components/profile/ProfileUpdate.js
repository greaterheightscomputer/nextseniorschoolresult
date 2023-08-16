'use client';

import { updateUser } from '@/actions/authActions';
import Form from '../Form';
import ButtonSubmit from '../ButtonSubmit';

const ProfileUpdate = ({ update, user }) => {
  // console.log('ProfileUpdate: ', { user });

  async function handleUpdateProfile(formData) {
    const name = formData.get('name');
    const image = formData.get('image');
    const role = formData.get('role');

    if (update) {
      //when update() is run client side, the page will re-render
      //server side won't re-render
      update({ name, image, role });
    }

    const res = await updateUser({ name, image, role });
    if (res?.msg) alert(res?.msg);
  }

  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold mb-4">Update Profile</h2>

      <Form action={handleUpdateProfile}>
        <div className="flex flex-wrap flex-col gap-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={user?.name}
              className="p-3 w-full"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="p-3 w-full"
            />
          </div>
          <div>
            <input
              type="text"
              name="image"
              placeholder="Image"
              defaultValue={user?.image}
              className="p-3 w-full"
            />
          </div>
          {user?.role === 'admin' && (
            <div>
              <input
                type="text"
                name="role"
                placeholder="Role"
                defaultValue={user?.role}
                className="p-3 w-full"
              />
            </div>
          )}
        </div>
        {/*<button>Update Profile</button>*/}
        <ButtonSubmit value="Update Profile" />
      </Form>
    </div>
  );
};

export default ProfileUpdate;
