import Card from 'react-bootstrap/Card';
import RedContainer from "../RedContainer/RedContainer";
import './MovieCard.scss';

export default function MovieCard() {
    return (
        <RedContainer className='movieCard__container'>
            <Card className='bg-goldDark movieCard'>
                <Card.Body className='bg-goldDark movieCard__body'>
                    <Card.Img className='movieCard-img' variant="top" src="https://m.media-amazon.com/images/M/MV5BZTIyNzc3NzMtNGE5YS00Yjg5LTk5MDMtOTUxMzk1ZTBkOTgwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg" />
                    <Card.Text className='text-redPrimary p-1 mt-2 movieTitle'>
                        DC Leage of Super Pets
                    </Card.Text>
                </Card.Body>
            </Card>
        </RedContainer>
    );
}