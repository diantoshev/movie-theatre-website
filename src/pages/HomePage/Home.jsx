import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import MovieFilter from '../../components/MovieFilter/MovieFilter'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
import HomeCarousel from '../../components/Carousel/Carousel';
import AdminPanel from '../../components/AdminPanel/AdminPanel';
export default function HomePage(props) {
    const isLogged = true;
    const isAdmin = true;
    return <PageContainer>
        <AnimatePage>
            {(isAdmin && isLogged) ? <AdminPanel /> : ''}
            <HomeCarousel></HomeCarousel>
            <MovieFilter></MovieFilter>
            <MoviesContainer />
        </AnimatePage>
    </PageContainer>
}