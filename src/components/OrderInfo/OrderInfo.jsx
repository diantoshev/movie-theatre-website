import GreyContainer from '../GreyContainer/GeryContainer';
import './OrderInfo.scss';
import Tilt from 'react-tilt'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearOrder } from '../../store/OrderSlice';
import { useDispatch } from 'react-redux';


function OrderInfo() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearOrder());
    }, [])

    const selectedProgram = useSelector(state => state.programEntries)
        .filter(entry => entry.selectedScreeningId !== "")[0];
    const selectedSeats = useSelector(state => state.order.seats).toString();
    const priceTotal = useSelector(state => state.order.total)

    return (
        <GreyContainer className=" orderInfo__container container-fluid p-4 d-flex flex-wrap rounded-2">
            <div className="row orderInfo_sectionContainer">
                <div className='col-sm'>
                    <div className="d-flex gap-1 flex-column justify-content-center align-items-center titlePoster__container col">
                        <h3 className="movieTitle mb-3">{selectedProgram.movie}</h3>
                        <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }}>
                            <img src={selectedProgram.movieImage} alt={selectedProgram.movie}></img>
                        </Tilt>
                    </div>
                </div>
                <div className='col-lg orderInfo__container'>
                    <p><strong>Cinema: </strong>{selectedProgram.cinemaName}</p>
                    <p><strong>Date: </strong>{selectedProgram.date}</p>
                    <p><strong>Time of screening: </strong>{selectedProgram.selectedDate} {selectedProgram.selectedHour}</p>
                    <p><strong>Seats: </strong> {selectedSeats}</p>
                    <p><strong>Current Total: </strong> {`${priceTotal} BGN`}</p>
                </div>
            </div>
        </GreyContainer>
    );
}

export default OrderInfo;