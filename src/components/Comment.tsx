import React from "react";
import { CardContent, Grid, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CommentType } from "../api/types";

export const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <CardContent>
      <Grid container>
        <Grid item xs={10}>
          <Typography variant="subtitle1" align="left">
            {comment.name}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <IconButton aria-label="Like">
            <FavoriteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">{comment.body}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default Comment;
