import ReadMoreButton from "./ReadMoreButton.jsx";

function Post({ title }) {
    return (
        <div>
            <h2>{title}</h2>
            <ReadMoreButton />
        </div>
    );
}

export default Post;
