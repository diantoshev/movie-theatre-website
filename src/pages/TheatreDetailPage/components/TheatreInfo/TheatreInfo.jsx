import GreyContainer from "../../../../components/GreyContainer/GeryContainer";
import './TheatreInfo.scss';
import logo from '../../../../assets/logo2_red_medium-2.png'
import { Form, FormGroup } from "react-bootstrap";
import './ChooseTheatre.scss';
import { theatreManager } from '../../../../model/TheatreManager';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { saveSelectedTheatre } from "../../../../store/TheatreSlice";
import { useDispatch } from "react-redux";
import { updateTheatre } from "../../../../store/ScreeningSlice";

function TheatreInfo(props) {

    const dispatch = useDispatch();
    const allTheatres = theatreManager.allTheatres;

    // Get theatreId from URL and render the current theatre. 
    // If navigating from Program button, first item is preselected in dropdown: 
    const location = useLocation();
    const theatreKey = (function () {
        const pathArr = location.pathname.split('/');
        return pathArr[pathArr.length - 1] !== ':id' ? pathArr[pathArr.length - 1] : 'cin1';
    })();

    // Initial theatre to be populated:
    let initialTheatre = theatreManager.allTheatres.find(theatre => theatre.id === theatreKey);
    useEffect(() => {
        dispatch(saveSelectedTheatre({
            name: initialTheatre.name,
            image: initialTheatre.image,
            id: initialTheatre.id,
            address: initialTheatre.address,
            contacts: initialTheatre.contacts,
            programDates: initialTheatre.programDates.map(date =>
                JSON.stringify(date))
        }));
    }, [])

    const [image, setImage] = useState(initialTheatre.image);
    const [name, setName] = useState(initialTheatre.name);
    const [address, setAddress] = useState(initialTheatre.address);
    const [contacts, setContacts] = useState(initialTheatre.contacts);
    const [workHours, setWorkHours] = useState(initialTheatre.workHours);


    const handleTheatreChange = (e) => {
        let selectedTheatre = theatreManager.allTheatres.find(cinema => cinema.id === e.target.value);
        setImage(selectedTheatre.image);
        setName(selectedTheatre.name);
        setAddress(selectedTheatre.address);
        setContacts(selectedTheatre.contacts);
        setWorkHours(selectedTheatre.workHours);

        dispatch(saveSelectedTheatre({
            name: selectedTheatre.name,
            image: selectedTheatre.image,
            id: selectedTheatre.id,
            address: selectedTheatre.address,
            contacts: selectedTheatre.contacts,
            programDates: selectedTheatre.programDates.map(date =>
                JSON.stringify(date))
        }));

        dispatch(updateTheatre({
            theatreName: selectedTheatre.name,
            theatreId: selectedTheatre.id
        }))

    }


    return (
        <GreyContainer className='container p-5 mb-4 theatreInfo rounded-3'>
            <div className="row d-flex justify-content-center w-100">
                <div className="col d-flex justify-content-center align-items-center">
                    <img src={image} alt='Cinema' className="cinemaImage rounded-3 mb-3" />
                </div>
                <div className="theatreInfo_container col d-flex justify-content-center align-items-center flex-column">
                    <img src={logo} alt='MovieSpot logo' className="brandLogo" />
                    <div className="chooseMovie_controls pt-3 w-100 d-flex align-items-center">
                        <Form className='selectTheatre_form container-lg d-flex w-100'>
                            <FormGroup className="selectTheatre_formSelect w-100 mb-3">
                                <Form.Select className="bg-goldMid" defaultValue={theatreKey} onChange={(e) => { handleTheatreChange(e) }}>
                                    {allTheatres.map(theatre => <option key={theatre.id} value={theatre.id}>{theatre.name}</option>)}
                                </Form.Select>
                            </FormGroup>
                        </Form>
                    </div>
                    <h2 className="border-bottom border-goldMid mb-3 text-nowrap">MovieSpot {name}</h2>
                    <p><strong>Address: </strong>{address}</p>
                    <p><strong>Phone: </strong>{contacts}</p>
                    <p><strong>Working Hours: </strong>{workHours}</p>
                </div>
            </div>
        </GreyContainer>
    );
}

export default TheatreInfo;