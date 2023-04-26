import React, { useState, useCallback } from "react";
import { Button, Form, Input, Checkbox } from "antd";
import useInput from "../hooks/useinput";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
`;

const SignUpForm = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [name, onChangeName] = useInput("");
  const [age, onChangeAge] = useInput("");
  const [department, onChangeDepartment] = useInput("");
  const [studentId, onChangeStudentId] = useInput("");
  const [schoolName, onChangeSchoolName] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(password !== e.target.value);
    },
    [password]
  );

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);

  const onChangeTerm = useCallback(
    (e) => {
      setTerm(e.target.checked);
      setTermError(term);
    },
    [term]
  );

  const onSubmit = useCallback(
    (e) => {
      // 한번더 체크해주기

      if (
        !id ||
        !password ||
        !passwordCheck ||
        !schoolName ||
        !name ||
        !age ||
        !department ||
        !studentId
      ) {
        alert("빈칸 없이 정보를 모두 입력해주세요.");
      }

      if (password !== passwordCheck) {
        return setPasswordError(true);
      }

      if (!term) {
        return setTermError(true);
      }

      console.log("회원가입 성공!!");
    },
    [
      id,
      password,
      name,
      age,
      department,
      studentId,
      schoolName,
      passwordCheck,
      term,
    ]
  );

  return (
    <>
      <Form onFinish={onSubmit}>
        <div>
          <label>아이디</label>
          <Input name="user-id" value={id} onChange={onChangeId}></Input>
        </div>
        <div>
          <label>비밀번호</label>
          <Input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
          ></Input>
        </div>
        <div>
          <label>비밀번호 확인</label>
          <Input
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          ></Input>
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div>
          <label>학교</label>
          <Input
            name="user-school"
            value={schoolName}
            onChange={onChangeSchoolName}
          ></Input>
        </div>
        <div>
          <label>이름</label>
          <Input name="user-name" value={name} onChange={onChangeName}></Input>
        </div>
        <div>
          <label>나이</label>
          <Input
            name="user-age"
            type="number"
            value={age}
            onChange={onChangeAge}
          ></Input>
        </div>
        <div>
          <label>학과</label>
          <Input
            name="user-department"
            value={department}
            onChange={onChangeDepartment}
          ></Input>
        </div>
        <div>
          <label>학번</label>
          <Input
            name="user-studentId"
            type="number"
            value={studentId}
            onChange={onChangeStudentId}
          ></Input>
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            회원가입 약관에 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의해주세요.</ErrorMessage>}
        </div>
        <Button type="primary" htmlType="submit">
          회원가입
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;
