import GreyContainer from "../GreyContainer/GeryContainer"
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import "./MovieFIlter.scss";

export default function MovieFilter() {
    return (
        <GreyContainer>
            <Form className='movieFilterForm'>
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
                    <FormLabel>Search for a movie</FormLabel>
                    <FormControl type='text' className='bg-goldMid' placeholder="Search for a movie..."></FormControl>
                </FormGroup>
            </Form>
        </GreyContainer>
    );
}