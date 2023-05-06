import styled from "styled-components";

const ChatContainer = styled.div`
  padding: 0px;
  width: 98%;
  height: 96%;
  margin-top: 10px;
  border: 1px solid lightgrey;
  border-radius: 30px;
`;

const Chat = () => {
  return (
    <>
      <ChatContainer>
        <div>채팅보내기</div>
      </ChatContainer>
    </>
  );
};

export default Chat;
