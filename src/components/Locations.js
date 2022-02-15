import TravelCard from "./TravelCard";
import data from "../data";

function Locations() {

    var dataElements = data.map(item => {
        return <TravelCard 
            key={item.id}
            location={item.location}
            dates={item.dates}
            img={item.img}
            description={item.description}
        />
    });

    return (
        <div>
            {dataElements}
        </div>
    )
}

export default Locations;