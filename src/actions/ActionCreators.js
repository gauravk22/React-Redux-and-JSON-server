import { getPostSuccess, updatePostSuccess, getFavPost } from "./Actions"

var counter = 1

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
        console.log(err)
      }
    }
  }
}

export const updatePostById = (id) => {
  return (dispatch, getState) => {
    dispatch(updatePostSuccess(id))

    let [updatedPost] = getState().posts.filter((g) => g.id === id)

    if (updatedPost === undefined) {
      const [updatedPost1] = getState().favourites.filter((g) => g.id === id)
      updatedPost = updatedPost1
    }

    fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", crossDomain: true },
      body: JSON.stringify(updatedPost)
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
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
      console.log(err)
    }
  }
}
