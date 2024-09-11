import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//import PostContext from "./PostContext.jsx";

function PostData() {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((postList) =>
        setPost(postList.find((post) => post.id === Number(postId)))
      );
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((allComments) => setComments(allComments));
  }, []);

  //console.log(comments);

  return (
    <>
      <div className="card m-0">
        <div className="card-header m-0">
        <p>
          Post ID: {post.id}, User ID: {post.userId}
        </p>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </div>
      </div>
      <ol className="list-group list-group-flush">
        {comments.map((comment) => (
          <li className="list-group-item list-group-item-action">
            <strong>Hozzászóló:</strong> 
            {comment.name}

            <strong> E-mail címe: </strong>
            {comment.email}
            <br />
            <strong>Hosszászólás:</strong>
            {comment.body}
          </li>
        ))}
      </ol>

      <Link to="/router-gyakorlas">Vissza</Link>
    </>
  );
}
export default PostData;
