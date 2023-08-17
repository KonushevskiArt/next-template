import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'blog'
}


const Profile = async () => {

  // const session = await getServerSession(authConfig);

  return (
    <h3 className="text-xl text-center pt-5">
      Profile of smb 
    </h3>
  );
};

export default Profile;