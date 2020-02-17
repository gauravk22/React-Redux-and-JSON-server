Prerequisites:

Spin a quick local API server by using https://github.com/typicode/json-server in less than 30 seconds
Install JSON server using: npm install -g json-server
Save db.json file & start json server using: json-server --watch db.json
To run React application:

Clone the entire repository to your system
"npm install" to install packages from package.json
"npm start" to start React applicaion . Open this app in browser with the provided port number.

React app:
Page 1

- Render a list of Posts.
- Make api request to http://localhost:3000/posts to get posts. Use redux to
  put data in store. On page 1, render a list of Posts
- Add infinite scroll pagination to the list. Posts visible per page should be 10.
- Individual items from the list should have a toggle to mark it as favourite
- Favourites can be unfavorited also
- Do a put or patch api request to save the clicked post
  Page 2
- Render a list of only favorited posts.
- Make api request to http://localhost:3000/posts?isFavourite=true to get
  favorited posts
- The toggle on each element is visible on page 2 also
- When you unfavourite an item, it won't be visible on this page anymore as this
  page only shows favorited items
