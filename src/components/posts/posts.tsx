import React, { FC } from "react";
import { Post } from "../../common/interfaces/post";
import { PostItem } from "./postItem/postItem";

interface PostsProps {
  posts: Post[];
}
export const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <PostItem post={post} />
          </div>
        );
      })}
    </div>
  );
};
