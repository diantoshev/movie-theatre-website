import Card from "react-bootstrap/Card";
import "./TheaterCard.scss";
import Tilt from 'react-tilt';
import GreyContainer from '../GreyContainer/GeryContainer';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import { BiMoviePlay } from 'react-icons/bi';
import { HiOutlineWrench } from 'react-icons/hi2';
import { RiCloseCircleLine } from 'react-icons/ri';
let isAdmin = false;
let isLogged = false;

export default function TheaterCard(props) {
  return (
    <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }} >
      <GreyContainer className='p-4 rounded-3 card-container'>
        <Card className='bg-greyDark theatreCard'>
          {!(isAdmin && isLogged) ?
            <ImageOverlay
              overlayBtnNavText='Check Program'
              overlayBtnNavLink='/theatres/:id'
              overlayBtnNavIcon={<BiMoviePlay />}>
              <Card.Img variant="top" src={props.img} />
            </ImageOverlay> :
            <ImageOverlay
              overlayBtnNavText='Edit Theatre'
              overlayBtnNavLink='/theatres/:id'
              overlayBtnNavIcon={<HiOutlineWrench />}
              overlayBtnActionText='Remove Theatre'
              overlayBtnActionIcon={<RiCloseCircleLine />}>
              <Card.Img variant="top" src={props.img} />
            </ImageOverlay>
          }

          <Card.Body>
            <Card.Title className='border-bottom border-goldMid mb-3 theatreTitle'>{props.name}</Card.Title>

            <Card.Text className="text-goldMid">
              <p><strong>Address: </strong>{props.address}</p>
              <p><strong>Phone: </strong>{props.contacts}</p>
              <p><strong>Working Hours: </strong>{props.workHours}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </GreyContainer>
    </Tilt>

  );
}
