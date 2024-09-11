import Post from "./Post.jsx";

function Posts({ posts }) {
    return (
        <div>
            {posts.map((post) => {
                return <Post key={post.id} title={post.title} />;
            })}
        </div>
    );
}

export default Posts;
