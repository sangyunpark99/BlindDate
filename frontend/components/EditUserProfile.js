import React from "react";
import { Form, Input } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";

const InputInfo = styled(Input.Search)`
  margin-top: 10px;
`;

const EditUserProfile = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <Form>
          <InputInfo addonBefore="이름" enterButton="수정"></InputInfo>
          <InputInfo addonBefore="전공" enterButton="수정"></InputInfo>
          <InputInfo addonBefore="학번" enterButton="수정"></InputInfo>
          <InputInfo addonBefore="나이" enterButton="수정"></InputInfo>
        </Form>
      ) : (
        <>로그인이 필요합니다.</>
      )}
    </>
  );
};

export default EditUserProfile;
