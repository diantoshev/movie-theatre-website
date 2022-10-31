import { useSelector } from "react-redux";
import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import ScreeningCard from '../ScreeningCard/ScreeningCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './TheatreScreening.scss';
import { programDays } from "../../../../util/utilFuncs";
import { useDispatch } from "react-redux";
import { updateDate } from "../../../../store/ScreeningSlice";

export default function TheaterScreenings() {

  const dispatch = useDispatch();

  //Taking program for current theatre from store:
  const program = useSelector(state => state.theatre.programDates).map(date => JSON.parse(date));

  // Will get the first day of the program dates, and assign it as
  // a default active event key for tab program:
  let defaultActiveTabKey = programDays()[0];

  const handleTabChange = (event) => {
    dispatch(updateDate({ date: event }))
  }

  // Function to create tabs for each day of the program, 
  //depending on the current program days set:
  const createTabs = () => {
    return program.map((day, index) => {
      return (<Tab
        onSelect={(value) => console.log(this.value)}
        key={index}
        eventKey={Object.keys(day)[0]}
        value={Object.keys(day)[0]}
        title={Object.keys(day)[0]}>
        {createScreenings(Object.values(day)[0])}
      </Tab>)
    })
  };

  // Function to populate each tab with random screenings:
  const createScreenings = (screenings) => {
    return screenings.map(screening => <ScreeningCard
      key={screening.id}
      screeningid={screening.id}
      movieImage={screening.movieImage}
      title={screening.movie}
      movieId={screening.movieId}
      price={screening.price}
    />)
  }

  return (
    <>
      <GreyContainer className=" program__container p-4 mb-4 container-fluid d-flex flex-column gap-4">
        <Tabs
          onSelect={(e) => handleTabChange(e)}
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
