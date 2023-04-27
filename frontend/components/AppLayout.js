import React from "react";
import PropTyes from "prop-types";
import { Col, Row } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <Row gutter={10}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {isLoggedIn ? <>Hello!!</> : <>로그인이 필요합니다.</>}
        </Col>
        <Col xs={24} md={6}>
          오른쪽 메뉴
        </Col>
      </Row>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTyes.node.isRequired,
};

export default AppLayout;
