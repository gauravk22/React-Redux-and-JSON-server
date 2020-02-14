import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getFavPosts } from '../actions/Actions'
import Card from './Card'

export default function Favourites() {

    useEffect(() => {
        dispatch(getFavPosts());
    }, [])

    const items = useSelector(state => state.favourites)
    const dispatch = useDispatch();

    const showList = () => {
        return items.map(post => {
            if (post.isFavourite) {
                return (
                    <Card key={post.id} post={post} />
                )
            }
        })
    }

    return (
        <>
            <div>{showList()}</div>
        </>
    )

}
