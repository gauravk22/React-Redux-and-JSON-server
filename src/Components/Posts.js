import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loadPosts } from '../actions/Actions';
import Card from './Card'

export default function Posts() {

	const dispatch = useDispatch();
	const items = useSelector(state => state.posts)

	/*useEffect(() => {
		dispatch(loadPosts());
	}, [])
*/
	const showList = () => {
		return items.map(post => (
			<Card key={post.id} post={post} />
		))
	}

	window.onscroll = () => {
		var x=window.scrollY+window.innerHeight-document.body.offsetHeight;
		if(x>=0 && x<=20){
			fetchData();
		}
	}

	const fetchData = () => {
		setTimeout(() => {
			dispatch(loadPosts())
		}, 500)
	}

	return (
		<>
			
			<div>
				{showList()}
			</div>
		</>
	)

}

