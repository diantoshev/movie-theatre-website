import PageContainer from "../../components/PageContainer/PageContainer";
import TheatreInfoPanel from "../../components/TheaterInfo/TheaterInfo";
import EditTheater from "./components/EditTheater/EditTheater";
import "./AdminTheatreEditPage.scss";

export default function EditTheatrePage(props) {
  return (
    <PageContainer>
      <div className="admin-theater-page-container-design">
        <TheatreInfoPanel />
        <EditTheater />
      </div>
    </PageContainer>
  );
}
