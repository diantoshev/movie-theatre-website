import GoldButton from "../../../../components/Buttons/GoldButton";
import { NavLink } from "react-router-dom";
import { IoTicketOutline } from 'react-icons/io5';
import TimeSlotToggle from "../TimeSlotToggle/TimeSlotToggle";
import RedContainer from "../../../../components/RedContainer/RedContainer";
import './ScreeningCard.scss'
import { useSelector } from 'react-redux';

function ScreeningCard(props) {
    const isLogged = useSelector(state => state.activeUser.isLogged);

    return (
        <RedContainer
            className="screening-container container justify-content-center p-3 rounded-3 w-100 my-4 gap-3"
            id={props.screeningId}>
            <div>
                <img className="h-75 rounded-2 screeningCard-img" src={props.movieImage} alt="poster" />
            </div>
            <div className="col-md d-flex flex-wrap w-75 gap-4">
                <div className="row w-100">
                    <h2 className="program_movieTitle">{props.title}</h2>
                </div>
                <div className='row w-100 mb-2 justify-content-center'>
                    <TimeSlotToggle movieId={props.movieId} screeningId={props.screeningId} className='slotsToggle' />
                </div>
                <div className="w-100 mt-2">
                    <NavLink to={isLogged ? '/choose-seats' : '/login'}>
                        <GoldButton movieId={props.movieId} screeningId={props.screeningId} className="buyTickets me-4"> <IoTicketOutline />  Buy Tickets</GoldButton>
                    </NavLink>
                </div>
            </div>
        </RedContainer>
    );
}

export default ScreeningCard;