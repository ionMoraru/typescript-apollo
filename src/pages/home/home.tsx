import React, { FC } from "react";
import { Posts } from "../../components/posts/posts";
import { useGetPosts } from "../../hooks/useGetPosts";

export const Home: FC = () => {
  const posts = useGetPosts();

  return (
    <div>
      <Posts posts={posts || []} />
    </div>
  );
};
