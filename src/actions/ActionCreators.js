import { getPostSuccess, updatePostSuccess, getFavPost } from "./Actions"

let counter = 1

export const loadPosts = () => {
  return async (dispatch) => {
    if (counter <= 10) {
      try {
        const fetchCall = await fetch(
          `http://localhost:3000/posts?_page=${counter}`
        )
        const fetchData = await fetchCall.json()

        counter += 1
        dispatch(getPostSuccess(fetchData))
      } catch (err) {
        console.error(err)
      }
    }
  }
}

export const updatePostById = (id) => {
  return async (dispatch, getState) => {
    dispatch(updatePostSuccess(id))

    let updatedPost = getState().posts.find((g) => g.id === id)

    if (updatedPost === undefined)
      updatedPost = getState().favourites.find((g) => g.id === id)

    try {
      await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", crossDomain: true },
        body: JSON.stringify(updatedPost)
      })
    } catch (err) {
      console.error(err)
    }
  }
}

export const getFavPosts = () => {
  return async (dispatch) => {
    try {
      const fetchCall = await fetch(
        "http://localhost:3000/posts?isFavourite=true"
      )
      const fetchData = await fetchCall.json()
      dispatch(getFavPost(fetchData))
    } catch (err) {
      console.error(err)
    }
  }
}
