import GoldButton from '../../../../components/Buttons/GoldButton';
import { Form, FormGroup } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import '../SelectScreeningForm/SelectScreeningForm.scss';

function SelectScreeningForm() {
    return (
        <div className="chooseMovie_controls pt-3 mt-3">
            <Form className='selectScreening__form container-lg'>
                <FormGroup className="screening_formSelects">
                    <Form.Select className="bg-goldMid">
                        <option> Choose cinema...</option>
                    </Form.Select>
                    <Form.Select className="bg-goldMid">
                        <option> Choose date...</option>
                    </Form.Select>
                    <Form.Select className="bg-goldMid">
                        <option> Choose time...</option>
                    </Form.Select>
                </FormGroup>
                <NavLink to='/choose-seats'><GoldButton className="chooseSeats_btn">Choose Seats</GoldButton></NavLink>
            </Form>
        </div>
    );
}

export default SelectScreeningForm;