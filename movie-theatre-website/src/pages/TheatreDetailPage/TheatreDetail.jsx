import PageContainer from "../../components/PageContainer/PageContainer";
import TheatreInfoPanel from "../../components/TheaterInfo/TheaterInfo";
import "./TheatreDetail.scss";
import TheaterPanel from "./components/TheaterPanel/TheaterPanel";
import AnimatePage from '../../components/AnimatePages/AnimatePage';

export default function TheatreDetailsPage(props) {
  return (
    <PageContainer>
      <AnimatePage>
        <div className="page-container-design">
          <TheatreInfoPanel />
          <TheaterPanel />
        </div>
      </AnimatePage>
    </PageContainer>
  );
}
