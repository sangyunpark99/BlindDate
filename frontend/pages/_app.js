import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import wrapper from "../store/configureStore";

const BlindDate = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"></meta>
        <title>대학생 블라인드 소개팅</title>
      </Head>
      <Component />
    </>
  );
};

BlindDate.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(BlindDate);
