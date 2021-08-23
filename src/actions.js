const apiRequestActions = (action) => ({
  success: `${action}_SUCCESS`,
  error: `${action}_ERROR`,
  pending: `${action}_PENDING`,
});

export function fetchComments(start, limit) {
  return {
    type: "API_REQUEST",
    payload: {
      url: `comments?_start=${start}&_limit=${limit}`,
      method: "get",
      nextActionType: apiRequestActions("FETCH_COMMENTS"),
    },
    meta: {
      start,
      limit,
    },
  };
}
