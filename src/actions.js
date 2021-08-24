const apiRequestActions = (action) => ({
  success: `${action}_SUCCESS`,
  error: `${action}_ERROR`,
  pending: `${action}_PENDING`,
});

export const fetchComments = (start, limit) => {
  return {
    type: "API_REQUEST",
    payload: {
      url: `https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=${limit}`,
      method: "get",
      nextActionType: apiRequestActions("FETCH_COMMENTS"),
    },
    meta: {
      start,
      limit,
    },
  };
};

export const postComment = (data) => {
  return {
    type: "API_REQUEST",
    payload: {
      url: `https://test.steps.me/test/testAssignComment`,
      method: "post",
      data,
      nextActionType: apiRequestActions("POST_COMMENTS"),
    },
  };
};
