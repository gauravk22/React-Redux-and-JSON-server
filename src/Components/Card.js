import React from "react"
import { Button } from "reactstrap"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"

import { updatePostById } from "../actions/ActionCreators"

export default function Card({ id, title, body, isFavourite }) {
  const dispatch = useDispatch()
  return (
    <div className="card text-center c1" key={id}>
      <div className="card-header">{id}</div>
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{body}</p>

      <div>
        <Button
          outline
          color="success"
          onClick={() => dispatch(updatePostById(id))}
        >
          {isFavourite ? "UnFavourite" : "Add to Favourites"}
        </Button>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  isFavourite: PropTypes.bool
}
