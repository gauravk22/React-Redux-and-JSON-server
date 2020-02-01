export const addPost = () => {
  return async(dispatch,getState) => {

	try{
		const f=await fetch('http://localhost:3000/posts')
        	const j=await f.json();
	
		dispatch(addPostSuccess(j));
		console.log('current state:', getState());
	}
	catch(err){
		console.log(err)
	}
	
  };
};

const addPostSuccess = post => ({
  type: "ADD_DATA",
  payload: [
    ...post
  ]
});

