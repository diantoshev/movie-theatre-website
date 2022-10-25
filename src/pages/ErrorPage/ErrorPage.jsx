import GoldButton from '../../components/Buttons/GoldButton';
import GreyContainer from '../../components/GreyContainer/GeryContainer';
import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import './ErrorPage.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo2_red_medium-2.png';

export default function ErrorPage(props) {
    return (<PageContainer>
        <AnimatePage>
            <GreyContainer className='errorPage container-sm d-flex flex-column p-5 rounded-5 mt-4'>
                <img src={logo} alt='Brand logo' />
                <p className='errorMessage mb-4'> No such page here... :-/ </p>
                <NavLink to='/home'><GoldButton className='mb-4'>Go home</GoldButton></NavLink>
            </GreyContainer>
        </AnimatePage>
    </PageContainer >)
}