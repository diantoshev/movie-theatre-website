import { useNavigate } from "react-router-dom";
import { IoTicketOutline } from 'react-icons/io5';
import RedContainer from "../../../../components/RedContainer/RedContainer";
import './ScreeningCard.scss'
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ToggleButtonGroup } from 'react-bootstrap';
import './TimeSlotToggle.scss';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useDispatch } from "react-redux";
import { updateEntryData } from "../../../../store/ProgramEntrySlice";

function ScreeningCard(props) {
    const isLogged = useSelector(state => state.activeUser.isLogged);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [radioValue, setRadioValue] = useState('');
    const [button, setButton] = useState(true);

    const screenings = props.screenings;

    const radios = [
        { name: '13:00', value: `${props.programEntry}_${screenings[0].id}_13:00` },
        { name: '15:00', value: `${props.programEntry}_${screenings[1].id}_15:00` },
        { name: '17:00', value: `${props.programEntry}_${screenings[2].id}_17:00` },
        { name: '19:00', value: `${props.programEntry}_${screenings[3].id}_19:00` },
        { name: '21:00', value: `${props.programEntry}_${screenings[4].id}_21:00` },
    ];

    const uncheckOtherToggles = (e) => {
        const allToggles = document.querySelectorAll('.timeSlot_toggle');
        allToggles.forEach(toggle => {
            if (e !== toggle.control.value) {
                toggle.control.checked = false;
            }
        })
    }

    const currentDate = useSelector(state => state.theatre.currentDate);
    const programEntries = [...useSelector(state => state.programEntries)];

    const handleSelect = (e) => {
        const selectedProgramEntryToggle = e.split('_')[0];
        const selectedScreeningToggle = e.split('_')[1];
        const selectedHourToggle = e.split('_')[2];
        const programEntry = JSON.parse(JSON.stringify(programEntries.find(entry => entry.id === selectedProgramEntryToggle)))
        programEntry.selectedDate = currentDate;
        programEntry.selectedHour = selectedHourToggle;
        programEntry.selectedScreeningId = selectedScreeningToggle;
        dispatch(updateEntryData(JSON.parse(JSON.stringify(programEntry))));
        setButton(false)
        uncheckOtherToggles(e);

    }


    const buyTickets = () => {

        navigate(isLogged ? '/choose-seats' : '/login');
    }
    return (
        <RedContainer
            className="screening-container container justify-content-center p-3 rounded-3 w-100 my-4 gap-3"
            movieid={props.programEntry}
            programentry={props.programEntry}>
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
                        programentry={props.programentry}
                        name={props.movieId}
                        size='lg'
                        onChange={(e) => handleSelect(e)}
                        className="mb-2 d-flex flex-shrink-5 toggle_group w-100 justify-content-center">
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={radio.value}
                                id={radio.value}
                                type="radio"
                                variant="outline-goldMid"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => {

                                    setRadioValue(e.currentTarget.value)
                                }}
                                className='timeSlot_toggle'
                            >
                                {radio.name}
                            </ToggleButton>

                        ))}
                    </ToggleButtonGroup>
                </div>
                <div className="w-100 mt-2">
                    <OverlayTrigger
                        placement='auto'
                        overlay={
                            <Tooltip id={`tooltip-3`}>
                                <strong>{props.price} BGN</strong>
                            </Tooltip>
                        }
                    >
                        <Button
                            disabled={button}
                            movieid={props.movieId}
                            onClick={buyTickets}
                            className={'buyTickets screeningCard_btn me-4 btn rounded-3 text-lg-center'}
                            size='lg'
                            variant="outline-goldMid">
                            <IoTicketOutline />  Buy Tickets
                        </Button>
                    </OverlayTrigger>
                </div>
            </div>
        </RedContainer >
    );
}

export default ScreeningCard;