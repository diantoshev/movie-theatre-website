import { Form, FormGroup } from "react-bootstrap";
import './ChooseTheatre.scss';

function SelectScreeningForm() {
    return (
        <div className="chooseMovie_controls pt-3 w-100 d-flex align-items-center">
            <Form className='selectTheatre_form container-lg d-flex w-100'>
                <FormGroup className="selectTheatre_formSelect w-100 mb-3">
                    <Form.Select className="bg-goldMid">
                        <option> Choose theatre...</option>
                    </Form.Select>
                </FormGroup>
            </Form>
        </div>
    );
}

export default SelectScreeningForm;