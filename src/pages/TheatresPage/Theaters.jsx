import PageContainer from "../../components/PageContainer/PageContainer";
import TheatresContainer from "./components/TheatresContainer/TheatresContainer";
import "./Theatres.scss";
import AnimatePage from "../../components/AnimatePages/AnimatePage";
import SimpleMap from "./components/TheatresMap/TheatresMap";
import Accordion from '../../components/Accordion/Accordion';
import AddTheatreForm from "./components/AddTheatreForm/AddTheatreForm";

let isAdmin = true;
let isLogged = true;
export default function AllTheatresPage(props) {
  return (
    <PageContainer>
      <AnimatePage>
        {(isAdmin && isLogged) ?
          <Accordion panelTitle='Add Theatre' className='mb-5'>
            <AddTheatreForm />
          </Accordion> : ''}
        <TheatresContainer className="container-sm mt-5" />
        <SimpleMap />
      </AnimatePage>
    </PageContainer>
  );
}
