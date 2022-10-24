import DarkButton from '../../../../components/Buttons/DarkButton';
import { Form, FormGroup } from "react-bootstrap";
import './AddScreeningForm.scss';

function AddScreeningForm() {
    return (
        <Form className='addScreeningForm container'>
            <FormGroup className="screening_formSelects d-flex gap-4 mb-4">
                <Form.Select>
                    <option> Choose cinema...</option>
                </Form.Select>
                <Form.Select>
                    <option> Choose movie..</option>
                </Form.Select>
                <Form.Select>
                    <option> Choose date...</option>
                </Form.Select>
                <Form.Select>
                    <option> Choose time...</option>
                </Form.Select>
            </FormGroup>
            <DarkButton type="submit">Save Changes</DarkButton>
        </Form>
    );
}

export default AddScreeningForm;