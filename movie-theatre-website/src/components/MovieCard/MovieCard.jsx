import Card from 'react-bootstrap/Card';
import GreyContainer from '../GreyContainer/GeryContainer'
import './MovieCard.scss';
import { Link } from 'react-router-dom';
import GoldButton from '../Buttons/GoldButton';

export default function MovieCard() {
    return (
        <GreyContainer className='movieCard__container bg-dark rounded-3'>
            <Card className='bg-goldDark movieCard'>
                <Card.Body className='bg-greyDark movieCard__body'>
                    <div className='poster_container'>
                        <Card.Img className='movieCard-img' variant="top" src="https://m.media-amazon.com/images/M/MV5BZTIyNzc3NzMtNGE5YS00Yjg5LTk5MDMtOTUxMzk1ZTBkOTgwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg" />
                        <div className='poster_overlay'>
                            <div className='favorite'>
                                <GoldButton>Add to favorites</GoldButton>
                            </div>
                            <div className='seeDetails'>
                                <Link to='/movies/:id'><GoldButton>Buy tickets</GoldButton></Link>
                            </div>
                        </div>
                    </div>
                    <Card.Text className='text-goldMid rounded-2 p-2 m-3 movieTitle'>
                        DC Leage of Super Pets
                    </Card.Text>
                </Card.Body>
            </Card>
        </GreyContainer >
    );
}