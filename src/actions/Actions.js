export const getPostSuccess = (post) => ({
  type: "LOAD_POSTS",
  payload: [...post]
})

export const updatePostSuccess = (id) => ({
  type: "UPDATE_POSTS",
  payload: id
})

export const getFavPost = (post) => ({
  type: "GET_FAVOURITE_POSTS",
  payload: [...post]
})
