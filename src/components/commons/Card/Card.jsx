import { LinkButton } from "../LinkButton/LinkButton";
import { Description } from "../Description/Description";
import { SubTitle } from "../SubTitle/SubTitle";
import { Title } from "../Title/Title";

// import data from "../../../assets/data/data.json";

// 1 - build the caomponent base

// export const Card = () => {
//     return (
//         <div className="card-container">
//             <img src="" alt="" />
//             <Title>Im a title</Title>
//             <SubTitle>best location</SubTitle>
//             <Description text="This is a description" />
//             <LinkButton link="">Github</LinkButton>
//             <LinkButton link="">Twitter</LinkButton>
//         </div>
//     );
// };

// 2 - handle one item

// export const Card = () => {
//     const [first, ...rest] = data;
//     return (
//         <div className="card-container">
//             <img src={first.image} alt="" />
//             <Title>{first.title}</Title>
//             <SubTitle>{first.location}</SubTitle>
//             <Description text={first.description} />
//             <LinkButton link={first.links[0].url}>{first.links[0].name}</LinkButton>
//             <LinkButton link={first.links[1].url}>{first.links[1].name}</LinkButton>
//         </div>
//     );
// };

// 3 - Handle multiple buttons
// export const Card = () => {
//     const [first, ..._] = data;
//     return (
//         <div className="card-container">
//             <img src={first.image} alt="place" />
//             <Title>{first.title}</Title>
//             <SubTitle>{first.location}</SubTitle>
//             <Description text={first.description} />
//             {first.links.map(({ url, name }) => (
//                 <LinkButton key={name} link={url}>{name}</LinkButton>
//             ))}
//         </div>
//     );
// };

// 4 - add props to Card to handle multiple Cards (from Home.jsx)

export const Card = ({ image, title, location, description, links, id }) => {
    return (
        <div className="card-container">
            <img src={image} alt="place" />
            <Title>{title}</Title>
            <SubTitle>{location}</SubTitle>
            <Description text={description} />
            {links.map(({ url, name }) => (
                <LinkButton key={`${name}+${id}`} link={url}>{name}</LinkButton>
            ))}
        </div>
    );
};
