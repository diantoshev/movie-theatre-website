import Card from 'react-bootstrap/Card';
import GreyContainer from '../GreyContainer/GeryContainer'
import './MovieCard.scss';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import { IoTicketOutline } from 'react-icons/io5';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { RiCloseCircleLine } from 'react-icons/ri';

let isAdmin = true;
let isLogged = false;
export default function MovieCard(props) {
    return (
        <GreyContainer className='movieCard__container bg-dark rounded-3'>
            <Card className='bg-goldDark movieCard'>
                <Card.Body className='bg-greyDark movieCard__body'>
                    {!(isAdmin && isLogged) ?
                        <ImageOverlay
                            overlayBtnNavText='Buy Tickets'
                            overlayBtnNavIcon={<IoTicketOutline />}
                            overlayBtnNavLink='/movies/:id'
                            overlayBtnActionText='Add to favorites'
                            overlayBtnActionIcon={<MdOutlineFavoriteBorder />}
                        >
                            <Card.Img className='movieCard-img' variant="top" src="https://m.media-amazon.com/images/M/MV5BZTIyNzc3NzMtNGE5YS00Yjg5LTk5MDMtOTUxMzk1ZTBkOTgwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg" />
                        </ImageOverlay> :
                        <ImageOverlay
                            overlayBtnActionText='Remove movie'
                            overlayBtnActionIcon={<RiCloseCircleLine />}
                        >
                            <Card.Img className='movieCard-img' variant="top" src="https://m.media-amazon.com/images/M/MV5BZTIyNzc3NzMtNGE5YS00Yjg5LTk5MDMtOTUxMzk1ZTBkOTgwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg" />
                        </ImageOverlay>
                    }
                    <Card.Text className='text-goldMid rounded-2 p-2 m-3 movieTitle'>
                        DC Leage of Super Pets
                    </Card.Text>
                </Card.Body>
            </Card>
        </GreyContainer >
    );
}