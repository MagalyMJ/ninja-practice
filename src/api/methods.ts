import { PostType, CommentType } from "./types";

const getPosts = async (): Promise<PostType[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  } catch (err: any) {
    throw new Error(err.message);
  }
};

const getPostComments = async (postId: number): Promise<CommentType[]> => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export { getPosts, getPostComments };
