import React, { useState } from "react";
import PropTyes from "prop-types";
import Link from "next/link";
import { Col, Menu, Row } from "antd";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/login">
            <a>로그인</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={10}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <Profile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} md={12}>
          가운데 메뉴
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
