const axios = require("axios");

// https://jsonplaceholder.typicode.com/

const getPosts = async (postId) => {
  // Return all post when postId is undefined
  // Return single post when postId is provided
  // Get all post:
  // https://jsonplaceholder.typicode.com/posts
  // Get single post:
  // https://jsonplaceholder.typicode.com/posts/{id}
};

// Optional
const getPostsWithComments = async (postId) => {
  // Get post content from getPosts function
  // then get the post comments from
  // https://jsonplaceholder.typicode.com/posts/{id}/comments
  // Return an object with both post and comments:
  // {
  //   post: {...},
  //   comments: [{...}, {...}, ...]
  // }
};
