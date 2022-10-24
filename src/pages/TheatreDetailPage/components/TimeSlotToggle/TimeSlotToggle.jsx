import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ToggleButtonGroup } from 'react-bootstrap';
function TimeSlotToggle() {
    const [radioValue, setRadioValue] = useState('');

    const radios = [
        { name: '13:00', value: '13:00' },
        { name: '15:00', value: '15:00' },
        { name: '17:00', value: '17:00' },
        { name: '19:00', value: '19:00' },
        { name: '21:00', value: '21:00' },
    ];

    return (
        <>
            <ToggleButtonGroup name='timeSlotToggle' size='lg' className="mb-2">
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant="outline-goldMid"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </>
    );
}

export default TimeSlotToggle;