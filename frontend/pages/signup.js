import React from "react";
import Head from "next/head";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>회원가입 | 대학생 블라인드 소개팅</title>
      </Head>
      <SignUpForm />
    </>
  );
};

export default SignUp;
