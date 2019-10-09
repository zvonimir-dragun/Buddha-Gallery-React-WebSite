//remove post action

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index
  };
}

//add post action
export function addPost(post) {
  return {
    type: "ADD_POST",
    post
  };
}

//add comment action
export function addComment(comment, postId) {
  return {
    type: "ADD_COMMENT",
    comment,
    postId
  };
}


