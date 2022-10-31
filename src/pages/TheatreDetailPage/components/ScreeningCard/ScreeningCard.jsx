import { useNavigate } from "react-router-dom";
import { IoTicketOutline } from 'react-icons/io5';
import RedContainer from "../../../../components/RedContainer/RedContainer";
import './ScreeningCard.scss'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { updateMovie } from "../../../../store/ScreeningSlice";
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ToggleButtonGroup } from 'react-bootstrap';
import './TimeSlotToggle.scss';
import { updateScreening } from '../../../../store/ScreeningSlice';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function ScreeningCard(props) {
    const isLogged = useSelector(state => state.activeUser.isLogged);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [radioValue, setRadioValue] = useState('');
    const [button, setButton] = useState(true);

    const screeningid = props.screeningid;

    const radios = [
        { name: '13:00', value: `${screeningid}_13:00` },
        { name: '15:00', value: `${screeningid}_15:00` },
        { name: '17:00', value: `${screeningid}_17:00` },
        { name: '19:00', value: `${screeningid}_19:00` },
        { name: '21:00', value: `${screeningid}_21:00` },
    ];

    const handleSelect = (e) => {
        const selectedHourToggle = e.split('_')[1];
        const selectedScreeningToggle = e.split('_')[0];
        setButton(false);
        dispatch(updateScreening(
            {
                screeningId: selectedScreeningToggle,
                hour: selectedHourToggle,
            }))
    }
    const buyTickets = () => {

        dispatch(updateMovie({
            movieId: props.movieId,
            screeningId: props.screeningid,
            movieImage: props.movieImage,
            movieTitle: props.title,
            price: props.price
        }))
        navigate(isLogged ? '/choose-seats' : '/login');
    }
    return (
        <RedContainer
            className="screening-container container justify-content-center p-3 rounded-3 w-100 my-4 gap-3"
            movieid={props.movieId}
            screeningId={props.screeningid}>
            <div>
                <img className="h-75 rounded-2 screeningCard-img" src={props.movieImage} alt="poster" />
            </div>
            <div className="col-md d-flex flex-wrap w-75 gap-4">
                <div className="row w-100">
                    <h2 className="program_movieTitle">{props.title}</h2>
                </div>
                <div className='row w-100 mb-2 justify-content-center'>
                    <ToggleButtonGroup
                        movieid={props.movieId}
                        screeningid={props.screeningid}
                        name={screeningid}
                        size='lg'
                        onChange={(e) => handleSelect(e)}
                        className="mb-2 d-flex flex-shrink-5 toggle_group w-100 justify-content-center">
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`${screeningid}-${idx}`}
                                type="radio"
                                variant="outline-goldMid"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                                className='timeSlot_toggle'
                            >
                                {radio.name}
                            </ToggleButton>

                        ))}
                    </ToggleButtonGroup>
                </div>
                <div className="w-100 mt-2">
                    <OverlayTrigger
                        key={screeningid}
                        placement='auto'
                        overlay={
                            <Tooltip id={`tooltip-${screeningid}`}>
                                <strong>{props.price} BGN</strong>
                            </Tooltip>
                        }
                    >
                        <Button
                            movieid={props.movieId}
                            onClick={buyTickets}
                            className="buyTickets me-4 btn rounded-3 text-lg-center"
                            size='lg'
                            variant="outline-goldMid"
                            disabled={button}>
                            <IoTicketOutline />  Buy Tickets
                        </Button>
                    </OverlayTrigger>
                </div>
            </div>
        </RedContainer >
    );
}

export default ScreeningCard;