import PageContainer from "../../components/PageContainer/PageContainer";
import EditTheater from "./components/EditTheater/EditTheater";
import "./AdminTheatreEditPage.scss";

export default function EditTheatrePage(props) {
  return (
    <PageContainer>
      <div className="admin-theater-page-container-design">
        <EditTheater />
      </div>
    </PageContainer>
  );
}
