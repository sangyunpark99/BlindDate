import React from "react";
import Head from "next/head";
import EditUserProfile from "../components/EditUserProfile";

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | 대학생 블라인드 소개팅</title>
      </Head>
      <EditUserProfile />
    </>
  );
};

export default Profile;
