import { Card } from "../components";

export const Home = () => {
    return (
        <div className="home-container">
            {/* TODO: Implement filter by category when the user enters letters */}
            {/* <input type="text" placeholder="Search" /> */}
            <div className="cards-container">
                <Card />
            </div>
        </div>
    );
};
