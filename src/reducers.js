var initialState = [];
 
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_DATA":
        return action.payload;
      case "FAV":
	return state.map((s)=>(s["id"]===action.payload)?{...s,"isFavourite":!s["isFavourite"]}:s);
      case "ALLFAV":
        return action.payload;
      default:
        return state;
    }
  }
