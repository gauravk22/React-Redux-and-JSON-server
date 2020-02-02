export const addPost = () => {
  return async(dispatch,getState) => {

	try{
		const f=await fetch('http://localhost:3000/posts')
        	const j=await f.json();
	
		dispatch(addPostSuccess(j));
		//console.log('current state:', getState());
	}
	catch(err){
		console.log(err)
	}
	
  };
};

export const updateFav=(id)=>{
	return (dispatch,getState)=>{
		dispatch(updateFavSuccess(id))
                //console.log('current state after fav:', getState());

		let m=getState().filter(g=>g.id==id)[0]
		console.log(m)

		fetch(`http://localhost:3000/posts/${id}`,{
			method:'PATCH',
			headers:{'Content-Type': 'application/json','crossDomain':true},
			body:JSON.stringify(m)
		}).then(res=>console.log(res))
	}

}

const addPostSuccess = post => ({
  type: "ADD_DATA",
  payload: [
    ...post
  ]
});

const updateFavSuccess=id=>({
  type:"FAV",
  payload:id
});
