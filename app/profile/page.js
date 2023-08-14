'use client';

import ProfileComponent from '@/components/profile';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session, update } = useSession();

  return <ProfileComponent user={session?.user} update={update} />;
};

export default Profile;
