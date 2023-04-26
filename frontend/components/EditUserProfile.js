import React from "react";
import { Form, Input } from "antd";
import styled from "styled-components";

const InputInfo = styled(Input.Search)`
  margin-top: 10px;
`;

const EditUserProfile = () => {
  return (
    <>
      <Form>
        <InputInfo addonBefore="이름" enterButton="수정"></InputInfo>
        <InputInfo addonBefore="전공" enterButton="수정"></InputInfo>
        <InputInfo addonBefore="학번" enterButton="수정"></InputInfo>
        <InputInfo addonBefore="나이" enterButton="수정"></InputInfo>
      </Form>
    </>
  );
};

export default EditUserProfile;
