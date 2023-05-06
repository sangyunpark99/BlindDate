import React from "react";
import AppLayout from "../components/AppLayout";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  justify-content: center;
`;

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      <CardContainer>
        {isLoggedIn &&
          mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
      </CardContainer>
    </AppLayout>
  );
};

export default Home;
