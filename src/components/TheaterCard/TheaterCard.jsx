import Card from "react-bootstrap/Card";
import "./TheaterCard.scss";
import Tilt from 'react-tilt';
import GreyContainer from '../GreyContainer/GeryContainer';
import ImageOverlay from '../ImageOverlay/ImageOverlay';
import { BiMoviePlay } from 'react-icons/bi';
import { BiWrench } from 'react-icons/bi';
import { RiCloseCircleLine } from 'react-icons/ri';
import { useSelector } from "react-redux";

export default function TheaterCard(props) {
  const activeUser = useSelector(state => state.activeUser);

  return (
    <Tilt className="Tilt" options={{ max: 15 }} id={props.id} >
      <GreyContainer className='p-4 rounded-3 card-container' id={props.id}>
        <Card className='bg-greyDark theatreCard' id={props.id}>
          {!(activeUser.isAdmin && activeUser.isLogged) ?
            <ImageOverlay
              id={props.id}
              overlayBtnNavText='Check Program'
              overlayBtnNavLink={`/theatres/${props.id}`}
              overlayBtnNavIcon={<BiMoviePlay />}>
              <Card.Img variant="top" src={props.img} />
            </ImageOverlay> :
            <ImageOverlay
              overlayBtnNavText='Edit Theatre'
              overlayBtnNavLink={`/theatres/${props.id}`}
              overlayBtnNavIcon={<BiWrench />}
              overlayBtnActionText='Remove Theatre'
              overlayBtnActionIcon={<RiCloseCircleLine />}>
              <Card.Img variant="top" src={props.img} />
            </ImageOverlay>
          }

          <Card.Body className="card-body">
            <Card.Title className='border-bottom border-goldMid mb-3 theatreTitle'>{props.name}</Card.Title>

            <Card.Text as='div' className="text-goldMid">
              <p><strong>Address: </strong>{props.address}</p>
              <p><strong>Phone: </strong>{props.contacts}</p>
              <p><strong>Working Hours: </strong>{props.workHours}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </GreyContainer>
    </Tilt >

  );
}
