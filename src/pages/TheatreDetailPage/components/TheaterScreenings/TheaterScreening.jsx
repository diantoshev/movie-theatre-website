import { useSelector } from "react-redux";
import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import ScreeningCard from '../ScreeningCard/ScreeningCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './TheatreScreening.scss';
import { programDays } from "../../../../util/utilFuncs";
import { screeningManager } from "../../../../model/ScreeningManager";
import { useDispatch } from "react-redux";
import { updateCurrentDate } from "../../../../store/TheatreSlice";
import { useEffect, useRef } from "react";


export default function TheaterScreenings() {

  //Taking program for current theatre from store:

  const dispatch = useDispatch();
  const program = programDays();
  const selectedTeathre = useSelector(state => state.theatre);
  const programForTheatre = screeningManager.allScreenings
    .filter(entry => entry.cinemaId === selectedTeathre.id);


  // Will get the first day of the program dates, and assign it as
  // a default active event key for tab program:
  const defaultActiveTabKey = program[0];


  // Function to create tabs for each day of the program, 
  // depending on the current program days set:
  const createTabs = () => {

    return program.map((day, index) => {
      return (<Tab
        key={index}
        eventKey={day}
        value={day}
        title={day}>
        {createScreenings(day)}
      </Tab>)
    })
  };


  // Function to populate each tab with random screenings:
  const createScreenings = (day) => {
    const dayEntries = programForTheatre.filter(entry => entry.date === day);
    return dayEntries.map(entry => {
      return <ScreeningCard
        key={entry.id}
        movieImage={entry.movieImage}
        title={entry.movie}
        movieId={entry.movieId}
        screenings={entry.screenings}
        programEntry={entry.id}
        price={entry.price}
      />
    })
  }

  const handleSelect = (e) => {
    dispatch(updateCurrentDate(e));
  }

  return (
    <>
      <GreyContainer className=" program__container p-4 mb-4 container-fluid d-flex flex-column gap-4">
        <Tabs
          onSelect={(e) => handleSelect(e)}
          defaultActiveKey={defaultActiveTabKey}
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
