var counter=1;
export const loadPosts = () => {
	
	return async (dispatch, getState) => {
		
		if(counter<=10){
		try {
			const fetch_call = await fetch(`http://localhost:3000/posts?_page=${counter}`)
			const fetch_data = await fetch_call.json();
			
			counter++;
			dispatch(getPostSuccess(fetch_data));
			//console.log('current state loadPosts:', getState());
		}
		catch (err) {
			console.log(err)
		}
	}
	};
};

export const updatePostById = (id) => {
	return (dispatch, getState) => {
		dispatch(updatePostSuccess(id))
		//console.log('current state after fav:', getState());

		var updatedPost = getState().posts.filter(g => g.id === id)[0]

		if(updatedPost==undefined)
			updatedPost=getState().favourites.filter(g=>g.id==id)[0]
		//console.log(updatedPost)

		fetch(`http://localhost:3000/posts/${id}`
			, {
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json', 'crossDomain': true },
				body: JSON.stringify(updatedPost)
			}).then(response => console.log(response))
			.catch(err => console.log(err))
	}
};

export const getFavPosts = () => {
	//console.log("get fav posts")
	return async (dispatch, getState) => {
		
		try {
			const fetch_call = await fetch('http://localhost:3000/posts?isFavourite=true')
			const fetch_data = await fetch_call.json();
			
			dispatch(getFavPost(fetch_data));
			//console.log('current state:', getState());
		}
		catch (err) {
			console.log(err)
		}
	}
}

const getPostSuccess = post => ({
	type: "LOAD_POSTS",
	payload: [...post]
});

const updatePostSuccess = id => ({
	type: "UPDATE_POSTS",
	payload: id
});

const getFavPost = post => ({
	type: "GET_FAVOURITE_POSTS",
	payload: [...post]
});
