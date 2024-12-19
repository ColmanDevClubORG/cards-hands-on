import { Card } from "../components";
import data from "../assets/data/data.json";

export const Home = () => {
    return (
        <>
            {data.map((place) => (
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
        </>
    );
};
