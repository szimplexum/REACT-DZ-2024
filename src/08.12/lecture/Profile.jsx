function Profile() {
    const url = "https://ui-avatars.com/api/?name=Boris Vian&background=random";
    const altText = "Boris Vian";

    return <img className="img-class" src={url} alt={`${altText} szöveg`} />;
}

export default Profile;
