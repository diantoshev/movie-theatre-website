import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import cinema1 from '../../../../assets/cinema-1.jpg';
import './TheatreInfo.scss';
import logo from '../../../../assets/logo2_red_medium-2.png'
import { Form, FormGroup } from "react-bootstrap";
import './ChooseTheatre.scss';
import { useSelector } from "react-redux";
import { theatreManager } from '../../../../models/TheatreManager';

function TheatreInfo(props) {

    const theatreData = useSelector(state => state.allTheatres);
    const allTheatres = theatreData.map(theatre => JSON.parse(theatre));
    console.log(allTheatres);
    return (
        <GreyContainer className='container-sm p-5 mb-4 theatreInfo rounded-3'>
            <div className="row d-flex justify-content-center w-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <img src={cinema1} alt='Cinema' className="cinemaImage rounded-3 mb-3 w-100" />
                </div>
                <div className="col d-flex justify-content-center align-items-center flex-column">
                    <img src={logo} alt='MovieSpot logo' className="brandLogo" />
                    <div className="chooseMovie_controls pt-3 w-100 d-flex align-items-center">
                        <Form className='selectTheatre_form container-lg d-flex w-100'>
                            <FormGroup className="selectTheatre_formSelect w-100 mb-3">
                                <Form.Select className="bg-goldMid">
                                    <option> Choose theatre...</option>
                                    {allTheatres.map(theatre => <option key={theatre.id}>{theatre.name}</option>)}
                                </Form.Select>
                            </FormGroup>
                        </Form>
                    </div>
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