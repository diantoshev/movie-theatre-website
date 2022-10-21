import PageContainer from '../../components/PageContainer/PageContainer';
import AnimatePage from '../../components/AnimatePages/AnimatePage';

export default function BookingPage(props) {
    return (
        <PageContainer>
            <AnimatePage>
                <h1>This is page where booking confirmation will be rendered, after buying tickets</h1>
            </AnimatePage>
        </PageContainer>);
}