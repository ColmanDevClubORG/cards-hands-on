import { Card } from "../components";
import { useState } from "react";
import datajson from "../assets/data/data.json";
export const Home = () => {
    const [filteredCards, setFilteredCards] = useState(datajson);

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        const filtered = datajson.filter((card) => {
            return card.title.toLowerCase().includes(searchValue.toLowerCase());
        });
        setFilteredCards(filtered);
    };



    return (
        <div className="home-container">
            {/* TODO: Implement filter by category when the user enters letters */}
            <input type="text" placeholder="Search" onChange={handleSearch} />
            <div className="cards-container">
                {
                filteredCards.map((cardD,index) => (
                    <Card cardData={cardD} key={cardD.id} />
                ))
                }
            </div>
        </div>
    );
};
