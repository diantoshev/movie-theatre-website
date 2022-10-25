import PageContainer from "../../components/PageContainer/PageContainer";
import TheatresContainer from "./components/TheatresContainer/TheatresContainer";
import "./Theatres.scss";
import AnimatePage from "../../components/AnimatePages/AnimatePage";
import SimpleMap from "./components/TheatresMap/TheatresMap";
import Accordion from '../../components/Accordion/Accordion';
import AddTheatreForm from "./components/AddTheatreForm/AddTheatreForm";
import { useSelector } from "react-redux";


export default function AllTheatresPage(props) {

  const activeUser = useSelector(state => state.activeUser);

  return (
    <PageContainer>
      <AnimatePage>
        {(activeUser.isAdmin && activeUser.isLogged) ?
          <Accordion panelTitle='Add Theatre' className='mb-5'>
            <AddTheatreForm />
          </Accordion> : ''}
        <TheatresContainer className="container-sm mt-5" />
        {/* <SimpleMap /> */}
      </AnimatePage>
    </PageContainer>
  );
}
