import Card from "react-bootstrap/Card";
import "./TheaterCard.scss";
import Tilt from 'react-tilt';
import GreyContainer from '../GreyContainer/GeryContainer';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import { BiMoviePlay } from 'react-icons/bi';
import { HiOutlineWrench } from 'react-icons/hi2';
import { RiCloseCircleLine } from 'react-icons/ri';
let isAdmin = true;
let isLogged = true;

export default function TheaterCard(props) {
  return (
    <Tilt className="Tilt" options={{ max: 30, scale: 1.1 }} >
      <GreyContainer className='p-4 rounded-3'>
        <Card className='bg-greyDark theatreCard'>
          {!(isAdmin && isLogged) ?
            <ImageOverlay
              overlayBtnNavText='Check Program'
              overlayBtnNavLink='/theatres/:id'
              overlayBtnNavIcon={<BiMoviePlay />}>
              <Card.Img variant="top" src={require("./assets/cinema3.jpg")} />
            </ImageOverlay> :
            <ImageOverlay
              overlayBtnNavText='Edit Theatre'
              overlayBtnNavLink='/theatres/:id'
              overlayBtnNavIcon={<HiOutlineWrench />}
              overlayBtnActionText='Remove Theatre'
              overlayBtnActionIcon={<RiCloseCircleLine />}>
              <Card.Img variant="top" src={require("./assets/cinema3.jpg")} />
            </ImageOverlay>
          }

          <Card.Body>
            <Card.Title className='border-bottom border-goldMid mb-3 theatreTitle'>{props.theatreTitle}</Card.Title>

            <Card.Text className="text-goldMid">
              <p><strong>Address: </strong>{props.theatreAddress}</p>
              <p><strong>Phone: </strong>{props.theatrePhone}</p>
              <p><strong>Working Hours: </strong>{props.theatreHours}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </GreyContainer>
    </Tilt>

  );
}
