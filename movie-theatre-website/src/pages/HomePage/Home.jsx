import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnmatePages/AnimatePage';
import MovieFilter from '../../components/MovieFilter/MovieFilter'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
export default function HomePage(props) {

    return <PageContainer>
        <AnimatePage>
            <MovieFilter></MovieFilter>
            <MoviesContainer />
        </AnimatePage>
    </PageContainer>
}