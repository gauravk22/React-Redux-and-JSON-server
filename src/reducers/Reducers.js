var initialState = {
  posts: [],
  favourites: []
}

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_POSTS":
      return {
        ...state,
        posts: Array.from(new Set([...state.posts, ...action.payload]))
      }
    case "UPDATE_POSTS":
      return {
        posts: state.posts.map((s) =>
          s.id === action.payload ? { ...s, isFavourite: !s.isFavourite } : s
        ),
        favourites: state.favourites.map((s) =>
          s.id === action.payload ? { ...s, isFavourite: false } : s
        )
      }
    case "GET_FAVOURITE_POSTS":
      return {
        ...state,
        favourites: [...action.payload]
      }
    default:
      return state
  }
}
