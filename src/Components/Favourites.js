import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getFavPosts } from "../actions/ActionCreators"
import Card from "./Card"

export default function Favourites() {
  const items = useSelector((state) => state.favourites)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFavPosts())
  }, [])

  const showList = () => {
    return items.map((post) => {
      if (post.isFavourite) {
        return <Card key={post.id} {...post} />
      }
      return false
    })
  }

  return (
    <>
      <div>{showList()}</div>
    </>
  )
}
