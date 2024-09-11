import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import PostContext from "./PostContext.jsx";



function PostList() {
  const [posts, setPosts] = useState([]);
  //const { fullPostList } = useContext(PostContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((postList) => setPosts(postList));
  }, []);

  //console.log(posts);

  return (
    <>
      <div>
        <h1>PostList</h1>
        <ol className="list-group">
          {posts.map((post) => (
            <li key={post.id} className="list-group-item list-group-item-action">
              <Link to={`/router-gyakorlas/${post.id}`} style={{fontFamily:"Arial", color:"black", fontWeight:"bold", fontSize:"20pt"}} className="text-decoration-none ;">
                {post.id};Title: {post.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default PostList;
