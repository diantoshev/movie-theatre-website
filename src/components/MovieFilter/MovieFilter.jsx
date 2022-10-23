import GreyContainer from "../GreyContainer/GeryContainer"
import { Form, FormControl, FormGroup } from "react-bootstrap";
import "./MovieFIlter.scss";

export default function MovieFilter() {
    return (
        <GreyContainer className="container-sm py-4 movieFilterForm__container">
            <Form className='movieFilterForm container-sm'>
                <FormGroup className="formSelects">
                    <Form.Select className="bg-goldMid">
                        <option> Choose cinema...</option>
                    </Form.Select>
                    <Form.Select className="bg-goldMid">
                        <option> Choose genre...</option>
                    </Form.Select>
                    <Form.Select className="bg-goldMid">
                        <option> Choose a movie...</option>
                    </Form.Select>
                    <Form.Select className="bg-goldMid">
                        <option> Choose a date...</option>
                    </Form.Select>
                </FormGroup>
                <p>OR</p>
                <FormGroup>
                    <FormControl type='text' className='bg-goldMid' placeholder="Search for a movie..."></FormControl>
                </FormGroup>
            </Form>
        </GreyContainer>
    );
}