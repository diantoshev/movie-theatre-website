
import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import MovieFilter from '../../components/MovieFilter/MovieFilter';
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';

export default function AllMoviesPage(props) {
    return <PageContainer>
        <AnimatePage>
            <MovieFilter />
            <MoviesContainer />
        </AnimatePage>
    </PageContainer >
}