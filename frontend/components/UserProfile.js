import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback((e) => {
    setIsLoggedIn(false);
  });

  return (
    <Card
      actions={[
        <div key="twit">
          전공 <br /> 컴퓨터공학과
        </div>,
        <div key="followings">
          학번 <br /> 2018
        </div>,
        <div key="followers">
          나이 <br /> 24
        </div>,
        <div key="manner">
          매너온도 <br /> 36.5
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>SY</Avatar>} title="박상윤"></Card.Meta>
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
