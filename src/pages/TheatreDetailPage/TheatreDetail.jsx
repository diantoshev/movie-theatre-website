import PageContainer from "../../components/PageContainer/PageContainer";
import "./TheatreDetail.scss";
import TheaterPanel from "./components/TheaterPanel/TheaterPanel";
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import TheatreInfo from './components/TheatreInfo/TheatreInfo';
import Accordion from '../../components/Accordion/Accordion';
import EditTheatreForm from "./components/EditTheatreForm/EditTheatreForm";
import AddScreeningForm from "./components/AddScreeningForm/AddScreeningFrom";

let isAdmin = true;
let isLogged = true;
export default function TheatreDetailsPage(props) {
  return (
    <PageContainer>
      <AnimatePage>
        {(isAdmin && isLogged) ?
          <Accordion panelTitle='Edit Theatre'>
            <EditTheatreForm />
          </Accordion> : ''}
        <TheatreInfo
          theatreName='Sofia - Mladost 1'
          theatreAddress='Mladost 1 - somewhere'
          theatrePhone='0888 888 888'
          theatreHours='10h-23h'
        ></TheatreInfo>
        {(isAdmin && isLogged) ?
          <Accordion panelTitle='Add Screening'>
            <AddScreeningForm />
          </Accordion> : ''}
        <TheaterPanel />
      </AnimatePage>
    </PageContainer>
  );
}
