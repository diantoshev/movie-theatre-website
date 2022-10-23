
import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import MovieFilter from '../../components/MovieFilter/MovieFilter';
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
import Accordion from '../../components/Accordion/Accordion';
import EditMovieForm from './components/EditMovieForm/EditMovieForm';

let isAdmin = true;
let isLogged = true;

export default function AllMoviesPage(props) {
    return <PageContainer>
        <AnimatePage>
            {(isAdmin && isLogged) ?
                <Accordion panelTitle='Add Movie'>
                    <EditMovieForm />
                </Accordion> : ''}
            <MovieFilter />
            <MoviesContainer />
        </AnimatePage>
    </PageContainer >
}