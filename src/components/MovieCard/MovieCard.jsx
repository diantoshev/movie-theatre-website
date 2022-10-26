import Card from 'react-bootstrap/Card';
import GreyContainer from '../GreyContainer/GeryContainer'
import './MovieCard.scss';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import { IoTicketOutline } from 'react-icons/io5';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { RiCloseCircleLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';


export default function MovieCard(props) {
    const activeUser = useSelector(state => state.activeUser);

    return (
        <GreyContainer className='movieCard__container bg-dark rounded-3' id={props.id}>
            <Card className='movieCard d-flex flex-column'>
                <Card.Body className='bg-greyDark movieCard__body'>
                    <div className='w-100 h-auto'>
                        {!(activeUser.isAdmin && activeUser.isLogged) ?
                            <ImageOverlay
                                id={props.id}
                                overlayBtnNavText='Buy Tickets'
                                overlayBtnNavIcon={<IoTicketOutline />}
                                overlayBtnNavLink={`/movies/${props.id}`}
                                overlayBtnActionText='Add to favorites'
                                overlayBtnActionIcon={<MdOutlineFavoriteBorder />}
                            >
                                <Card.Img className='movieCard-img' variant="top" src={props.poster} />
                            </ImageOverlay> :
                            <ImageOverlay
                                overlayBtnActionText='Remove movie'
                                overlayBtnActionIcon={<RiCloseCircleLine />}
                            >
                                <Card.Img className='movieCard-img' variant="top" src={props.poster} />
                            </ImageOverlay>
                        }
                    </div>
                    <div className='h-100 w-100 d-flex flex-column justify-content-center flex-nowrap'>
                        <div className='pt-3 px-2 h-50 d-flex justify-content-center align-items-center'>
                            <Card.Text className='text-goldMid d-flex flex-wrap movieTitle'>
                                {props.title}
                            </Card.Text>
                        </div>
                        <div className='h-50 d-flex justify-content-center align-items-center'>
                            <Card.Text>{props.country} ({props.year})</Card.Text>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </GreyContainer >
    );
}