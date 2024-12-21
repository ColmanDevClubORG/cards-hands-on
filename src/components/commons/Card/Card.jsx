export const Card = ({ card }) => {
  return (
    <div className="card-container">
      <img src={card.image} alt="placeholder" />
      <h1>{card.title}</h1>
      <h2>{card.location}</h2>
      <p>{card.description}</p>
      {card.links.map((link, index) => {
        return <a href={link.url}>{link.name}</a>;
      })}
    </div>
  );
};
