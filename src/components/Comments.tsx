import React, { useEffect, useState } from "react";
import { getPostComments } from "../api/methods";
import { CardContent, Typography } from "@mui/material";
import { CommentType } from "../api/types";
import Comment from "./Comment";

export const Comments = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    getPostComments(postId).then((res) => {
      setComments(res);
    });
  }, []);

  return (
    <CardContent>
      {comments.map((comment: CommentType) => (
        <Comment comment={comment} />
      ))}
    </CardContent>
  );
};

export default Comments;
