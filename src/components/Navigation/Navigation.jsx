import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navigation.scss';
import GoldButton from '../Buttons/GoldButton';
import { useSelector } from 'react-redux';
import { programDays } from '../../util/utilFuncs';
import { useDispatch } from 'react-redux';
import { updateCurrentDate } from '../../store/TheatreSlice';

export default function Navigation() {
    const activeUser = useSelector(state => state.activeUser);
    const dispatch = useDispatch()

    const handleSelect = () => {
        dispatch(updateCurrentDate(programDays()[0]));
    }
    return (
        <Navbar bg="transparent" expand="lg" className='nav w-100' fixed='top'>
            <div className="container-fluid w-100">
                <Navbar.Brand>
                    <Link to='home'><img className='navLogo' src={require('../../assets/logo2_red_medium-2.png')} alt="Site logo"></img></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-goldMid' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-between w-100 mx-0">
                        <Link onClick={handleSelect} to='/theatres/cin1'><GoldButton>Program</GoldButton></Link>
                        <Link to='/theatres'><GoldButton>Theatres</GoldButton></Link>
                        <Link to='/movies'><GoldButton>Movies</GoldButton></Link>
                        {activeUser.isLogged ?
                            <Link className='ms-auto' to='/account'><GoldButton className="nav-button">Account</GoldButton></Link> :
                            <Link className='ms-auto' to='/login'><GoldButton className="nav-button">Login</GoldButton></Link>}
                    </Nav>
                </Navbar.Collapse >
            </div >
        </Navbar >
    )
}