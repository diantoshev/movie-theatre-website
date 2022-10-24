import GoldContainer from '../GoldContainer/GoldContainer';
import './FoodMenuPanel.scss';
import nachos from '../../assets/nachos.png';
import popcorn from '../../assets/popcorn.png';
import coke from '../../assets/coke.png';
import Tilt from 'react-tilt';

function FoodMenu() {
    return (
        <GoldContainer className='foodMenu_container rounded-3 container-sm d-flex flex-nowrap flex-column py-4 mb-4 justify-content-around'>
            <div className='row w-100 d-flex flex-wrap justify-content-around mb-3'>
                <Tilt className='col foodItem_container px-3 m-0'>
                    <img src={popcorn} alt='Popcorn' />
                    <p className='text-redPrimary itemMenu'>Popcorn Menu</p>
                    <p className='text-redPrimary itemPrice'>8,<sup>99</sup></p>
                </Tilt>
                <Tilt className='col foodItem_container px-3'>
                    <img src={nachos} alt='Nachos' />
                    <p className='text-redPrimary itemMenu'>Nachos Menu</p>
                    <p className='text-redPrimary itemPrice'>9,<sup>99</sup></p>
                </Tilt>
                <Tilt className='col foodItem_container px-3'>
                    <img src={coke} alt='Coke' />
                    <p className='text-redPrimary itemMenu'>Drinks Combo</p>
                    <p className='text-redPrimary itemPrice'>7,<sup>99</sup></p>
                </Tilt>
            </div>
        </GoldContainer>
    );
}

export default FoodMenu;