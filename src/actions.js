const apiRequestActions = (action) => ({
  success: `${action}_SUCCESS`,
  error: `${action}_ERROR`,
  pending: `${action}_PENDING`,
});
