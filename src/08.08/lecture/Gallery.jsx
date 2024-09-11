import Profile, { PROFILE_ID } from "./Profile.jsx"; // named import

function Gallery() {
    console.log(PROFILE_ID);

    return (
        <div>
            <h1>The Doe Family</h1>
            <Profile />
        </div>
    );
}

export default Gallery;
