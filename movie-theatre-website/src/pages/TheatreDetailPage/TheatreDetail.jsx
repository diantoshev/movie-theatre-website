import PageContainer from "../../components/PageContainer/PageContainer";
import TheatreInfoPanel from "../../components/TheaterInfo/TheaterInfo";
import "./TheatreDetail.scss";
import TheaterPanel from "./components/TheaterPanel/TheaterPanel";

export default function TheatreDetailsPage(props) {
  return (
    <PageContainer>
      <div className="page-container-design">
        <TheatreInfoPanel />
        <TheaterPanel />
      </div>
    </PageContainer>
  );
}
