import React, { useCallback } from "react";
import { Form, Input, Button, Space } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../hooks/useinput";
import { loginAction } from "../reducers/user";
import { useDispatch } from "react-redux";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();

  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(
    (e) => {
      dispatch(loginAction({ id, password }));
      console.log(id, password);
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
        </Space>
      </ButtonWrapper>
    </Form>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
