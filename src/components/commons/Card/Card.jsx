export const Card = ({cardData}) => {
    return <div className="card-container">
        <img src={cardData.image} alt="card" />
        <h1>{cardData.title}</h1>
        <h2>{cardData.location}</h2>
        <p>{cardData.description}</p>
        {cardData.links.map((link, index) => {
        return <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>        
        })}
    </div>;
};
