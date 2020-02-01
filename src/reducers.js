var initialState = [];
 
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_DATA":
	console.log("add data")
        return action.payload;
      case "FAV":
        return {
          
        };
      case "UNFAV":
        return {
          
        };
      default:
        return state;
    }
  }
