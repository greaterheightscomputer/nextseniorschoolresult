import Image from 'next/image';
import React from 'react';

const ProfileCard = ({ user }) => {
  //   console.log('ProfileCard: ', { user });
  return (
    <div className="flex flex-wrap items-center gap-5">
      <div>
        {user?.image && (
          <Image
            src={user?.image}
            alt="avatar"
            width={200}
            height={200}
            priority
            className=" border-r-4"
          />
        )}
      </div>
      <div className="text-lg leading-loose font-bold">
        <h2>Name: {user?.name}</h2>
        <h2>Email: {user?.email}</h2>
        <h4>Role: {user?.role}</h4>
        <h4>Provider: {user?.provider}</h4>
      </div>
    </div>
  );
};

export default ProfileCard;
