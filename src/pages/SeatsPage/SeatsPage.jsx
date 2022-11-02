import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import SeatMap from './components/SeatMap/SeatMap';
import RedContainer from '../../components/RedContainer/RedContainer';
import GreyButton from '../../components/Buttons/DarkButton';
import { NavLink, useNavigate } from 'react-router-dom';

import './SeatsPage.scss';
import { useDispatch } from 'react-redux';
import { clearOrder } from '../../store/OrderSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useEffect } from 'react';
import Order from '../../model/Order';
import { orderManager } from '../../model/OrderManager';

export default function SeatsPage(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const order = useSelector(state => state.order);
    const orderSeats = order.seats;
    const selectedProgramEntryId = order.programId;
    const user = useSelector(state => state.activeUser);
    const programEntries = useSelector(state => state.programEntries);
    const [buttonState, setButtonState] = useState(true);


    useEffect(() => {
        setButtonState(orderSeats.length === 0 ? true : false)
    }, [orderSeats])


    const handleCancel = () => {
        dispatch(clearOrder());
    }

    const handleOrder = () => {
        const programEntry = programEntries.find(entry => entry.id === selectedProgramEntryId);
        const newOrder = new Order(
            user.username,
            programEntry.cinemaName,
            programEntry.movieId,
            programEntry.selectedDate,
            programEntry.selectedHour,
            order.total,
            orderSeats
        )
        orderManager.allOrders.push(newOrder);
        console.log(newOrder)
        console.log(orderManager.allOrders)
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