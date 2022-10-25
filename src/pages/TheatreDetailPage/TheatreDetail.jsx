import PageContainer from "../../components/PageContainer/PageContainer";
import "./TheatreDetail.scss";
import TheaterPanel from "./components/TheaterPanel/TheaterPanel";
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import TheatreInfo from './components/TheatreInfo/TheatreInfo';
import Accordion from '../../components/Accordion/Accordion';
import EditTheatreForm from "./components/EditTheatreForm/EditTheatreForm";
import AddScreeningForm from "./components/AddScreeningForm/AddScreeningFrom";
import { useSelector } from "react-redux";

export default function TheatreDetailsPage(props) {
  const activeUser = useSelector(state => state.activeUser)
  return (
    <PageContainer>
      <AnimatePage>
        {(activeUser.isAdmin && activeUser.isLogged) ?
          <Accordion panelTitle='Edit Theatre'>
            <EditTheatreForm />
          </Accordion> : ''}
        <TheatreInfo
          theatreName='Sofia - Mladost 1'
          theatreAddress='Mladost 1 - somewhere'
          theatrePhone='0888 888 888'
          theatreHours='10h-23h'
        ></TheatreInfo>
        {(activeUser.isAdmin && activeUser.isLogged) ?
          <Accordion panelTitle='Add Screening'>
            <AddScreeningForm />
          </Accordion> : ''}
        <TheaterPanel />
      </AnimatePage>
    </PageContainer>
  );
}
