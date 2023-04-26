import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";

const Profile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback((e) => {
    setIsLoggedIn(false);
  });

  return (
    <Card
      actions={[
        <div key="twit">
          sweet <br /> 0
        </div>,
        <div key="followings">
          팔로잉 <br /> 0
        </div>,
        <div key="followers">
          팔로워 <br /> 0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>SY</Avatar>} title="박상윤"></Card.Meta>
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default Profile;
