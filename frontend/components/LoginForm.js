import React, { useState, useCallback } from "react";
import { Form, Input, Button, Space } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    const id = e.target.value;
    setId(id);
  }, []);

  const onChangePassword = useCallback((e) => {
    const password = e.target.value;
    setPassword(password);
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      setIsLoggedIn(true);
    },
    [id, password]
  );

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} />
      </div>
      <div>
        <label htmlFor="">비밀번호</label>
        <br />
        <Input
          type="password"
          name="user-password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <ButtonWrapper>
        <Space>
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
          <Link href="/login">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </Space>
      </ButtonWrapper>
    </Form>
  );
};

export default LoginForm;
