import { Card, Avatar } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardView = styled(Card)`
  flex: 0 0 33%;
  max-width: 32%;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const PostCard = ({ post }) => {
  const { Meta } = Card;
  const {
    Images,
    User: { nickname, major, schoolID, age },
    content,
  } = post;

  return (
    <>
      <CardView
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <div>
            전공
            <br />
            {major}
          </div>,
          <div>
            학번
            <br />
            {schoolID}
          </div>,
          <div>
            나이
            <br />
            {age}
          </div>,
          <div>
            채팅
            <br />
            보내기
          </div>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
          }
          title={nickname}
          description={content}
        />
      </CardView>
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.object,
};

export default PostCard;
