import { useSelector } from "react-redux";
import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import ScreeningCard from '../ScreeningCard/ScreeningCard';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './TheatreScreening.scss';

export default function TheaterScreenings() {

  //Taking program for current theatre from store:
  const program = useSelector(state => state.theatre.programDates).map(date => JSON.parse(date));

  // Function to create tabs for each day of the program, 
  //depending on the current program days set:
  const createTabs = () => {
    return program.map((day, index) => {
      return (<Tab
        key={index}
        eventKey={index}
        title={Object.keys(day)[0]}>
        {createScreenings(Object.values(day)[0])}
      </Tab>)
    })
  };

  // Function to populate each tab with random screenings:
  const createScreenings = (screenings) => {
    return screenings.map(screening => <ScreeningCard
      key={screening.id}
      screeningId={screening.id}
      movieImage={screening.movieImage}
      title={screening.movie}
      movieId={screening.movieId}
    />)
  }

  return (
    <>
      <GreyContainer className=" program__container p-4 mb-4 container-fluid d-flex flex-column gap-4">
        <Tabs
          defaultActiveKey='0'
          id="fill-tab-example"
          className="mb-5 tabulation"
          fill
        >
          {createTabs()}
        </Tabs>
      </GreyContainer>
    </>
  );
}
