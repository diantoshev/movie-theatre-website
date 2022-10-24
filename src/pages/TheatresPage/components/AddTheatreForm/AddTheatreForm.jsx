import DarkButton from '../../../../components/Buttons/DarkButton';
import Form from 'react-bootstrap/Form';
import './AddTheatreForm.scss';

function AddTheatreForm() {
    return (
        <Form className='addTheatreForm d-flex row m-2'>
            <div className='col'>
                <Form.Group className="mb-3" controlId="formTheaterName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Name..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTheatreId">
                    <Form.Label>Theatre ID:</Form.Label>
                    <Form.Control type="text" placeholder="Name..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTheaterWorkHours">
                    <Form.Label>Work hours:</Form.Label>
                    <Form.Control type="text" placeholder="Work hours..." />
                </Form.Group>
            </div>
            <div className='col'>
                <Form.Group controlId="formFileImage" className="mb-3">
                    <Form.Label>Image:</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTheaterHallsCount">
                    <Form.Label>Halls count:</Form.Label>
                    <Form.Control type="number" placeholder="Halls count..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTheaterAddress">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control as="textarea" placeholder="Address..." />
                </Form.Group>
            </div>
            <DarkButton type="submit">Add New Theater</DarkButton>
        </Form>
    );
}

export default AddTheatreForm;