import TheaterCard from "../../../../components/TheaterCard/TheaterCard";
import "./TheatresContainer.scss";
import { THEATRE_DATA } from '../../../../constants/TheatreData';

export default function TheatresContainer() {
  const allTheatres = THEATRE_DATA;
  return (
    <div className="my-4 theatres-container-design container-sm d-flex flex-wrap justify-content-evenly gap-5">
      {allTheatres.map(theatre => <TheaterCard
        key={theatre.id}
        name={theatre.name}
        img={theatre.image}
        address={theatre.address}
        contacts={theatre.contacts}
        workHours={theatre.workHours}
      />)}
    </div>
  );
}
