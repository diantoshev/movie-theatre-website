import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ToggleButtonGroup } from 'react-bootstrap';
import './TimeSlotToggle.scss';

function TimeSlotToggle(props) {
    const [radioValue, setRadioValue] = useState('');
    const screeningId = props.screeningId;
    const radios = [
        { name: '13:00', value: `${screeningId}-13:00` },
        { name: '15:00', value: `${screeningId}-15:00` },
        { name: '17:00', value: `${screeningId}-17:00` },
        { name: '19:00', value: `${screeningId}-19:00` },
        { name: '21:00', value: `${screeningId}-21:00` },
    ];

    return (
        <>
            <ToggleButtonGroup
                movieId={props.movieid}
                screeningId={props.screeningId}
                name={screeningId}
                size='lg'
                className="mb-2 d-flex flex-shrink-5 toggle_group w-100 justify-content-center">
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`${screeningId}-${idx}`}
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
        </>
    );
}

export default TimeSlotToggle;