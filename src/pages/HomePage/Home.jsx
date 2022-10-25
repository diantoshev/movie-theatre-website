import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import MovieFilter from '../../components/MovieFilter/MovieFilter'
import MoviesContainer from '../../components/MoviesContainer/MoviesContainer';
import HomeCarousel from '../../components/Carousel/Carousel';
import AdminPanel from '../../components/AdminPanel/AdminPanel';
import FoodMenu from '../../components/FoodMenuPanel/FoodMenuPanel';
import { useSelector } from 'react-redux';
export default function HomePage(props) {

    const activeUser = useSelector(state => state.activeUser);

    return <PageContainer>
        <AnimatePage>
            {(activeUser.isAdmin && activeUser.isLogged) ? <AdminPanel /> : ''}
            <HomeCarousel></HomeCarousel>
            <MovieFilter></MovieFilter>
            <MoviesContainer />
            <FoodMenu />
        </AnimatePage>
    </PageContainer>
}