import { useSelector } from "react-redux";
import TheaterCard from "../../../../components/TheaterCard/TheaterCard";
import "./TheatresContainer.scss";


export default function TheatresContainer() {

  const allTheatres = useSelector(state => state.allTheatres);

  return (
    <div className="my-4 theatres-container-design container-sm d-flex flex-wrap justify-content-evenly gap-5">
      {JSON.parse(allTheatres).map(theatre => <TheaterCard
        key={theatre.id}
        id={theatre.id}
        name={theatre.name}
        img={theatre.image}
        address={theatre.address}
        contacts={theatre.contacts}
        workHours={theatre.workHours}
      />)}
    </div>
  );
}
