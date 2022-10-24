import DarkButton from '../../../../components/Buttons/DarkButton';
import Form from 'react-bootstrap/Form';
import './EditTheatreForm.scss';

function EditCinemaForm(props) {
    return (
        <Form className='editTheatreForm d-flex row m-2'>
            <div className='col'>
                <Form.Group className="mb-3" controlId="formTheaterName">
                    <Form.Label>Change Name:</Form.Label>
                    <Form.Control type="text" placeholder="Name..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTheatreId">
                    <Form.Label>Change Theatre ID:</Form.Label>
                    <Form.Control type="text" placeholder="Name..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTheaterWorkHours">
                    <Form.Label>Change Work Hours:</Form.Label>
                    <Form.Control type="text" placeholder="Work hours..." />
                </Form.Group>
            </div>
            <div className='col'>
                <Form.Group controlId="formFileImage" className="mb-3">
                    <Form.Label>Change Image:</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTheaterHallsCount">
                    <Form.Label>Change Halls Count:</Form.Label>
                    <Form.Control type="number" placeholder="Halls count..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formTheaterAddress">
                    <Form.Label>Change Address:</Form.Label>
                    <Form.Control as="textarea" placeholder="Address..." />
                </Form.Group>
            </div>
            <DarkButton type="submit">Save Changes</DarkButton>
        </Form>
    );
}

export default EditCinemaForm;