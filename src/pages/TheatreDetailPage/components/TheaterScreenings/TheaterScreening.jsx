import { useSelector } from "react-redux";
import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import ScreeningCard from '../ScreeningCard/ScreeningCard';
import { useEffect } from 'react';

export default function TheaterScreenings() {

  const screenings = useSelector(state => state.theatre.screenings).map(screening => JSON.parse(screening));
  // console.log(screenings);
  useEffect(() => {
    console.log(screenings);
  }, [])

  return (
    <>
      <GreyContainer className="p-4 mb-4 container d-flex flex-column gap-4">
        {screenings.map(screening => {
          return <ScreeningCard
            movieImage={screening.movieImage}
            title={screening.movie}
            screeningId={screening.id}
            key={screening.id}
          />
        })}

      </GreyContainer>
    </>
  );
}
