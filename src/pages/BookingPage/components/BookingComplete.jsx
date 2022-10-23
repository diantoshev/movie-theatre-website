import { BsFillCheckCircleFill } from 'react-icons/bs';
import './BookingComplete.scss';
import GoldButton from '../../../components/Buttons/GoldButton';
import { NavLink } from 'react-router-dom';
function BookingComplete() {
    return (
        <div className='px-4 d-flex flex-column flex-nowrap align-items-center'>
            <BsFillCheckCircleFill className='check-icon my-3' />
            <h2 className='text-nowrap'>Your booking is complete!</h2>
            <NavLink to='/home'><GoldButton className='mt-4'>Go to home</GoldButton></NavLink>
        </div>
    );
}

export default BookingComplete;