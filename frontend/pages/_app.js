import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";
import { Menu } from "antd";
import Link from "next/link";

const BlindDate = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>대학생 블라인드 소개팅</title>
      </Head>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>블라인드 소개팅</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Component />
    </>
  );
};

BlindDate.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(BlindDate);
