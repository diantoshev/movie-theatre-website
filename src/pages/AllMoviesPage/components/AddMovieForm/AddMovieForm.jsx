import { FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import DarkButton from '../../../../components/Buttons/DarkButton';
import Form from 'react-bootstrap/Form';
import './AddMovieForm.scss';

function EditMovieForm() {

    return (
        <div className='container-sm'>
            <Form className='editMovieForm d-flex row m-2'>
                <div className='col'>
                    <FormGroup controlId='addMovieTitle'>
                        <FormLabel>Title:</FormLabel>
                        <FormControl type='text' required placeholder='ex. "The Matrix"'></FormControl>
                    </FormGroup>
                    <FormGroup controlId='addMovieYear'>
                        <FormLabel>Year:</FormLabel>
                        <FormControl type='text' required placeholder='ex. 2018'></FormControl>
                    </FormGroup>
                    <FormGroup controlId='addMovieGenre'>
                        <FormLabel>Genre:</FormLabel>
                        <FormControl type='text' required placeholder='ex. Adventure, Comedy...'></FormControl>
                    </FormGroup>
                    <FormGroup controlId='addMovieRuntime'>
                        <FormLabel>Runtime:</FormLabel>
                        <FormControl type='text' required placeholder='ex. 106 min'></FormControl>
                    </FormGroup>
                </div>
                <div className='col'>
                    <FormGroup controlId='addMovieDirector'>
                        <FormLabel>Director:</FormLabel>
                        <FormControl type='text' required placeholder='ex. Quentin Tarantino...'></FormControl>
                    </FormGroup>
                    <FormGroup controlId='addMovieCast'>
                        <FormLabel>Cast:</FormLabel>
                        <FormControl type='text' required placeholder='ex. Nicolas Cage, Eddie Murphy...'></FormControl>
                    </FormGroup>
                    <FormGroup controlId='addMovieSynopsis'>
                        <FormLabel>Synopsis:</FormLabel>
                        <FormControl as='textarea' type='textarea' rows={5} required placeholder='ex. Once upon a time...'></FormControl>
                    </FormGroup>
                </div>
                <DarkButton className='mt-3'> Add Movie</DarkButton>
            </Form>
        </div >
    );
}

export default EditMovieForm;