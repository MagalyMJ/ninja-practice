import React, { useEffect, useState } from "react";
import { getPosts } from "../api/methods";
import Post from "./Post";
import { Grid } from "@mui/material";
import { PostType } from "../api/types";

export const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <Grid container spacing={2} direction={"column"}>
      {posts.map((post: PostType) => (
        <Grid item sx={{ width: "35%" }} margin={"auto"}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
