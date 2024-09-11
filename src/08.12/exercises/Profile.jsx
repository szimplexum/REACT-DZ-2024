function Profile({ user }) {
    return (
        <div className="user">
            <h3>{user.name}</h3>
            <img src={user.imageUrl} />
        </div>
    );
}

export default Profile;
