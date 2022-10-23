import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import OrderInfo from '../../components/OrderInfo/OrderInfo';
// import GoldContainer from '../../components/GoldContainer/GoldContainer';
import RedContainer from '../../components/RedContainer/RedContainer';
import BookingComplete from './components/BookingComplete';

export default function BookingPage(props) {
    return (
        <PageContainer>
            <AnimatePage>
                <RedContainer className='p-5 d-flex gap-3 container booking__container my-4'>
                    <OrderInfo />
                    <BookingComplete />
                </RedContainer>
            </AnimatePage>
        </PageContainer>);
}