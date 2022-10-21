import AnimatePage from '../../components/AnimatePages/AnimatePage';
import PageContainer from '../../components/PageContainer/PageContainer';
import MovieDetailPanel from './components/MovieDetailPanel/MovieDetailPanel';

export default function MovieDetailPage(props) {
    return <PageContainer>
        <AnimatePage>
            <MovieDetailPanel />
        </AnimatePage>
    </PageContainer>
}