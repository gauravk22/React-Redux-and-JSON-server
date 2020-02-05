import React, { useEffect,useState } from 'react';

import { useSelector,useDispatch } from 'react-redux'

import InfiniteScroll from "react-infinite-scroll-component";
import {addPost,updateFav} from './actions';

import LoadingSpin from './LoadingSpin';

var i=0;
export default function Posts(){

    const dispatch=useDispatch();
    const items=useSelector(state=>state)

    const [data,changeData]=useState([]);
   
    const [load,changeLoad]=useState(true)
 
   useEffect(()=>{
	dispatch(addPost());   
    },[])
   
    useEffect(()=>{
		changeData(items.slice(0,i+10))
	
		return ()=>{i=0;}	
	},[items]) 

    const showList=()=>{
         return data.map(post=>(
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


	const fetchData=()=>{

		if(i>=100){
			changeLoad(false)
			return;	
		}
		setTimeout(()=>{
			i+=10;
	                 changeData(items.slice(0,i))
		},500)
	}

/*
    async function getpost(){

        const f=await fetch('http://localhost:3000/posts')
        const j=await f.json();
        
        changeData([...j]) 
        
    }
 */  
    return(
	<> 
	<h3>List of Posts</h3>       
        <InfiniteScroll
  	dataLength={i} //This is important field to render the next data
  	next={fetchData}
  	hasMore={load}
	scrollThreshold={1}
	  loader={<LoadingSpin/>}
	  endMessage={
    	<p style={{textAlign: 'center'}}>
     	 <b>Yay! You have seen it all</b>
    	</p>
  	}>
	<div>
            {showList()}
        </div>
	</InfiniteScroll>
	</>
    )

}

