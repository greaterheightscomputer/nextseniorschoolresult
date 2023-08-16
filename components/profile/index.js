'use client';

import ProfileCard from './ProfileCard';
import ProfileUpdate from './ProfileUpdate';
import ChangePassword from './ChangePassword';
import { useSession } from 'next-auth/react';
import UpdateUserRole from './UpdateUserRole';

const ProfileComponent = ({ user, update }) => {
  //   console.log('ProfileComponent: ', { user });
  const { data: session } = useSession();

  return (
    <div className="py-20 px-4 sm:px-10 bg-slate-100">
      <ProfileCard user={user} />

      <ProfileUpdate update={update} user={user} />

      <UpdateUserRole update={update} user={user} />

      {(session?.user.provider === 'credentials' ||
        user.provider === 'credentials') && <ChangePassword />}
    </div>
  );
};

export default ProfileComponent;
