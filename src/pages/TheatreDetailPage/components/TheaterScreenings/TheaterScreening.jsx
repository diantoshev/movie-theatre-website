import RedContainer from "../../../../components/RedContainer/RedContainer";
import "./TheaterScreening.scss";
import GoldButton from "../../../../components/Buttons/GoldButton";
import { NavLink } from "react-router-dom";
import { IoTicketOutline } from 'react-icons/io5';

import TimeSlotToggle from "../TimeSlotToggle/TimeSlotToggle";
export default function TheaterScreenings() {
  return (
    <>
      <RedContainer className="screening-container container-xl justify-content-center p-3 rounded-3 w-100 gap-4">
        <div>
          <img className="h-75 rounded-2" src="https://m.media-amazon.com/images/M/MV5BNjMxZmI4NzEtYWNjOS00M2MwLWE4YTctMjk1YWEzOTY1NjkwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg " alt="poster" />
        </div>
        <div className="col-md d-flex flex-wrap w-75 gap-4">
          <div className="row w-100">
            <h2 className="program_movieTitle">Black Panther</h2>
          </div>
          <div className='row w-100 mb-2'>
            <TimeSlotToggle className='slotsToggle' />
          </div>
          <div className="w-100 mt-2">
            <NavLink to='/movies/:id'>
              <GoldButton className="buyTickets"> <IoTicketOutline />  Buy Tickets</GoldButton>
            </NavLink>
          </div>
        </div>
      </RedContainer>
    </>
  );
}
