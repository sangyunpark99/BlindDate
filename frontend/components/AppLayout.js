import React from "react";
import PropTyes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/login">
          <a>로그인</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTyes.node.isRequired,
};

export default AppLayout;
