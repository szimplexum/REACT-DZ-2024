import { useEffect, useState } from "react";

function PostList() {
    const [posts, setPosts] = useState([]);

    const downloadPosts = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((postsData) => setPosts(postsData));
    };

    useEffect(() => {
        downloadPosts();
    }, []);

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default PostList;
