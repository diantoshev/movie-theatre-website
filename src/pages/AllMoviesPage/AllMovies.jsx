
import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import MovieFilter from '../../components/MovieFilter/MovieFilter';
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
import Accordion from '../../components/Accordion/Accordion';
import AddMovieForm from './components/AddMovieForm/AddMovieForm';

let isAdmin = true;
let isLogged = true;

export default function AllMoviesPage(props) {
    return <PageContainer>
        <AnimatePage>
            {(isAdmin && isLogged) ?
                <Accordion panelTitle='Add Movie'>
                    <AddMovieForm />
                </Accordion> : ''}
            <MovieFilter />
            <MoviesContainer />
        </AnimatePage>
    </PageContainer >
}