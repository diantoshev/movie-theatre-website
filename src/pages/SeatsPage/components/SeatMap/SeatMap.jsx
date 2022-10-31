import './SeatMap.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import GreyContainer from '../../../../components/GreyContainer/GeryContainer';
import { useSelector } from 'react-redux';
import { theatreManager } from '../../../../model/TheatreManager';
import { useEffect } from 'react';

const seats = Array.from({ length: 8 * 8 }, (_, i) => i)

function ShowCase() {
    return (
        <ul className="ShowCase">
            <li>
                <span className="seat" /> <small>Free</small>
            </li>
            <li>
                <span className="seat selected" /> <small>Selected</small>
            </li>
            <li>
                <span className="seat occupied" /> <small>Occupied</small>
            </li>
        </ul>
    )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
    const selectedScreeningId = useSelector(state => state.screening.screeningId);
    const selectedTheatreId = useSelector(state => state.screening.theatreId);
    const selectedDate = useSelector(state => state.screening.date);

    // Will get all screenings for this date, from the slected theatre:
    const programDate = theatreManager.allTheatres
        .filter(theatre => theatre.id === selectedTheatreId)[0].programDates
        .find(date => Object.keys(date)[0] === selectedDate)

    // WIll take the current screenings that the user has selected:
    // debugger;
    const currentScreening = Object.values(programDate)
        .flat()
        .find(screening => screening.id === selectedScreeningId)


    function handleSelectedState(seat) {
        // debugger;
        const isSelected = selectedSeats.includes(seat)
        if (isSelected) {
            onSelectedSeatsChange(
                selectedSeats.filter(selectedSeat => selectedSeat !== seat),
                currentScreening.occupiedSeats = currentScreening.occupiedSeats.filter(selectedSeat => selectedSeat !== seat),
            )
        } else {
            onSelectedSeatsChange([...selectedSeats, seat])
            currentScreening.occupiedSeats = [...currentScreening.occupiedSeats, seat]
        }
    }

    return (
        <div className="Cinema">
            <div className="screen" />

            <div className="seats">
                {seats.map(seat => {
                    const isSelected = selectedSeats.includes(seat)
                    const isOccupied = movie.occupied.includes(seat)
                    return (
                        <span
                            tabIndex="0"
                            key={seat}
                            className={clsx(
                                'seat',
                                isSelected && 'selected',
                                isOccupied && 'occupied',
                            )}
                            onClick={isOccupied ? null : () => handleSelectedState(seat)}
                            onKeyPress={
                                isOccupied
                                    ? null
                                    : e => {
                                        if (e.key === 'Enter') {
                                            handleSelectedState(seat)
                                        }
                                    }
                            }
                        />
                    )
                })}
            </div>
        </div>
    )
}

function SeatMap() {

    const selectedScreeningId = useSelector(state => state.screening.screeningId);
    const selectedTheatreId = useSelector(state => state.screening.theatreId);
    const selectedDate = useSelector(state => state.screening.date);
    const screeningPrice = useSelector(state => state.screening.price);

    // Will get all screenings for this date, from the slected theatre:
    const programDate = theatreManager.allTheatres
        .filter(theatre => theatre.id === selectedTheatreId)[0].programDates
        .find(date => Object.keys(date)[0] === selectedDate)

    // WIll take the current screenings that the user has selected:
    // debugger;
    const currentScreening = Object.values(programDate)
        .flat()
        .find(screening => screening.id === selectedScreeningId)


    const currentMovie = {
        price: screeningPrice,
        occupied: currentScreening.occupiedSeats ? currentScreening.occupiedSeats : []
    }

    const [selectedMovie, setSelectedMovie] = useState(currentMovie);
    const [selectedSeats, setSelectedSeats] = useState([]);

    return (
        <GreyContainer>
            <div className="seatMap">
                <ShowCase />
                <Cinema
                    movie={selectedMovie}
                    selectedSeats={selectedSeats}
                    onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
                />

                <p className="info">
                    You have selected <span className="count">{selectedSeats.length}</span>{' '}
                    seats for the price of{' '}
                    <span className="total">
                        {selectedSeats.length * selectedMovie.price}$
                    </span>
                </p>
            </div>
        </GreyContainer>

    )
}

export default SeatMap;