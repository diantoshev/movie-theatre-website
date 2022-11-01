import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
import SeatMap from './components/SeatMap/SeatMap';
import RedContainer from '../../components/RedContainer/RedContainer';
import GoldButton from '../../components/Buttons/GoldButton';
import GreyButton from '../../components/Buttons/DarkButton';
import { NavLink } from 'react-router-dom';

import './SeatsPage.scss';

export default function SeatsPage(props) {
    return <PageContainer>
        <AnimatePage>
            <div className='container-xl d-flex flex-wrap pb-4'>
                <RedContainer className='p-5 h-100 w-100 d-flex justify-content-center flex-column'>
                    <div className='d-flex gap-lg-5 wrapOnMobile'>
                        <div className='orderVertical__container'>
                            <OrderInfo />
                        </div>
                        <div className='seatMap__container mt-2'>
                            {/* <SeatMap /> */}
                            <div className='actionButtons d-flex justify-content-lg-evenly mt-5 gap-lg-5 w-100'>
                                <NavLink to='/home'><GreyButton>Cancel</GreyButton></NavLink>
                                <NavLink to='/booking-complete'><GoldButton>Confirm order</GoldButton></NavLink>
                            </div>
                        </div>
                    </div>
                </RedContainer>
            </div>
        </AnimatePage>
    </PageContainer >
}