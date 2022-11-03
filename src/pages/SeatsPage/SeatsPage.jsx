import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import SeatMap from './components/SeatMap/SeatMap';
import RedContainer from '../../components/RedContainer/RedContainer';
import GreyButton from '../../components/Buttons/DarkButton';
import { NavLink, useNavigate } from 'react-router-dom';
import { screeningManager } from '../../model/ScreeningManager';
import './SeatsPage.scss';
import { useDispatch } from 'react-redux';
import { clearOrder } from '../../store/OrderSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import Order from '../../model/Order';
import { orderManager } from '../../model/OrderManager';
import { updateEntryData } from '../../store/ProgramEntrySlice';

export default function SeatsPage(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const order = useSelector(state => state.order);
    const orderSeats = order.seats;
    const selectedProgramEntryId = order.programId;
    const user = useSelector(state => state.activeUser);
    const programEntry = screeningManager.allScreenings.find(entry => entry.id === selectedProgramEntryId);
    const [buttonState, setButtonState] = useState(true);
    useEffect(() => {
        setButtonState(orderSeats.length === 0 ? true : false)
    }, [orderSeats])


    const handleCancel = () => {
        dispatch(clearOrder());
    }

    const updateOccupiedSeats = (entry, seats) => {
        const screening = entry.screenings.find(screening => screening.id === entry.selectedScreeningId);
        const newOccupied = [...screening.occupiedSeats, ...seats];
        screening.occupiedSeats = newOccupied;
        dispatch(updateEntryData(JSON.parse(JSON.stringify(programEntry))));
    }
    const handleOrder = () => {
        const newOrder = new Order(
            user.username,
            programEntry.cinemaName,
            programEntry.movieId,
            programEntry.selectedDate,
            programEntry.selectedHour,
            order.total,
            orderSeats
        )
        updateOccupiedSeats(programEntry, orderSeats)
        orderManager.allOrders.push(newOrder);
        navigate('/booking-complete');
    }

    return <PageContainer>
        <AnimatePage>
            <div className='container-xl d-flex flex-wrap pb-4'>
                <RedContainer className='p-5 h-100 w-100 d-flex justify-content-center flex-column'>
                    <div className='d-flex gap-lg-5 wrapOnMobile'>
                        <div className='orderVertical__container'>
                            <OrderInfo />
                        </div>
                        <div className='seatMap__container mt-2'>
                            <SeatMap />
                            <div className='actionButtons d-flex justify-content-lg-evenly mt-5 gap-lg-5 w-100'>
                                <NavLink onClick={handleCancel} to='/home'><GreyButton>Cancel</GreyButton></NavLink>
                                <Button
                                    onClick={handleOrder}
                                    className='btn rounded-3 text-lg-center'
                                    size='lg'
                                    variant="outline-goldMid"
                                    disabled={buttonState}
                                >Confirm order</Button>
                            </div>
                        </div>
                    </div>
                </RedContainer>
            </div>
        </AnimatePage>
    </PageContainer >
}