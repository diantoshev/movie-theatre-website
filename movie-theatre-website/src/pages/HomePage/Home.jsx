import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import MovieFilter from '../../components/MovieFilter/MovieFilter'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
import HomeCarousel from '../../components/Carousel/Carousel';
export default function HomePage(props) {

    return <PageContainer>
        <AnimatePage>
            <HomeCarousel></HomeCarousel>
            <MovieFilter></MovieFilter>
            <MoviesContainer />
        </AnimatePage>
    </PageContainer>
}