import GoldContainer from '../../components/GoldContainer/GoldContainer';
import GreyContainer from '../../components/GreyContainer/GeryContainer';
import PageContainer from '../../components/PageContainer/PageContainer';
import RedButton from '../../components/Buttons/RedButton';
import RedContainer from '../../components/RedContainer/RedContainer';
import GoldButton from '../../components/Buttons/GoldButton';
import DarkButton from '../../components/Buttons/DarkButton';
export default function AllMoviesPage(props) {
    return <PageContainer>
        <GoldContainer>This is page where all available movies will be displayed.<RedButton>Test</RedButton></GoldContainer >
        <GreyContainer>This is page where all available movies will be displayed.<GoldButton>Test</GoldButton></GreyContainer>
        <RedContainer>This is page where all available movies will be displayed.<DarkButton>Test</DarkButton></RedContainer>
    </PageContainer >
}