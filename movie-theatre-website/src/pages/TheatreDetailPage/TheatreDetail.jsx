import PageContainer from "../../components/PageContainer/PageContainer";
import TheatreInfoPanel from "./components/TheaterInfo/TheaterInfo";
import "./TheatreDetail.scss";

export default function TheatreDetailsPage(props) {
  return (
    <PageContainer>
      <div className="page-container-design">
        <TheatreInfoPanel />
      </div>
    </PageContainer>
  );
}
