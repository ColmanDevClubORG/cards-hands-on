import { Card } from "../components";
// import data from "../assets/data/data.json";
import { useEffect, useState } from "react";

export const Home = () => {
    const [data, setData] = useState([]);
    // const [filteredData, setFilteredData] = useState(data);
    const [id, setId] = useState(1);
    const [limit, setLimit] = useState(4);

    const getCharacter = async (characterId) => {
        console.log("Tring to fetch character: " + characterId);

        // throw new Error("BUG");

        const res = await fetch(
            "https://rickandmortyapi.com/api/character/" + characterId
        );
        const characterDetails = await res.json();
        console.log(characterDetails);
        setData((prev) => [...prev, characterDetails]);
    };

    // getCharacter(2)

    // useEffect(() => {
    //     getCharacter(2)
    // }, [])

    // useEffect(() => {
    //     if (id <= 25) {
    //         getCharacter(id);
    //         setId(id + 1);
    //     }
    // }, [id]);

    useEffect(() => {
        if (id <= limit) {
            const timeOutId = setTimeout(() => {
                getCharacter(id);
                setId(id + 1);
            }, 1000);
            console.log(timeOutId);
        }
    }, [id, limit]);

    // useEffect(() => {
    //     if (id <= 10) {
    //         let succeeded = false;
    //         const timeOutId = setInterval(async () => {
    //             try {
    //                 await getCharacter(id);
    //                 succeeded = true
    //                 setId(id + 1);
    //             } catch (error) {
    //                 console.log("failed to get character, try again");
    //             }
    //         }, 1000);
    //         console.log(timeOutId);
    //         return () => {
    //             succeeded? clearInterval(timeOutId): null;
    //         };
    //     }
    // }, [id]);

    const handleChange = (e) => {
        // const text = e.target.value;
        // setFilteredData(
        //     data.filter((cardData) =>
        //         cardData.title
        //             .toLocaleLowerCase()
        //             .includes(text.toLocaleLowerCase())
        //     )
        // );
    };

    return (
        <div className="home-container">
            <input type="text" onChange={handleChange} placeholder="Search" />
            <div className="cards-container">
                {data.map((place) => (
                    <Card
                        key={place.id}
                        description={place.status}
                        image={place.image}
                        links={[]}
                        location={place.location.name}
                        title={place.name}
                    />
                ))}
                <button onClick={() => setLimit((prev) => prev + 4)}>
                    NEXT 4
                </button>
            </div>
        </div>
    );
};
