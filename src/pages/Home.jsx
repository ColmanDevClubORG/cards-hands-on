import { Card } from "../components";
import data from "../assets/data/data.json";
import { useState } from "react";

export const Home = () => {
    const [filteredData, setFilteredData] = useState(data);

    const handleChange = (e) => {
        const text = e.target.value;
        setFilteredData(
            data.filter((cardData) =>
                cardData.title
                    .toLocaleLowerCase()
                    .includes(text.toLocaleLowerCase())
            )
        );
    };

    return (
        <div className="home-container">
            <input type="text" onChange={handleChange} placeholder="Search" />
            <div className="cards-container">
                {filteredData.map((place) => (
                    <Card
                        key={place.id}
                        {...place}
                        // description={place.description}
                        // image={place.image}
                        // links={place.links}
                        // location={place.location}
                        // title={place.title}
                        // key={place.id}
                    />
                ))}
            </div>
        </div>
    );
};
