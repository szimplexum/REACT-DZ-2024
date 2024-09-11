import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postData = await postResponse.json();
        setPost(postData);

        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        );
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching post data: ', error);
      }
    }
    fetchPost();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card p-0 mt-4">
      <div className="card-header">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className="card-body">
        <h3>Comments</h3>
        <ul className="list-group">
          {comments.map((comment) => (
            <li key={comment.id} className="list-group-item">
              <strong className="me-2">{comment.name}</strong>
              <span>{comment.email}</span>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
