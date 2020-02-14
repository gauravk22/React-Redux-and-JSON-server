import React from 'react';
import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { updatePostById } from '../actions/Actions';

export default function Card(props) {
    //useEffect(()=>console.log('mounted'),[])

    const dispatch = useDispatch();

    let { post } = props;

    return (
        <div className="card text-center c1" key={post.id}>
            <div className="card-header">{post.id}</div>
            <h4 className="card-title">{post.title}</h4>
            <p className="card-text">
                {post.body}
            </p>

            <div>
                <Button 
                    outline
                    color="success" 
                    onClick={() => dispatch(updatePostById(post.id))}
                >
                    {post.isFavourite ? "UnFavourite" : "Add to Favourites"}
                </Button>
            </div>
        </div>
    )
}
