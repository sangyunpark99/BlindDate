import React from "react";
import PropTyes from "prop-types";
import { Col, Row } from "antd";
import LoginForm from "./LoginForm";
import Chat from "./Chat";
import UserProfile from "./UserProfile";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <Row gutter={10}>
        <Col xs={24} md={5}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12} style={{ padding: 0 }}>
          {isLoggedIn ? children : <>로그인 해주세요!</>}
        </Col>
        <Col xs={24} md={7} style={{ padding: 0 }}>
          {isLoggedIn ? <Chat /> : <>로그인 해주세요!</>}
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTyes.node.isRequired,
};

export default AppLayout;
