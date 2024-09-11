function Card({ imageUrl, name, age, profession, description }) {
    return (
        <div className="card">
            <img className="profile-img" src={imageUrl} />
            <h3>{name}</h3>
            <h4>{profession}</h4>
            <h4>{age}</h4>
            <p>{description}</p>
        </div>
    );
}

export default Card;
