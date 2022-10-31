import GreyContainer from '../GreyContainer/GeryContainer';
import './OrderInfo.scss';
import Tilt from 'react-tilt'
import { useSelector } from 'react-redux';


function OrderInfo() {

    const selectedScreening = useSelector(state => state.screening);

    return (
        <GreyContainer className=" orderInfo__container container-fluid p-4 d-flex flex-wrap rounded-2">
            <div className="row orderInfo_sectionContainer">
                <div className='col-sm'>
                    <div className="d-flex gap-1 flex-column justify-content-center align-items-center titlePoster__container col">
                        <h3 className="movieTitle mb-3">{selectedScreening.movieTitle}</h3>
                        <Tilt className="Tilt" options={{ max: 25, scale: 1.1 }}>
                            <img src={selectedScreening.movieImage} alt={selectedScreening.movieTitle}></img>
                        </Tilt>
                    </div>
                </div>
                <div className='col-lg orderInfo__container'>
                    <p><strong>Cinema: </strong>{selectedScreening.theatreName}</p>
                    <p><strong>Date: </strong>{selectedScreening.date}</p>
                    <p><strong>Time of screening: </strong>{selectedScreening.hour}</p>
                    <p><strong>Seats: </strong> 4, 5, 6</p>
                    <p><strong>Current Total: </strong> 43 BGN</p>
                </div>
            </div>
        </GreyContainer>
    );
}

export default OrderInfo;