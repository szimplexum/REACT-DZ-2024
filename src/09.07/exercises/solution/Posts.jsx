import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log('Error fetching posts:, ', err));
  }, []);

  return (
    <div>
      <ul className="list-group mt-4">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            <Link to={`/router-gyakorlas/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
