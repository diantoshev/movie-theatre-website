import PageContainer from "../../components/PageContainer/PageContainer";
import "./TheatreDetail.scss";
import AnimatePage from '../../components/AnimatePages/AnimatePage';
import TheatreInfo from './components/TheatreInfo/TheatreInfo';
import Accordion from '../../components/Accordion/Accordion';
import EditTheatreForm from "./components/EditTheatreForm/EditTheatreForm";
import AddScreeningForm from "./components/AddScreeningForm/AddScreeningFrom";
import { useSelector } from "react-redux";
import TheaterScreenings from "./components/TheaterScreenings/TheaterScreening";

export default function TheatreDetailsPage(props) {
  const activeUser = useSelector(state => state.activeUser);

  return (
    <PageContainer>
      <AnimatePage>
        {(activeUser.isAdmin && activeUser.isLogged) ?
          <Accordion panelTitle='Edit Theatre'>
            <EditTheatreForm />
          </Accordion> : ''}
        <TheatreInfo />
        {(activeUser.isAdmin && activeUser.isLogged) ?
          <Accordion panelTitle='Add Screening'>
            <AddScreeningForm />
          </Accordion> : ''}
        <TheaterScreenings />
      </AnimatePage>
    </PageContainer>
  );
}
