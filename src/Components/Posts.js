import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadPosts } from "../actions/ActionCreators"
import Card from "./Card"

export default function Posts() {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.posts)

  const showList = () => {
    return items.map((post) => <Card key={post.id} {...post} />)
  }

  const fetchData = () => {
    setTimeout(() => {
      dispatch(loadPosts())
    }, 500)
  }

  const handleScroll = (event) => {
    var element = event.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      fetchData()
      console.log("scrolled bottom")
    }
  }

  return (
    <div className="div1" onScroll={(e) => handleScroll(e)}>
      <div>{showList()}</div>
    </div>
  )
}
