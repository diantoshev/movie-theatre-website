import PageContainer from "../../components/PageContainer/PageContainer";
import "./TheatreDetail.scss";
import TheaterPanel from "./components/TheaterPanel/TheaterPanel";
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import TheatreInfo from './components/TheatreInfo/TheatreInfo';

let isAdmin = false;
let isLogged = false;
export default function TheatreDetailsPage(props) {
  return (
    <PageContainer>
      <AnimatePage>
        <TheatreInfo
          theatreName='Sofia - Mladost 1'
          theatreAddress='Mladost 1 - somewhere'
          theatrePhone='0888 888 888'
          theatreHours='10h-23h'
        ></TheatreInfo>
        <TheaterPanel />
      </AnimatePage>
    </PageContainer>
  );
}
