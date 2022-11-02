import './SeatMap.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import GreyContainer from '../../../../components/GreyContainer/GeryContainer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateSeats, updatePriceTotal } from '../../../../store/OrderSlice';


const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

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

    const dispatch = useDispatch();
    const programDate = useSelector(state => state.programEntries)
        .filter(entry => entry.selectedScreeningId !== "")[0];

    const movieScreenings = useSelector(state => state.programEntries)
        .filter(entry => entry.selectedScreeningId !== "")[0].screenings;


    // WIll take the current screenings that the user has selected:
    const currentScreening = movieScreenings.find(screening => screening.id === programDate.selectedScreeningId);
    let occupiedSeats = currentScreening.occupiedSeats.slice();

    function handleSelectedState(seat) {
        const isSelected = selectedSeats.includes(seat)
        if (isSelected) {
            onSelectedSeatsChange(
                selectedSeats.filter(selectedSeat => selectedSeat !== seat),
                occupiedSeats = occupiedSeats.filter(selectedSeat => selectedSeat !== seat),
                dispatch(updateSeats(seat))
            )
        } else {
            onSelectedSeatsChange([...selectedSeats, seat])
            occupiedSeats = [...occupiedSeats, seat]
            dispatch(updateSeats(seat));
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

    const programDate = useSelector(state => state.programEntries)
        .filter(entry => entry.selectedScreeningId !== "")[0];

    const movieScreenings = useSelector(state => state.programEntries)
        .filter(entry => entry.selectedScreeningId !== "")[0].screenings;


    // WIll take the current screenings that the user has selected:
    const currentScreening = movieScreenings.find(screening => screening.id === programDate.selectedScreeningId);
    let occupiedSeats = currentScreening.occupiedSeats.slice();
    const dispatch = useDispatch();

    const currentMovie = {
        price: programDate.price,
        occupied: occupiedSeats
    }
    const [selectedSeats, setSelectedSeats] = useState([]);

    return (
        <GreyContainer>
            <div className="seatMap">
                <ShowCase />
                <Cinema
                    movie={currentMovie}
                    selectedSeats={selectedSeats}
                    onSelectedSeatsChange={(selectedSeats) => {
                        setSelectedSeats(selectedSeats);
                        dispatch(updatePriceTotal(selectedSeats.length * currentMovie.price));
                    }}
                />
            </div>
        </GreyContainer>

    )
}

export default SeatMap;