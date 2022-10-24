import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import cinema1 from '../../../../assets/cinema-1.jpg';
import './TheatreInfo.scss';
import Tilt from 'react-tilt';
import logo from '../../../../assets/logo2_red_medium-2.png'
import ChooseTheatre from '../ChooseTheatre/ChooseTheatre';

function TheatreInfo(props) {
    return (
        <GreyContainer className='container-sm p-5 mb-4 theatreInfo rounded-3'>
            <div className="row d-flex justify-content-center w-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <Tilt options={{ max: 25, scale: 1.1 }}>
                        <img src={cinema1} alt='Cinema' className="cinemaImage rounded-3 mb-3 w-100" />
                    </Tilt>
                </div>
                <div className="col d-flex justify-content-center align-items-center flex-column">
                    <img src={logo} alt='MovieSpot logo' className="brandLogo" />
                    <ChooseTheatre />
                    <h2 className="border-bottom border-goldMid mb-3 text-nowrap">MovieSpot {props.theatreName}</h2>
                    <p><strong>Address: </strong>{props.theatreAddress}</p>
                    <p><strong>Phone: </strong>{props.theatrePhone}</p>
                    <p><strong>Working Hours: </strong>{props.theatreHours}</p>
                </div>
            </div>
        </GreyContainer>
    );
}

export default TheatreInfo;