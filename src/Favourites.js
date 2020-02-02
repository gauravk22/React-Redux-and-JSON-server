import React,{useEffect} from 'react';

import { useSelector,useDispatch } from 'react-redux'

import {getFavPosts,updateFav} from './actions';

export default function Favourites(){

    useEffect(()=>{
        dispatch(getFavPosts());
    },[])

    const items=useSelector(state=>state)
    const dispatch=useDispatch();


    const showList=()=>{
         return items.map(post=>(
            <div className="post" key={post.id}>
            <h4>{post.id}.{post.title}</h4>
            <p>{post.body}</p>

                <div>
                <button className="fav-button" onClick={() => dispatch(updateFav(post.id))}>
                 {post.isFavourite?"Favourite":"UnFavorite"}
                </button>
            </div>
            </div>
            ))
    }


	return(
		<div>{showList()}</div>

	)

}
