import React, { useEffect, useState } from 'react';

import { useSelector,useDispatch } from 'react-redux'

import InfiniteScroll from "react-infinite-scroll-component";
import {addPost} from './actions';

import {store} from './index'

export default function Posts(){

    useEffect(()=>{
        getpost();
    },[])
   
    const items=useSelector(state=>state)
    const dispatch=useDispatch();

    const showList=()=>{
         return items.map(post=>(
            <div className="post" key={post.id}>
            <h4>{post.id}.{post.title}</h4> 
            <p>{post.body}</p> 
	    <label className="switch">
  		   <input type="checkbox" defaultChecked></input>
		   <span className="slider round"></span>
	    </label>              
            </div>
            ))
    }

   function getpost(){
	dispatch(addPost());
		
	}

/*
    async function getpost(){

        const f=await fetch('http://localhost:3000/posts')
        const j=await f.json();
        
        changeData([...j]) 
        
    }
 */  
    return(
        
        <div>
            {showList()}
        </div>
    )

}

