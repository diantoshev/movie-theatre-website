
import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import MovieFilter from '../../components/MovieFilter/MovieFilter';
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
import Accordion from '../../components/Accordion/Accordion';
import AddMovieForm from './components/AddMovieForm/AddMovieForm';
import { useSelector } from 'react-redux';


export default function AllMoviesPage(props) {
    const activeUser = useSelector(state => state.activeUser);
    return <PageContainer>
        <AnimatePage>
            {(activeUser.isAdmin && activeUser.isLogged) ?
                <Accordion panelTitle='Add Movie'>
                    <AddMovieForm />
                </Accordion> : ''}
            <MovieFilter />
            <MoviesContainer />
        </AnimatePage>
    </PageContainer >
}