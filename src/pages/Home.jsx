import { Card } from "../components";
import CardsData from "../assets/data/data.json";
import { useState } from "react";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = CardsData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="cards-container">
        {filteredCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};
